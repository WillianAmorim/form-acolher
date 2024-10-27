import * as C from './styles';
// import { Theme } from '../../components/Theme'
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect } from 'react';
// import { SelectOption } from '../../components/SelectOption';
// import PuppetAcolher from '../../assets/puppetAcolher.png'

const FormStepFinish = () => {
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

    // const handleNextStep = () => {
    //     // if (state.necessidadesEspec === 'Sim') {
    //     console.log(state)
    //     // } else {
    //     //     navigate('/stepFinish')
    //     // }
    // }


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
        <C.Container>
            <C.Card>
                <C.Termos>Termos</C.Termos>
                <C.Form>
                    {/* <img src={PuppetAcolher} alt="" /> */}
                    <C.Inputs>
                        <label>
                            <input
                                type="checkbox"
                            // checked={isChecked}
                            // onChange={handleCheckboxChange}
                            />
                            Termo de livre esclarecimento
                        </label>
                        <label>
                            <input
                                type="checkbox"
                            // checked={isChecked}
                            // onChange={handleCheckboxChange}
                            />
                            Li e concordo com os termos
                        </label>
                        <button>Finalizar</button>
                    </C.Inputs>
                </C.Form>
            </C.Card>
        </C.Container>
    )
}

export default FormStepFinish