import { useState } from "react";
import "./style.css";

import { Page, ErrAlert, CharacterForm, Loader } from "../../components";
import { useNavigate } from "react-router-dom";
import { BASE_BACKEND } from "../../constants/endpoint";
import axios from "axios";

const CharacterNew = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data) => {
    setIsLoading(true);

    try {
      await axios.post(`${BASE_BACKEND}/character/add`, {
        name: data.name,
        surname: data.surname,
        geniaId: data.geniaId,
      });
      navigate(`/`);
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
