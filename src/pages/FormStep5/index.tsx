import * as C from './styles';
import { Theme } from '../../components/Theme';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext';
import { ChangeEvent, useEffect } from 'react';
import { useForm as useHookForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { BiNews } from 'react-icons/bi';

// Schema de validação
const schema = yup.object().shape({
    diagnostico: yup.string().required('Preencha o diagnóstico'),
    comorbidade: yup.array().min(1, 'Selecione ao menos uma opção'), // Ajuste aqui para garantir que ao menos uma opção seja selecionada
});

const FormStep5 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();
    const { register, handleSubmit, formState: { errors } } = useHookForm({
        resolver: yupResolver(schema),
    });

    useEffect(() => {
        if (state.nome === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 5,
            });
        }
    }, [state.nome, dispatch, navigate]);

    const onSubmit = () => {
        dispatch({
            type: FormActions.setDiagnostico,
            payload: state.diagnostico,
        });
        dispatch({
            type: FormActions.setComorbidade,
            payload: state.comorbidade,
        });

        navigate('/step6');
    };

    // const validadeInputOutros = (e) => {
    //     console.log(e.target.value)

    //     dispatch({ type: FormActions.setOutros, payload: e.target.value });
    // }

    // const newArrayComorbidades: any[] = []

    const functionDispath = (value: string) => {
        dispatch({ type: FormActions.setComorbidade, payload: value })
    }

    const validateArrayComorbidades = (e: ChangeEvent<HTMLSelectElement>, doenca: string) => {

        console.log(e.target.value)

        // Jogar para outra função

        // const labelOutros = document.getElementById('outros')


        // if (doenca === 'outros') {
        //     if (value === 'sim' && labelOutros) {
        //         labelOutros.style.display = 'block';
        //     } else if (labelOutros) {
        //         labelOutros.style.display = 'none';
        //     }
        //     return;
        // }


        //verifica se o item já está no array
        // const index = state.comorbidade.indexOf(doenca);

        // if (newArrayComorbidades.includes(name) && name !== 'outros') {
        //     newArrayComorbidades.push(name);
        //     console.log(newArrayComorbidades)
        // } else if (value === 'sim') {
        //     newArrayComorbidades.push(name)
        //     console.log(newArrayComorbidades)
        // } else if (index !== -1) {
        //     newArrayComorbidades.splice(index, 1);
        //     console.log(newArrayComorbidades)
        // }
        // if (!state.comorbidade.includes(doenca)) {
        //     state.comorbidade.push(doenca)
        //     console.log('caso1', state.comorbidade)
        //     console.log(e.target)
        // } else {
        //     state.comorbidade.splice(index, 1)
        //     console.log(state.comorbidade)
            
        // }


        functionDispath(e.target.value)

    }

    // const newArrayDoencas: any[] = []

    // const testeOnChange = (e, doenca) => {
    //     const value = e.target.value
    //     const nodeList = e.target.children
    //     // console.log(nodeList)
    //     const index = newArrayDoencas.indexOf(doenca);

    //     const testeArray = Array.from(nodeList)

    //     if (value === 'sim') {
    //         newArrayDoencas.push(doenca)
    //         // const node = testeArray.find((item: { selected: boolean }) => item.selected);
    //         const node = testeArray.find((item) => item.selected);
    //         node.selected = false
    //         console.log(nodeList)
    //     } else if (value === 'nao') {
    //         newArrayDoencas.splice(index, 1);
    //     }

    //     console.log(newArrayDoencas)

    //     state.comorbidade = newArrayDoencas

    //     dispatch({
    //         type: FormActions.setComorbidade,
    //         payload: state.comorbidade,
    //     });

    // }

    return (
        <Theme>
            <C.Container>
                <p>AVALIAÇÃO DE NÍVEL DE SUPORTE PSICOSSOCIAL PARA ALUNOS COM TEA.</p>

                <hr />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Diagnóstico
                        <input
                            type="text"
                            autoFocus
                            {...register('diagnostico')}
                        />
                        {errors.diagnostico && (
                            <C.ErrorMessage>{errors.diagnostico.message}</C.ErrorMessage>
                        )}
                    </label>

                    <hr />

                    {/* <label htmlFor="modalidade">
                        Modalidade
                        <select
                            id="modalidade" // Corrigido para id "modalidade"
                        // {...register('modalidade')}
                        // value={state.modalidade}
                        // onChange={(e) => dispatch({ type: FormActions.setModalidade, payload: e.target.value })}
                        // style={{
                        //     backgroundColor: state.modalidade ? '#F977B7' : '#0173DF', // Muda a cor com base na seleção
                        //     color: 'white', // Adicione uma cor de texto se necessário
                        // }}
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                        </select>
                        {/* {errors.modalidade && <C.ErrorMessage>{errors.modalidade.message}</C.ErrorMessage>} */}

                    <label htmlFor='epilepsia'>
                        Epilepsia
                        <select
                            id='epilepsia'
                            // value='sim'
                            {...register('comorbidade')}
                            onChange={(e) => { validateArrayComorbidades(e, 'epilepsia') }}
                            style={{
                                backgroundColor: state.comorbidade.includes('epilepsia') ? '#F977B7' : '#0173DF',
                                color: 'white',
                            }}
                        >
                            <option value="selecione uma opcao">Selecione uma opção</option>
                            <option value='sim'>Yes</option>
                            <option value='nao'>No</option>
                        </select>
                        {errors.comorbidade && <C.ErrorMessage>{errors.comorbidade.message}</C.ErrorMessage>}
                    </label>
                    <p>{state.comorbidade}</p>
                    <label>
                        Deficiência Intelectual
                        <select
                            // value={newArrayComorbidades.includes('deficiencia-intelectual') ? 'sim' : 'nao'}
                            {...register('comorbidade')}
                            onChange={(e) => { validateArrayComorbidades(e, 'deficiencia-intelectual') }}
                            style={{
                                backgroundColor: state.comorbidade.includes('deficiencia-intelectual') ? '#F977B7' : '#0173DF',
                                color: 'white',
                            }}
                        >
                            <option value="selecione uma opcao">Selecione uma opção</option>
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                        </select>
                        {errors.comorbidade && <C.ErrorMessage>{errors.comorbidade.message}</C.ErrorMessage>}
                    </label>

                    <label>
                        Alergia
                        <select
                            {...register('comorbidade')}
                            onChange={(e) => { validateArrayComorbidades(e, 'alergia') }}
                            style={{
                                backgroundColor: state.comorbidade.includes('alergia') ? '#F977B7' : '#0173DF',
                                color: 'white',
                            }}
                        >
                            <option value="selecione uma opcao">Selecione uma opção</option>
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                        </select>
                        {errors.comorbidade && <C.ErrorMessage>{errors.comorbidade.message}</C.ErrorMessage>}
                    </label>

                    <label>
                        Outros
                        <select
                            {...register('comorbidade')}
                            style={{
                                backgroundColor: state.comorbidade.includes('Outros') ? '#F977B7' : '#0173DF',
                                color: 'white',
                            }}
                        >
                            <option value="selecione uma opcao">Selecione uma opção</option>
                            <option value="sim">Sim</option>
                            <option value="nao">Não</option>
                        </select>
                        {errors.comorbidade && <C.ErrorMessage>{errors.comorbidade.message}</C.ErrorMessage>}
                    </label>
                    <label htmlFor="" id='outros'>
                        Outros
                        <input
                            type="text"
                            autoFocus
                            value={state.outros}
                        // onChange={(e) => {
                        //     validadeInputOutros(e)
                        // }}
                        // onClick={comorbidadeOutros()}
                        />
                    </label>

                    <Link to='/step4' className='backButton'>Voltar</Link>
                    <button type="submit">Próximo</button>
                </form>
            </C.Container>
        </Theme>
    );
};

export default FormStep5;
