import { useEffect, useReducer } from "react";
import { ScheduleContext } from "../../../contexts/ScheduleContext";
import { Month } from "../../../types/Month";
import { DateAction, DateState, ScheduleProviderProps, SelectedDateAction, SelectedDateState } from "./ScheduleProviderTypes";
import { Status, Task } from "../../../types/Task";
import { isSameDate } from "../../../utils/dateUtil";
import { useSchedule } from "./ScheduleApi";
import SpinnerScreenOverLay from "../../shared/spinner-screen-overlay/SpinnerScreenOverLay";

export default function ScheduleProvider({ children }: ScheduleProviderProps) {
    const now = new Date();
    const currentDate = now.getDate();
    const currentMonth = now.getMonth() + 1 as Month;
    const currentYear = now.getFullYear();

    const { tasks, pendingTasks, changeMonth, createTask, appendTask, modifyTask, modifyTaskStatusRequest, setPending } = useSchedule(`${currentYear}-${currentMonth}`);

    const dateReducer = (state: DateState, action: DateAction): DateState => {
        switch (action.type) {
            case 'PREVIOUS_MONTH':
                if (state.month === 1) {
                    return { month: 12, year: state.year - 1 }
                }

                return { month: state.month - 1 as Month, year: state.year }

            case 'NEXT_MONTH':
                if (state.month === 12) {
                    return { month: 1, year: state.year + 1 }
                }

                return { month: state.month + 1 as Month, year: state.year };


            default:
                return state;
        }
    }

    const [date, dispatchDate] = useReducer(dateReducer, { month: currentMonth, year: currentYear });

    const previousMonth = (): void => {
        dispatchDate({ type: 'PREVIOUS_MONTH' });
    }

    const nextMonth = (): void => {
        dispatchDate({ type: 'NEXT_MONTH' });
    }

    const getTasks = (date: number, month: Month, year: number): Task[] => {
        const taskList = tasks.filter(task => isSameDate(task.date, new Date(`${year}-${month}-${date}`)));
        return taskList;
    }

    const updateTaskStatus = (taskId: string, tasks: Task[]): Task[] => {
        const updatedTasks = tasks.map(task => {

            if (task._id === taskId) {
                const updatedTask = { ...task, status: nextStatus(task.status) };
                modifyTask(updatedTask);
                return updatedTask;
            }

            return task
        });

        return updatedTasks;
    }

    const { month, year } = date;


    const selectedDateReducer = (state: SelectedDateState, action: SelectedDateAction) => {
        switch (action.type) {
            case 'SELECT_DATE':
                return {
                    date: action.date,
                    month: action.month,
                    year: action.year,
                    tasks: getTasks(action.date, action.month, action.year)
                }

            case 'UPDATE_STATUS':
                return {
                    date: action.date,
                    month: action.month,
                    year: action.year,
                    tasks: updateTaskStatus(action.taskId as string, getTasks(action.date, action.month, action.year)),
                }

            default:
                return state;
        }
    }

    const [selectedDate, dispatchSelectedDate] = useReducer(selectedDateReducer, {
        month: currentMonth,
        year: currentYear,
        date: currentDate,
        tasks: getTasks(currentDate, currentMonth, currentYear),
    });

    const showDateTasks = (date: number, month: Month, year: number) => {
        dispatchSelectedDate({ type: 'SELECT_DATE', date, month, year });
    }

    const updateStatus = async (taskId: string) => {
        const foundTask = tasks.find(task => task._id === taskId);

        if (!foundTask) {
            return;
        }

        const newStatus = nextStatus(foundTask.status);
        setPending(true);

        await modifyTaskStatusRequest(taskId, newStatus);
        dispatchSelectedDate({ type: 'UPDATE_STATUS', taskId, date: selectedDate.date, month: selectedDate.month, year: selectedDate.year });
        setPending(false);
    }

    useEffect(() => {
        changeMonth(`${date.year}-${date.month}`)
    }, [date, changeMonth])

    return (
        <>
            <SpinnerScreenOverLay isActive={pendingTasks} />
            <ScheduleContext.Provider
                value={{
                    tasks,
                    pendingTasks,
                    month,
                    year,
                    selectedDate,
                    previousMonth,
                    nextMonth,
                    showDateTasks,
                    createTask,
                    appendTask,
                    updateStatus,
                }}>
                {children}
            </ScheduleContext.Provider>
        </>
    );
}

function nextStatus(status: Status): Status {
    switch (status) {
        case 'Pending': return 'In Progress';
        case 'In Progress': return 'Completed';
        case 'Completed': return 'In Progress';
        default: return status;
    }
}