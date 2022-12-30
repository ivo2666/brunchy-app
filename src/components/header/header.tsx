import classes from "../../styles/header.module.scss";
import { FC, memo } from "react";
import { Logo } from "../logo";
import { Navigation } from "../navigation";
import FreeDelivery from "../free-delivery/free-delivery";

/**
 * UI component for application header.
 */
export const Header: FC<React.HTMLAttributes<HTMLElement>> = ({className, ...props }) => {
  return (
    <header className={`${className} ${classes.header}`} {...props}>
      <div className={classes["logo-nav-wrapper"]}>
        <Logo />
        <Navigation />
      </div>
      <FreeDelivery />
    </header>
  );
};

export default memo(Header);
