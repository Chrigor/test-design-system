import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Link, { type LinkProps } from "./index";

const meta = {
  title: "Design System/Molecules/Link",
  component: Link,
  argTypes: {
    disabled: { type: "boolean", control: "boolean" },
    className: { type: "string", control: "text" },
    href: { type: "string", control: "text" },
    target: { type: "string", control: "text" },
  }
} satisfies Meta<LinkProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Link",
    href: "https://google.com",
    target: "_blank"
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Link",
    disabled: true,
  },
}


export const VioletThemeLink: Story = {
  args: {
    children: "Violet Link",
    href: "https://google.com",
    target: "_blank"
  },
  argTypes: Primary.argTypes,
  render: (args) => <Link {...args} className="theme-violet" />,
};