import babyFeet from "./../img/babyFeet.jpg";

const Home = () => {
  return (
    <>
      <article className="photosContainer">
        <img src={babyFeet} alt="Babyfeet in focus" className="photo photo1" />
        <img src={babyFeet} alt="Babyfeet in focus" className="photo photo2" />
        <img src={babyFeet} alt="Babyfeet in focus" className="photo photo3" />
        <img src={babyFeet} alt="Babyfeet in focus" className="photo photo4" />
        <img src={babyFeet} alt="Babyfeet in focus" className="photo photo5" />
        <img src={babyFeet} alt="Babyfeet in focus" className="photo photo6" />
      </article>
    </>
  );
};
export default Home;
