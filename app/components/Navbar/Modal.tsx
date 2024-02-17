import React, { ReactNode } from 'react';
import './Modal.css';

interface ModalProps {
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button onClick={onClose} className="modal-close-button">
                    Close
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
