import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

/* ===================== DSAR PAGE ===================== */
function DSAR() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-sm underline">← Voltar</Link>

        <h1 className="text-3xl font-bold mt-4 mb-4">DSAR Automatizado (LGPD)</h1>

        <p className="mb-6">
          Fluxo completo de atendimento de solicitações de titulares com automação,
          validação de dados e integração.
        </p>

        <h2 className="text-xl font-semibold mb-2">Fluxo</h2>
        <div className="bg-gray-100 p-4 rounded-xl mb-6">
          Usuário → Validação → Consulta → Tratamento → Resposta
        </div>

        <h2 className="text-xl font-semibold mb-2">Payload</h2>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-xl mb-6">
{`{
  "cpf": "12345678900",
  "status": "processing"
}`}
        </pre>

        <h2 className="text-xl font-semibold mb-2">Freemarker</h2>
        <pre className="bg-gray-800 text-green-400 p-4 rounded-xl">
{`<#if cpf?matches("[0-9]{11}")>
  Processar
<#else>
  Erro
</#if>`}
        </pre>
      </div>
    </div>
  );
}

/* ===================== HOME ===================== */
function Home() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "min-h-screen bg-gray-900 text-white p-6" : "min-h-screen bg-gray-50 text-gray-900 p-6"}>
      {/* NAV */}
      <nav className="max-w-5xl mx-auto flex justify-between mb-10">
        <h1 className="font-bold">Rodrigo.dev</h1>
        <div className="flex gap-4">
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      {/* HERO */}
      <header className="max-w-5xl mx-auto mb-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold">Rodrigo Oliveira</h1>
          <button onClick={() => setDark(!dark)} className="px-4 py-2 border rounded-xl">
            {dark ? "Modo Claro" : "Modo Escuro"}
          </button>
        </div>

        <p className="text-xl mb-6">
          Especialista em Privacidade de Dados | OneTrust | LGPD | Integrações
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-2 bg-black text-white rounded-xl">
            Baixar Currículo
          </button>
          <button className="px-6 py-2 border rounded-xl">
            LinkedIn
          </button>
        </div>
      </header>

      {/* PROJETOS */}
      <section id="projetos" className="max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-semibold mb-6">Projetos</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="p-6 bg-white rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">DSAR</h3>
              <p className="mb-4">Fluxo completo LGPD automatizado</p>
              <button
                onClick={() => navigate("/dsar")}
                className="px-4 py-2 bg-black text-white rounded-xl"
              >
                Ver detalhes
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="max-w-5xl mx-auto">
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-3">Contato</h2>
          <p>Email: r.alves338@gmail.com</p>
        </div>
      </section>
    </div>
  );
}

/* ===================== APP ===================== */
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
