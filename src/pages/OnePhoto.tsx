import babyFeet from "./../img/babyFeet.jpg";

const OnePhoto = () => {
  return (
    <>
      <h3>Baby feet</h3>
      <article className="onePhotoContainer">
        <img src={babyFeet} alt="" className="onePhoto" />
      </article>
    </>
  );
};
export default OnePhoto;
