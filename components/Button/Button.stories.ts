import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button, { type ButtonProps } from "./";

const meta = {
  title: 'Molecules/Button',
  // tags: ['autodocs'],
  component: Button,
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};
