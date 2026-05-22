import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const kpis = [
  { label: "Compliance Score", value: "98.7%", detail: "+4.2% este mês" },
  { label: "DSAR Processados", value: "1.284", detail: "+18% vs mês anterior" },
  { label: "Bases Catalogadas", value: "326", detail: "Data Discovery" },
  { label: "Riscos Críticos", value: "14", detail: "-9% em aberto" },
];

const riskMatrix = [
  ["Marketing", "Alto", "Dados de campanha sem retenção definida"],
  ["RH", "Médio", "Documentos com dados sensíveis"],
  ["Financeiro", "Baixo", "Base classificada e monitorada"],
  ["Operações", "Médio", "Dados compartilhados com terceiros"],
];

export default function PrivacyAnalytics() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="flex">
        <aside className="hidden lg:flex w-72 min-h-screen border-r border-white/10 bg-white/[0.03] p-6 flex-col">
          <Link to="/" className="text-sm text-gray-400 hover:text-cyan-300">
            ← Portfólio
          </Link>

          <h2 className="text-xl font-bold mt-10">PrivacyOps</h2>

          <nav className="mt-8 space-y-3 text-gray-400">
            <p className="text-cyan-300">Dashboard</p>
            <p>Riscos</p>
            <p>Data Discovery</p>
            <p>DSAR</p>
            <p>Relatórios</p>
          </nav>
        </aside>

        <main className="flex-1 p-6 lg:p-10">
          <div className="flex flex-col md:flex-row justify-between gap-6 mb-10">
            <div>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm border border-cyan-400/20">
                Enterprise Privacy Dashboard
              </span>

              <h1 className="text-4xl md:text-5xl font-bold mt-5">
                Privacy Analytics Center
              </h1>

              <p className="text-gray-400 mt-4 max-w-2xl">
                Visão executiva de conformidade, riscos, bases catalogadas,
                solicitações DSAR e governança LGPD.
              </p>
            </div>

            <div className="bg-green-500/10 border border-green-400/20 rounded-2xl px-5 py-4 h-fit">
              <p className="text-green-300 text-sm">Status geral</p>
              <p className="text-2xl font-bold mt-1">Compliant</p>
            </div>
          </div>

          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            {kpis.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-5 hover:border-cyan-400/30 transition"
              >
                <p className="text-gray-400 text-sm">{item.label}</p>
                <h2 className="text-3xl font-bold mt-3">{item.value}</h2>
                <p className="text-cyan-300 text-sm mt-3">{item.detail}</p>
              </motion.div>
            ))}
          </section>

          <section className="grid xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6">
              <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-semibold">DSAR por mês</h2>
                <span className="text-sm text-cyan-300">+18%</span>
              </div>

              <div className="flex items-end gap-4 h-72">
                {[52, 80, 64, 120, 150, 190, 230].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-3">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height }}
                      transition={{ duration: 0.6, delay: index * 0.08 }}
                      className="w-full rounded-t-2xl bg-cyan-500/70"
                    />
                    <span className="text-xs text-gray-500">
                      {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h2 className="text-2xl font-semibold mb-6">Alertas</h2>

              <div className="space-y-4">
                {[
                  "Consentimentos expirados",
                  "Retenção próxima do vencimento",
                  "Base sensível sem classificação",
                  "Solicitação DSAR pendente",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-4 rounded-2xl bg-red-500/10 border border-red-400/20 text-sm text-gray-300"
                  >
                    ⚠️ {item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="grid xl:grid-cols-2 gap-6 mt-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h2 className="text-2xl font-semibold mb-6">Matriz de risco</h2>

              <div className="space-y-4">
                {riskMatrix.map(([area, level, desc]) => (
                  <div
                    key={area}
                    className="bg-black/30 border border-white/10 rounded-2xl p-4"
                  >
                    <div className="flex justify-between mb-2">
                      <h3 className="font-semibold">{area}</h3>
                      <span
                        className={
                          level === "Alto"
                            ? "text-red-300"
                            : level === "Médio"
                            ? "text-yellow-300"
                            : "text-green-300"
                        }
                      >
                        {level}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h2 className="text-2xl font-semibold mb-6">Stack demonstrada</h2>

              <div className="flex gap-2 flex-wrap">
                {[
                  "OneTrust",
                  "Securiti AI",
                  "Privaci Tools",
                  "Data Discovery",
                  "LGPD",
                  "Risk Management",
                  "PrivacyOps",
                  "Governance",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs border border-cyan-400/10"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="text-gray-400 mt-6 leading-relaxed">
                Projeto conceitual criado para demonstrar visão executiva de
                privacidade, acompanhamento de riscos, métricas de conformidade
                e capacidade de transformar dados de governança em indicadores
                acionáveis.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}