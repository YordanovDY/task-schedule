import TaskTemplate from '../../constants/TaskTemplate';
import { useScheduleContext } from '../../contexts/ScheduleContext';
import { Category, Priority, RequestTask } from '../../types/Task';
import Button from '../shared/button/Button';
import useFormOverlay from '../shared/form-overlay/useFormOverlay';
import style from './ChartBoard.module.css';
import TaskRow from './task-row/TaskRow';

export default function ChartBoard() {
  const { selectedDate, createTask, tasks } = useScheduleContext();

  const createTaskHandler = async (formData: FormData) => {
    const time = formData.get('time');

    const data: RequestTask = {
      category: formData.get('category') as Category,
      date: new Date(`${selectedDate.year}-${selectedDate.month}-${selectedDate.date} ${time}`).toISOString(),
      priority: formData.get('priority') as Priority,
      description: formData.get('description') as string,
    }

    console.log(data);


    const result = await createTask(data);
  const { formOverlay, openDialog } = useFormOverlay(`${selectedDate.date}.${selectedDate.month}.${selectedDate.year}`, TaskTemplate, createTaskHandler);

  return (
    <section className={style['chart-board']}>
      <h2 className={style['header']}>Chart Board on {`${selectedDate.date}.${selectedDate.month}.${selectedDate.year}`}</h2>
      <div className="padding-10">
        <ul className="ls-none d-flex f-direction-column gap-20">
          {selectedDate.tasks.map(task => <TaskRow key={task._id} task={task} />)}
        </ul>
      </div>
      <Button text="Create Task" event="click" handler={() => openDialog()} style="primary" />
      {formOverlay}
    </section>
  );
}