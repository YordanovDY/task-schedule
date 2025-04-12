import { Task } from '../../types/Task';
import style from './ChartBoard.module.css';
import TaskRow from './task-row/TaskRow';

// ! TESTING PURPOSES ONLY
const tasks: Task[] = [
    {
      date: new Date('2025-04-10'),
      category: 'Testing',
      status: 'Pending',
      priority: 'Medium',
      description: 'Outline roadmap for Q2 product updates and features.',
    },
    {
      date: new Date('2025-04-11'),
      category: 'Deployment',
      status: 'In Progress',
      priority: 'High',
      description: 'Develop authentication flow with OAuth integration.',
    },
    {
      date: new Date('2025-04-09'),
      category: 'Planning',
      status: 'Pending',
      priority: 'Critical',
      description: 'Investigate and resolve API timeout errors affecting checkout.',
    },
    {
      date: new Date('2025-04-08'),
      category: 'Learning',
      status: 'Completed',
      priority: 'Low',
      description: 'Watch TypeScript best practices course on frontendmasters.',
    },
    {
      date: new Date('2025-04-11'),
      category: 'Meeting',
      status: 'Completed',
      priority: 'Medium',
      description: 'Sprint planning session with product and engineering teams.',
    }
  ];
//! ----------------------

export default function ChartBoard() {
    return (
        <section className={style['chart-board']}>
            <h2 className={style['header']}>Chart Board on 30.04.2025</h2>
            <div className="padding-10">
                <ul className="ls-none d-flex f-direction-column gap-20">
                    <TaskRow task={tasks[0]} />
                    <TaskRow task={tasks[1]} />
                    <TaskRow task={tasks[2]} />
                    <TaskRow task={tasks[3]} />
                    <TaskRow task={tasks[4]} />
                </ul>
            </div>
        </section>
    );
}