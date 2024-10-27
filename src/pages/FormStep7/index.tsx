import * as C from './styles';
import { Theme } from '../../components/Theme'
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

const FormStep6 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const verifyQuestions = (value:string) => {
        if (value === 'S') {
            return 1;
        } else if (value === 'N') {
            return 3
        } else {
            return 2
        }
    }

    const dataForm = {
        "nome": `${state.nome}`,
        "idade": `${state.idade}`,
        "sexo": `${state.sexo}`,
        "tipo_cadastro": `${state.matricula}`,
        "serie_2025": `${state.serie_2025}`,
        "modalidade": `${state.modalidade}`,
        "nome_mae": `${state.nome_mae}`,
        "responsavel_financeiro": `${state.responsavel_financeiro}`,
        "telefone": `${state.telefone}`,
        "email": `${state.email}`,
        "possui_deficiencia": state.possui_deficiencia == 'sim' ? true:false,
        "diagnosticos": [
            {
                "diagnostico": state.diagnostico,
                "epilepsia": state.comorbidade.includes('epilepsia'),
                "deficiencia_intelectual": state.comorbidade.includes('deficiencia-intelectual'),
                "alergia": state.comorbidade.includes('alergia'),
                "outros": "",
                "responsavel": state.responsavel_financeiro,
            }
        ],
        "avaliacoes": [
            {
                "pergunta": `${state.perguntaUm}`,
                "resposta": `${state.questionOne}`,
                "pontuacao": verifyQuestions(state.questionOne)
            },
        ]
    }

    // interface Avaliacao [
    //     pergunta: string;
    //     resposta: string;
    //     pontuacao: number
    //     // outros campos que o objeto pode ter
    // ]
    type Avaliacoes = {
        pergunta: string;
        resposta: string;
        pontuacao: number;
    }
    

    const avaliacoesAll: Avaliacoes[] = []

    useEffect(() => {
        if (state.nome === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 5
            })
        }

    }, [state.nome, dispatch, navigate])

    const handleNextStep = async () => {
        const avaliacoes_temp: Avaliacoes =
        {
            "pergunta": `${state.perguntaUm}`,
            "resposta": `${state.questionOne}`,
            "pontuacao": verifyQuestions(state.questionOne)
        }
        
        avaliacoesAll.push(avaliacoes_temp)

        console.log(avaliacoesAll)

        try {
            const response = await fetch("http://62.72.24.154:8082/api/alunos", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(dataForm),
            });
            console.log(response)
      
            if (response.ok) {
              console.log("Dados enviados com sucesso");
            } else {
              console.error("Erro ao enviar dados");
            }
          } catch (error) {
            console.error("Erro de rede:", error);
          }

        navigate('/stepFinish')
    }

    const questionOne = (questionOne: string, perguntaUm: string) => {
        dispatch({
            type: FormActions.setQuestionOne,
            payload: questionOne
        })

        console.log(perguntaUm)

        dispatch({
            type: FormActions.setPerguntaUm,
            payload: perguntaUm
        })
    }

    const questionSecond = (questionSecond: string) => {
        const avaliacoes_temp: Avaliacoes =
        {
            "pergunta": "Sabe Seu nome ?",
            "resposta": `${questionSecond}`,
            "pontuacao": verifyQuestions(questionSecond)
        }
        avaliacoesAll.push(avaliacoes_temp)

        dispatch({
            type: FormActions.setQuestionSecond,
            payload: questionSecond
        })
    }

    const questionThird = (questionThird: string) => {
        const avaliacoes_temp =
        {
            "pergunta": "Sabe Seu nome ?",
            "resposta": `${questionThird}`,
            "pontuacao": `${verifyQuestions(questionThird)}`
        }
        avaliacoesAll.push(avaliacoes_temp)

        dispatch({
            type: FormActions.setQuestionThird,
            payload: questionThird
        })
    }

    const questionFourth = (questionFourth: string) => {
        const avaliacoes_temp =
        {
            "pergunta": "Sabe Seu nome ?",
            "resposta": `${questionFourth}`,
            "pontuacao": `${verifyQuestions(questionFourth)}`
        }
        avaliacoes_alls.push(avaliacoes_temp)

        dispatch({
            type: FormActions.setQuestionFourth,
            payload: questionFourth
        })
    }

    const questionFive = (questionFive: string) => {

        const avaliacoes_temp =
        {
            "pergunta": "Sabe Seu nome ?",
            "resposta": `${questionFive}`,
            "pontuacao": `${verifyQuestions(questionFive)}`
        }
        avaliacoes_alls.push(avaliacoes_temp)

        dispatch({
            type: FormActions.setQuestionFive,
            payload: questionFive
        })
    }

    const questionSix = (questionSix: string) => {

        const avaliacoes_temp =
        {
            "pergunta": "Sabe Seu nome ?",
            "resposta": `${questionSix}`,
            "pontuacao": `${verifyQuestions(questionSix)}`
        }
        avaliacoes_alls.push(avaliacoes_temp)

        dispatch({
            type: FormActions.setQuestionSix,
            payload: questionSix
        })
    }

    const questionSeven = (questionSeven: string) => {

        const avaliacoes_temp =
        {
            "pergunta": "Sabe Seu nome ?",
            "resposta": `${questionSeven}`,
            "pontuacao": `${verifyQuestions(questionSeven)}`
        }
        avaliacoes_alls.push(avaliacoes_temp)

        dispatch({
            type: FormActions.setQuestionSeven,
            payload: questionSeven
        })
    }

    const questionEight = (questionEight: string) => {
        const avaliacoes_temp =
        {
            "pergunta": "Sabe Seu nome ?",
            "resposta": `${questionEight}`,
            "pontuacao": `${verifyQuestions(questionEight)}`
        }
        avaliacoes_alls.push(avaliacoes_temp)

        dispatch({
            type: FormActions.setQuestionEight,
            payload: questionEight
        })
    }

    const questionNine = (questionNine: string) => {
        const avaliacoes_temp =
        {
            "pergunta": "Sabe Seu nome ?",
            "resposta": `${questionNine}`,
            "pontuacao": `${verifyQuestions(questionNine)}`
        }
        avaliacoes_alls.push(avaliacoes_temp)

        dispatch({
            type: FormActions.setQuestionNine,
            payload: questionNine
        })
    }

    const questionTen = (questionTen: string) => {

        const avaliacoes_temp =
        {
            "pergunta": "Sabe Seu nome ?",
            "resposta": `${questionTen}`,
            "pontuacao": `${verifyQuestions(questionTen)}`
        }
        avaliacoes_alls.push(avaliacoes_temp)

        dispatch({
            type: FormActions.setQuestionTen,
            payload: questionTen
        })
    }

    return (
        <Theme>
            <C.Container>
                {/* <p>Passo 7/7</p> */}
                {/* <h1>Lega {state.name}, onde te achamos?</h1> */}
                <p>Discurso/Linguagem/Comunicação</p>

                <hr />

                <label htmlFor="">
                    1. Sabe Seu nome ?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionOne === 'S'}
                        onClick={() => questionOne('S', 'Sabe Seu nome ?')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionOne === 'N'}
                        onClick={() => questionOne('N', 'Sabe Seu nome ?')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionOne === 'AV'}
                        onClick={() => questionOne('AV', 'Sabe Seu nome ?')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    2. Responde ao sim e não ?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionSecond === 'Sim'}
                        onClick={() => questionSecond('Sim')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionSecond === 'Não'}
                        onClick={() => questionSecond('Não')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionSecond === 'As vezes'}
                        onClick={() => questionSecond('As vezes')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    3. Consegue usar frases com 4 ou mais palavras ?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionThird === 'Sim'}
                        onClick={() => questionThird('Sim')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionThird === 'Não'}
                        onClick={() => questionThird('Não')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionThird === 'As vezes'}
                        onClick={() => questionThird('As vezes')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    4. Explica o que quer ?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionFourth === 'Sim'}
                        onClick={() => questionFourth('Sim')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionFourth === 'Não'}
                        onClick={() => questionFourth('Não')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionFourth === 'As vezes'}
                        onClick={() => questionFourth('As vezes')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    5. Segue alguns comandos ?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionFive === 'Sim'}
                        onClick={() => questionFive('Sim')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionFive === 'Não'}
                        onClick={() => questionFive('Não')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionFive === 'As vezes'}
                        onClick={() => questionFive('As vezes')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    6. Consegue usar uma palavra de cada vez (Não, comer, água) ?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionSix === 'Sim'}
                        onClick={() => questionSix('Sim')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionSix === 'Não'}
                        onClick={() => questionSix('Não')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionSix === 'As vezes'}
                        onClick={() => questionSix('As vezes')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    7. Consegue usar 2 palavras de cada vez (Não quero, quero ir)
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionSeven === 'Sim'}
                        onClick={() => questionSeven('Sim')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionSeven === 'Não'}
                        onClick={() => questionSeven('Não')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionSeven === 'As vezes'}
                        onClick={() => questionSeven('As vezes')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    8. Conversa
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionEight === 'Sim'}
                        onClick={() => questionEight('Sim')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionEight === 'Não'}
                        onClick={() => questionEight('Não')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionEight === 'As vezes'}
                        onClick={() => questionEight('As vezes')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    9. Sabe Usar PECS ou comunicação alternativa
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionNine === 'Sim'}
                        onClick={() => questionNine('Sim')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionNine === 'Não'}
                        onClick={() => questionNine('Não')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionNine === 'As vezes'}
                        onClick={() => questionNine('As vezes')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    10. Tem ECOLALIA (repete sons ou frases sem funcionalidade)
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionTen === 'Sim'}
                        onClick={() => questionTen('Sim')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionTen === 'Não'}
                        onClick={() => questionTen('Não')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionTen === 'As vezes'}
                        onClick={() => questionTen('As vezes')}
                    />
                </label>

                <Link to='/step6' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep6