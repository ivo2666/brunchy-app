import classes from "../../styles/success-cont.module.scss";
import { FC, memo } from "react";
import { Button } from "../button";

interface SuccessContProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
   * Optional. "Ok - button" click handler.
   */
  onOkClick?: () => void;
    /**
   * Optional. HTML Class.
   */
  className?: string;
}

/**
 * UI component which informs the user that the order has been placed successfully.
 */
export const SuccessCont: FC<SuccessContProps> = ({
  className,
  onOkClick,
  ...props
}) => {
  return (
    <div className={`${className} ${classes["success-cont"]}`} {...props}>
      <div className={classes.content}>
        <h3 className={classes.title}>Congratulations!</h3>
        <p className={classes.info}>Your order it’s on its way.</p>
        <Button primary smallOnMobile onClick={onOkClick}>
          Ok
        </Button>
      </div>
    </div>
  );
};

export default memo(SuccessCont);
