import { KindsProvider } from "../contexts/kinds";

const Context = ({ children }) => {
  return <KindsProvider>{children}</KindsProvider>;
};

export default Context;
