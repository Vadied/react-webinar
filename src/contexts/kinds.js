import { createContext, useContext, useState, useEffect } from "react";

import { kinds as data } from "../constants/mocks";

const context = createContext([]);

export const KindsProvider = ({ children }) => {
  const [kinds, setKinds] = useState([]);

  useEffect(() => {
    setKinds(data);
  }, []);
  return <context.Provider value={kinds}>{children}</context.Provider>;
};

const useKinds = () => useContext();

export default useKinds;
