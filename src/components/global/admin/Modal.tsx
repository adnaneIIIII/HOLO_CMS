import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null; // Don't render if the modal is not open

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/60 z-10"
        onClick={onClose} // Close modal when clicking on backdrop
      />
      {/* Dialog */}
      <div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-lg p-6 z-20"
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </>
  );
}

export default Modal;
