import { characters } from "../../constants/mocks";
import "./style.css";

import Character from "../Character";

const ChatacterList = () => {
  return (
    <div className="character-list">
      {characters.map((ch, i) => (
        <Character key={i} {...ch} />
      ))}
    </div>
  );
};

export default ChatacterList;
