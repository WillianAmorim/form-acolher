import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

// Definindo o tipo Student
type Student = {
  id: string;
  senha_cadastro: string;
  nome: string;
  nome_mae: string;
  sexo: string;
  email: string;
  tipo_cadastro: string;
  telefone: string;
};

const HomePageDashboard = () => {
  const [data, setData] = useState<Student[]>([]);
  const [filteredData, setFilteredData] = useState<Student[]>([]);
  const [search] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch('http://62.72.24.154:8082/api/alunos');
      const result = await response.json();
      setData(result);
      setFilteredData(result);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setError('Erro ao buscar dados. Por favor, tente novamente.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      (item.senha_cadastro || '').toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filtered);
  }, [search, data]);

  const columns = [
    { name: 'Senha', selector: (row: Student) => row.senha_cadastro, sortable: true },
    { name: 'Nome', selector: (row: Student) => row.nome, sortable: true },
    { name: 'Nome da Mãe', selector: (row: Student) => row.nome_mae, sortable: true },
    { name: 'Sexo', selector: (row: Student) => row.sexo, sortable: true },
    { name: 'Email', selector: (row: Student) => row.email, sortable: true },
    { name: 'Tipo de Cadastro', selector: (row: Student) => row.tipo_cadastro, sortable: true },
    { name: 'Telefone', selector: (row: Student) => row.telefone, sortable: true },
  ];

  const handleRowClick = (row: Student) => {
    navigate(`/aluno/${row.id}`, { state: { student: row } });
  };

  const customStyles = {
    rows: { style: { cursor: 'pointer' } },
  };

  if (loading) {
    return (
      <div className="absolute top-1/2 right-1/2" role="status">
        <span className="sr-only">Carregando...</span>
        {/* SVG de carregamento */}
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <section>
      <header className="flex items-center bg-secondary bg-opacity-50 mb-3 shadow shadow-bg-light-50 p-3">
        {/* Conteúdo do Header */}
      </header>
      <section className="p-3">
        {/* Barra de Pesquisa */}
      </section>
      <section className="p-3 rounded-lg">
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          highlightOnHover
          progressPending={loading}
          onRowClicked={handleRowClick}
          customStyles={customStyles}
        />
      </section>
    </section>
  );
};

export default HomePageDashboard;
