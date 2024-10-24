
import { useLocation, Link } from 'react-router-dom';

const StudentDetails = () => {
  const location = useLocation(); // Usa o useLocation para acessar o state
  const student = location.state?.student; // Acessa o objeto `student` passado via navigate

  // Verifica se o objeto student foi passado
  if (!student) {
    return <p>Nenhuma informação do aluno foi passada.</p>;
  }


  return (
    <section className="aluno-details">
      <header className="flex items-center bg-secondary bg-opacity-50 mb-3 shadow shadow-bg-light-50 p-3">
        <div className="flex items-center justify-between w-full">
          <div className="">
            <img
              className="w-32"
              src="https://static.wixstatic.com/media/8d3910_0e753ab1da454b9ea4660e8d253d1d06~mv2.png/v1/fill/w_276,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20ESCOLA%20ACOLHER%20VARIA%C3%87%C3%83O%2001.png"
              alt=""
            />
          </div>
          <ul>
            <li className="font-bold text-white roboto-thin cursor-pointer">
              <i className="fa-solid fa-right-from-bracket"></i> Sair</li>
          </ul>
        </div>
      </header>
      <section className='flex items-center gap-1 p-3 '>
      <i className="fa-solid fa-chevron-left text-xs"></i>
      <Link to="/dashboard" className=" hover:underline roboto-light text-gray-900">
        Voltar ao Dashboard
      </Link>
      </section>
      <section className='flex items-start gap-3 p-3 '>
        <div className="p-5 bg-white rounded-lg h-[430px] shadow shadow-light-300 relative">
          <div className="bg-primary absolute top-0 w-full left-0 rounded-t-lg flex justify-center py-1">
            <p className='text-white roboto-medium'>Informações do Aluno</p>
          </div>
          <p className='roboto-light text-gray-700 pt-5'><strong>Nome:</strong> {student.nome}</p>
          <p className='roboto-light text-gray-700'><strong>Sexo:</strong> {student.idade}</p>
          <p className='roboto-light text-gray-700'><strong>Tipo de cadastro:</strong> {student.sexo}</p>
          <p className='roboto-light text-gray-700'><strong>Série a cursar em 2025:</strong> {student.serie_2025}</p>
          <p className='roboto-light text-gray-700'><strong>Modalidade:</strong> {student.modalidade}</p>
          <p className='roboto-light text-gray-700'><strong>Turno:</strong> {student.turno}</p>
          <p className='roboto-light text-gray-700'><strong>Nome da Mãe:</strong> {student.nome_mae}</p>
          <p className='roboto-light text-gray-700'><strong>Responsável Financeiro:</strong> {student.responsavel_financeiro}</p>
          <p className='roboto-light text-gray-700'><strong>Telefone:</strong> {student.telefone}</p>
          <p className='roboto-light text-gray-700'><strong>E-mail:</strong> {student.email}</p>
          <p className='roboto-light text-gray-700'><strong>Possui deficiência?</strong> {student.possui_deficiencia ? "Sim" : "Não"}</p>
        </div>
        <div className="bg-white p-5 rounded-lg h-[430px] shadow shadow-light-300 relative ">
              <div className="bg-primary absolute top-0 w-full left-0 rounded-t-lg flex justify-center py-1">
            <p className='text-white roboto-medium'>Diagnosticos do Aluno</p>
          </div>
              {student.avaliacoes && student.diagnosticos.length > 0 ? (
              student.diagnosticos.map((diagnostico, index) => (
                <div key={index} className="p-2 border-b border-gray-200 pt-5">
                  <p className='roboto-light text-gray-700'><strong>Diagnóstico:</strong> {diagnostico.diagnostico}</p>
                  <p className='roboto-light text-gray-700'><strong>Epilepsia:</strong> {diagnostico.epilepsia ? "sim" : "Nao"}</p>
                  <p className='roboto-light text-gray-700'><strong>deficiencia_intelectual:</strong> {diagnostico.deficiencia_intelectual? "sim" : "Nao"}</p>
                  <p className='roboto-light text-gray-700'><strong>Alergia:</strong> {diagnostico.alergia ? "sim" : "Nao"}</p>
                  <p className='roboto-light text-gray-700'><strong>Outros:</strong> {diagnostico.outros}</p>
                  <p className='roboto-light text-gray-700'><strong>Atendente Terapeutico:</strong> {diagnostico.atendente_terapeutico ? "sim" : "Nao"}</p>
                  <p className='roboto-light text-gray-700'><strong>Responsavel:</strong> {diagnostico.responsavel}</p>
                  <p className='roboto-light text-gray-700'><strong>Email :</strong> {diagnostico.email_responsavel}</p>
                  <p className='roboto-light text-gray-700'><strong>Telefone:</strong> {diagnostico.telefone_responsavel}</p>
                </div>
              ))
            ) : (
              <p>Nenhuma avaliação disponível.</p>
            )}
        </div>
        <div className="bg-white p-5 rounded-lg h-[430px] shadow shadow-light-300 relative  ">
              <div className="bg-primary absolute top-0 w-full left-0 rounded-t-lg flex justify-center py-1">
            <p className='text-white roboto-medium'>Informações do avaliacoes</p>
          </div>
              {student.avaliacoes && student.avaliacoes.length > 0 ? (
              student.avaliacoes.map((avaliacao, index) => (
                <div key={index} className="p-2 border-b border-gray-200 pt-5">
                  <p><strong>Categoria:</strong> {avaliacao.categoria}</p>
                  <p><strong>Pontuação:</strong> {avaliacao.pergunta}</p>
                  <p><strong>Data:</strong> {avaliacao.resposta}</p>
                  <p><strong>Data:</strong> {avaliacao.pontuacao}</p>
                  {/* Adicione mais campos de avaliação conforme necessário */}
                </div>
              ))
            ) : (
              <p>Nenhuma avaliação disponível.</p>
            )}
        </div>
      </section>
     
    </section>
  );
};

export default StudentDetails;
