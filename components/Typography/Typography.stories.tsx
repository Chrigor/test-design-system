import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Typography, { type TypographyProps } from "./index";

const meta = {
  title: "Atoms/Typography",
  component: Typography,
  argTypes: {
    children: { type: "string", control: "text" },
    className: { type: "string", control: "text" },
    size: { type: "string", control: "select", options: ["sm", "md", "lg", "xl", "2xl", "4xl"] },
    color: { type: "string", control: "select", options: ["primary", "secondary", "disabled"] },
    weight: { type: "string", control: "select", options: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] }
  }
} satisfies Meta<TypographyProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Meu texto maneiro",
  },
};

