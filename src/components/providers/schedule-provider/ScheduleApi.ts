import { useCallback, useEffect, useState } from "react";
import { ScheduleHook } from "./ScheduleProviderTypes";
import { RequestTask, Status, Task } from "../../../types/Task";

export function useSchedule(period: string): ScheduleHook {
    const BASE_URL = 'http://localhost:3003';

    const [tasks, setTasks] = useState<Task[]>([]);
    const [pendingTasks, setPendingTasks] = useState<boolean>(true);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        setPendingTasks(true);

        fetch(BASE_URL + `/tasks/month/${period}`, { signal })
            .then(res => res.json())
            .then(result => {
                const rawTaskList = result as Task[];
                const taskList = rawTaskList.map(task => ({ ...task, date: new Date(task.date) }));

                setTasks(taskList);
                setPendingTasks(false);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    return;
                }

                console.error(err)
                setPendingTasks(false);
            })

        return () => abortController.abort();
    }, [period]);

    const changeMonth = useCallback((period: string): void => {
        setPendingTasks(true);
        fetch(BASE_URL + `/tasks/month/${period}`)
            .then(res => res.json())
            .then(result => {
                const rawTaskList = result as Task[];
                const taskList = rawTaskList.map(task => ({ ...task, date: new Date(task.date) }));

                setTasks(taskList);
                setPendingTasks(false);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    return;
                }

                console.error(err)
                setPendingTasks(false);
            })
    }, []);

    const createTask = async (data: RequestTask): Promise<Task | void> => {

        const options: RequestInit = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        };

        try {
            const result = await fetch(BASE_URL + `/tasks`, options);
            const task = result.json();
            return task;

        } catch (err) {
            console.error(err);
        }

    }

    const appendTask = (newTask: Task): void => {
        setTasks(state => [...state, newTask]);
    }

    const modifyTask = (task: Task): void => {
        setTasks(state => state.map(stateTask => stateTask._id === task._id ? task : stateTask));
    }

    const modifyTaskStatusRequest = async (taskId: string, status: Status): Promise<Task | void> => {
        try {
            const response = await fetch(BASE_URL + `/tasks/status/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify({ status })
            });

            return response.json();

        } catch (err) {
            console.error(err);
        }
    }

    const removeTaskRequest = async (taskId: string): Promise<Task | void> => {
        try {
            const response = await fetch(BASE_URL + `/tasks/${taskId}`, {
                method: 'DELETE',
            });

            return response.json();

        } catch (err) {
            console.error(err);
        }
    }

    const setPending = (isPending: boolean) => {
        setPendingTasks(isPending);
    }

    const removeTask = (tasksId: string) => {
        setTasks(state => state.filter(task => task._id !== tasksId));
    }

    return { tasks, pendingTasks, changeMonth, createTask, appendTask, removeTask, removeTaskRequest, modifyTask, modifyTaskStatusRequest, setPending }
}