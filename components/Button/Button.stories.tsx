import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button, { type ButtonProps } from "./";

const meta = {
  title: "Molecules/Button",
  component: Button,
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const VioletTheme: Story = {
  args: {
    children: "Violet Button",
  },
  render: (args) => <Button {...args} className="theme-violet" />,
};

export const DarkTheme: Story = {
  args: {
    children: "Dark Button",
  },
  render: (args) => <Button {...args} className="dark" />,
};
