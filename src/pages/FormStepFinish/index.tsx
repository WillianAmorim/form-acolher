import * as C from './styles';
import { Theme } from '../../components/Theme'
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect } from 'react';
// import { SelectOption } from '../../components/SelectOption';

const FormStepFinish = () => {
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
        // if (state.necessidadesEspec === 'Sim') {
            console.log(state)
        // } else {
        //     navigate('/stepFinish')
        // }
    }


    // const selectionOfSpecificNeeds = (matricula: string) => {
    //     dispatch({
    //         type: FormActions.setNecessidadesEspec,
    //         payload: matricula
    //     })
    // }

    // const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     dispatch({
    //         type: FormActions.setGitHub,
    //         payload: e.target.value
    //     })
    // }

    return (
        <Theme>
            <C.Container>
                <p>Passo 3/3</p>
                {/* <h1>Lega {state.name}, onde te achamos?</h1> */}
                <p>Preencha com seus dados para conseguirmos entrr em contato.</p>

                <hr />

                <h1>Acabou</h1>

                

                <Link to='/step3' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </C.Container>
        </Theme>
    )
}

export default FormStepFinish