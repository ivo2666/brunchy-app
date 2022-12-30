import classes from "../../styles/navigation.module.scss";
import { FC, memo } from "react";

/**
 * UI component for application navigation.
 */
export const Navigation: FC<React.HTMLAttributes<HTMLElement>> = ({ ...props }) => {
  return (
    <nav className={classes.nav} {...props}>
      <ul className={classes["nav-list"]}>
        <li className={classes["nav-item"]}>About</li>
        <li className={classes["nav-item"]}>Call Us</li>
    </ul>
    </nav>
  );
};

export default memo(Navigation);
