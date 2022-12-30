import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../index.css";
import { NavList } from "../components/nav-list";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Nav List",
  component: NavList,
} as ComponentMeta<typeof NavList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavList> = (args) => <NavList {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
