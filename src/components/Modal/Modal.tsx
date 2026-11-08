import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

interface ModalProps {
    children: ReactNode;
    onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = "hidden";

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;

            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return createPortal(
        <div
            className={css.backdrop}
            role="dialog"
            aria-modal="true"
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className={css.modal}>{children}</div>
        </div>,
        document.body,
    );
}
