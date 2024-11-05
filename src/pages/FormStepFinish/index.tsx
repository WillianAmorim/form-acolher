import * as C from './styles';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect, useState } from 'react';
import { verifyQuestions } from '../../functionVerify';

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.min.css';

// import { ClipLoader } from 'react-spinners';



import PuppetAcolher from '../../assets/puppetAcolher.webp'
import axios from 'axios';


const FormStepFinish = () => {
    const navigate = useNavigate();
    const { state, dispatch, resetForm } = useForm();


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
                // "autismo": state.comorbidade.includes('autismo'),
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

        const button = document.getElementById('button-submit');
        const spinner = document.getElementById('spinner');


        if (button) {
            button.style.display = 'none';
        }

        if (spinner) {
            spinner.style.display = 'flex';

        }

        console.log(spinner?.style.display);


        const handlePageInitial = () => {
            resetForm(); // Limpa o contexto
            navigate('/')
        }

        try {
            const response = await axios.post('http://62.72.24.154:8082/api/alunos', dataForm, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log(response)

            const containerCard = document.getElementById('container-card')
            if (containerCard) {
                containerCard.style.display = 'none'
            }
            if (response.status === 201) {
                Swal.fire({
                    title: `${response.data.original.message}`,
                    html: `Sua senha é <b>${response.data.original.senha_gerada}</b>, apresente-a na secretaria`,
                    icon: "success"
                }).then((result: { isConfirmed: any; }) => {
                    if (result.isConfirmed) {
                        handlePageInitial();
                    }
                });
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Oops... Dados incorretos !",
                    text: "Confirme as informações antes de enviar!",
                    footer: '<a href="/step1">Retornar a página inicial do formulário ?</a>'
                })
            }
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
                        <div className='checkbox'>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={isTermoChecked}
                                    onChange={handleTermoChange}
                                />
                            </label>

                            <p onClick={ShowTermos} id='temos-esclarecimento'>Termo de livre esclarecimento</p>
                        </div>

                        <div className='checkbox'>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={isConcordoChecked}
                                    onChange={handleConcordoChange}
                                />
                            </label>

                            <p>Li e concordo com os termos</p>
                        </div>

                        <C.Button id='button-submit' onClick={handleFinishClick} disabled={isButtonDisabled}>Finalizar</C.Button>
                        <div id="spinner"></div>
                    </C.Inputs>
                </C.Form>
            </C.Card>
        </C.Container>
    )
}

export default FormStepFinish