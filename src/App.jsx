import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DSAR from "./pages/DSAR";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Rodrigo Oliveira</h1>
      <p>Especialista em Privacidade | LGPD | OneTrust</p>

      <Link to="/dsar">
        <button>Ver Projeto DSAR</button>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dsar" element={<DSAR />} />
      </Routes>
    </Router>
  );
}