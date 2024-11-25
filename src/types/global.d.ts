
interface Diagnostico {
  id: number;
  aluno_id: number;
  diagnostico: string;
  epilepsia: 0 | 1;
  deficiencia_intelectual: 0 | 1;
  alergia: 0 | 1;
  autismo: 0 | 1;
  outros?: string;
  atendente_terapeutico: 0 | 1;
  responsavel: string;
  email_responsavel: string;
  created_at: string;
  updated_at: string;
}

interface Avaliacao {
  id: number;
  aluno_id: number;
  pergunta: string;
  resposta: string;
  pontuacao: number;
  created_at: string;
  updated_at: string;
}

export interface Aluno {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  tipo_cadastro: "matricula" | "rematricula";
  serie_2025: string;
  modalidade: "matutino" | "verspertino" | "integral";
  nome_mae: string;
  responsavel_financeiro: string;
  telefone: string;
  email: string;
  possui_deficiencia: 1 | 0;
  senha_cadastro: string;
  created_at: string;
  updated_at: string;
  diagnosticos?: Diagnostico[];
  avaliacoes?: Avaliacao[];
}

declare module "@utils/api" {
  export function fetchData(): Promise<Aluno[]>;
}
