import { ReactNode } from "react";

interface IButtonProps {
  children: ReactNode;
  click: () => void;   
}
export const Button = (props: IButtonProps) => {
  return (
    <>
      <button
        onClick={props.click}
        className="m-2 px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
      >
        {props.children}
      </button>
    </>
  );
};
