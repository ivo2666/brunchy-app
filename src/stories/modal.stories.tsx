import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "../index.css";
import { Modal } from "../components/modal";
import { SuccessCont } from "../components/success-cont";
import { Button } from "../components/button";
import { useState } from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <>
        <div style={{ margin: "10px", maxHeight: "screen", maxWidth: "screen" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet ex, in pretium orci vestibulum eget. 
          <Story />
        </div>
      </>
    ),
  ],
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: "desktop",
    },
  },
} as ComponentMeta<typeof Modal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{marginTop: "10px"}}>
      <Button primary onClick={() => setIsOpen(true)}>
        Click me
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <SuccessCont />
      </Modal>
    </div>
  );
};

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
}

Example.parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "desktop",
  },
};

export const Example1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example1.parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: "iphone6",
  },
};
