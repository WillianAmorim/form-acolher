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
    // diagnostico: yup.string().required('Diagnóstico é obrigatório'),
    // outros: yup.string().required('Outros é obrigatório'),
});

const FormStep6 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const {
        handleSubmit,
        // formState: { errors },
    } = useHookTeste({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 5
        });
    }, [dispatch]);

    const handleChangeOptionOutros = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setOutrasDoencas,
            payload: e.target.value
        })
    }

    const onSubmit = () => {

        dispatch({
            type: FormActions.setOutrasDoencas,
            payload: state.outrasDoencas
        });

        if (state.doencas.includes('autismo')) {
            navigate('/step7');
        } else {
            navigate('/step6')
        }

    };

    const handleSelectComorbiditiesChange = (comorbidade: string): void => {
        const newDoencas: string[] = state.doencas.includes(comorbidade)
            ? state.doencas.filter((item: string) => item !== comorbidade)
            : [...state.doencas, comorbidade]; // Adiciona se não estiver


        const elementoOutrasDoencas = document.getElementById('outrasDoencas')

        if (newDoencas.includes('Outros')) {
            if (elementoOutrasDoencas) {
                elementoOutrasDoencas.style.display = 'flex';

            }
        } else {
            if (elementoOutrasDoencas) {
                elementoOutrasDoencas.style.display = 'none';
            }
        }

        dispatch({
            type: FormActions.setDoencas,
            payload: newDoencas
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
                    Tem comorbidades associadas?
                    <SelectOption
                        title="Autismo (Transtorno do Espectro Autista)"
                        description=""
                        selected={state.doencas.includes('autismo')}
                        onClick={() => handleSelectComorbiditiesChange('autismo')}
                    />

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
                        selected={state.doencas.includes('Outros')}
                        onClick={() => handleSelectComorbiditiesChange('Outros')}
                    />

                    <label htmlFor="" id='outrasDoencas'>
                        Outros
                        <input
                            type="text"
                            autoFocus
                            value={state.outrasDoencas}
                            onChange={handleChangeOptionOutros}
                        />
                        {/* {errors.outros && <C.ErrorMessage>{errors.outros.message}</C.ErrorMessage>} */}
                    </label>
                </label>



                <Link to='/step4' className='backButton'>Voltar</Link>
                <button onClick={handleSubmit(onSubmit)}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep6
