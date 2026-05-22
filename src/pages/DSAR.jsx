import { Link } from "react-router-dom";
function DSAR() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="text-sm text-gray-400 hover:text-white transition"
        >
          ← Voltar
        </Link>
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 mb-14">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

          <span className="text-cyan-300 text-sm">
            Case técnico • LGPD • OneTrust
          </span>

          <h1 className="relative text-5xl font-bold mt-4">
            DSAR Automatizado
          </h1>

          <p className="relative text-gray-400 text-xl mt-4 max-w-3xl leading-relaxed">
            Projeto desenvolvido para demonstrar uma abordagem de automação
            e governança no atendimento de solicitações de titulares (DSAR),
            incluindo validação, integração de dados, rastreabilidade
            e apoio à conformidade com a LGPD.Projeto conceitual focado na automação do ciclo de atendimento
            de solicitações de titulares (DSAR), contemplando validação,
            integração entre sistemas, rastreabilidade e suporte à
            conformidade com a LGPD.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className=" border-white/10 rounded-3xl p-6 backdrop-blur">
              <h2 className="text-2xl font-semibold mb-4">Fluxo</h2>

              <div className="space-y-3 text-gray-300">
                <p>✅ Recebimento da solicitação</p>
                <p>✅ Validação do CPF</p>
                <p>✅ Consulta em bases</p>
                <p>✅ Tratamento automatizado</p>
                <p>✅ Resposta ao titular</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Contexto
          </h2>

          <p className="text-gray-300 text-xl leading-relaxed">
            Com a evolução das regulamentações de privacidade, como a LGPD,
            as organizações passaram a enfrentar um aumento significativo
            na complexidade operacional relacionada ao atendimento de
            solicitações de titulares (DSAR).

            O desafio deixa de ser apenas regulatório e passa a envolver
            integração entre sistemas, rastreabilidade, eficiência operacional,
            padronização de processos e mitigação de riscos no tratamento
            de dados pessoais.
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Desafio
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              "📥 Volume elevado de solicitações",
              "🔗 Baixa integração entre sistemas",
              "⚖️ Risco de não conformidade LGPD"
            ].map((item) => (
              <div
                key={item}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Solução Proposta
          </h2>

          <p className="text-gray-600 text-xl leading-relaxed">
            A solução foi desenhada para automatizar o ciclo completo
            de atendimento DSAR, incluindo validação do titular,
            integração com bases, classificação de dados e
            resposta automatizada.
          </p>
        </section>

        <section className="mt-16 mb-20">
          <h2 className="text-3xl font-bold mb-4">
            Como posso apoiar empresas
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Estruturação de fluxos DSAR",
              "Automação com OneTrust",
              "Mapeamento de dados",
              "Integrações e governança LGPD"
            ].map((item) => (
              <div
                key={item}
                className="bg-cyan-500/10 border border-cyan-400/20 rounded-2xl p-5"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <div className="bg-black rounded-3xl p-6 border border-white/10">
          <h2 className="text-2xl font-semibold mb-4">
            Exemplo Freemarker
          </h2>

          <pre className="text-green-400 text-sm overflow-auto">
            {`<#if cpf?matches("[0-9]{11}")>
  Processar solicitação
<#else>
  Retornar erro
</#if>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
export default DSAR;

