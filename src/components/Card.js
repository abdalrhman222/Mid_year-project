import "../App.css";
import { useLocation } from "react-router-dom";

function Card(props) {
  const location = useLocation();
  console.log(location.state);

  return (
    <div>
      <div>
        <h1 className="details_header">{location.state.title}</h1>
        <div className="details_div">
          <img src={location.state.image} className="details_image" alt="img" />
        </div>
        <h2 className="details_h2">The category :</h2>
        <p className="details_par">{location.state.category}</p>
        <h2 className="details_h2">Description :</h2>
        <p className="details_par">{location.state.description}</p>
      </div>
    </div>
  );
}

export default Card;
