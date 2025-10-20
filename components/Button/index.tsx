export default function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className="rounded-[8px] bg-bg-button text-white cursor-pointer px-[32px] py-[12px]"/>
  );
}
