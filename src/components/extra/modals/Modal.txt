'use client';

import { useCallback, useEffect, useState } from 'react';
import Button from '../shared/Button';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  actionColor?: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  actionColor,
  disabled,
  secondaryAction,
  secondaryActionLabel
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        onClick={handleClose}
        className="overlay fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50 px-6 outline-none focus:outline-none"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="mx-auto my-6 w-full sm:w-[480px] md:h-auto lg:h-auto"
        >
          {/* CONTENT */}
          <form
            className={`translate bg-modal shadow-modalShadow flex h-full w-full flex-col rounded-lg p-8 outline-none duration-300 focus:outline-none sm:p-12 md:h-auto lg:h-auto
                        ${showModal ? 'translate-y-0' : 'translate-y-full'}
                        ${showModal ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* HEADER */}
            <div className="text-xl font-bold text-primary sm:text-2xl">
              {title}
            </div>
            {/* BODY */}
            <div className="pb-4 pt-3">{body}</div>
            {/* FOOTER */}
            <div className="flex flex-col gap-2">
              <div className="flex w-full flex-row items-center justify-end gap-2">
                {secondaryAction && secondaryActionLabel && (
                  <Button
                    disabled={disabled}
                    grey
                    label={secondaryActionLabel}
                    onClick={secondaryAction}
                  />
                )}
                <Button
                  disabled={disabled}
                  purple={!actionColor}
                  red={actionColor === 'red'}
                  label={actionLabel}
                  onClick={handleSubmit}
                />
              </div>
              {footer}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
