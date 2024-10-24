const studentService = {
    getAlunoById: async (id) => {
      const response = await fetch(`http://localhost:8082/api/alunos/${id}`);
      if (!response.ok) {
        throw new Error('Erro ao buscar aluno');
      }
      return response.json();
    }
  };
  
  export default studentService;
  