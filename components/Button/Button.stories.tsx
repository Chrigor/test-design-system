import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button, { type ButtonProps } from "./";

const meta = {
  title: "Design System/Molecules/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  }
} satisfies Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
  argTypes: {
    children: { type: "string", control: "text" },
    disabled: { type: "boolean", control: "boolean" },
    className: { type: "string", control: "text" },
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
}

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
  argTypes: Primary.argTypes,
};

export const SecondaryDisabled: Story = {
  args: {
    children: "Secondary Disabled Button",
    variant: "secondary",
    disabled: true,
  },
}

export const VioletTheme: Story = {
  args: {
    children: "Violet Button",
  },
  argTypes: Primary.argTypes,
  render: (args) => <Button {...args} className="theme-violet" />,
};

export const DarkTheme: Story = {
  args: {
    children: "Dark Button",
  },
  render: (args) => <Button {...args} className="dark" />,
};
