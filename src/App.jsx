import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import PrivacyAnalytics from "./pages/PrivacyAnalytics";
import ConsentCenter from "./pages/ConsentCenter";
import DSAR from "./pages/DSAR";

function Home() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "bg-[#020617] text-white min-h-screen" : "bg-gray-100 text-black min-h-screen"}>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-[#020617]/70 border-b border-white/5 max-w-7xl mx-auto flex justify-between items-center py-6 px-6">
        <h1 className="font-bold text-2xl opacity-80 group-hover:scale-110 transition tracking-tight">
          Portfólio Rodrigo
        </h1>

        <div className="flex items-center gap-6">
          <a href="#projetos" className="hover:text-cyan-400 transition">
            Projetos
          </a>

          <a href="#contato" className="hover:text-cyan-400 transition">
            Contato
          </a>
          <a href="#experiencia" className="hover:text-cyan-400 transition">
            Experiência
          </a>
          <a href="#certificacoes" className="hover:text-cyan-400 transition">
            Certificações
          </a>

          <button
            onClick={() => setDark(!dark)}
            className="px-4 py-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-cyan-400 font-medium">
              Privacidade • LGPD • OneTrust • Privacy Tools
            </span>

            <h1 className="text-7xl md:text-8xl tracking-tight font-bold leading-tight mt-6">
              Rodrigo
              <br />
              Oliveira
            </h1>

            <p className="text-gray-400 text-2xl opacity-80 group-hover:scale-110 transition mt-8 max-w-2xl leading-relaxed">
              Especialista em privacidade de dados com foco em OneTrust,
              automação de DSAR, integrações e governança LGPD.
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href=".\src\pages\Curriculo_Rodrigo_Oliveira_2025.pdf"
                download
                className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition font-medium shadow-lg shadow-cyan-500/20"
              >
                Baixar Currículo
              </a>

              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/rodrigo-oliveira-alves/",
                    "_blank"
                  )
                }
                className="px-6 py-3 rounded-2xl border border-white/15 bg-white/10 hover:bg-white/15 transition-all duration-300 backdrop-blur text-white shadow-lg shadow-black/20 hover:border-cyan-400/40"
              >
                LinkedIn
              </button>
            </div>
          </motion.div>

          <motion.div
  initial={{ opacity: 0, scale: 0.95, y: 30 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="hidden lg:block"
>
  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 shadow-2xl shadow-cyan-500/10">
    <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

    <span className="text-cyan-300 text-sm">
      Perfil profissional
    </span>

    <h2 className="relative text-3xl font-bold mt-4">
      Especialista em Privacidade & Tecnologia
    </h2>

    <p className="relative text-gray-400 mt-5 leading-relaxed">
      Profissional com mais de 8 anos de experiência em Tecnologia da Informação,
      atualmente focado em privacidade de dados, LGPD, automação de processos
      e plataformas como OneTrust, Securiti AI e Privaci Tools.
    </p>

    <div className="relative grid grid-cols-2 gap-4 mt-8">
      <div className="rounded-2xl bg-black/30 border border-white/10 p-4">
        <p className="text-gray-400 text-xs">Experiência</p>
        <p className="text-2xl font-bold mt-2">8+ anos</p>
      </div>

      <div className="rounded-2xl bg-black/30 border border-white/10 p-4">
        <p className="text-gray-400 text-xs">Foco atual</p>
        <p className="text-lg font-bold mt-2">PrivacyOps</p>
      </div>

      <div className="rounded-2xl bg-black/30 border border-white/10 p-4">
        <p className="text-gray-400 text-xs">Plataformas</p>
        <p className="text-lg font-bold mt-2">OneTrust</p>
      </div>

      <div className="rounded-2xl bg-black/30 border border-white/10 p-4">
        <p className="text-gray-400 text-xs">Diferencial</p>
        <p className="text-lg font-bold mt-2">Integrações</p>
      </div>
    </div>

    <div className="relative flex gap-2 mt-8 flex-wrap">
      {[
        "LGPD",
        "DSAR",
        "Data Discovery",
        "Consent",
        "APIs",
        "Governança"
      ].map((item) => (
        <span
          key={item}
          className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-200 text-xs border border-cyan-400/20"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
</motion.div>
        </div>
      </section>

      {/* PROJETOS */}
      {/* PROJETOS */}
      <section
        id="projetos"
        className="max-w-7xl mx-auto px-6 pb-24"
      >
        <h2 className="text-3xl font-bold mb-10">
          Projetos
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* CARD DSAR */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="group relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col h-full">
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full"></div>
            </div>
            {/* conteúdo do card */}
            <div className="flex justify-between items-start">
              <div>
                <span className="text-cyan-400 text-sm">LGPD</span>
                <h3 className="text-2xl font-semibold mt-2">DSAR</h3>
              </div>
              <div className="text-cyan-400 text-2xl opacity-80 group-hover:scale-110 transition">⚡</div>
            </div>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Fluxo automatizado para solicitações de titulares,
              validação e integração de dados.
            </p>

            <div className="flex gap-2 mt-5 flex-wrap">
              {["OneTrust", "Freemarker", "LGPD", "DSAR"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-200 text-xs border border-cyan-400/20 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>

            <button
              onClick={() => navigate("/dsar")}
              type="button"
              className="relative z-10 mt-8 px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40"
            >
              Ver projeto
            </button>
          </motion.div>

          {/* CARD PRIVACY ANALYTICS */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="group bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur hover:border-cyan-400/40"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-cyan-400 text-sm">PrivacyOps</span>
                <h3 className="text-2xl font-semibold mt-2">Privacy Analytics</h3>
              </div>
              <div className="text-cyan-400 text-2xl opacity-80 group-hover:scale-110 transition">📊</div>
            </div>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Dashboard executivo para métricas de privacidade,
              riscos, compliance e governança LGPD.
            </p>

            <div className="flex gap-2 mt-5 flex-wrap">
              {["OneTrust", "Risk", "Governance", "PrivacyOps"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-200 text-xs border border-cyan-400/20 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>

            <button
              onClick={() => navigate("/privacy-analytics")}
              className="mt-8 px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40"
            >
              Ver dashboard
            </button>
          </motion.div>

          {/* CARD CONSENT CENTER */}
          <motion.div
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="group bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur hover:border-cyan-400/40"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-cyan-400 text-sm">Consent Management</span>
                <h3 className="text-2xl font-semibold mt-2">Consent Center</h3>
              </div>
              <div className="text-cyan-400 text-2xl opacity-80 group-hover:scale-110 transition">🔐</div>
            </div>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Central de gerenciamento de consentimento,
              preferências e revogação LGPD.
            </p>

            <div className="flex gap-2 mt-5 flex-wrap">
              {["Consent", "LGPD", "Privacy UX", "OneTrust"].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-200 text-xs border border-cyan-400/20 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>

            <button
              onClick={() => navigate("/consent-center")}
              className="mt-8 px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40"
            >
              Ver central
            </button>
          </motion.div>
        </div>
      </section>
      <section
        id="experiencia"
        className="max-w-7xl mx-auto px-6 pb-24"
      >

        <div className="space-y-6">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <div className="flex justify-between flex-col md:flex-row gap-4">

              <div>
                <h3 className="text-2xl font-semibold">
                  Especialista em Privacidade
                </h3>

                <p className="text-cyan-400 mt-1">
                  OneTrust • Securiti AI • Privaci Tools
                </p>
              </div>

              <span className="text-gray-400">
                Atual
              </span>
            </div>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Atuação em automação de DSAR, Data Discovery,
              integrações, governança LGPD e gestão de privacidade
              utilizando plataformas líderes de mercado.
            </p>

            <div className="flex gap-2 mt-5 flex-wrap">
              {[
                "OneTrust",
                "Data Discovery",
                "Consent",
                "DSAR",
                "Integrações",
                "LGPD",
                "Securiti AI",
                "Privaci Tools"
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICAÇÕES */}
      <section
        id="certificacoes"
        className="max-w-7xl mx-auto px-6 pb-24"
      >
        <h2 className="text-3xl font-bold mb-10">
          Certificações
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {[
            {
              title: "Privaci Tools",
              desc: "Certificação em plataforma de privacidade e conformidade.",
              tag: "Certificado"
            },
            {
              title: "OneTrust Fellow",
              desc: "Conhecimento aplicado em soluções de privacidade e governança.",
              tag: "Privacy Platform"
            },
            {
              title: "LGPD",
              desc: "Fundamentos da Lei Geral de Proteção de Dados e direitos dos titulares.",
              tag: "Compliance"
            },
            {
              title: "Cyber Academy",
              desc: "Conceitos de segurança, governança e proteção da informação.",
              tag: "Security"
            }
          ].map((cert) => (
            <div
              key={cert.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-cyan-400/40 transition"
            >
              <span className="text-cyan-400 text-sm">
                {cert.tag}
              </span>

              <h3 className="text-2xl font-semibold mt-2">
                {cert.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* FOOTER */}
      <footer
        id="contato"
        className="border-t border-white/10 py-10 px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h3 className="font-semibold text-lg">
              Rodrigo Oliveira
            </h3>

            <p className="text-gray-400 mt-2">
              Especialista em Privacidade de Dados
            </p>
          </div>

          <div className="text-gray-400">
            r.alves338@gmail.com
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dsar" element={<DSAR />} />
        <Route path="/privacy-analytics" element={<PrivacyAnalytics />} />
        <Route path="/consent-center" element={<ConsentCenter />} />
      </Routes>
    </Router>
  );
}