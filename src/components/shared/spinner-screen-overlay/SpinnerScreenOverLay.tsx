import Spinner from "../spinner/Spinner";
import { SpinnerOverlayProps } from "./SpinnerScreenOverLayTypes";

export default function SpinnerScreenOverLay({ isActive }: SpinnerOverlayProps) {
    if (isActive) {
        return (
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex items-center justify-center z-50">
                <Spinner />
            </div>
        );
    }

    return null;
}