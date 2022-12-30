import classes from "../../styles/nav-list.module.scss";
import { FC, memo } from "react";

/**
 * UI component for application nav list
 */
export const NavList: FC = ({
  ...props
}) => {
  return (
    <ul className={classes["nav-list"]} {...props}>
        <li className={classes["nav-list-item"]}>About</li>
        <li className={classes["nav-list-item"]}>Call Us</li>
    </ul>
  );
};

export default memo(NavList);
