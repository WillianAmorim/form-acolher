import * as C from './styles';
import { Theme } from '../../components/Theme'
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';
import { verifyQuestions } from '../../functionVerify';

const FormStep8 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    // const verifyQuestions = (value:string) => {
    //     if (value === 'S') {
    //         return 1;
    //     } else if (value === 'N') {
    //         return 3
    //     } else {
    //         return 2
    //     }
    // }

    // const dataForm = {
    //     "nome": `${state.nome}`,
    //     "idade": `${state.idade}`,
    //     "sexo": `${state.sexo}`,
    //     "tipo_cadastro": `${state.matricula}`,
    //     "serie_2025": `${state.serie_2025}`,
    //     "modalidade": `${state.modalidade}`,
    //     "nome_mae": `${state.nome_mae}`,
    //     "responsavel_financeiro": `${state.responsavel_financeiro}`,
    //     "telefone": `${state.telefone}`,
    //     "email": `${state.email}`,
    //     "possui_deficiencia": state.possui_deficiencia == 'sim' ? true:false,
    //     "diagnosticos": [
    //         {
    //             "diagnostico": state.diagnostico,
    //             "epilepsia": state.comorbidade.includes('epilepsia'),
    //             "deficiencia_intelectual": state.comorbidade.includes('deficiencia-intelectual'),
    //             "alergia": state.comorbidade.includes('alergia'),
    //             "outros": state.outros,
    //             "responsavel": state.responsavel_financeiro,
    //         }
    //     ],
    //     "avaliacoes": [
    //         {
    //             "pergunta": `${state.perguntaUm}`,
    //             "resposta": `${state.questionOne}`,
    //             "pontuacao": verifyQuestions(state.questionOne)
    //         },
    //         {
    //             "pergunta": `${state.perguntaDois}`,
    //             "resposta": `${state.questionSecond}`,
    //             "pontuacao": verifyQuestions(state.questionSecond)
    //         },
    //         {
    //             "pergunta": `${state.perguntaTres}`,
    //             "resposta": `${state.questionThird}`,
    //             "pontuacao": verifyQuestions(state.questionThird)
    //         },
    //         {
    //             "pergunta": `${state.perguntaQuatro}`,
    //             "resposta": `${state.questionFourth}`,
    //             "pontuacao": verifyQuestions(state.questionFourth)
    //         },
    //         {
    //             "pergunta": `${state.perguntaCinco}`,
    //             "resposta": `${state.questionFive}`,
    //             "pontuacao": verifyQuestions(state.questionFive)
    //         },
    //         {
    //             "pergunta": `${state.perguntaSeis}`,
    //             "resposta": `${state.questionSix}`,
    //             "pontuacao": verifyQuestions(state.questionSix)
    //         },
    //         {
    //             "pergunta": `${state.perguntaSete}`,
    //             "resposta": `${state.questionSeven}`,
    //             "pontuacao": verifyQuestions(state.questionSeven)
    //         },
    //         {
    //             "pergunta": `${state.perguntaOito}`,
    //             "resposta": `${state.questionEight}`,
    //             "pontuacao": verifyQuestions(state.questionEight)
    //         },
    //         {
    //             "pergunta": `${state.perguntaNove}`,
    //             "resposta": `${state.questionNine}`,
    //             "pontuacao": verifyQuestions(state.questionNine)
    //         },
    //         {
    //             "pergunta": `${state.perguntaDez}`,
    //             "resposta": `${state.questionTen}`,
    //             "pontuacao": verifyQuestions(state.questionTen)
    //         },
    //     ]
    // }
    
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

        if ((state.questionOne === '') || (state.questionSecond === '') || (state.questionThird === '') || (state.questionFourth === '') || (state.questionFive === '') || (state.questionSix === '') || (state.questionSeven === '') || (state.questionEight === '') || (state.questionNine === '') || (state.questionTen === '')) {
            alert('Preencha todos os dados !')
        } else {
            navigate('/stepFinish')
        }
    }

    const questionOne = (questionOne: string, perguntaUm: string) => {
        dispatch({
            type: FormActions.setQuestionOne,
            payload: questionOne
        })

        dispatch({
            type: FormActions.setPerguntaUm,
            payload: perguntaUm
        })
    }

    const questionSecond = (questionSecond: string, perguntaDois: string) => {
        dispatch({
            type: FormActions.setQuestionSecond,
            payload: questionSecond
        })

        dispatch({
            type: FormActions.setPerguntaDois,
            payload: perguntaDois
        })
    }

    const questionThird = (questionThird: string, perguntaTres: string) => {
        dispatch({
            type: FormActions.setQuestionThird,
            payload: questionThird
        })

        dispatch({
            type: FormActions.setPerguntaTres,
            payload: perguntaTres
        })
    }

    const questionFourth = (questionFourth: string, perguntaQuatro:string) => {
        dispatch({
            type: FormActions.setQuestionFourth,
            payload: questionFourth
        })

        dispatch({
            type: FormActions.setPerguntaQuatro,
            payload: perguntaQuatro
        })
    }

    const questionFive = (questionFive: string, perguntaCinco:string) => {
        dispatch({
            type: FormActions.setQuestionFive,
            payload: questionFive
        })

        dispatch({
            type: FormActions.setPerguntaCinco,
            payload: perguntaCinco
        })
    }

    const questionSix = (questionSix: string, perguntaSeis:string) => {
        dispatch({
            type: FormActions.setQuestionSix,
            payload: questionSix
        })

        dispatch({
            type: FormActions.setPerguntaSeis,
            payload: perguntaSeis
        })
    }

    const questionSeven = (questionSeven: string, perguntaSete:string) => {
        dispatch({
            type: FormActions.setQuestionSeven,
            payload: questionSeven
        })

        dispatch({
            type: FormActions.setPerguntaSete,
            payload: perguntaSete
        })
    }

    const questionEight = (questionEight: string, perguntaOito:string) => {
        dispatch({
            type: FormActions.setQuestionEight,
            payload: questionEight
        })

        dispatch({
            type: FormActions.setPerguntaOito,
            payload: perguntaOito
        })
    }

    const questionNine = (questionNine: string, perguntaNove:string) => {
        dispatch({
            type: FormActions.setQuestionNine,
            payload: questionNine
        })

        dispatch({
            type: FormActions.setPerguntaNove,
            payload: perguntaNove
        })
    }

    const questionTen = (questionTen: string, perguntaDez:string) => {
        dispatch({
            type: FormActions.setQuestionTen,
            payload: questionTen
        })

        dispatch({
            type: FormActions.setPerguntaDez,
            payload: perguntaDez
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
                        selected={state.questionSecond === 'S'}
                        onClick={() => questionSecond('S', 'Responde ao sim e não ?')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionSecond === 'N'}
                        onClick={() => questionSecond('N', 'Responde ao sim e não ?')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionSecond === 'AV'}
                        onClick={() => questionSecond('AV', 'Responde ao sim e não ?')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    3. Consegue usar frases com 4 ou mais palavras ?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionThird === 'S'}
                        onClick={() => questionThird('S', 'Consegue usar frases com 4 ou mais palavras ?')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionThird === 'N'}
                        onClick={() => questionThird('N', 'Consegue usar frases com 4 ou mais palavras ?')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionThird === 'AV'}
                        onClick={() => questionThird('AV', 'Consegue usar frases com 4 ou mais palavras ?')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    4. Explica o que quer ?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionFourth === 'S'}
                        onClick={() => questionFourth('S', 'Explica o que quer ?')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionFourth === 'N'}
                        onClick={() => questionFourth('N', 'Explica o que quer ?')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionFourth === 'AV'}
                        onClick={() => questionFourth('AV', 'Explica o que quer ?')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    5. Segue alguns comandos ?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionFive === 'S'}
                        onClick={() => questionFive('S', 'Segue alguns comandos ?')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionFive === 'N'}
                        onClick={() => questionFive('N', 'Segue alguns comandos ?')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionFive === 'AV'}
                        onClick={() => questionFive('AV', 'Segue alguns comandos ?')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    6. Consegue usar uma palavra de cada vez (Não, comer, água) ?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionSix === 'S'}
                        onClick={() => questionSix('S', 'Consegue usar uma palavra de cada vez (Não, comer, água) ?')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionSix === 'N'}
                        onClick={() => questionSix('N', 'Consegue usar uma palavra de cada vez (Não, comer, água) ?')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionSix === 'AV'}
                        onClick={() => questionSix('AV', 'Consegue usar uma palavra de cada vez (Não, comer, água) ?')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    7. Consegue usar 2 palavras de cada vez (Não quero, quero ir)
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionSeven === 'S'}
                        onClick={() => questionSeven('S', 'Consegue usar 2 palavras de cada vez (Não quero, quero ir)')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionSeven === 'N'}
                        onClick={() => questionSeven('N', 'Consegue usar 2 palavras de cada vez (Não quero, quero ir)')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionSeven === 'AV'}
                        onClick={() => questionSeven('AV', 'Consegue usar 2 palavras de cada vez (Não quero, quero ir)')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    8. Conversa ?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionEight === 'S'}
                        onClick={() => questionEight('S', 'Conversa ?')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionEight === 'N'}
                        onClick={() => questionEight('N', 'Conversa ?')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionEight === 'AV'}
                        onClick={() => questionEight('AV', 'Conversa ?')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    9. Sabe Usar PECS ou comunicação alternativa ?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionNine === 'S'}
                        onClick={() => questionNine('S', 'Sabe Usar PECS ou comunicação alternativa ?')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionNine === 'N'}
                        onClick={() => questionNine('N', 'Sabe Usar PECS ou comunicação alternativa ?')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionNine === 'AV'}
                        onClick={() => questionNine('AV', 'Sabe Usar PECS ou comunicação alternativa ?')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    10. Tem ECOLALIA (repete sons ou frases sem funcionalidade) ?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.questionTen === 'S'}
                        onClick={() => questionTen('S', 'Tem ECOLALIA (repete sons ou frases sem funcionalidade) ?')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionTen === 'N'}
                        onClick={() => questionTen('N', 'Tem ECOLALIA (repete sons ou frases sem funcionalidade) ?')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionTen === 'AV'}
                        onClick={() => questionTen('AV', 'Tem ECOLALIA (repete sons ou frases sem funcionalidade) ?')}
                    />
                </label>

                <Link to='/step7' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep8