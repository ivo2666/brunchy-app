import classes from "../../styles/button.module.scss";
import { FC, memo } from "react";

interface ButtonProps {
  /**
   * If the button should apply primary class styles
   */
  primary?: boolean;
  /**
   * If the button should be smaller on small screen.
   * Has an effect if the primary is true
   */
  smallOnMobile?: boolean;
  /**
   * Button contents
   */
  children: string | JSX.Element;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * UI component for user interaction
 */
export const Button: FC<ButtonProps> = ({
  smallOnMobile = false,
  children,
  primary,
  ...props
}) => {
  return (
    <button
      className={`${smallOnMobile ? classes.smallOnMobile : ""} ${
        primary ? classes.primary : ""
      } ${classes.button}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);
