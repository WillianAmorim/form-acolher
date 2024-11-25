
import React, { useEffect, useState } from "react";

import { Aluno } from "@types/data";

import { fetchData } from "@/utils/api";
import { gerarDadosEvolucao, carregarDados } from "./utils/processingData";

import CardNumber from "./CardNumber";
import CardPizza from "./CardPizza";
import { PiBackpackFill } from "react-icons/pi";
import { IoAccessibility } from "react-icons/io5";
import CardStackedBar from "./CardStackedBar";
import CardBar from "./CardBar";

import "./dashboard.css";
import CardLine from "./CardLine";
import { 
  getComorbidadesData,
  getTiposData, 
  getTurnosData 
} from "./utils/alunosData";


export default function HomePageDashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Aluno[]>([]);

  useEffect(() => {
    const fetchAndSetData = async () => {
      const fetchedData = await fetchData("/alunos", setLoading);
      setData(fetchedData);
    };
    fetchAndSetData();
  }, []);

  const filteredData = carregarDados(data);
  const dadosEvolucao = gerarDadosEvolucao(data);

  const comorbidadesData = getComorbidadesData(filteredData);
  const tiposData = getTiposData(filteredData);
  const turnosData = getTurnosData(filteredData);

  return (
    <>
      {loading ? (
        <div className="absolute h-full w-full bg-pink-400 z-10 flex items-center justify-center text-lg text-pink-900">
          Carregando dados...
        </div>
      ) : (
        <main className="main">
          <h4 className="text-4xl font-medium pt-4 px-10 title">Dashboard</h4>
          {/* <h4 className="text-lg px-10 subtitle">Olá, User</h4> */}
          <div className="flex items-center justify-center flex-wrap">
            <CardNumber
              Icon={PiBackpackFill}
              iconColor="white"
              bgIcon="#17c976"
              title="Alunos Matriculados"
              subtitle="Total de alunos matriculados"
              number={filteredData.qtdeAlunosTotal}
            />
            <CardNumber
              Icon={IoAccessibility}
              iconColor="white"
              bgIcon="#a4e2ff"
              title="Alunos com comorbidade"
              subtitle="Total de alunos com comorbidade"
              number={filteredData.qtdeAlunosComComorbidade}
            />
          </div>
          <div className="flex justify-center items-center">
            <CardBar
              title="Alunos/Comorbidade"
              subtitle="Total de alunos matriculados por comorbidade"
              data={comorbidadesData}
              universe={filteredData.qtdeAlunosTotal}
            />
            <CardPizza
              item="Alunos"
              title="Alunos/Turno"
              subtitle="Percentual de alunos por turno"
              data={turnosData}
              universe={filteredData.qtdeAlunosTotal}
              isLoaded={!loading}
            />
            <CardPizza
              item="Alunos"
              title="Alunos/Tipo de Cadastro"
              subtitle="Percentual de alunos por tipo de cadastro"
              data={tiposData}
              universe={filteredData.qtdeAlunosTotal}
              isLoaded={!loading}
            />
          </div>
          <CardLine
            data={dadosEvolucao}
            title="Alunos matriculados por comorbidade"
            subtitle="Evolução dos alunos matriculados nos últimos dias classificados por comorbidade"
          />
          <CardStackedBar 
            data={dadosEvolucao}
            title="Alunos matriculados por modalidade"
            subtitle="Evolução dos alunos matriculados nos últimos dias classificados por modalidade"
          />
        </main>
      )}
    </>
  );
}
