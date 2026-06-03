import { Link } from "react-router-dom";


function DataDiscovery() {
  return (
    <div className="min-h-screen bg-[#020617] text-white p-8">
      <Link to="/" className="text-sm text-gray-400 hover:text-cyan-300">
        ← Voltar
      </Link>
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 mb-14">
  <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

  <span className="relative px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-sm border border-cyan-400/20">
    Data Governance • LGPD • OneTrust
  </span>

  <h1 className="relative text-5xl font-bold mt-6">
    Data Discovery & Data Catalog
  </h1>

  <p className="relative text-gray-300 text-xl leading-relaxed max-w-4xl mt-6">
    A solução estrutura um ciclo completo de Data Discovery e Data Catalog
    desde a varredura automatizada das fontes de dados até a organização centralizada dos ativos em um catálogo governado. 
    O resultado é uma visão clara e auditável dos dados pessoais da organização, com suporte direto a processos de DSAR,
     gestão de riscos e conformidade regulatória.
  </p>

  <div className="relative flex gap-3 mt-8 flex-wrap">
    {[
      "OneTrust",
      "Data Discovery",
      "Data Catalog",
      "Governance",
      "LGPD"
    ].map((item) => (
      <span
        key={item}
        className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-200 text-xs border border-cyan-400/20"
      >
        {item}
      </span>
    ))}
  </div>
</section>
   {/* CARD CONTEXTO */}
   
<section className="mt-16">
  <h2 className="text-3xl font-bold mb-6">
    Contexto
  </h2>

  <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">
    <p className="text-gray-300 text-lg leading-relaxed">
      Com o crescimento exponencial da quantidade de dados
      armazenados pelas organizações, tornou-se cada vez mais
      desafiador identificar onde informações pessoais estão
      localizadas, quem possui acesso a elas e como são utilizadas
      ao longo dos processos corporativos.
    </p>

    <p className="text-gray-300 text-lg leading-relaxed mt-6">
      A falta de visibilidade sobre os ativos de dados pode gerar
      impactos significativos relacionados à privacidade,
      conformidade regulatória, gestão de riscos e atendimento
      de solicitações de titulares.
    </p>

    <p className="text-gray-300 text-lg leading-relaxed mt-6">
      Nesse cenário, iniciativas de Data Discovery e Data Catalog
      tornam-se fundamentais para apoiar a governança de dados,
      permitindo identificar, classificar e organizar informações
      distribuídas em diferentes sistemas, bancos de dados,
      compartilhamentos de arquivos e aplicações corporativas.
    </p>
  </div>
</section>

 {/* CARD Aplicavel


<section className="mt-16">
  <h2 className="text-3xl font-bold mb-6">
    Aplicável a
  </h2>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
    {[
      {
        icon: "⚖️",
        title: "Setor Financeiro",
        desc: "Bancos, fintechs e seguradoras lidam diariamente com volumes massivos de dados pessoais e financeiros distribuídos em sistemas legados, plataformas digitais e integrações com parceiros. A pressão regulatória é dupla — LGPD e Banco Central — tornando a rastreabilidade e o controle de dados não apenas uma boa prática, mas uma exigência operacional. A estruturação de Data Discovery e processos de governança permite que essas organizações saibam exatamente onde estão os dados de seus clientes, reduzindo o risco de exposição e acelerando a resposta a auditorias e solicitações de titulares."
      },
      {
        icon: "🏦",
        title: "Setor da Saúde",
        desc: "Hospitais, clínicas, operadoras de planos e healthtechs trabalham com dados sensíveis por definição — prontuários, laudos, históricos médicos e informações genéticas estão entre as categorias de maior proteção na LGPD. O desafio é que esses dados frequentemente estão fragmentados entre sistemas de gestão hospitalar, prontuários eletrônicos, laboratórios e parceiros de saúde, muitas vezes sem classificação ou controle de acesso adequados. Um programa estruturado de Data Discovery e catalogação é essencial para garantir que dados sensíveis estejam identificados, protegidos e acessíveis apenas a quem de direito."
      },
      {
        icon: "🗄️",
        title: "Setor de varejo",
        desc: "Varejistas — especialmente os com operação omnichannel — coletam dados pessoais em múltiplos pontos de contato: e-commerce, aplicativos, programas de fidelidade, PDVs físicos e integrações com marketplaces. Essa dispersão cria um ambiente onde é difícil saber exatamente quais dados existem, onde estão armazenados e por quanto tempo são retidos. A descoberta e catalogação de dados permite que o varejo construa uma visão unificada do cliente com responsabilidade — respeitando preferências de consentimento, atendendo DSARs com agilidade e reduzindo a exposição a incidentes que poderiam comprometer a confiança dos consumidores."
      }
      
    ].map((item) => (
      <div
        key={item.title}
        className="bg-white/[0.04] border border-white/10 rounded-3xl p-6 hover:border-cyan-400/40 transition-all duration-300"
      >
        <div className="text-4xl mb-4">
          {item.icon}
        </div>

        <h3 className="font-semibold text-xl mb-3">
          {item.title}
        </h3>

        <p className="text-gray-300 text-xl leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section> */}

 {/* CARD DESAFIOS */}

<section className="mt-16">
  <h2 className="text-3xl font-bold mb-6">
    Desafios Encontrados
  </h2>

  <p className="text-gray-300 text-xl leading-relaxed max-w-4xl mb-8">
    Durante iniciativas de governança e privacidade, é comum encontrar
    dificuldades relacionadas à localização, classificação e controle
    dos dados pessoais distribuídos em diferentes ambientes corporativos.
    Esses desafios podem impactar diretamente a conformidade, a gestão
    de riscos e a eficiência operacional.
  </p>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
    {[
      {
        icon: "🗂️",
        title: "Dados Distribuídos",
        desc: "Informações armazenadas em múltiplos sistemas, bancos de dados e compartilhamentos."
      },
      {
        icon: "🔍",
        title: "Baixa Visibilidade",
        desc: "Dificuldade em identificar onde os dados pessoais estão localizados."
      },
      {
        icon: "🏷️",
        title: "Falta de Classificação",
        desc: "Ausência de categorização adequada para dados pessoais e sensíveis."
      },
      {
        icon: "⚠️",
        title: "Risco Regulatório",
        desc: "Maior exposição a riscos relacionados à LGPD e outras regulamentações."
      }
    ].map((item) => (
      <div
        key={item.title}
        className="group bg-white/[0.04] border border-white/10 rounded-3xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
      >
        <div className="text-4xl mb-4">
          {item.icon}
        </div>

        <h3 className="text-xl font-semibold mb-3">
          {item.title}
        </h3>

        <p className="text-gray-400 leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

 {/* CARD SOLUÇÃO PROPOSTA */}
<section className="mt-16">
  <h2 className="text-3xl font-bold mb-6">
    Solução Proposta
  </h2>

  <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8">
    <p className="text-gray-300 text-lg leading-relaxed">
      A proposta consiste na implementação de processos de
      Data Discovery e Data Catalog para identificar, classificar
      e organizar informações armazenadas em diferentes ambientes
      corporativos, proporcionando maior visibilidade sobre os
      ativos de dados da organização.
    </p>

    <p className="text-gray-300 text-lg leading-relaxed mt-6">
      Através de mecanismos automatizados de descoberta e
      classificação, é possível localizar dados pessoais e
      sensíveis, apoiar iniciativas de governança e criar uma
      visão centralizada dos ativos de informação relevantes
      para privacidade, segurança e conformidade regulatória.
    </p>

    <p className="text-gray-300 text-lg leading-relaxed mt-6">
      Além de apoiar o cumprimento da LGPD, essa abordagem
      contribui para maior rastreabilidade, redução de riscos,
      suporte a processos DSAR e fortalecimento da governança
      corporativa de dados.
    </p>
  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
    {[
      {
        icon: "🔎",
        title: "Descoberta",
        desc: "Identificação automatizada de dados pessoais em diferentes fontes."
      },
      {
        icon: "🏷️",
        title: "Classificação",
        desc: "Categorização de informações pessoais e sensíveis."
      },
      {
        icon: "📚",
        title: "Catálogo",
        desc: "Centralização e organização dos ativos de dados."
      },
      {
        icon: "🛡️",
        title: "Governança",
        desc: "Maior controle, rastreabilidade e suporte à conformidade."
      }
    ].map((item) => (
      <div
        key={item.title}
        className="bg-cyan-500/10 border border-cyan-400/20 rounded-2xl p-5"
      >
        <div className="text-3xl mb-3">
          {item.icon}
        </div>

        <h3 className="font-semibold text-lg mb-2">
          {item.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

{/* CARD FLUXO DD */}

<section className="mt-16">
  <h2 className="text-3xl font-bold mb-6">
    Fluxo de Data Discovery
  </h2>

  <p className="text-gray-300 text-xl leading-relaxed max-w-4xl mb-10">
    O processo de Data Discovery e Data Catalog permite identificar,
    classificar e organizar informações distribuídas em diferentes
    ambientes corporativos, criando uma visão centralizada dos ativos
    de dados e apoiando iniciativas de governança e conformidade.
  </p>

  <div className="grid md:grid-cols-5 gap-4">
    {[
      {
        icon: "🗄️",
        title: "Fontes de Dados",
        desc: "Bancos de dados, arquivos, aplicações e compartilhamentos."
      },
      {
        icon: "🔎",
        title: "Data Discovery",
        desc: "Varredura automatizada para localizar dados pessoais."
      },
      {
        icon: "🏷️",
        title: "Classificação",
        desc: "Identificação de dados pessoais e sensíveis."
      },
      {
        icon: "📚",
        title: "Data Catalog",
        desc: "Organização e centralização dos ativos de dados."
      },
      {
        icon: "🛡️",
        title: "Governança",
        desc: "Suporte à LGPD, riscos e gestão de privacidade."
      }
    ].map((step, index) => (
      <div
        key={step.title}
        className="relative"
      >
        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-5 h-full text-center hover:border-cyan-400/40 transition">
          <div className="text-4xl mb-4">
            {step.icon}
          </div>

          <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold">
            {index + 1}
          </div>

          <h3 className="font-semibold text-lg mb-3">
            {step.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            {step.desc}
          </p>
        </div>

        {index < 4 && (
          <div className="hidden md:flex absolute top-1/2 -right-3 text-cyan-400 text-2xl z-10">
            →
          </div>
        )}
      </div>
    ))}
  </div>
</section>
{/* CARD RESULTADO E BENEFICIOS*/}
<section className="mt-16">
  <h2 className="text-3xl font-bold mb-6">
    Resultados e Benefícios
  </h2>

  <p className="text-gray-300 text-xl leading-relaxed max-w-4xl mb-8">
    A adoção de iniciativas de Data Discovery e Data Catalog
    proporciona ganhos significativos para áreas de privacidade,
    segurança da informação, compliance e governança de dados.
  </p>

  <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
    {[
      {
        icon: "👁️",
        title: "Maior Visibilidade",
        desc: "Identificação clara dos dados pessoais existentes na organização."
      },
      {
        icon: "⚖️",
        title: "Conformidade",
        desc: "Suporte às exigências da LGPD e demais regulamentações."
      },
      {
        icon: "📉",
        title: "Redução de Riscos",
        desc: "Identificação de exposições relacionadas a dados sensíveis."
      },
      {
        icon: "🚀",
        title: "Eficiência",
        desc: "Aceleração de processos de governança e atendimento DSAR."
      }
    ].map((item) => (
      <div
        key={item.title}
        className="bg-white/[0.04] border border-white/10 rounded-3xl p-6"
      >
        <div className="text-4xl mb-4">{item.icon}</div>

        <h3 className="font-semibold text-xl mb-3">
          {item.title}
        </h3>

        <p className="text-gray-300 text-base leading-relaxed">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

{/* CARD COMO POSSO APOIAR*/}

<section className="mt-16">
  <h2 className="text-3xl font-bold mb-6">
    Como posso apoiar empresas
  </h2>

  <div className="bg-cyan-500/5 border border-cyan-400/20 rounded-3xl p-8">
    <p className="text-gray-300 text-lg leading-relaxed">
      Minha atuação pode apoiar organizações na estruturação
      de iniciativas relacionadas à descoberta, classificação
      e governança de dados, contribuindo para maior visibilidade
      dos ativos de informação e suporte às demandas de privacidade.
    </p>

    <div className="grid md:grid-cols-2 gap-5 mt-8">
      {[
        "Mapeamento de dados pessoais",
        "Data Discovery e Data Catalog",
        "Classificação de dados sensíveis",
        "Inventário de ativos de dados",
        "Governança e LGPD",
        "Integrações com OneTrust",
        "Apoio a iniciativas DSAR",
        "Documentação e rastreabilidade"
      ].map((item) => (
        <div
          key={item}
          className="bg-white/[0.04] border border-white/10 rounded-2xl p-4"
        >
          ✅ {item}
        </div>
      ))}
    </div>
  </div>
</section>

{/* CARD TECNONOLOGIAS*/}

<section className="mt-16 mb-20">
  <h2 className="text-3xl font-bold mb-6">
    Tecnologias e Competências Demonstradas
  </h2>

  <div className="flex flex-wrap gap-3">
    {[
      "OneTrust",
      "Data Discovery",
      "Data Catalog",
      "PrivacyOps",
      "LGPD",
      "Governança de Dados",
      "Classificação de Dados",
      "Data Mapping",
      "Compliance",
      "Risk Management",
      "Integrações API",
      "Inventário de Dados"
    ].map((item) => (
      <span
        key={item}
        className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-200"
      >
        {item}
      </span>
    ))}
  </div>

  <p className="text-gray-200 mt-8 leading-relaxed border-l-2 border-cyan-500 pl-4">
    Projeto com base em experiências práticas de implementação, desenvolvido para demonstrar abordagem técnica em governança e descoberta de dados. Métricas e volumes apresentados são ilustrativos.
  </p>
</section>
      {/* <h1 className="text-5xl font-bold mt-8">
        Data Discovery & Catalog
      </h1>

      <p className="text-gray-300 text-xl leading-relaxed max-w-4xl mt-6">
        Projeto conceitual voltado à descoberta e catalogação de dados pessoais,
        permitindo maior visibilidade sobre informações armazenadas em ambientes
        corporativos e apoio à governança de dados e conformidade com a LGPD.
      </p> */}
    </div>
  );
}

export default DataDiscovery;


