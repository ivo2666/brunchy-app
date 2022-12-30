import { ComponentStory, ComponentMeta } from "@storybook/react";
import "../fonts/Poppins/Poppins-SemiBold.ttf";
import "../index.css";
import { FreeDelivery } from "../components/free-delivery";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "FreeDelivery",
  component: FreeDelivery,
} as ComponentMeta<typeof FreeDelivery>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FreeDelivery> = (args) => <FreeDelivery {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
};
