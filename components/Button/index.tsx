export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  className,
  variant = "primary",
  disabled,
  ...props
}: ButtonProps) {
  const generalStyles = `rounded-md px-sm py-2xs cursor-pointer hover:opacity-90 trasition duration-200 ease-in-out ${className}`;

  if (disabled) {
    return (
      <button
        {...props}
        disabled={disabled}
        className={`bg-disabled text-disabled ${generalStyles} cursor-not-allowed!`}
      />
    );
  }

  const variants = {
    primary: "bg-(--color-primary) text-white",
    secondary: "bg-emerald-400 text-emerald-900",
  };

  const variantStyles = variants[variant];

  return (
    <button
      {...props}
      disabled={disabled}
      className={`${generalStyles} ${variantStyles}`}
    />
  );
}
