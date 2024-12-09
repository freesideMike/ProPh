import babyFeet from "./../img/babyFeet.jpg";

const OnePhoto = () => {
  return (
    <>
      <article className="displayingOnePhoto">
        <h3>Baby feet</h3>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <section className="onePhotoContainer">
          <img src={babyFeet} alt="" className="onePhoto" />
        </section>
      </article>
    </>
  );
};
export default OnePhoto;
