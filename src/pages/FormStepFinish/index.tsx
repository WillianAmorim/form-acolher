import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect, useState } from 'react';
import { verifyQuestions } from '../../functionVerify';

const FormStepFinish = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const [isTermoChecked, setTermoChecked] = useState(false);
    const [isConcordoChecked, setConcordoChecked] = useState(false);

    const handleTermoChange = () => {
        setTermoChecked(!isTermoChecked);
    };

    const handleConcordoChange = () => {
        setConcordoChecked(!isConcordoChecked);
    };

    const isButtonDisabled = !(isTermoChecked && isConcordoChecked);

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
                "outros": state.outros,
                "responsavel": state.responsavel_financeiro,
            }
        ],
        "avaliacoes": [
            {
                "pergunta": `${state.perguntaUm}`,
                "resposta": `${state.questionOne}`,
                "pontuacao": verifyQuestions(state.questionOne)
            },
            {
                "pergunta": `${state.perguntaDois}`,
                "resposta": `${state.questionSecond}`,
                "pontuacao": verifyQuestions(state.questionSecond)
            },
            {
                "pergunta": `${state.perguntaTres}`,
                "resposta": `${state.questionThird}`,
                "pontuacao": verifyQuestions(state.questionThird)
            },
            {
                "pergunta": `${state.perguntaQuatro}`,
                "resposta": `${state.questionFourth}`,
                "pontuacao": verifyQuestions(state.questionFourth)
            },
            {
                "pergunta": `${state.perguntaCinco}`,
                "resposta": `${state.questionFive}`,
                "pontuacao": verifyQuestions(state.questionFive)
            },
            {
                "pergunta": `${state.perguntaSeis}`,
                "resposta": `${state.questionSix}`,
                "pontuacao": verifyQuestions(state.questionSix)
            },
            {
                "pergunta": `${state.perguntaSete}`,
                "resposta": `${state.questionSeven}`,
                "pontuacao": verifyQuestions(state.questionSeven)
            },
            {
                "pergunta": `${state.perguntaOito}`,
                "resposta": `${state.questionEight}`,
                "pontuacao": verifyQuestions(state.questionEight)
            },
            {
                "pergunta": `${state.perguntaNove}`,
                "resposta": `${state.questionNine}`,
                "pontuacao": verifyQuestions(state.questionNine)
            },
            {
                "pergunta": `${state.perguntaDez}`,
                "resposta": `${state.questionTen}`,
                "pontuacao": verifyQuestions(state.questionTen)
            },
        ]
    }

    const handleFinishClick = async () => {
        if (!isButtonDisabled) {
            alert("Dados enviados com sucesso!");
        }

        try {
            const response = await fetch("http://62.72.24.154:8082/api/alunos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataForm),
            });
            console.log(dataForm)

            if (response.ok) {
                console.log("Dados enviados com sucesso");
            } else {
                console.error("Erro ao enviar dados");
            }
        } catch (error) {
            console.error("Erro de rede:", error);
        }
    };

    useEffect(() => {
        if (state.nome === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }

    }, [state.nome, dispatch, navigate])

    return (
        <C.Container>
            <C.Card>
                <C.Termos>Termos</C.Termos>
                <C.Form>
                    {/* <img src={PuppetAcolher} alt="" /> */}
                    <C.Inputs>
                        <label>
                            <input
                                type="checkbox"
                                checked={isTermoChecked}
                                onChange={handleTermoChange}
                            />
                            Termo de livre esclarecimento
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                checked={isConcordoChecked}
                                onChange={handleConcordoChange}
                            />
                            Li e concordo com os termos
                        </label>
                        <C.Button onClick={handleFinishClick} disabled={isButtonDisabled}>Finalizar</C.Button>
                    </C.Inputs>
                </C.Form>
            </C.Card>
        </C.Container>
    )
}

export default FormStepFinish