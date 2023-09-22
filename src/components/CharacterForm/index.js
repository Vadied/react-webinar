import { useState, useMemo, useEffect } from "react";
import "./style.css";

import { Input, Loader, Select } from "..";

const CharacterForm = ({ data = {}, onSubmit }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [genies, setGenies] = useState([]);
  const [character, setCharacter] = useState(data);

  const getGenies = async () => {
    try {
      const response = await fetch(
        "https://cvfy-api-dev.reactive-labs.io/lordofthering/genia"
      );

      const genies = await response.json();
      if (!genies?.length) return;

      setGenies(genies);
    } catch (e) {
      console.log("Error - getting genies:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getGenies();
  }, []);

  const handleChange = (field) => (value) =>
    setCharacter((old) => ({ ...old, [field]: value }));

  const genia = useMemo(() => {
    if (!character?.genia) return {};

    return genies.find((k) => k.id === character.genia.id);
  }, [character?.genia, genies]);

  const handleSubmit = () => {
    onSubmit();
  };

  if (isLoading) return <Loader />;

  return (
    <form onSubmit={handleSubmit}>
      <Input value={character?.name || ""} onChange={handleChange("name")} />
      <Input
        value={character?.surname || ""}
        onChange={handleChange("surname")}
      />
      <Select
        value={genia?.name || ""}
        onChange={handleChange("kind")}
        options={genies.map((k) => k.name)}
      />
    </form>
  );
};

export default CharacterForm;
