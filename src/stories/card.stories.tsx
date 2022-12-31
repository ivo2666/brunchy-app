import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.css";
import { Card } from "../components/card";
import {data} from "../data/data";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  ...data.items[4]
};

export const Example2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example2.args = {
  ...data.items[5]
};
export const Example3 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example3.args = {
  ...data.items[6]
};
