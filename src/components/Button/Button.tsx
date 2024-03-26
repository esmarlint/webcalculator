interface ButtonProps {
  text: string;
  class: string;
  onClick: () => void;
}

export const Button = ({ text, class: className, onClick }: ButtonProps) => {
  return (
    <button
      className={`rounded-full text-[16px] font-semibold m-3 hover:bg-blue-500 transition-all active:ring-4 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
