import pin from "../images/location.svg";

export default function Card(props) {
    let cardBorder
    if (props.item.id !== 3){
        cardBorder = <hr className="cardLine" />
    }
  return (
    <div>
      <div className="card">
        <img src={require(`../images/${props.item.imageUrl}`)} alt="attraction" className="cardPhoto" />
        <div className="cardStats">
          <div>
            <img src={pin} alt="location pin" className="cardPin" />
            <span className="cardLocation">{props.item.location}</span>
            <span className="cardGoogleMaps">View on Google Maps</span>
          </div>
          <div className="cardTitle">
            <span>{props.item.title}</span>
          </div>
          <div className="cardDate">
            <span>{props.item.startDate} - {props.item.endDate}</span>
          </div>
          <div className="cardDescription">
            {props.item.description}
          </div>
        </div>
      </div>
      <div>
        {cardBorder}
      </div>
    </div>
  );
}
