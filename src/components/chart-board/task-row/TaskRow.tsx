import moment from "moment";
import { Task } from "../../../types/Task";
import Button from "../../shared/button/Button";
import { getCategoryIcon, getClasses } from "./TaskRowUtil";

interface TaskRowProps {
    task: Task;
}

export default function TaskRow({ task }: TaskRowProps) {
    const compStyle = getClasses(task.category);
    const catIcon = getCategoryIcon(task.category);

    return (
        <li className={compStyle.join(' ')}>
            <div className="d-flex jc-space-between">
                <div className="d-flex gap-10 ai-center">
                    {catIcon}
                    <span>{task.category}</span>
                </div>
                <div>{task.priority}</div>
                <div>{task.status}</div>
                <div className="d-flex gap-5 ai-center">
                    <i className="fa-regular fa-clock" />
                    <span>
                        {moment(task.date).format("hh:mm")}
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