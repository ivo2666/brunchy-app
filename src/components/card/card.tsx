import classes from "../../styles/card.module.scss";
import { FC, memo } from "react";
import shoppingBasket from "../../assets/shopping-basket.png";
import { Button } from "../button";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Product name
   */
  name: string;
  /**
   * Product caption
   */
  caption: string;
  /**
   * Product price
   */
  price: number;
  /**
   * Product image
   */
  image: string;
  /**
   * Optional. Basket click handler
   */
  onBasketClick?: () => void;
  /**
   * Optional. HTML Class
   */
  className?: string;
}

/**
 * UI component that display product in a way it's easily readable.
 * 
 */
export const Card: FC<CardProps> = ({ name, caption, price, image, onBasketClick, className, ...props }) => {
  return (
    <div className={`${className} ${classes.card}`} {...props}>
      <div className={classes.body}>
        <h4 className={classes.name}>{name}</h4>
        <h5 className={classes.caption}>{caption}</h5>
        <h6 className={classes.price}>
          <span className={classes.currency}>$&nbsp;</span>
          {price.toFixed(2)}
        </h6>
        <Button className={classes.basket} onClick={onBasketClick}>
          <img
            src={shoppingBasket}
            className={classes["basket-image"]}
            alt="shopping-basket"
          />
        </Button>
      </div>
      <img src={image} alt="brunch" className={classes.image} />
    </div>
  );
};

export default memo(Card);
