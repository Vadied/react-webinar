import { useState } from "react";
import "./style.css";

import { Page, CharacterForm, Loader } from "../../components";
import { useNavigate } from "react-router-dom";

const CharacterNew = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://cvfy-api-dev.reactive-labs.io/lordofthering/character/add`,
        { method: "POST", body: JSON.stringify(data) }
      );

      const id = await response.json();

      navigate(`/characters/${id}`);
    } catch (e) {
      console.log("Error - creating character:", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Page title={`Aggiungi personaggio`}>
      {isLoading && <Loader />}
      {!isLoading && <CharacterForm onSubmit={handleSubmit} />}
    </Page>
  );
};

export default CharacterNew;
