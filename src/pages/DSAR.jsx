import { Link } from "react-router-dom";

export default function DSAR() {
  return (
    <div style={{ padding: 20 }}>
      <Link to="/">← Voltar</Link>

      <h1>DSAR Automatizado (LGPD)</h1>

      <p>
        Fluxo completo de atendimento de solicitações de titulares com automação
        e validação.
      </p>

      <h2>Fluxo</h2>
      <p>Usuário → Validação → Consulta → Tratamento → Resposta</p>

      <h2>Payload</h2>
      <pre>
{`{
  "cpf": "12345678900",
  "status": "processing"
}`}
      </pre>

      <h2>Freemarker</h2>
      <pre>
{`<#if cpf?matches("[0-9]{11}")>
  Processar
<#else>
  Erro
</#if>`}
      </pre>
    </div>
  );
}