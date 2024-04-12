import { IconBox } from "./IconBox";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/IconBox",
  component: IconBox,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    icon: false,
    tooltipText: "View Request",
  },
};

export const Primary_With_Icon = {
  args: {
    primary: true,
    icon: true,
    tooltipText: "IconBox",
  },
};

export const Secondary = {
  args: {
    tooltipText: "IconBox",
  },
};

export const Large = {
  args: {
    size: "large",
    tooltipText: "IconBox",
  },
};

export const Small = {
  args: {
    size: "small",
    tooltipText: "IconBox",
  },
};
