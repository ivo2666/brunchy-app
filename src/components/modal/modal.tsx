import classes from "../../styles/modal.module.scss";
import { FC, memo, useRef } from "react";
import useOnClickOutside from "../../hooks/use-click-outside";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Prop to open/close the modal.
   */
  isOpen: boolean;
  /**
   * Optional. Close handler.
   */
  onClose?: () => void;
}

/**
 * UI component to show a dialog or a box when you click a button.
 */
export const Modal: FC<ModalProps> = ({ className, isOpen, onClose = () => {}, children, ...props }) => {
  const clickRef = useRef(null);
  useOnClickOutside(clickRef, () => onClose());
  return (
    <div
      className={`${!isOpen ? classes["is-closed"] : ""} ${
        classes.modal
      }`}
      
      {...props}
    >
      <div ref={clickRef} className={`${className ?? ""}`}>{children}</div>
    </div>
  );
};

export default memo(Modal);
