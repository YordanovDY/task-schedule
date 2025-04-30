import { useEffect, useState } from "react";
import { ScheduleHook } from "./ScheduleProviderTypes";
import { Task } from "../../../types/Task";

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

    return { tasks, pendingTasks }
}