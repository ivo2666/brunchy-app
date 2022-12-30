import classes from "../../styles/navigation.module.scss";
import { FC, memo } from "react";
import { FreeDelivery } from "../free-delivery";
import { NavList } from "../nav-list";

/**
 * UI component for application navigation
 */
export const Navigation: FC = ({ ...props }) => {
  return (
    <nav className={classes.nav}>
      <NavList />
      <FreeDelivery />
    </nav>
  );
};

export default memo(Navigation);
