import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { useEffect } from 'react';
import { useForm as useHookForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputMask from 'react-input-mask';

// Schema de validação
const schema = yup.object().shape({
    nome_mae: yup.string().required('Nome da mãe é obrigatório'),
    telefone: yup.string().required('Telefone é obrigatório'),
    responsavel_financeiro: yup.string().required('Responsável financeiro é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
});

const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useHookForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        if (state.nome === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3,
            });
        }
    }, [state.nome, dispatch, navigate]);

    const onSubmit = () => {
        // Atualiza o estado do formulário com os dados validados
        dispatch({
            type: FormActions.setNome_mae,
            payload: state.nome_mae,
        });
        dispatch({
            type: FormActions.setTelefone,
            payload: state.telefone,
        });
        dispatch({
            type: FormActions.setResponsavel_financeiro,
            payload: state.responsavel_financeiro,
        });
        dispatch({
            type: FormActions.setEmail,
            payload: state.email,
        });

        navigate('/step4');
    };

    return (
        <Theme>
            <C.Container>
                <p>Preencha com seus dados para conseguirmos entrar em contato.</p>

                <hr />

                <label>
                    Nome da Mãe
                    <input
                        value={state.nome_mae}
                        type="text"
                        {...register('nome_mae')}
                        onChange={(e) => dispatch({ type: FormActions.setNome_mae, payload: e.target.value })}
                    />
                    {errors.nome_mae && <C.ErrorMessage>{errors.nome_mae.message}</C.ErrorMessage>}
                </label>

                <hr />

                <label>
                    Responsável Financeiro
                    <input
                        value={state.responsavel_financeiro}
                        type="text"
                        {...register('responsavel_financeiro')}
                        onChange={(e) => dispatch({ type: FormActions.setResponsavel_financeiro, payload: e.target.value })}
                    />
                    {errors.responsavel_financeiro && <C.ErrorMessage>{errors.responsavel_financeiro.message}</C.ErrorMessage>}
                </label>

                <hr />

                <label>
                    Qual seu e-mail?
                    <input
                        value={state.email}
                        type="text"
                        {...register('email')}
                        onChange={(e) => dispatch({ type: FormActions.setEmail, payload: e.target.value })}
                    />
                    {errors.email && <C.ErrorMessage>{errors.email.message}</C.ErrorMessage>}
                </label>

                <hr />

                <label htmlFor="telefone">
                    Telefone do Responsável Financeiro
                    <InputMask
                        value={state.telefone}
                        mask="(99) 99999-9999"
                        {...register('telefone')}
                        onChange={(e) => dispatch({ type: FormActions.setTelefone, payload: e.target.value })}
                    />
                    {errors.telefone && <C.ErrorMessage>{errors.telefone.message}</C.ErrorMessage>}
                </label>

                <Link to='/step2' className='backButton'>Voltar</Link>
                <button type="button" onClick={handleSubmit(onSubmit)}>Próximo</button>
            </C.Container>
        </Theme>
    );
};

export default FormStep3;
