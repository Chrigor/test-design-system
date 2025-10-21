export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        rounded-[8px]
        bg-(--color-primary)
        text-white
        cursor-pointer
        px-[32px] py-[12px]
        transition-colors
        hover:opacity-90
        ${className ?? ""}
      `}
    />
  );
}
