import TaskTemplate from "../../../constants/TaskTemplate";
import Form from "../form/Form";

export default function FormOverlay({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50" onClick={(e) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        }}>
            <Form template={TaskTemplate} handler={() => {console.log('click.')}} btnText="Create" />
        </div>
    );
}