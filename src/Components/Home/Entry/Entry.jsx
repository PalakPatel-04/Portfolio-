const Entry = ({ name, level }) => {
  return (
    <div className="entry" data-aos="slide-up">
      <img
        src="./assets/checkmark.png"
        alt="Experience icon"
        className="icon"
      />
      <div>
        <h3>{name}</h3>
        <p>{level}</p>
      </div>
    </div>
  );
};
export default Entry;
