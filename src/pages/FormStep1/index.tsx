import * as C from './styles';
import { Theme } from '../../components/Theme'
import { useNavigate } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';

const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, [dispatch]);

    const handleNextStep = () => {
        if ((state.name !== '') && (state.idade !== '') && (state.genero !== '') && (state.matricula !== '') && (state.turma !== '')) {
            navigate('/step2')
        } else {
            alert('Preencha os dados')
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setIdade,
            payload: e.target.value
        })
    }

    const manageEnrollmentStatus = (matricula: string) => {
        dispatch({
            type: FormActions.setMatricula,
            payload: matricula
        })
    }

    const setGenero = (genero: string) => {
        dispatch({
            type: FormActions.setGenero,
            payload: genero
        })
    }

    const handleTurmaChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: FormActions.setTurma,
            payload: e.target.value
        });
    };

    return (
        <Theme>
            <C.Container>
                <p>Passo 1/3</p>
                {/* <h1>Vamos começar com seu nome</h1> */}
                <p>Preencha o campo abaixo com o seu nome completo.</p>

                <hr />

                <label htmlFor="">
                    Nome do aluno
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    Idade
                    <input
                        type="text"
                        autoFocus
                        value={state.idade}
                        onChange={handleAgeChange}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    Sexo
                    <SelectOption
                        title="Masculino"
                        description=""
                        selected={state.genero === 'Masculino'}
                        onClick={() => setGenero('Masculino')}
                    />

                    <SelectOption
                        title="Feminino"
                        description=""
                        selected={state.genero === 'Feminino'}
                        onClick={() => setGenero('Feminino')}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    Matrícula/Rematrícula
                    <SelectOption
                        title="Matrícula"
                        description=""
                        selected={state.matricula === 'Matrícula'}
                        onClick={() => manageEnrollmentStatus('Matrícula')}
                    />

                    <SelectOption
                        title="Rematrícula"
                        description=""
                        selected={state.matricula === 'Rematrícula'}
                        onClick={() => manageEnrollmentStatus('Rematrícula')}
                    />
                </label>

                <hr />

                <label htmlFor="turmaSelect">
                    Escolha a turma a ser cursada
                    <select id="turmaSelect" value={state.turma} onChange={handleTurmaChange}>
                        <option value="">Selecione uma turma</option>
                        <option value="turma1">turma1</option>
                        <option value="turma2">turma2</option>
                        <option value="turma3">turma3</option>
                        <option value="turma4">turma4</option>
                        <option value="turma5">turma5</option>
                        <option value="turma6">turma6</option>
                        <option value="turma7">turma7</option>
                        <option value="turma8">turma8</option>
                        <option value="turma9">turma9</option>
                    </select>
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep1