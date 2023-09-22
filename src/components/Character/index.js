import { useNavigate } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

import "./style.css";
import Button from "../Button";

const Character = ({ id, name, surname, genia, onDelete }) => {
  const navigate = useNavigate();
  const goToEdit = () => navigate(`characters/${id}`);

  return (
    <div className="character">
      <div className="data">
        {name} {surname}
      </div>
      <div className="data">{genia.name}</div>
      <div className="actions">
        <Button onClick={goToEdit}>
          <AiOutlineEdit />
        </Button>
        <Button onClick={onDelete} type="danger">
          <AiOutlineDelete />
        </Button>
      </div>
    </div>
  );
};

export default Character;
