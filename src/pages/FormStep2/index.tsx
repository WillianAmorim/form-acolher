import * as C from './styles';
import { Theme } from '../../components/Theme'
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption'

const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.name === '') {
            navigate('/')

        }else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            })
        }

    }, [state.name, dispatch, navigate])

    const handleNextStep = () => {
        if (state.name !== '') {
            navigate('/step3')
        } else {
            alert('Preencha os dados')
        }
    }

    const manageShift = (turno: string) => {
        dispatch({
            type: FormActions.setTurno,
            payload: turno
        })
    }


    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                {/* <h1>{state.name}, o que melhor descreve você?</h1> */}
                <p>Escolha a opção que melhor condiz com seu estado atual profissionalmente</p>

                <hr />

                <label htmlFor="">
                    Modalidade
                    <SelectOption
                        title="Integral"
                        description=""
                        selected={state.turno === 'Integral'}
                        onClick={() => manageShift('Integral')}
                    />

                    <SelectOption
                        title="Matutino"
                        description=""
                        selected={state.turno === 'Parcial'}
                        onClick={() => manageShift('Parcial')}
                    />

                    <SelectOption
                        title="Vespertino"
                        description=""
                        selected={state.turno === 'Tarde'}
                        onClick={() => manageShift('Tarde')}
                    />
                </label>

                <Link to='/step1' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep2