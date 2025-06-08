import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Powergestor";
import NotFound from "./pages/NotFound";
import Planilhas from "./pages/Planilhas";
import Powerchats from "./pages/Powerchats";

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Redireciona / para /powergestor */}
        <Route path="/" element={<Navigate to="/powergestor" />} />
        
        {/* Rotas principais */}
        <Route path="/powergestor/*" element={<Home />} />
        <Route path="/planilhas/*" element={<Planilhas />} />
        <Route path="/powerchats/*" element={<Powerchats />} />

        {/* Rota de erro */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;