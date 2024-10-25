import * as C from './styles';
import { Theme } from '../../components/Theme'
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

const FormStep4 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }

    }, [state.name, dispatch, navigate])

    const handleNextStep = () => {
        if (state.necessidadesEspec === 'Sim') {
            navigate('/step5')
        } else {
            navigate('/stepFinish')
        }
    }


    const selectionOfSpecificNeeds = (matricula: string) => {
        dispatch({
            type: FormActions.setNecessidadesEspec,
            payload: matricula
        })
    }

    // const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     dispatch({
    //         type: FormActions.setGitHub,
    //         payload: e.target.value
    //     })
    // }

    return (
        <Theme>
            <C.Container>
                {/* <p>Passo 4/5</p> */}
                {/* <h1>Lega {state.name}, onde te achamos?</h1> */}
                <p>Preencha com seus dados para conseguirmos entrar em contato.</p>

                <hr />

                <label htmlFor="">
                    Aluno(a) possui alguma deficiência ou necessidade educacional específica ?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.necessidadesEspec === 'Sim'}
                        onClick={() => selectionOfSpecificNeeds('Sim')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.necessidadesEspec === 'Não'}
                        onClick={() => selectionOfSpecificNeeds('Não')}
                    />
                </label>

                

                <Link to='/step3' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep4