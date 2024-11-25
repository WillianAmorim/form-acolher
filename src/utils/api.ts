
import axios from "axios";

export const fetchData = async (url: string, setLoading: any): Promise<any> => {
  try {
    const response = await axios.get(`http://62.72.24.154:8080/api/alunos`);
    //const response = await axios.get(url || "http://localhost:3001/alunos");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  } finally {
      if (setLoading) {
        setTimeout(() => {
         setLoading(false);          
        }, 500);
      }
  }
};

