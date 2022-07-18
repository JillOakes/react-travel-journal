import pin from "../images/location.svg";
import photo from "../images/ksc.png";

export default function Card() {
  return (
    <div>
      <div className="card">
        <img src={photo} alt="attraction" className="cardPhoto" />
        <div className="cardStats">
          <div>
            <img src={pin} alt="location pin" className="cardPin" />
            <span className="cardLocation">location</span>
            <span className="cardGoogleMaps">View on Google Maps</span>
          </div>
          <div className="cardTitle">
            <span>Attraction</span>
          </div>
          <div className="cardDate">
            <span>start date - end date</span>
          </div>
          <div className="cardDescription">
            Features historic spacecraft, IMAX shows, and bus tours of the
            spaceport. See Space Shuttle Atlantis, an outdoor Rocket Garden, and
            daily presentations from a veteran NASA astronaut.
          </div>
        </div>
      </div>
    </div>
  );
}
