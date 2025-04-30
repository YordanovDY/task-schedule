import { useScheduleContext } from '../../contexts/ScheduleContext';
import Button from '../shared/button/Button';
import useFormOverlay from '../shared/form-overlay/useFormOverlay';
import style from './ChartBoard.module.css';
import TaskRow from './task-row/TaskRow';

export default function ChartBoard() {
  const { selectedDate } = useScheduleContext();
  const { formOverlay, openDialog } = useFormOverlay();

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