import React, { ReactNode } from 'react';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  className,
  children
}) => {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center'>
      <div
        className={`bg-[#0F0F0F] border border-white/10 rounded-2xl px-6 py-8 w-[90%] shadow-xl relative text-white max-w-md ${className}`}
      >
        <button
          type='button'
          onClick={onClose}
          aria-label='Close modal'
          className='absolute top-4 right-4 text-white/60 hover:text-white text-2xl rounded-full transition cursor-pointer'
        >
          <span aria-hidden='true'>&times;</span>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
