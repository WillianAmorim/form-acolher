import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom'; // Para redirecionamento interno no app

import './css/homePageDashboard.css';

const HomePageDashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate(); // Para redirecionamento de páginas

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8082/api/alunos');
      const result = await response.json();
      setData(result);
      setFilteredData(result);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
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
      const email = item.email || '';
      return email.toLowerCase().includes(search.toLowerCase()); // Filtra pelo email
    });
    setFilteredData(filtered);
  }, [search, data]);

  const columns = [
    {
      name: 'Nome',
      selector: (row) => row.nome,
      sortable: true,
    },
    {
      name: 'Nome da Mãe',
      selector: (row) => row.nome_mae,
      sortable: true,
    },
    {
      name: 'Sexo',
      selector: (row) => row.sexo,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Tipo de Cadastro',
      selector: (row) => row.tipo_cadastro,
      sortable: true,
    },
    {
      name: 'Telefone',
      selector: (row) => row.telefone,
      sortable: true,
    },
  ];

  // Função chamada ao clicar em uma linha
  const handleRowClick = (row) => {
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

  if (loading) {
    return <p>Carregando...</p>; // Exibe mensagem de carregamento enquanto os dados são buscados
  }

  return (
    <section>
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

      <section className="p-3">
        <div className="flex items-center gap-1">
          <i className="fa-solid fa-people-roof text-md text-secondary -mt-2"></i>
          <h3 className="font-bold text-lg  mb-2  text-secondary "> Gerenciamento de pré-matrícula</h3>
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
        {/* Exibindo o DataTable com os dados filtrados */}
        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          highlightOnHover
          progressPending={loading}
          onRowClicked={handleRowClick} // Chama a função ao clicar em uma linha
          customStyles={customStyles} // Aplica o estilo de cursor nas linhas
        />
      </section>
    </section>
  );
};

export default HomePageDashboard;
