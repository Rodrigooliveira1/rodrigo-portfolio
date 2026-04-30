import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

function DSAR() {
  return (
    <div className="p-6">
      <Link to="/">← Voltar</Link>
      <h1 className="text-3xl font-bold mt-4">DSAR Automatizado</h1>
      <p className="mt-2">Fluxo LGPD com automação</p>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "bg-gray-900 text-white min-h-screen p-6" : "bg-gray-50 min-h-screen p-6"}>
      
      {/* NAV */}
      <nav className="flex justify-between max-w-5xl mx-auto mb-10">
        <h1 className="font-bold">Rodrigo.dev</h1>
        <div className="flex gap-4">
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      {/* HERO */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Rodrigo Oliveira</h1>
          <button onClick={() => setDark(!dark)}>Modo</button>
        </div>

        <p className="mt-4 text-xl">
          Especialista em Privacidade | LGPD | OneTrust
        </p>
      </div>

      {/* PROJETOS */}
      <div id="projetos" className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        <motion.div whileHover={{ scale: 1.05 }}>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold">DSAR</h3>
            <p>Automação LGPD</p>
            <button onClick={() => navigate("/dsar")}>
              Ver detalhes
            </button>
          </div>
        </motion.div>
      </div>
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