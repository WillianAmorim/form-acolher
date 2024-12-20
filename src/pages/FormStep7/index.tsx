import * as C from './styles';
import { Theme } from '../../components/Theme'
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

const FormStep7 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

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

    const handleNextStep = () => {
        if (state.atendenteTerapeuta !== '') {
            navigate('/step8')
        } else {
            alert('Preencha os dados')
        }
    }

    const therapeuticAttendant = (atendenteTerapeuta: string) => {
        dispatch({
            type: FormActions.setAtendenteTerapeuta,
            payload: atendenteTerapeuta
        })
    }

    return (
        <Theme>
            <C.Container>
                {/* <p>Passo 5/6</p> */}
                {/* <h1>Lega {state.name}, onde te achamos?</h1> */}
                <p>AVALIAÇÃO DE NÍVEL DE SUPORTE PSICOSSOCIAL PARA ALUNOS COM TEA.</p>

                <hr />

                <label htmlFor="">
                    Tem Atendente Terapêutico Particular?
                    <SelectOption
                        title="Sim"
                        description=""
                        selected={state.atendenteTerapeuta === 'Sim'}
                        onClick={() => therapeuticAttendant('Sim')}
                    />

                    <SelectOption
                        title="Não"
                        description=""
                        selected={state.atendenteTerapeuta === 'Não'}
                        onClick={() => therapeuticAttendant('Não')}
                    />
                </label>

                <Link to='/step4' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep7