import { useEffect, useState } from "react";
import "./style.css";

import { Character, ErrAlert, Loader } from "..";
import { BASE_BACKEND } from "../../constants/endpoint";

const ChatacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getCharacters = async () => {
    try {
      const response = await fetch(`${BASE_BACKEND}/characters`);

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
    try {
      await fetch(`${BASE_BACKEND}/character/delete/${id}`, {
        method: "DELETE",
      });
      // await getCharacters();
      setCharacters(characters.filter((ch) => ch.id !== id));
    } catch (e) {
      console.log("Error - deleting character:", e);
      setError("Error - deleting character");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ErrAlert content={error} />
      <div className="character-list">
        {characters.map((ch, i) => (
          <Character key={i} {...ch} onDelete={handleDelete(ch.id)} />
        ))}
      </div>
    </>
  );
};

export default ChatacterList;
