import * as C from './styles';
import { Theme } from '../../components/Theme'
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react';
import InputMask from 'react-input-mask';

const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if (state.nome === '') {
            navigate('/')
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            })
        }

    }, [state.nome, dispatch, navigate])

    const handleNextStep = () => {
        if (state.nome_mae !== '' && state.telefone !== '') {
            navigate('/step4')
        } else {
            alert('Preencha os dados')
        }
    }

    const handleNameMotherChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setNome_mae,
            payload: e.target.value
        })
    }

    const handleTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setTelefone, // Aqui assumo que você tenha uma ação para definir o telefone
            payload: event.target.value
        });
    };

    const handleRespFinanChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setResponsavel_financeiro,
            payload: e.target.value
        })
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        })
    }

    return (
        <Theme>
            <C.Container>
                {/* <p>Passo 3/3</p> */}
                {/* <h1>Lega {state.name}, onde te achamos;/</h1> */}
                <p>Preencha com seus dados para conseguirmos entrr em contato.</p>

                <hr />

                <label htmlFor="">
                    Nome da Mãe
                    <input
                        type="text"
                        autoFocus
                        value={state.nome_mae}
                        onChange={handleNameMotherChange}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    Responsável Financeiro
                    <input
                        type="text"
                        autoFocus
                        value={state.responsavel_financeiro}
                        onChange={handleRespFinanChange}
                    />
                </label>

                <hr />

                <label htmlFor="">
                    Qual seu e-mail?
                    <input
                        type="text"
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <hr />

                <label htmlFor="telefone">
                    Telefone do Responsável Financeiro
                    <InputMask
                        mask="(99) 99999-9999" // Máscara para telefone com 9 dígitos
                        value={state.telefone} // Valor controlado pelo estado
                        onChange={handleTelefoneChange} // Função que atualiza o estado do telefone
                    >
                    </InputMask>
                </label>

                {/* <label htmlFor="">
                    Qual seu e-mail?
                    <input
                        type="text"
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label> */}

                {/* <label htmlFor="">
                    Qual seu GitHub?
                    <input
                        type="urs"
                        autoFocus
                        value={state.github}
                        onChange={handleNameMotherChange}
                    />
                </label> */}

                <Link to='/step2' className='backButton'>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>
        </Theme>
    )
}

export default FormStep3