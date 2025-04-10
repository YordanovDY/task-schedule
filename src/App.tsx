import Calendar from './components/Calendar/Calendar';
import ScheduleProvider from './components/providers/schedule-provider/ScheduleProvider';
import './styles/core.css';
import './styles/styles.css';

function App() {

  return (
    <ScheduleProvider>
      <div className="content">
        <Calendar />
      </div>
    </ScheduleProvider>
  )
}

export default App
