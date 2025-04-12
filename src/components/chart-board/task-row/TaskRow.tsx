import moment from "moment";
import { Task } from "../../../types/Task";
import Button from "../../shared/button/Button";
import { getCategoryIcon, getClasses, getPriorityStars, getStatusIcon } from "./TaskRowUtil";
import style from '../ChartBoard.module.css';

interface TaskRowProps {
    task: Task;
}

export default function TaskRow({ task }: TaskRowProps) {
    const compStyle = getClasses(task.category);
    const catIcon = getCategoryIcon(task.category);
    const priorityStars = getPriorityStars(task.priority);
    const statusIcon = getStatusIcon(task.status);

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
                    text="Edit"
                    event="click"
                    style={task.category}
                    handler={() => console.log(`${task.description + 'edited'}`)}
                />

                <Button
                    text="Delete"
                    event="click"
                    style={task.category}
                    handler={() => console.log(`${task.description + 'deleted'}`)}
                />

                <Button
                    text="Mark as Completed"
                    event="click"
                    style={task.category}
                    handler={() => console.log(`${task.description + 'is completed'}`)}
                />
            </div>
        </li>
    );
}