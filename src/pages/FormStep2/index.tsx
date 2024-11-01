import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { useEffect } from 'react';
import { useForm as useHookForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Schema de validação
const schema = yup.object().shape({
    modalidade: yup.string().required('Escolha uma modalidade é obrigatória'),
});

const FormStep2 = () => {
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
                payload: 2,
            });
        }
    }, [state.nome, dispatch, navigate]);

    const onSubmit = (data: any) => {
        dispatch({
            type: FormActions.setModalidade,
            payload: data.modalidade,
        });
        navigate('/step3');
    };

    return (
        <Theme>
            <C.Container>
                <p>Escolha a opção que melhor condiz com seu estado atual profissionalmente</p>

                <hr />

                {/* <label htmlFor="modalidade">
                    Modalidade
                    <SelectOption
                        title="Integral"
                        description=""
                        selected={state.modalidade === 'integral'}
                        onClick={() => dispatch({ type: FormActions.setModalidade, payload: 'integral' })}
                    />

                    <SelectOption
                        title="Matutino"
                        description=""
                        selected={state.modalidade === 'matutino'}
                        onClick={() => dispatch({ type: FormActions.setModalidade, payload: 'matutino' })}
                    />

                    <SelectOption
                        title="Vespertino"
                        description=""
                        selected={state.modalidade === 'vespertino'}
                        onClick={() => dispatch({ type: FormActions.setModalidade, payload: 'vespertino' })}
                    />
                    {errors.modalidade && <C.ErrorMessage>{errors.modalidade.message}</C.ErrorMessage>}
                </label> */}

                <label htmlFor="modalidade">
                    Modalidade
                    <select
                        id="modalidade" // Corrigido para id "modalidade"
                        {...register('modalidade')}
                        value={state.modalidade}
                        onChange={(e) => dispatch({ type: FormActions.setModalidade, payload: e.target.value })}
                        style={{
                            backgroundColor: state.modalidade ? '#F977B7' : '#0173DF', // Muda a cor com base na seleção
                            color: 'white', // Adicione uma cor de texto se necessário
                        }}
                    >
                        <option value="">Selecione uma opção</option>
                        <option value="matutino">Matutino</option>
                        <option value="vespertino">Vespertino</option>
                        <option value="integral">Integral</option>
                    </select>
                    {errors.modalidade && <C.ErrorMessage>{errors.modalidade.message}</C.ErrorMessage>}
                </label>

                <div>
                    <Link to='/step1' className='backButton'>Voltar</Link>
                    <button onClick={handleSubmit(onSubmit)}>Próximo</button>
                </div>
            </C.Container>
        </Theme>
    );
};

export default FormStep2;
