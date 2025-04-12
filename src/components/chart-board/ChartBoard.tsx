import { useScheduleContext } from '../../contexts/ScheduleContext';
import style from './ChartBoard.module.css';
import TaskRow from './task-row/TaskRow';

export default function ChartBoard() {
  const { selectedDate } = useScheduleContext();

  return (
    <section className={style['chart-board']}>
      <h2 className={style['header']}>Chart Board on {`${selectedDate.date}.${selectedDate.month}.${selectedDate.year}`}</h2>
      <div className="padding-10">
        <ul className="ls-none d-flex f-direction-column gap-20">
          {selectedDate.tasks.map(task => <TaskRow key={task.id} task={task} />)}
        </ul>
      </div>
    </section>
  );
}