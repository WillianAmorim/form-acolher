
const gerarArrayDias = () => {
  let dataInicial = new Date();
  dataInicial.setDate(dataInicial.getDate() - 30);

  let dias = [];

  let i;
  for (i=0; i < 30; i++) {
    const dataAtual = new Date(dataInicial);
    const dataAtualFormat = dataAtual.toISOString().split("T")[0];
    const dia = {
      date: dataAtualFormat,
      matriculas: 0,
      rematriculas: 0,
      com_comorbidade: 0,
      sem_comorbidade: 0
    }

    dias.push(dia);
    dataInicial.setDate(dataInicial.getDate() + 1);
  }

  return dias;
}

export const gerarDadosEvolucao = (data) => {
  const dias = gerarArrayDias();
  const alunos = data;

  alunos.forEach((aluno) => {
    let i;
    for (i=0; i < dias.length; i++) {
      if (dias[i].date === aluno.created_at.split("T")[0]) {
        //Definir quantidade de matrículas e rematrículas para cada dia
        if (aluno.tipo_cadastro === "matricula") {
          dias[i].matriculas++;
        } else dias[i].rematriculas++;
        //Definir quantidade de alunos com comorbidade e sem comorbidade para cada dia
        if (aluno.possui_deficiencia === 1) {
          dias[i].com_comorbidade++;
        }
        else dias[i].sem_comorbidade++;
      }
    }
  });

  return dias;
}

export const carregarDados = (data) => {
  const alunosSemComorbidade = data.filter(aluno => aluno.possui_deficiencia === 0);
  const alunosComAutismo = data.filter(aluno => aluno.diagnosticos.some(diagnostico => diagnostico.autismo === 1));
  const alunosComAlergia = data.filter(aluno => aluno.diagnosticos.some(diagnostico => diagnostico.alergia === 1));
  const alunosComEpilepsia = data.filter(aluno => aluno.diagnosticos.some(diagnostico => diagnostico.epilepsia === 1));
  const alunosComDeficienciaIntelectual = data.filter(aluno => aluno.diagnosticos.some(diagnostico => diagnostico.deficiencia_intelectual === 1));
  const qtdeAlunosComComorbidade = data.length - alunosSemComorbidade.length;

  const alunosMatutino = data.filter(aluno => aluno.modalidade === "matutino");
  const alunosVespertino = data.filter(aluno => aluno.modalidade === "vespertino");
  const qtdeAlunosIntegral = data.length - alunosMatutino.length - alunosVespertino.length;

  const alunosMatricula = data.filter(aluno => aluno.tipo_cadastro === "matricula");
  const qtdeAlunosRematricula = data.length - alunosMatricula.length;
  const qtdeAlunosTotal = data.length;

  return {
    alunosSemComorbidade,
    alunosComAutismo,
    alunosComAlergia,
    alunosComEpilepsia,
    alunosComDeficienciaIntelectual,
    qtdeAlunosComComorbidade,
    alunosMatutino,
    alunosVespertino,
    qtdeAlunosIntegral,
    alunosMatricula,
    qtdeAlunosRematricula,
    qtdeAlunosTotal
  };
};
