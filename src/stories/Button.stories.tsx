import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.css";
import shoppingBasket from "../assets/shopping-basket.png";
import { Button } from "../components/button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {
      options: [
        <img src={shoppingBasket} width="20" alt="shopping basket" />,
        "String",
      ],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: <img src={shoppingBasket} width="20" alt="shopping basket" />,
};
Default.parameters = {
  backgrounds: {default: "light"}
}

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Order Now",
  primary: true
};
export const PrimarySmallOnMobile = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimarySmallOnMobile.args = {
  children: "Ok ",
  primary: true,
  smallOnMobile: true
};
