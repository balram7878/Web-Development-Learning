export default function Body(props) {
  return (
    <>
      <div id="cardContainer">
        <div className="cardImage">
          <img src={props.image} />
        </div>
        <div className="cardInfo">
          <p>{props.item}</p>
          <h3>{props.offer}</h3>
          <h4>{props.price} $</h4>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
}

