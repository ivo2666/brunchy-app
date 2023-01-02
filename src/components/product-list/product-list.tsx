import classes from "../../styles/product-list.module.scss";
import { FC, memo } from "react";
import { Item } from "../../data";
import { Card } from "../card";

interface ProductListProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Тhe products that the user has chosen.
   */
  items: Item[];
  /**
   * On select product handler.
   */
  onProductSelect?: (Item: Item) => void;
  /**
   * Optional. HTML Class.
   */
  className?: string;
}

/**
 * UI component which visualizes the Products that the user has selected
 */
export const ProductList: FC<ProductListProps> = ({
  className,
  items,
  onProductSelect,
  ...props
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={`${className} ${classes["product-list"]}`} {...props}>
        {items.map((item) => (
          <Card item={item} key={item.name} onBasketClick={onProductSelect} />
        ))}
      </div>
    </div>
  );
};

export default memo(ProductList);
