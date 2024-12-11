import { CountButton } from "./CountButton";



export const Count = () => {
  return (
    <>
      <CountButton
        click={() => {
          /*  onclick=SUBTRACT one to the count of itmes maybe in my  */
        }}
      >
        <span>-</span>
      </CountButton>
      <article className="countDisplay"> 3 </article>
      <CountButton
        click={() => {
          /*  onclick=ADD one to the count of itmes */
        }}
      >
        <span>+</span>
      </CountButton>
    </>
  );
};
