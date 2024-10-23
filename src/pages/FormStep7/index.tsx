import * as C from './styles';
import { Theme } from '../../components/Theme'
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

const FormStep6 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 5
            })
        }

    }, [state.name, dispatch, navigate])

    const handleNextStep = () => {
        // if (state.necessidadesEspec === 'Sim') {
        console.log(state)
        // } else {
        //     alert('Preencha os dados')
        // }
    }

    const questionOne = (questionOne: string) => {
        dispatch({
            type: FormActions.setQuestionOne,
            payload: questionOne
        })
    }

    const questionSecond = (questionSecond: string) => {
        dispatch({
            type: FormActions.setQuestionSecond,
            payload: questionSecond
        })
    }

    const questionThird = (questionThird: string) => {
        dispatch({
            type: FormActions.setQuestionThird,
            payload: questionThird
        })
    }

    const questionFourth = (questionFourth: string) => {
        dispatch({
            type: FormActions.setQuestionFourth,
            payload: questionFourth
        })
    }

    const questionFive = (questionFive: string) => {
        dispatch({
            type: FormActions.setQuestionFive,
            payload: questionFive
        })
    }

    const questionSix = (questionSix: string) => {
        dispatch({
            type: FormActions.setQuestionSix,
            payload: questionSix
        })
    }

    const questionSeven = (questionSecond: string) => {
        dispatch({
            type: FormActions.setQuestionSeven,
            payload: questionSecond
        })
    }

    const questionEight = (questionSecond: string) => {
        dispatch({
            type: FormActions.setQuestionEight,
            payload: questionSecond
        })
    }

    const questionNine = (questionNine: string) => {
        dispatch({
            type: FormActions.setQuestionNine,
            payload: questionNine
        })
    }

    const questionTen = (questionTen: string) => {
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
                        selected={state.questionOne === 'Sim'}
                        onClick={() => questionOne('Sim')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.questionOne === 'Não'}
                        onClick={() => questionOne('Não')}
                    />

                    <SelectOption
                        title="As vezes"
                        description=""
                        selected={state.questionOne === 'As vezes'}
                        onClick={() => questionOne('As vezes')}
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

                <Link to='/step3' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep6