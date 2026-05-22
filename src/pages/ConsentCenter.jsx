import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Necessários",
    desc: "Essenciais para funcionamento do serviço.",
    status: "Sempre ativo",
  },
  {
    title: "Analytics",
    desc: "Ajuda a entender comportamento e melhorar experiência.",
    status: "Ativo",
  },
  {
    title: "Marketing",
    desc: "Usado para personalização e campanhas.",
    status: "Inativo",
  },
  {
    title: "Performance",
    desc: "Mede estabilidade, velocidade e qualidade.",
    status: "Ativo",
  },
];

export default function ConsentCenter() {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <Link to="/" className="text-sm text-gray-400 hover:text-cyan-300">
          ← Voltar para o portfólio
        </Link>

        <section className="mt-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm border border-cyan-400/20">
              Consent Management
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-5">
              Central de Consentimento
            </h1>

            <p className="text-gray-300 text-xl leading-relaxed max-w-4xl">
              Com a evolução das regulamentações de privacidade, a gestão
              de consentimento passou a exigir maior transparência,
              rastreabilidade e autonomia para o titular dos dados.

              Este projeto demonstra uma abordagem centralizada para
              gerenciamento de preferências, revogação de consentimento
              e suporte à conformidade com a LGPD, priorizando experiência
              do usuário e governança de dados.
            </p>
          </motion.div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Preferências de Consentimento
            </h2>

            <div className="space-y-4">
              {categories.map((item) => (
                <div
                  key={item.title}
                  className="flex justify-between gap-4 items-center bg-black/30 border border-white/10 rounded-2xl p-5"
                >
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>

                  <span
                    className={
                      item.status === "Inativo"
                        ? "px-3 py-1 rounded-full bg-red-500/10 text-red-300 text-xs"
                        : "px-3 py-1 rounded-full bg-green-500/10 text-green-300 text-xs"
                    }
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Ações do Titular
            </h2>

            <div className="space-y-3">
              {[
                "Baixar meus dados",
                "Revogar consentimento",
                "Solicitar exclusão",
                "Atualizar preferências",
              ].map((action) => (
                <button
                  key={action}
                  className="w-full text-left px-4 py-3 rounded-2xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 transition"
                >
                  {action}
                </button>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-black/30 border border-white/10">
              <p className="text-sm text-gray-400">Última atualização</p>
              <p className="mt-2 font-semibold">12/05/2026 às 14:32</p>
            </div>
          </div>
        </section>

        <section className="mt-6 bg-white/5 border border-white/10 rounded-3xl p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Stack demonstrada
          </h2>

          <div className="flex gap-2 flex-wrap">
            {[
              "Consent Management",
              "LGPD",
              "Preferências",
              "Revogação",
              "Privacy UX",
              "OneTrust",
              "Privaci Tools",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs border border-cyan-400/10"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}