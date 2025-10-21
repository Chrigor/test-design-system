export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        rounded-md
        bg-(--color-primary)
        text-white
        cursor-pointer
        px-xs
        py-2xs
        transition-colors
        hover:opacity-90
        blur-lg
        text-md
        ${className ?? ""}
      `}
    />
  );
}
