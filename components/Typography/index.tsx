import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import type { JSX } from "react";

const textVariants = cva([], {
  variants: {
    size: {
      sm: ["text-sm"],
      md: ["text-base"],
      lg: ["text-lg"],
      xl: ["text-xl"],
      "2xl": ["text-2xl"],
      "4xl": ["text-4xl"],
    },
    weight: {
      100: ["font-thin"],
      200: ["font-extralight"],
      300: ["font-light"],
      400: ["font-normal"],
      500: ["font-medium"],
      600: ["font-semibold"],
      700: ["font-bold"],
      800: ["font-extrabold"],
      900: ["font-black"],
    },
    color: {
      primary: ["text-(--color-primary)"],
      secondary: ["text-emerald-400"],
      disabled: ["text-disabled"],
    }
  },
  defaultVariants: {
    size: "md",
    weight: 400,
    color: "primary",
  },
});

export type TypographyProps = VariantProps<typeof textVariants> & {
  element?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  children: React.ReactNode;
} & JSX.IntrinsicElements["p"];

export default function Typography({
  element = "p",
  className,
  ...rest
}: TypographyProps) {
  const Element = element as any;
  return <Element className={`${textVariants(rest)} ${className}`} {...rest} />;
}
