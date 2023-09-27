import { useEffect, useState, useCallback } from "react";
import { redirect, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";

import { Page, CharacterForm, Loader } from "../../components";
import { BASE_BACKEND } from "../../constants/endpoint";

const CharacterEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) redirect("/");

  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      await axios.put(`${BASE_BACKEND}/character/update`, data);
      navigate(`/`);
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
