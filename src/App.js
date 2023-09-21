import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";

import Context from "./components/Context";
import Home from "./pages/Home";
import CharacterEdit from "./pages/CharacterEdit";
import OnWorking from "./pages/OnWorking";

const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/new" element={<OnWorking />} />
          <Route path="/characters/:id" element={<CharacterEdit />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
};

export default App;
