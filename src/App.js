import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style.css";

import { Context } from "./components";
import { CharacterEdit, CharacterNew, Home, OnWorking } from "./pages";

const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/new" element={<CharacterNew />} />
          <Route path="/characters/:id" element={<CharacterEdit />} />
          <Route path="/species/new" element={<OnWorking />} />
          <Route path="/species/id" element={<OnWorking />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
};

export default App;
