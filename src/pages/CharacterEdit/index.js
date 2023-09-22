import { useEffect, useState, useCallback } from "react";
import { redirect, useParams } from "react-router-dom";
import "./style.css";

import { Page, CharacterForm, Loader } from "../../components";

const CharacterEdit = () => {
  const { id } = useParams();
  if (!id) redirect("/");

  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  const getCharacter = useCallback(async () => {
    try {
      const response = await fetch(
        `https://cvfy-api-dev.reactive-labs.io/lordofthering/character/${id}`
      );

      const character = await response.json();
      if (!character) return;

      setCharacter(character);
    } catch (e) {
      console.log("Error - getting character:", e);
    } finally {
      setIsLoading(false);
    }
  }, [setCharacter, setIsLoading, id]);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  const handleSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://cvfy-api-dev.reactive-labs.io/lordofthering/genia/update`,
        { method: "PUT", body: JSON.stringify(data) }
      );

      const id = await response.json();
      console.log("Successo!", id);
    } catch (e) {
      console.log("Error - updating character:", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Page title={`${character?.name || ""}`}>
      {isLoading && <Loader />}
      {!isLoading && <CharacterForm data={character} onSubmit={handleSubmit} />}
    </Page>
  );
};

export default CharacterEdit;
