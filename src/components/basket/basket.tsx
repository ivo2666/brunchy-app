import classes from "../../styles/basket.module.scss";
import { FC, memo } from "react";
import { Item } from "../../data";

interface BasketProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
   * Тhe products that the user has chosen.
   */
    items: Item[];
    /**
   * Optional. HTML Class.
   */
  className?: string;
}

/**
 * UI component which visualizes the Products that the user has selected
 */
export const Basket: FC<BasketProps> = ({
  className,
  items,
  ...props
}) => {
  return (
    <div className={`${className} ${classes.basket}`} {...props}>
      <div className={classes.items}>
        {items.map(item => (
            <div className={classes.item}>
            <span className={classes["item-name"]}>{item.name}</span>
            <span className={classes["item-price"]}>
              <span className={classes.currency}>$&nbsp;</span>
              {item.price?.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <div className={classes.divider} />
      <div className={classes.total}>
      <div className={classes.item}>
          <span className={classes["item-name"]}>Total</span>
          <span className={classes["item-price"]}>
            <span className={classes.currency}>$&nbsp;</span>
            {(items.reduce((a, c) => a + c.price, 0) ?? 0).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(Basket);
