import classes from "../../styles/header.module.scss";
import { FC, memo } from "react";
import { Logo } from "../logo";
import { Navigation } from "../navigation";
import FreeDelivery from "../free-delivery/free-delivery";

/**
 * UI component for application header
 */
export const Header: FC = ({
  ...props
}) => {
  return (
    <header className={classes.header}>
      <div className={classes["logo-nav-wrapper"]}>
      <Logo />
      <Navigation />
      </div>
      <FreeDelivery />
    </header>
  );
};

export default memo(Header);
