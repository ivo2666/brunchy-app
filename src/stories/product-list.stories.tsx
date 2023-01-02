import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../index.css";
import data from "../data/data.json";
import { ProductList } from "../components/product-list";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ProductList",
  component: ProductList,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: "desktop",
    },
  },
} as ComponentMeta<typeof ProductList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductList> = (args) => (
  <ProductList {...args} />
);

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  items: data.items,
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
    defaultViewport: "iphonexr",
  },
};
