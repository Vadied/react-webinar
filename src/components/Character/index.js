import { Link } from "react-router-dom";
import "./style.css";

const Character = ({ id, name, surname, kind }) => {
  return (
    <Link className="character" to={`characters/${id}`}>
      <div className="content">
        <div className="data">
          {name} {surname}
        </div>
        <div className="data">{kind.name}</div>
      </div>
    </Link>
  );
};

export default Character;
