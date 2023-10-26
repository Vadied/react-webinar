import { useEffect, useState } from "react";
import "./style.css";

import { Specie, ErrAlert, Loader, Page } from "../../components";
import { BASE_BACKEND } from "../../constants/endpoint";
import axios from "axios";

const SpeciesList = () => {
  const [species, setSpecies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getSpecies = async () => {
    try {
      const { data } = await axios.get(`${BASE_BACKEND}/genia`);
      if (!data?.length) return;

      setSpecies(data);
    } catch (e) {
      console.log("Error - getting characters:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSpecies();
  }, []);

  if (isLoading) return <Loader />;

  const handleDelete = (id) => async () => {
    try {
      await fetch(`${BASE_BACKEND}/genia/delete/${id}`, {
        method: "DELETE",
      });
      // await getSpecies();
      setSpecies(species.filter((s) => s.id !== id));
    } catch (e) {
      console.log("Error - deleting specie:", e);
      setError("Error - deleting specie");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ErrAlert content={error} />
      <Page title={`Tutte le specie`}>
        <div className="character-list">
          {species.map((specie, i) => (
            <Specie key={i} {...specie} onDelete={handleDelete(specie.id)} />
          ))}
        </div>
      </Page>
    </>
  );
};

export default SpeciesList;
