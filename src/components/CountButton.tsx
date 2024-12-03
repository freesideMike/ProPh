interface ICountButtonProps {
  children: JSX.Element;
  click: () => void;
}

export const CountButton = ({ click, children }: ICountButtonProps) => {
  return (
    <>
      <button onClick={click} className="countButton">{children}</button>
    </>
  );
};
