// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/powergestor";
import NotFound from "./pages/NotFound";
import Planilhas from "./pages/planilhas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/powergestor" element={<Home />} />
        <Route path="/planilhas" element={<Planilhas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
