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

export const Default = {
  args: {
    item: {
      user: "Zimmy Segal",
      requestId: "0000001",
      role: "Admin",
      location: "London",
      messageContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      startDate: new Date("August 08, 2023 08:00:00"),
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    item: {
      user: "Zimmy Segal",
      requestId: "0000001",
      role: "Admin",
      location: "London",
      messageContent:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      startDate: new Date("August 08, 2023 08:00:00"),
    },
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
