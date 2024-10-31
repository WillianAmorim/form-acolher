// Context, Reducer, Provider, Hook

import { createContext, useContext, useReducer } from 'react'
import { ReactNode } from 'react';


type State = {
    currentStep: number;
    nome: string;
    email: string;
    sexo: string;
    idade: number | '';
    matricula: string;
    serie_2025: string;
    modalidade: string;
    nome_mae: string;
    telefone: string;
    outros: string
    responsavel_financeiro: string;
    possui_deficiencia: string
    diagnostico: string;
    comorbidade: string[];
    atendenteTerapeuta: string;
    // avaliacoes: [],
    questionOne: string;
    perguntaUm: string;
    questionSecond: string;
    perguntaDois: string;
    questionThird: string;
    perguntaTres: string;
    questionFourth: string;
    perguntaQuatro: string;
    questionFive: string;
    perguntaCinco: string;
    questionSix: string;
    perguntaSeis: string;
    questionSeven: string;
    perguntaSete: string;
    questionEight: string;
    perguntaOito: string;
    questionNine: string;
    perguntaNove: string;
    questionTen: string;
    perguntaDez: string;
    unidade: string;
    resetForm: () => void; // Incluindo a função resetForm no tipo do contexto
}

type Action = {
    type: FormActions;
    payload: any;
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void
}

type FormProviderProps = {
    children: ReactNode
}

const initialData: State = {
    currentStep: 0,
    nome: '',
    email: '',
    sexo: '',
    idade: '',
    matricula: '',
    serie_2025: '',
    modalidade: '',
    nome_mae: '',
    telefone: '',
    outros: '',
    responsavel_financeiro: '',
    possui_deficiencia: '',
    diagnostico: '',
    comorbidade: [],
    atendenteTerapeuta: '',
    questionOne: '',
    perguntaUm: '',
    questionSecond: '',
    perguntaDois: '',
    questionThird: '',
    perguntaTres: '',
    questionFourth: '',
    perguntaQuatro: '',
    questionFive: '',
    perguntaCinco: '',
    questionSix: '',
    perguntaSeis: '',
    questionSeven: '',
    perguntaSete: '',
    questionEight: '',
    perguntaOito: '',
    questionNine: '',
    perguntaNove: '',
    questionTen: '',
    perguntaDez: '',
    unidade: ''

}
// Context
const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum FormActions {
    setCurrentStep,
    setNome,
    setEmail,
    setSexo,
    setIdade,
    setMatricula,
    setSerie_2025,
    setTurno,
    setModalidade,
    setNome_mae,
    setOutros,
    setTelefone,
    setResponsavel_financeiro,
    setPossui_deficiencia,
    setDiagnostico,
    setComorbidade,
    setAtendenteTerapeuta,
    setQuestionOne,
    setPerguntaUm,
    setQuestionSecond,
    setPerguntaDois,
    setQuestionThird,
    setPerguntaTres,
    setQuestionFourth,
    setPerguntaQuatro,
    setQuestionFive,
    setPerguntaCinco,
    setQuestionSix,
    setPerguntaSeis,
    setQuestionSeven,
    setPerguntaSete,
    setQuestionEight,
    setPerguntaOito,
    setQuestionNine,
    setPerguntaNove,
    setQuestionTen,
    setPerguntaDez,
    setUnidade,
    resetForm // Adicionada ação de reset
}

const FormReducer = (state: State, action: Action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload };
        case FormActions.setNome:
            return { ...state, nome: action.payload };
        case FormActions.setEmail:
            return { ...state, email: action.payload };
        case FormActions.setSexo:
            return { ...state, sexo: action.payload };
        case FormActions.setIdade:
            return { ...state, idade: action.payload };
        case FormActions.setMatricula:
            return { ...state, matricula: action.payload };
        case FormActions.setSerie_2025:
            return { ...state, serie_2025: action.payload };
        case FormActions.setTurno:
            return { ...state, turno: action.payload };
        case FormActions.setModalidade:
            return { ...state, modalidade: action.payload };
        case FormActions.setNome_mae:
            return { ...state, nome_mae: action.payload };
        case FormActions.setOutros:
            return { ...state, outros: action.payload };
        case FormActions.setTelefone:
            return { ...state, telefone: action.payload };
        case FormActions.setResponsavel_financeiro:
            return { ...state, responsavel_financeiro: action.payload };
        case FormActions.setPossui_deficiencia:
            return { ...state, possui_deficiencia: action.payload };
        case FormActions.setDiagnostico:
            return { ...state, diagnostico: action.payload };
        case FormActions.setComorbidade:
            return { ...state, comorbidade: action.payload };
        case FormActions.setAtendenteTerapeuta:
            return { ...state, atendenteTerapeuta: action.payload };
        case FormActions.setQuestionOne:
            return { ...state, questionOne: action.payload };
        case FormActions.setPerguntaUm:
            return { ...state, perguntaUm: action.payload };
        case FormActions.setQuestionSecond:
            return { ...state, questionSecond: action.payload };
        case FormActions.setPerguntaDois:
            return { ...state, perguntaDois: action.payload };
        case FormActions.setQuestionThird:
            return { ...state, questionThird: action.payload };
        case FormActions.setPerguntaTres:
            return { ...state, perguntaTres: action.payload };
        case FormActions.setQuestionFourth:
            return { ...state, questionFourth: action.payload };
        case FormActions.setPerguntaQuatro:
            return { ...state, perguntaQuatro: action.payload };
        case FormActions.setQuestionFive:
            return { ...state, questionFive: action.payload };
        case FormActions.setPerguntaCinco:
            return { ...state, perguntaCinco: action.payload };
        case FormActions.setQuestionSix:
            return { ...state, questionSix: action.payload };
        case FormActions.setPerguntaSeis:
            return { ...state, perguntaSeis: action.payload };
        case FormActions.setQuestionSeven:
            return { ...state, questionSeven: action.payload };
        case FormActions.setPerguntaSete:
            return { ...state, perguntaSete: action.payload };
        case FormActions.setQuestionEight:
            return { ...state, questionEight: action.payload };
        case FormActions.setPerguntaOito:
            return { ...state, perguntaOito: action.payload };
        case FormActions.setQuestionNine:
            return { ...state, questionNine: action.payload };
        case FormActions.setPerguntaNove:
            return { ...state, perguntaNove: action.payload };
        case FormActions.setQuestionTen:
            return { ...state, questionTen: action.payload };
        case FormActions.setPerguntaDez:
            return { ...state, perguntaDez: action.payload };
        case FormActions.setUnidade:
            return { ...state, unidade: action.payload };
        case FormActions.resetForm:
            return initialData; // Reseta para o estado inicial
        default:
            return state;
    }
}

// Provider

export const FormProvider = ({ children }: FormProviderProps) => {

    const [state, dispatch] = useReducer(FormReducer, initialData)
    
    const resetForm = () => {
        dispatch({
            type: FormActions.resetForm,
            payload: undefined
        }); // Despacha a ação de reset
    };
    
    const value = { state, dispatch, resetForm }; // Inclui resetForm no contexto

    return (
        <FormContext.Provider value={value}>
            {children}
        </ FormContext.Provider>
    )
}

//Context Hook

export const useForm = () => {
    const context = useContext(FormContext)
    if (context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }

    return context;
}