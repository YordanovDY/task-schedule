import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const TaskTemplate = [
    // <div key="1" className="flex items-center gap-4">
    //     <label htmlFor="title" className="w-32 text-sm font-medium text-gray-700">
    //         Title
    //     </label>
    //     <input
    //         type="text"
    //         name="title"
    //         id="title"
    //         className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#907731] border-[#907731]"
    //     />
    // </div>,

    <div key="2" className="flex items-center gap-4">
        <label htmlFor="category" className="w-32 text-sm font-medium text-gray-700">
            Category
        </label>
        <select
            name="category"
            id="category"
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#907731] border-[#907731]"
        >
            <option value="Planning">Planning</option>
            <option value="Implementation">Implementation</option>
            <option value="ProblemSolving">Problem Solving</option>
            <option value="Testing">Testing</option>
            <option value="Deployment">Deployment</option>
            <option value="Documentation">Documentation</option>
            <option value="Learning">Learning</option>
            <option value="Meeting">Meeting</option>
            <option value="Other">Other</option>
        </select>
    </div>,

    <div key="3" className="flex items-center gap-4">
        <label htmlFor="priority" className="w-32 text-sm font-medium text-gray-700">
            Priority
        </label>
        <select
            name="priority"
            id="priority"
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#907731] border-[#907731]"
        >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
        </select>
    </div>,

    <div key="4" className="flex items-center gap-4">
        <label htmlFor="date" className="w-32 text-sm font-medium text-gray-700">
            Time
        </label>
        <Flatpickr
            id="time"
            name="time"
            options={{
                enableTime: true,
                noCalendar: true,
                dateFormat: "H:i",
                time_24hr: true,
            }}
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#907731] border-[#907731]"
        />
    </div>,

    <div key="5" className="flex items-start gap-4">
        <label htmlFor="description" className="w-32 text-sm font-medium text-gray-700 pt-2">
            Description
        </label>
        <textarea
            name="description"
            id="description"
            rows={4}
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#907731] border-[#907731]"
        />
    </div>
];

export default TaskTemplate;