import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../index.css";
import {data} from "../data/data";
import { Basket } from "../components/basket";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Basket",
  component: Basket,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: "iphone6",
    },
  },
} as ComponentMeta<typeof Basket>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Basket> = (args) => (
  <Basket {...args} />
);

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  items: [data.items[1], data.items[2]],
};
Example.parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "desktop",
  },
};

export const Example1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example1.args = {
  items: data.items,
};
Example1.parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphone6",
  },
};
