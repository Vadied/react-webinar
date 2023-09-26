import { useState, useMemo, useEffect } from "react";
import "./style.css";

import { Button, ErrAlert, Input, Loader, Select } from "..";
import { BASE_BACKEND } from "../../constants/endpoint";

const CharacterForm = ({ data = {}, onSubmit }) => {
  const [species, setSpecies] = useState([]);
  const [character, setCharacter] = useState({
    id: data?.id || "",
    name: data?.name || "",
    surname: data?.surname || "",
    geniaId: data?.genia?.id || 0,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getSpecies = async () => {
    try {
      const response = await fetch(`${BASE_BACKEND}/genia`);
      const species = await response.json();
      if (!species?.length) return;

      setSpecies(species.map((s) => ({ label: s.name, value: s.id })));
    } catch (e) {
      console.log("Error - getting species:", e);
      setError("Error - getting species");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSpecies();
  }, []);

  const handleChange = (field) => (value) =>
    setCharacter((old) => ({ ...old, [field]: value }));

  const isValid = useMemo(() => {
    return true;
  }, []);

  const handleSubmit = () => {
    if (!isValid) return;

    onSubmit({ ...character, geniaId: parseInt(character.geniaId) });
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <ErrAlert content={error} />
      <div className="form center">
        <form className="character-form" onSubmit={handleSubmit}>
          <Input
            label="Name"
            value={character?.name || ""}
            onChange={handleChange("name")}
          />
          <Input
            label="Surname"
            value={character?.surname || ""}
            onChange={handleChange("surname")}
          />
          <Select
            hasEmpty={true}
            label="Genia"
            value={character?.geniaId || ""}
            onChange={handleChange("geniaId")}
            options={species}
          />

          <Button onClick={handleSubmit}>Invia</Button>
        </form>
      </div>
    </>
  );
};

export default CharacterForm;
