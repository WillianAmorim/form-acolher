import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { useEffect } from 'react';
import { useForm as useHookForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Schema de validação
const schema = yup.object().shape({
    nome: yup.string().required('Nome é obrigatório'),
    idade: yup.number()
        .typeError('Idade deve ser um número')
        .positive('Idade deve ser um número positivo')
        .integer('Idade deve ser um número inteiro')
        .required('Idade é obrigatória'),
    sexo: yup.string().required('Sexo é obrigatório'),
    matricula: yup.string().required('Status de matrícula é obrigatório'),
    serie_2025: yup.string().required('Escolha uma turma é obrigatória'),
    unidade: yup.string().required('Unidade é obrigatória'),
});

const FormStep1 = () => {
    const navigate = useNavigate();
    const { dispatch, state } = useForm();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useHookForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, [dispatch]);

    const onSubmit = (data: any) => {
        // Atualiza o estado do formulário

        // Verifica se a idade é um número válido
        if (data.idade === '' || isNaN(data.idade)) {
            // Não faça nada ou adicione um alerta, pois a idade é inválida
            console.error("Idade inválida");
            return;
        }

        dispatch({
            type: FormActions.setIdade,
            payload: state.idade, // Usando diretamente o valor já convertido
        });

        dispatch({
            type: FormActions.setNome,
            payload: state.nome
        });
        dispatch({
            type: FormActions.setIdade,
            payload: state.idade
        });
        dispatch({
            type: FormActions.setSexo,
            payload: state.sexo
        });
        dispatch({
            type: FormActions.setMatricula,
            payload: state.matricula
        });
        dispatch({
            type: FormActions.setSerie_2025,
            payload: state.serie_2025
        });
        dispatch({
            type: FormActions.setUnidade,
            payload: state.unidade
        });

        navigate('/step2');
    };

    return (
        <Theme>
            <C.Container>
                <p>Preencha o campo abaixo com atenção.</p>

                <hr />

                <label>
                    Nome do aluno
                    <input
                        type="text"
                        value={state.nome}
                        {...register('nome')}
                        onChange={(e) => dispatch({ type: FormActions.setNome, payload: e.target.value })}
                    />
                    {errors.nome && <C.ErrorMessage>{errors.nome.message}</C.ErrorMessage>}
                </label>

                <hr />

                <label>
                    Idade
                    <input
                        type="number"
                        value={state.idade}
                        {...register('idade', {
                            valueAsNumber: true,
                            required: 'Idade é obrigatória', // Mensagem de erro personalizada
                        })}
                        onChange={(e) => dispatch({ type: FormActions.setIdade, payload: e.target.value })}
                    />
                    {errors.idade && <C.ErrorMessage>{errors.idade.message}</C.ErrorMessage>}
                </label>

                <hr />

                {/* <label>
                    Sexo
                    <SelectOption
                        title="Masculino"
                        description=""
                        selected={state.sexo === 'M'}
                        onClick={() => dispatch({ type: FormActions.setSexo, payload: 'M' })}
                    />

                    <SelectOption
                        title="Feminino"ja tenho
                        description=""
                        selected={state.sexo === 'F'}
                        onClick={() => dispatch({ type: FormActions.setSexo, payload: 'F' })}
                    />
                    {errors.sexo && <C.ErrorMessage>{errors.sexo.message}</C.ErrorMessage>}
                </label> */}

                <label htmlFor="sexo">
                    Sexo
                    <select
                        id="sexo"
                        {...register('sexo')}
                        value={state.sexo}
                        onChange={(e) => dispatch({ type: FormActions.setSexo, payload: e.target.value })}
                        style={{
                            backgroundColor: state.sexo ? '#F977B7' : '#0173DF', // Muda a cor com base na seleção
                            color: 'white', // Adicione uma cor de texto se necessário
                        }}>
                        <option value="">Selecione uma opção</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>
                    {errors.sexo && <C.ErrorMessage>{errors.sexo.message}</C.ErrorMessage>}
                </label>

                <hr />

                <label htmlFor="turmaSelect">
                    Escolha sua unidade desejada
                    <select id="turmaSelect" value={state.unidade} {...register('unidade')} onChange={(e) => dispatch({ type: FormActions.setUnidade, payload: e.target.value })} style={{
                            backgroundColor: state.unidade ? '#F977B7' : '#0173DF', // Muda a cor com base na seleção
                            color: 'white', // Adicione uma cor de texto se necessário
                        }}>
                        <option value="">Selecione a unidade</option>
                        <option value="cohafuma">Cohafuma</option>
                        <option value="cohatrac">Cohatrac</option>
                        <option value="turu">Turu</option>
                    </select>
                    {errors.unidade && <C.ErrorMessage>{errors.unidade.message}</C.ErrorMessage>}
                </label>

                <hr />

                <label htmlFor="matriculaRematricula">
                    Matrícula/Rematrícula
                    <select id="matriculaRematricula" value={state.matricula} {...register('matricula')} onChange={(e) => dispatch({ type: FormActions.setMatricula, payload: e.target.value })} style={{
                            backgroundColor: state.matricula ? '#F977B7' : '#0173DF', // Muda a cor com base na seleção
                            color: 'white', // Adicione uma cor de texto se necessário
                        }}>
                        <option value="">Selecione uma opção</option>
                        <option value="matricula">Matrícula</option>
                        <option value="rematricula">Rematricula</option>
                    </select>
                    {errors.matricula && <C.ErrorMessage>{errors.matricula.message}</C.ErrorMessage>}
                </label>

                <hr />

                {/* <label>
                    Matrícula/Rematrícula
                    <SelectOption
                        title="Matrícula"
                        description=""
                        selected={state.matricula === 'matricula'}
                        onClick={() => {
                            dispatch({ type: FormActions.setMatricula, payload: 'matricula' });
                            // Adiciona a lógica para definir o campo
                            register('matricula').onChange({ target: { value: 'matricula' } });
                        }}
                    />

                    <SelectOption
                        title="Rematrícula"
                        description=""
                        selected={state.matricula === 'rematricula'}
                        onClick={() => {
                            dispatch({ type: FormActions.setMatricula, payload: 'rematricula' });
                            // Adiciona a lógica para definir o campo
                            register('matricula').onChange({ target: { value: 'rematricula' } });
                        }}
                    />
                    {errors.matricula && <C.ErrorMessage>{errors.matricula.message}</C.ErrorMessage>}
                </label> */}

                <label htmlFor="turmaSelect">
                    Escolha a turma a ser cursada
                    <select id="turmaSelect" value={state.serie_2025} {...register('serie_2025')} onChange={(e) => dispatch({ type: FormActions.setSerie_2025, payload: e.target.value })} style={{
                            backgroundColor: state.serie_2025 ? '#F977B7' : '#0173DF', // Muda a cor com base na seleção
                            color: 'white', // Adicione uma cor de texto se necessário
                        }}>
                        <option value="">Selecione uma turma</option>
                        <option value="bercario">Berçario</option>
                        <option value="mine-maternal">Mine Maternal</option>
                        <option value="infantil-1">Infantil 1</option>
                        <option value="infantil-2">Infantil 2</option>
                        <option value="infantil-3">Infantil 3</option>
                        <option value="infantil-4">Infantil 4</option>
                        <option value="1-ano">1° ano</option>
                        <option value="2-ano">2° ano</option>
                        <option value="3-ano">3° ano</option>
                        <option value="4-ano">4° ano</option>
                        <option value="5-ano">5° ano</option>
                        <option value="6-ano">6° ano</option>
                        <option value="7-ano">7° ano</option>
                        <option value="8-ano">8° ano</option>
                        <option value="9-ano">9° ano</option>
                    </select>
                    {errors.serie_2025 && <C.ErrorMessage>{errors.serie_2025.message}</C.ErrorMessage>}
                </label>

                <div>
                    <button type="button" onClick={handleSubmit(onSubmit)}>Próximo</button>
                </div>
            </C.Container>
        </Theme>
    );
};

export default FormStep1;
