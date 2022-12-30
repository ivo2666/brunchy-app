import classes from "../../styles/logo.module.scss";
import { FC, memo } from "react";

/**
 * UI component for application logo
 */
export const Logo: FC = ({
  ...props
}) => {
  return (
    <h1
      className={classes.logo}
      {...props}
    >
        BRUNCHY
    </h1>
  );
};

export default memo(Logo);