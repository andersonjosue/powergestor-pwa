// src/App.jsx
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Powergestor";
import NotFound from "./pages/NotFound";
import Planilhas from "./pages/Planilhas";
import Powerchats from "./pages/Powerchats";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/powergestor/*" element={<Home />} />
        <Route path="/planilhas/*" element={<Planilhas />} />
        <Route path="/powerchats/*" element={<Powerchats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
