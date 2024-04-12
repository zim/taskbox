import NoteListItem from "./NoteListItem";
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Notes Ribbon/NoteListItem",
  component: NoteListItem,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    // variant: "primary",
    // primary: true,
    // icon: false,
    // label: "Button",
  },
};

// export const Primary_With_Icon = {
//   args: {
//     primary: true,
//     icon: true,
//     label: "Button",
//   },
// };

// export const Secondary = {
//   args: {
//     label: "Button",
//     icon: false,
//   },
// };

// export const Large = {
//   args: {
//     size: "large",
//     label: "Button",
//   },
// };

// export const Small = {
//   args: {
//     size: "small",
//     label: "Button",
//   },
// };
