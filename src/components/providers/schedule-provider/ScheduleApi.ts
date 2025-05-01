import { useCallback, useEffect, useState } from "react";
import { ScheduleHook } from "./ScheduleProviderTypes";
import { RequestTask, Task } from "../../../types/Task";

export function useSchedule(period: string): ScheduleHook {
    const BASE_URL = 'http://localhost:3000';

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

    return { tasks, pendingTasks, changeMonth, createTask, appendTask }
}