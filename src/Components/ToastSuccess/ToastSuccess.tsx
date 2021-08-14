import { FC } from 'react';
import { Toast } from 'react-bootstrap';
import './ToastSuccess.css';

type propType = {
    showToast: boolean,
    message: string
}

const ToastSuccess: FC<propType> = ({ showToast, message }) => {
    return (
        <Toast className={"border border-success bg-success text-white"} show={showToast}>
            <Toast.Header className={"bg-success text-white"} closeButton={false}>
                <strong className="mr-auto"><i>SUCCESS</i></strong>
            </Toast.Header>
            <Toast.Body className={"text-white"} >
                {message}
            </Toast.Body>
        </Toast>
    );
}

export default ToastSuccess;