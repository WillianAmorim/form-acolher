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
        if (state.nome === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 4
            })
        }

    }, [state.nome, dispatch, navigate])

    const handleNextStep = () => {
        if (state.possui_deficiencia === 'Sim') {
            navigate('/step5')
        } else {
            navigate('/stepFinish')
        }
    }


    const selectionOfSpecificNeeds = (matricula: string) => {
        dispatch({
            type: FormActions.setPossui_deficiencia,
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
                        selected={state.possui_deficiencia == 'sim'}
                        onClick={() => selectionOfSpecificNeeds('sim')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.possui_deficiencia == 'nao'}
                        onClick={() => selectionOfSpecificNeeds('nao')}
                    />
                </label>

                

                <Link to='/step3' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep4