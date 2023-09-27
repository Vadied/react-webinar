import { useState } from "react";
import "./style.css";

import { Page, ErrAlert, CharacterForm, Loader } from "../../components";
import { useNavigate } from "react-router-dom";
import { BASE_BACKEND } from "../../constants/endpoint";

const CharacterNew = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_BACKEND}/character/add`, {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          surname: data.surname,
          geniaId: data.geniaId,
        }),
      });

      const id = await response.json();

      navigate(`/characters/${id}`);
    } catch (e) {
      console.log("Error - creating character:", e);
      setError("Error - creating character");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ErrAlert content={error} />
      <Page title={`Aggiungi personaggio`}>
        {isLoading && <Loader />}
        {!isLoading && <CharacterForm onSubmit={handleSubmit} />}
      </Page>
    </>
  );
};

export default CharacterNew;
