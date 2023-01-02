import classes from "../../styles/card.module.scss";
import { FC, memo } from "react";
import shoppingBasket from "../../assets/shopping-basket.png";
import { Button } from "../button";
import { Item } from "../../data";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   *  Product data.
   */
  item: Item;
  onBasketClick?: (item: Item) => void;
  /**
   * Optional. HTML Class
   */
  className?: string;
}

/**
 * UI component that display product in a way it's easily readable.
 * 
 */
export const Card: FC<CardProps> = ({ item, onBasketClick = () => {}, className, ...props }) => {
  return (
    <div className={`${className} ${classes.card}`} {...props}>
      <div className={classes.body}>
        <h4 className={classes.name}>{item.name}</h4>
        <h5 className={classes.caption}>{item.caption}</h5>
        <h6 className={classes.price}>
          <span className={classes.currency}>$&nbsp;</span>
          {item.price.toFixed(2)}
        </h6>
        <Button className={classes.basket} onClick={() => onBasketClick(item)}>
          <img
            src={shoppingBasket}
            className={classes["basket-image"]}
            alt="shopping-basket"
          />
        </Button>
      </div>
      <img src={item.image} alt="brunch" className={classes.image} />
    </div>
  );
};

export default memo(Card);
