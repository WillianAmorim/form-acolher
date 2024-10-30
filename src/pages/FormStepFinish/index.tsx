import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect, useState } from 'react';
import { verifyQuestions } from '../../functionVerify';

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


import PuppetAcolher from '../../assets/puppetAcolher.png'
import axios from 'axios';


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

    const ShowTermos = () => {

        Swal.fire({
            title: 'Termo',
            text: 'Ao assinar este termo, assumo total responsabilidade pela veracidade dos dados fornecidos e aceito todas as condições aqui estabelecidas, pois reconheço a preocupação da escola Acolher em preparar o melhor ambiente de aprendizado e inclusão para meu filho.',
            icon: 'question',
            confirmButtonText: 'Fechar'
        })
    }

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
        "possui_deficiencia": state.possui_deficiencia == 'sim' ? true : false,
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
            alert("Dados enviados com sucesso2!");
        }

        try {
            const response = await axios.post('http://nginx_server:8082/api/alunos', dataForm, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
                
            const containerCard = document.getElementById('container-card')
            if (containerCard) {
                containerCard.style.display = 'none'
            }
            if (response.status === 201) {
               
                {
                    <C.ContainerSenha>
                        {
                            Swal.fire({
                                title: `${response.data.original.message}`,
                                text: `Sua senha é ${response.data.original.senha_gerada}, apresente-a na secretaria`,
                                icon: "success"
                            })
                        }
                    </C.ContainerSenha>

                    setTimeout(() => {
                        navigate('/')
                    }, 5000);
                }
            } 
            else {
                <C.ContainerSenha>
                    {
                        Swal.fire({
                            icon: "error",
                            title: "Oops... Dados incorretos !",
                            text: "Confirme as informações antes de enviar!",
                            footer: '<a href="/step1">Retornar a página inicial do formulário ?</a>'
                          })
                    }
                </C.ContainerSenha>
            }
            // console.log(response)
            // console.log(response.data.original.senha_gerada);
            // setUsers(response.data);  // Salva os dados dos usuários no estado
           // console.log(response.data)
        } catch (err) {
            console.log(err)
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
            <C.Card id='container-card'>
                <C.Termos>Termos</C.Termos>
                <C.Form>
                    <img src={PuppetAcolher} alt="Oi" />
                    <C.Inputs>
                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={isTermoChecked}
                                    onChange={handleTermoChange}
                                />
                            </label>

                            <p onClick={ShowTermos}>Termo de livre esclarecimento</p>
                        </div>

                        <div>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={isConcordoChecked}
                                    onChange={handleConcordoChange}
                                />
                            </label>

                            <p>Li e concordo com os termos</p>
                        </div>

                        <C.Button onClick={handleFinishClick} disabled={isButtonDisabled}>Finalizar</C.Button>
                    </C.Inputs>
                </C.Form>
            </C.Card>
        </C.Container>
    )
}

export default FormStepFinish