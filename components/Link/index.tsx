export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  disabled?: boolean;
};

export default function Link({
  className,
  href,
  disabled,
  ...props
}: LinkProps) {
  return (
    <a
      aria-disabled={disabled}
      href={disabled ? undefined : href}
      className={`text-(--color-primary) text-md aria-disabled:text-disabled ${className}`}
      {...props}
    />
  );
}
