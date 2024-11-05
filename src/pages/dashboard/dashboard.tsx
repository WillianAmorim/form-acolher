import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom'; // Para redirecionamento interno no app
import './dashboard.css';

// Defina um tipo para representar os dados do aluno
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
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(''); // Estado para mensagens de erro

  const navigate = useNavigate(); // Para redirecionamento de páginas

  // Função para buscar os dados
  const fetchData = async () => {
    try {
      const response = await fetch('/api/alunos');
      const result: Student[] = await response.json();
      setData(result);
      setFilteredData(result);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      setError('Erro ao buscar dados. Por favor, tente novamente.');
      setLoading(false);
    }
  };

  // useEffect para buscar os dados quando o componente for montado
  useEffect(() => {
    fetchData();
  }, []);

  // useEffect para filtrar os dados com base no termo de pesquisa
  useEffect(() => {
    const filtered = data.filter((item) => {
      const email = item.senha_cadastro || '';
      return email.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredData(filtered);
  }, [search, data]);

  // Colunas para a tabela
  const columns = [
    {
      name: 'Senha',
      selector: (row: Student) => row.senha_cadastro,
      sortable: true,
    },
    {
      name: 'Nome',
      selector: (row: Student) => row.nome,
      sortable: true,
    },
    {
      name: 'Nome da Mãe',
      selector: (row: Student) => row.nome_mae,
      sortable: true,
    },
    {
      name: 'Sexo',
      selector: (row: Student) => row.sexo,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row: Student) => row.email,
      sortable: true,
    },
    {
      name: 'Tipo de Cadastro',
      selector: (row: Student) => row.tipo_cadastro,
      sortable: true,
    },
    {
      name: 'Telefone',
      selector: (row: Student) => row.telefone,
      sortable: true,
    },
  ];

  // Função chamada ao clicar em uma linha da tabela
  const handleRowClick = (row: Student) => {
    navigate(`/aluno/${row.id}`, { state: { student: row } }); // Passa todos os dados do aluno via state
  };

  // Custom Styles para DataTable
  const customStyles = {
    rows: {
      style: {
        cursor: 'pointer',
      },
    },
  };

  // Renderização da mensagem de carregamento
  if (loading) {
    return (
      <div className="absolute top-1/2 right-1/2" role="status">
        <span className="sr-only">Carregando...</span>
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#FF2193]"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  }

  // Renderização da mensagem de erro
  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <section>
      <header className="flex items-center bg-secondary bg-opacity-50 mb-3 shadow shadow-bg-light-50 p-3">
        <div className="flex items-center justify-between w-full">
          <div>
            <img
              className="w-32"
              src="https://static.wixstatic.com/media/8d3910_0e753ab1da454b9ea4660e8d253d1d06~mv2.png/v1/fill/w_276,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/LOGO%20ESCOLA%20ACOLHER%20VARIA%C3%87%C3%83O%2001.png"
              alt="Logo Escola Acolher"
            />
          </div>
          <ul>
            <li className="font-bold text-white roboto-thin cursor-pointer">
              <i className="fa-solid fa-right-from-bracket"></i> Sair
            </li>
          </ul>
        </div>
      </header>

      <section className="p-3">
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-people-roof text-md text-secondary -mt-2"></i>
          <h3 className="font-bold text-lg mb-2 text-secondary">
            Gerenciamento de pré-matrícula
          </h3>
        </div>

        <div className="flex items-center justify-evenly bg-white max-w-[220px] p-1 gap-3 rounded px-3">
          <i className="fa-solid fa-magnifying-glass text-primary text-xs"></i>
          <input
            type="text"
            placeholder="Informe a senha..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-[220px] focus:outline-none roboto-light"
          />
        </div>
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
