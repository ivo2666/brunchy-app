import classes from "../../styles/logo.module.scss";
import { FC, memo } from "react";

/**
 * UI component for application logo.
 */
export const Logo: FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h2
      className={`${className} ${classes.logo}`}
      {...props}
    >
        BRUNCHY
    </h2>
  );
};

export default memo(Logo);
