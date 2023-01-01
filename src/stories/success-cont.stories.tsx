import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../index.css";
import { SuccessCont } from "../components/success-cont";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "SuccessCont",
  component: SuccessCont,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: "iphone6",
    },
  },
} as ComponentMeta<typeof SuccessCont>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SuccessCont> = (args) => (
  <SuccessCont {...args} />
);

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
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
};
Example1.parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphone6",
  },
};
