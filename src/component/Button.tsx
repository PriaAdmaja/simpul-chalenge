import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      className="py-2 px-4 bg-primary text-white rounded-[5px] font-semibold hover:scale-105 ease-out duration-100"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
