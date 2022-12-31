import classes from "../../styles/hero.module.scss";
import { FC, memo } from "react";

/**
 * UI component for displaying a large box with a title and description.
 */
export const Hero: FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <section className={`${className} ${classes.hero}`} {...props}>
      <h1 className={classes.title}>
        The fastest brunch delivery in{" "}
        <span className={classes["title-span"]}>Your city</span>
      </h1>
      <p className={classes.paragraph}>
        This is my Exploration for Fruit - Food Delivery Landing Page 🍕. How
        about you ?
      </p>
    </section>
  );
};

export default memo(Hero);
