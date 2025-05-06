import moment from "moment";
import { Task } from "../../../types/Task";
import Button from "../../shared/button/Button";
import { getCategoryIcon, getClasses, getPriorityStars, getStatusIcon } from "./TaskRowUtil";
import style from '../ChartBoard.module.css';
import { useScheduleContext } from "../../../contexts/ScheduleContext";

interface TaskRowProps {
    task: Task;
}

export default function TaskRow({ task }: TaskRowProps) {
    const { updateStatus, deleteTask } = useScheduleContext();
    const compStyle = getClasses(task.category, task.pending);
    const catIcon = getCategoryIcon(task.category);
    const priorityStars = getPriorityStars(task.priority);
    const statusIcon = getStatusIcon(task.status);

    let changeStatusBtn = <Button
        text="Start Task"
        event="click"
        style={task.pending ? 'optimistic' : task.category}
        handler={updateStatus.bind(null, task._id)}
    />

    if (task.status === 'In Progress') {
        changeStatusBtn = <Button
            text="Complete Task"
            event="click"
            style={task.pending ? 'optimistic' : task.category}
            handler={updateStatus.bind(null, task._id)}
        />
    }

    if (task.status === 'Completed') {
        changeStatusBtn = <Button
            text="Return to Task"
            event="click"
            style={task.pending ? 'optimistic' : task.category}
            handler={updateStatus.bind(null, task._id)}
        />
    }

    return (
        <li className={compStyle.join(' ')}>
            <div className="d-flex jc-space-between">
                <div className="d-flex gap-10 ai-center">
                    {catIcon}
                    <span>{task.category}</span>
                </div>
                <div className="d-flex gap-5 ai-center">
                    {priorityStars}
                    <span>
                        {task.priority}
                    </span>
                </div>
                <div className={style['status-label']}>
                    {statusIcon}
                    <span>
                        {task.status}
                    </span>
                </div>
                <div className="d-flex gap-5 ai-center">
                    <i className="fa-regular fa-clock" />
                    <span>
                        {moment(task.date).format("kk:mm")}
                    </span>
                </div>
            </div>

            <div>
                <p>{task.description}</p>
            </div>

            <div className="d-flex gap-20 ai-center">

                <Button
                    text="Delete"
                    event="click"
                    style={task.pending ? 'optimistic' : task.category}
                    handler={deleteTask.bind(null, task._id)}
                />

                {changeStatusBtn}
            </div>
        </li>
    );
}