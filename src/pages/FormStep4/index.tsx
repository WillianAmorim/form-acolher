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
    possui_deficiencia: yup.string().required('Selecione uma opção'),
});

const FormStep4 = () => {
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
                payload: 4,
            });
        }
    }, [state.nome, dispatch, navigate]);

    const onSubmit = () => {
        dispatch({
            type: FormActions.setPossui_deficiencia,
            payload: state.possui_deficiencia,
        });
        
        if (state.possui_deficiencia === 'sim') {
            navigate('/step5');
        } else {
            navigate('/stepFinish');
        }
    };

    return (
        <Theme>
            <C.Container>
                <p>Preencha com seus dados para conseguirmos entrar em contato.</p>

                <hr />

                <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="possui_deficiencia">
                    Possui Deficiência
                    <select
                        id="possui_deficiencia"
                        {...register('possui_deficiencia')}
                        value={state.possui_deficiencia}
                        onChange={(e) => dispatch({ type: FormActions.setPossui_deficiencia, payload: e.target.value })}
                        style={{
                            backgroundColor: state.possui_deficiencia ? '#F977B7' : '#0173DF', // Muda a cor com base na seleção
                            color: 'white', // Adicione uma cor de texto se necessário
                        }}>
                        <option value="">Selecione uma opção</option>
                        <option value="sim">Sim</option>
                        <option value="nao">Não</option>
                    </select>
                    {errors.possui_deficiencia && <C.ErrorMessage>{errors.possui_deficiencia.message}</C.ErrorMessage>}
                </label>

                    <Link to='/step3' className='backButton'>Voltar</Link>
                    <button type="submit">Próximo</button>
                </form>
            </C.Container>
        </Theme>
    );
};

export default FormStep4;
