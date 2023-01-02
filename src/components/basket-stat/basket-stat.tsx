import classes from "../../styles/basket-stat.module.scss";
import { FC, memo } from "react";
import shoppingBasket from "../../assets/shopping-basket.png";
import { Button } from "../button";

interface BasketStatProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  /**
   * Total price of products in the basket.
   */
  totalPrice: string;
  /**
   * Optional. Basket click handler.
   */
  onBasketClick?: () => void;
  /**
   * Optional. "Order Now" button click handler.
   */
  onOrderNowClick?: () => void;
  /**
   * Optional. HTML Class.
   */
  className?: string;
}

/**
 * UI component to shows the status of the basket.
 */
export const BasketStat: FC<BasketStatProps> = ({
  totalPrice,
  onBasketClick,
  onOrderNowClick,
  className,
  ...props
}) => {
  return (
    <div className={`${className} ${classes["basket-stat"]}`} {...props}>
      <img
        src={shoppingBasket}
        onClick={onBasketClick}
        className={classes["basket-image"]}
        alt="shopping-basket"
      />
      <span className={classes["total-price"]}>{totalPrice}$</span>
      <Button className={classes.button} primary onClick={onOrderNowClick}>
        Order Now
      </Button>
    </div>
  );
};

export default memo(BasketStat);
