import { useEffect, useState } from "react";
import "./style.css";

import Character from "../Character";
import Loader from "../Loader";

const ChatacterList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    try {
      const response = await fetch(
        "https://cvfy-api-dev.reactive-labs.io/lordofthering/characters"
      );

      const characters = await response.json();
      if (!characters?.length) return;

      setCharacters(characters);
    } catch (e) {
      console.log("Error - getting characters:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  if (isLoading) return <Loader />;

  const handleDelete = (id) => async () => {
    await fetch(
      `https://cvfy-api-dev.reactive-labs.io/lordofthering/genia/delete/${id}`,
      { method: "DELETE" }
    );
  };

  return (
    <div className="character-list">
      {characters.map((ch, i) => (
        <Character key={i} {...ch} onDelete={handleDelete(ch.id)} />
      ))}
    </div>
  );
};

export default ChatacterList;
