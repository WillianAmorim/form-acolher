

export const getComorbidadesData = (data) => [
  { name: "Autismo", value: data.alunosComAutismo.length },
  { name: "Deficiência intelectual", value: data.alunosComDeficienciaIntelectual.length },
  { name: "Alergia", value: data.alunosComAlergia.length },
  { name: "Epilepsia", value: data.alunosComEpilepsia.length },
  { name: "Sem comorbidade", value: data.alunosSemComorbidade.length }
];

export const getTiposData = (data) => [
  { name: "Matrícula", value: data.alunosMatricula.length, fill: "#f712aa" },
  { name: "Rematrícula", value: data.qtdeAlunosRematricula, fill: "#f874cc" }
];

export const getTurnosData = (data) => [
  { name: "Matutino", value: data.alunosMatutino.length, fill: "#197dee" },
  { name: "Vespertino", value: data.alunosVespertino.length, fill: "#f5237b" },
  { name: "Integral", value: data.qtdeAlunosIntegral, fill: "#d816f1" }
];
