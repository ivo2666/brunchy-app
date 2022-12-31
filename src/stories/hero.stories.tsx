import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.css";
import { Hero } from "../components/hero";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
