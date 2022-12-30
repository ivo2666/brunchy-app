import classes from "../../styles/free-delivery.module.scss";
import { FC, memo } from "react";
import { Ellipse1Icon } from "./ellips-icon";
import motorcyclist from '../../assets/asset8.png';

/**
 * UI component to notify that delivery is free
 */
export const FreeDelivery: FC = ({
  ...props
}) => {
  return (
    <div className={classes.wrapper}>
        <div className={classes["pink-rectangle"]}>
        <div className={classes["free-delivery"]}>Free Delivery</div>
        </div>
        <div className={classes["image-wrapper"]}>
            <Ellipse1Icon className={classes["ellips-icon"]} />
            <img src={motorcyclist} alt="motorcyclist" className={classes.motorcyclist} />
        </div>
    </div>
  );
};

export default memo(FreeDelivery);
