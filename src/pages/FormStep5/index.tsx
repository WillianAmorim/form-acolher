import * as C from './styles';
import { Theme } from '../../components/Theme'
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

const FormStep5 = () => {
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
        if (state.diagnostico !== '') {
            navigate('/step6')
        } else {
            alert('Preencha os dados')
        }
    }


    const handleDiagnosticChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setDiagnostico,
            payload: e.target.value
        })
    }

    const handleSelectComorbiditiesChange = (comorbidade: string): void => {
        const newComorbidades: string[] = state.comorbidade.includes(comorbidade)
            ? state.comorbidade.filter((item: string) => item !== comorbidade) // Verifica se matricula é um array de strings
            : [...state.comorbidade, comorbidade]; // Adiciona se não estiver
    
        dispatch({
            type: FormActions.setComorbidade,
            payload: newComorbidades
        });
    };
    

    return (
        <Theme>
            <C.Container>
                {/* <p>Passo 5/6</p> */}
                {/* <h1>Lega {state.name}, onde te achamos?</h1> */}
                <p>AVALIAÇÃO DE NÍVEL DE SUPORTE PSICOSSOCIAL PARA ALUNOS COM TEA.</p>

                <hr />

                <label htmlFor="">
                    Diagnóstico
                    <input
                        type="text"
                        autoFocus
                        value={state.diagnostico}
                        onChange={handleDiagnosticChange}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    Tem comorbidades associadas?
                    <SelectOption
                        title="Epilepsia"
                        description=""
                        selected={state.comorbidade.includes('Epilepsia')}
                        onClick={() => handleSelectComorbiditiesChange('Epilepsia')}
                    />

                    <SelectOption
                        title="Deficiência Intelectual"
                        description=""
                        selected={state.comorbidade.includes('Deficiência Intelectual')}
                        onClick={() => handleSelectComorbiditiesChange('Deficiência Intelectual')}
                    />

                    <SelectOption
                        title="Alergia"
                        description=""
                        selected={state.comorbidade.includes('Alergia')}
                        onClick={() => handleSelectComorbiditiesChange('Alergia')}
                    />
                    <SelectOption
                        title="Outros"
                        description=""
                        selected={state.comorbidade.includes('Outros')}
                        onClick={() => handleSelectComorbiditiesChange('Outros')}
                    />
                </label>



                <Link to='/step3' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep5