import classes from "../../styles/header.module.scss";
import { FC, memo } from "react";
import { Logo } from "../logo";
import { Navigation } from "../navigation";

/**
 * UI component for application header
 */
export const Header: FC = ({
  ...props
}) => {
  return (
    <header className={classes.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default memo(Header);
