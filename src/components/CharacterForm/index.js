import { useState, useMemo, useEffect } from "react";
import "./style.css";

import { Input, Loader, Select } from "..";

const CharacterForm = ({ data = {}, onSubmit }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [species, setspecies] = useState([]);
  const [character, setCharacter] = useState(data);

  const getspecies = async () => {
    try {
      const response = await fetch(
        "https://cvfy-api-dev.reactive-labs.io/lordofthering/genia"
      );

      const species = await response.json();
      if (!species?.length) return;

      setspecies(species.map((s) => ({ label: s.name, value: s.id })));
    } catch (e) {
      console.log("Error - getting species:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getspecies();
  }, []);

  const handleChange = (field) => (value) =>
    setCharacter((old) => ({ ...old, [field]: value }));

  const genia = useMemo(() => {
    if (!character?.genia) return {};

    return species.find((k) => k.id === character.genia.id);
  }, [character?.genia, species]);

  const isValid = useMemo(() => {
    return true;
  }, []);

  const handleSubmit = () => {
    if (!isValid) return;

    onSubmit();
  };

  if (isLoading) return <Loader />;

  return (
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
          label="Genia"
          value={genia?.name || ""}
          onChange={handleChange("genia")}
          options={species}
        />
      </form>
    </div>
  );
};

export default CharacterForm;
