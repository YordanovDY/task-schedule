import Calendar from './components/calendar/Calendar';
import ChartBoard from './components/chart-board/ChartBoard';
import ScheduleProvider from './components/providers/schedule-provider/ScheduleProvider';
import './styles/core.css';
import './styles/styles.css';

function App() {

  return (
    <ScheduleProvider>
      <div className="content d-flex padding-20">
        <Calendar />
        <ChartBoard />
      </div>
    </ScheduleProvider>
  )
}

export default App
