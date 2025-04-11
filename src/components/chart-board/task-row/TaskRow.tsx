import moment from "moment";
import { Task } from "../../../types/Task";
import style from "../ChartBoard.module.css";
import Button from "../../shared/button/Button";

interface TaskRowProps {
    task: Task;
}

export default function TaskRow({ task }: TaskRowProps) {
    return (
        <li className={style['task-row']}>
            <div className="d-flex jc-space-between">
                <span>{task.category}</span>
                <span>{task.priority}</span>
                <span>{task.status}</span>
                <span>{moment(task.date).format("hh:mm")}</span>
            </div>

            <div>
                <p>{task.description}</p>
            </div>

            <div className="d-flex gap-20 ai-center">
                <Button 
                text="Edit" 
                event="click" 
                style="secondary" 
                handler={() => console.log(`${task.description + 'edited'}`)} 
                />

                <Button 
                text="Delete" 
                event="click" 
                style="secondary" 
                handler={() => console.log(`${task.description + 'deleted'}`)} 
                />

                <Button 
                text="Mark as Completed" 
                event="click" 
                style="secondary" 
                handler={() => console.log(`${task.description + 'is completed'}`)} 
                />
            </div>
        </li>
    );
}