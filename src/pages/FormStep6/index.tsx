import * as C from './styles';
import { Theme } from '../../components/Theme'
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';
// import { useForm as useHookForm } from 'react-hook-form';
import { useForm as useHookTeste } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    diagnostico: yup.string().required('Diagnóstico é obrigatório'),
    // outros: yup.string().required('Outros é obrigatório'),
});

const FormStep6 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useHookTeste({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 5
        });
    }, [dispatch]);

    // const handleNextStep = () => {
    //     if ((state.diagnostico !== '') && (state.comorbidade.length > 0)) {
    //         navigate('/step6')
    //     } else {
    //         alert('Preencha os dados')
    //     }
    // }


    // const handleDiagnosticChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     dispatch({
    //         type: FormActions.setDiagnostico,
    //         payload: e.target.value
    //     })
    // }

    const handleChangeOptionOutros = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        dispatch({
            type: FormActions.setOutros,
            payload: e.target.value
        })
    }

    const onSubmit = () => {

        dispatch({
            type: FormActions.setDiagnostico,
            payload: state.diagnostico, // Usando diretamente o valor já convertido
        });

        dispatch({
            type: FormActions.setOutros,
            payload: state.outros
        });

        navigate('/stepFinish');
    };

    const handleSelectComorbiditiesChange = (comorbidade: string): void => {
        const newComorbidades: string[] = state.comorbidade.includes(comorbidade)
            ? state.comorbidade.filter((item: string) => item !== comorbidade) // Verifica se matricula é um array de strings
            : [...state.comorbidade, comorbidade]; // Adiciona se não estiver

        const elementoOutros = document.getElementById('outros')

        if (newComorbidades.includes('Outros')) {
            if (elementoOutros) {
                elementoOutros.style.display = 'flex';

            }
        } else {
            if (elementoOutros) {
                elementoOutros.style.display = 'none';
            }
        }

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
                        {...register('diagnostico')}
                        onChange={(e) => dispatch({ type: FormActions.setDiagnostico, payload: e.target.value })}
                    />
                    {errors.diagnostico && <C.ErrorMessage>{errors.diagnostico.message}</C.ErrorMessage>}
                </label>

                <hr />

                <label htmlFor="">
                    Tem comorbidades associadas?
                    <SelectOption
                        title="Epilepsia"
                        description=""
                        selected={state.comorbidade.includes('epilepsia')}
                        onClick={() => handleSelectComorbiditiesChange('epilepsia')}
                    />

                    <SelectOption
                        title="Deficiência Intelectual"
                        description=""
                        selected={state.comorbidade.includes('deficiencia-intelectual')}
                        onClick={() => handleSelectComorbiditiesChange('deficiencia-intelectual')}
                    />

                    <SelectOption
                        title="Alergia"
                        description=""
                        selected={state.comorbidade.includes('alergia')}
                        onClick={() => handleSelectComorbiditiesChange('alergia')}
                    />
                    <SelectOption
                        title="Outros"
                        description=""
                        selected={state.comorbidade.includes('Outros')}
                        onClick={() => handleSelectComorbiditiesChange('Outros')}
                    />

                    <label htmlFor="" id='outros'>
                        Outros
                        <input
                            type="text"
                            autoFocus
                            value={state.outros}
                            onChange={handleChangeOptionOutros}
                        />
                        {/* {errors.outros && <C.ErrorMessage>{errors.outros.message}</C.ErrorMessage>} */}
                    </label>
                </label>



                <Link to='/step5' className='backButton'>Voltar</Link>
                <button onClick={handleSubmit(onSubmit)}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep6
