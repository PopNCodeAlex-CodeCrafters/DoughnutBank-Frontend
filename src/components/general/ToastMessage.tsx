import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const sendMessage = toast;
const ToastMessage = () => {
    return(
        <ToastContainer/>
    )
}

export {ToastMessage, sendMessage}