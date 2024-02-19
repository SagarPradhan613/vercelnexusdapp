import React, { ReactNode } from 'react';
import './Modal.css';

interface ModalProps {
    // onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({  children }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                {/* <button  className="modal-close-button">
                    Close
                </button> */}
                {children}
            </div>
        </div>
    );
};

export default Modal;
