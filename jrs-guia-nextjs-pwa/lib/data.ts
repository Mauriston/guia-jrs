export type RoleId = "aux" | "sec" | "sup" | "pres";

export type Role = {
  id: RoleId;
  name: string;
  icon: string;
};

export type RaciRow = {
  task: string;
  Pres: string;
  Sup: string;
  Sec: string;
  Aux: string;
};

export type DeadlineItem = {
  target: string;
  title: string;
  deadline: string;
  who: string;
  jrsOwner?: RoleId[];
  whatToDo: string[];
  tags: string[];
};

export type Checklist = {
  role: RoleId;
  title: string;
  items: string[];
};

export const META = {
  title: "Guia Prático JRS — Consulta Rápida (DGPM-406 + Ordem Interna JRS)",
  disclaimer:
    "Resumo operacional. Em caso de conflito, prevalece a norma vigente. “Dias úteis” = seg-sex, sem feriados.",
  generated: "2026-01-30",
};

export const ROLES: Role[] = [
  { id: "aux", name: "Auxiliares", icon: "🛠️" },
  { id: "sec", name: "Secretário", icon: "🗂️" },
  { id: "sup", name: "Supervisor", icon: "🧭" },
  { id: "pres", name: "Presidente", icon: "⭐" },
];

export const RACI_LEGEND = [
  { icon: "🛠️", label: "Executa (R)" },
  { icon: "✅", label: "Aprova / alçada (A)" },
  { icon: "💬", label: "Consultado (C)" },
  { icon: "(vazio)", label: "Informado por padrão (I inferido)" },
];

export const RACI: RaciRow[] = [
  { task: "Agendar IS (início e conclusão) – ativa/SC", Pres: "", Sup: "", Sec: "💬", Aux: "🛠️✅" },
  { task: "Digitar exames/pareceres no SINAIS (pré-AMP)", Pres: "", Sup: "", Sec: "💬", Aux: "🛠️✅" },
  { task: "Orientar inspecionados sobre trâmites", Pres: "", Sup: "", Sec: "💬", Aux: "🛠️✅" },
  { task: "Controle/cobrança de entrega de exames/pareceres", Pres: "", Sup: "💬", Sec: "💬", Aux: "🛠️✅" },
  { task: "Agendar IS (Ingresso/Benefícios e demais via SIGAD)", Pres: "", Sup: "💬", Sec: "🛠️✅", Aux: "" },
  { task: "Abrir IS via SEIS/mensagens; registro e controle de prazos", Pres: "", Sup: "🛠️✅", Sec: "💬", Aux: "" },
  { task: "Cancelar IS por não comparecimento e comunicar (CP/Mensagem)", Pres: "", Sup: "🛠️✅", Sec: "💬", Aux: "" },
  { task: "Minutar mensagens (exceto conclusão de IS)", Pres: "", Sup: "✅", Sec: "🛠️", Aux: "" },
  { task: "Minutar mensagens de conclusão de IS", Pres: "✅", Sup: "", Sec: "🛠️", Aux: "" },
  { task: "Aprovar para tramitação no SIGAD minutas/ofícios/comunicações", Pres: "🛠️✅", Sup: "💬", Sec: "💬", Aux: "" },
  { task: "Receber AO; abrir no SINAIS; registrar e processar", Pres: "", Sup: "🛠️✅", Sec: "💬", Aux: "" },
  { task: "Envio semanal de lista (LTS/restrições) ao NAC", Pres: "", Sup: "🛠️✅", Sec: "", Aux: "" },
  { task: "Elaborar estatísticas mensais de produtividade", Pres: "", Sup: "🛠️✅", Sec: "💬", Aux: "" },
  { task: "Apresentar estatísticas no Conselho de Gestão", Pres: "🛠️✅", Sup: "💬", Sec: "", Aux: "" },
  { task: "Apreciar requerimento de IS domiciliar", Pres: "🛠️✅", Sup: "💬", Sec: "", Aux: "" },
];

export const DEADLINES: DeadlineItem[] = [
  {
    target: "JRS",
    title: "Comparecimento para receber solicitações/agenda após apresentação",
    deadline: "7 dias úteis",
    who: "Inspecionado (dever) • Sec/JRS (controle)",
    jrsOwner: ["aux", "sup"],
    whatToDo: [
      "Registrar data do documento de apresentação.",
      "Orientar o inspecionado a comparecer/contatar a Sec/JRS dentro do prazo.",
      "Se ultrapassar 7 dias úteis sem comparecimento: aplicar rotina de cancelamento/arquivamento e comunicar (CP/Mensagem).",
    ],
    tags: ["agenda", "ativa", "SC", "prazo crítico"],
  },
  {
    target: "Benefícios",
    title: "Agendamento de IS para concessão de benefícios",
    deadline: "até 60 dias",
    who: "Inspecionado/representante legal (dever) • Sec/JRS (processa)",
    jrsOwner: ["sec", "sup"],
    whatToDo: [
      "Confirmar o tipo de benefício e a documentação de apresentação.",
      "Agendar conforme fluxo (SIGAD quando aplicável).",
      "Monitorar prazo máximo e orientar o interessado sobre consequências do não comparecimento.",
    ],
    tags: ["benefícios", "SIGAD", "prazo crítico"],
  },
  {
    target: "JRS",
    title: "Mensagem com resultado da IS (sem diagnóstico)",
    deadline: "10 dias úteis após conclusão",
    who: "AMP/Secretaria (expedir)",
    jrsOwner: ["sup", "sec"],
    whatToDo: [
      "Após conclusão da IS, iniciar minuta/expedição sem incluir diagnóstico.",
      "Controlar prazo de 10 dias úteis para envio aos destinatários.",
    ],
    tags: ["mensagem", "CPMM", "SLA"],
  },
  {
    target: "JRS",
    title: "Encaminhar documentos ainda físicos via CPMM",
    deadline: "60 dias após conclusão",
    who: "Secretaria/CPMM (tramitação)",
    jrsOwner: ["sec", "sup"],
    whatToDo: [
      "Separar documentos físicos pendentes após conclusão.",
      "Encaminhar via CPMM e registrar saída/controle interno.",
    ],
    tags: ["CPMM", "tramitação"],
  },
  {
    target: "JRS",
    title: "IS com exames/pareceres pendentes: concluir mesmo sem retorno",
    deadline: "20 dias (mesmo sem entrega)",
    who: "AMP/JS (concluir) • Sec/JRS (suporte)",
    jrsOwner: ["sup", "aux", "sec"],
    whatToDo: [
      "Solicitar exames/pareceres no início da IS.",
      "Cobrar e registrar retornos; digitar no SINAIS antes da avaliação.",
      "Não exceder 20 dias para conclusão (mesmo sem entrega).",
    ],
    tags: ["parecer", "exame", "SINAIS", "prazo crítico"],
  },
  {
    target: "AO/ISO",
    title: "Conclusão do ISO (quando aplicável)",
    deadline: "60 dias + prorrogações (+30 e excepcional +30)",
    who: "Encarregado do ISO/autoridade competente",
    jrsOwner: ["sup"],
    whatToDo: [
      "Ao receber AO, abrir/registrar no SINAIS e organizar documentos.",
      "Sinalizar dependências que impactam o ISO (quesitos, exames, laudos).",
      "Acompanhar marcos de 60/90/120 dias conforme prorrogações.",
    ],
    tags: ["AO", "ISO", "prazo crítico"],
  },
  {
    target: "Auditoria",
    title: "Restituição para correções e reenvio à auditagem (quando devolvido)",
    deadline: "15 dias (correção/reenvio)",
    who: "AMP (corrigir) • Auditoria (reavaliar)",
    jrsOwner: ["sup", "sec"],
    whatToDo: [
      "Registrar data de devolução/restituição.",
      "Priorizar correções e reenviar dentro de 15 dias.",
      "Manter checklist de conformidade para reduzir devoluções.",
    ],
    tags: ["auditoria", "qualidade", "prazo crítico"],
  },
  {
    target: "SMI/SMV",
    title: "Validade para efeito administrativo (ex.: Justiça/Disciplina)",
    deadline: "30 dias (validade)",
    who: "OM/gestão de pessoal (observa validade)",
    jrsOwner: ["sup"],
    whatToDo: [
      "Ao emitir/receber laudos com validade curta, alertar OM sobre vencimento.",
      "Evitar tramitação lenta que faça o laudo expirar antes do uso administrativo.",
    ],
    tags: ["validade", "SMI", "SMV"],
  },
];

export const CHECKLISTS: Checklist[] = [
  {
    role: "aux",
    title: "Auxiliares — checklist diário",
    items: [
      "Agendar IS (ativa/SC) e registrar data de apresentação/comparecimento.",
      "Orientar inspecionado sobre exames/pareceres e prazos.",
      "Cobrar entrega de exames/pareceres e atualizar controle interno.",
      "Digitar exames/pareceres no SINAIS antes da avaliação do AMP.",
    ],
  },
  {
    role: "sec",
    title: "Secretário — checklist diário",
    items: [
      "Agendar IS de Ingresso/Benefícios e demandas via SIGAD quando aplicável.",
      "Organizar arquivo/material permanente do setor.",
      "Minutar mensagens de conclusão de IS para aprovação do Presidente (quando previsto).",
      "Acompanhar tramitação de documentos físicos (CPMM) e prazos associados.",
    ],
  },
  {
    role: "sup",
    title: "Supervisor — checklist diário",
    items: [
      "Controlar prazos (7d úteis, 10d úteis, 20d, 60d) e cobrar pendências.",
      "Abrir IS via SEIS/mensagens e manter registro/planilha de controle.",
      "Cancelar/arquivar por não comparecimento conforme rotina e comunicar.",
      "Interlocução com Serviços de Apoio (prontificação de exames/pareceres).",
      "Enviar semanalmente lista LTS/restrições ao NAC; compilar estatística mensal.",
    ],
  },
  {
    role: "pres",
    title: "Presidente — pontos de controle",
    items: [
      "Aprovar tramitação SIGAD (minutas/ofícios/comunicações) quando aplicável.",
      "Apreciar requerimentos específicos (ex.: IS domiciliar).",
      "Acompanhar indicadores (estatística mensal) e gargalos de prazo.",
      "Despachar interlocuções institucionais quando necessário.",
    ],
  },
];
