import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../fonts/Poppins/Poppins-Bold.ttf";
import "../index.css";
import { Logo } from "../components/logo";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
