import { FC } from 'react';
import { Toast } from 'react-bootstrap';
import './ToastFail.css';

type propType = {
    showToast: boolean,
    message: string
}

const ToastFail: FC<propType> = ({ showToast, message }) => {
    return (
        <Toast className={"border border-danger bg-danger text white"} show={showToast}>
            <Toast.Header className={"bg-danger text-white"} closeButton={false}>
                <strong className="mr-auto"><i>FAILED</i></strong>
            </Toast.Header>
            <Toast.Body className={"text-white"}>
                {message}
            </Toast.Body>
        </Toast>
    );
}

export default ToastFail;