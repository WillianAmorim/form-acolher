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

    const handleUnidadeChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: FormActions.setUnidade,
            payload: e.target.value
        });
    };

    return (
        <Theme>
            <C.Container>
                {/* <p>Passo 1/3</p> */}
                {/* <h1>Vamos começar com seu nome</h1> */}
                <p>Preencha o campo abaixo com atenção.</p>

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

                <label htmlFor="turmaSelect">
                    Escolha sua unidade desejada
                    <select id="turmaSelect" value={state.unidade} onChange={handleUnidadeChange}>
                        <option value="">Selecione a unidade</option>
                        <option value="vinhais">Vinhais</option>
                        <option value="cohatrac">Cohatrac</option>
                        <option value="turu">Turu</option>
                    </select>
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
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep1