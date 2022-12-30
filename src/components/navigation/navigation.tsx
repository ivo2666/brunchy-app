import classes from "../../styles/navigation.module.scss";
import { FC, memo } from "react";

/**
 * UI component for application navigation
 */
export const Navigation: FC = ({ ...props }) => {
  return (
    <nav className={classes.nav}>
      <ul className={classes["nav-list"]} {...props}>
        <li className={classes["nav-item"]}>About</li>
        <li className={classes["nav-item"]}>Call Us</li>
    </ul>
    </nav>
  );
};

export default memo(Navigation);
