import "./Card.scss";

const Card = ({ id, title, desc, image }) => {
  return (
    <div className="card">
      <div className="button">
        <button>{title}</button>
      </div>
      <div className="img">
      <img src={image} alt="" />
        
      </div>
      <div className="desc">
      <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
