// Context, Reducer, Provider, Hook

import { createContext, useContext, useReducer } from 'react'
import { ReactNode } from 'react';


type State = {
    currentStep: number;
    nome: string;
    email: string;
    sexo: string;
    idade: string;
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
    avaliacoes: [],
    questionOne: string;
    perguntaUm: string;
    questionSecond: string;
    questionThird: string;
    questionFourth: string;
    questionFive: string;
    questionSix: string;
    questionSeven: string;
    questionEight: string;
    questionNine: string;
    questionTen: string;
    unidade: string
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
    questionThird: '',
    questionFourth: '',
    questionFive: '',
    questionSix: '',
    questionSeven: '',
    questionEight: '',
    questionNine: '',
    questionTen: '',
    unidade: '',

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
    setQuestionThird,
    setQuestionFourth,
    setQuestionFive,
    setQuestionSix,
    setQuestionSeven,
    setQuestionEight,
    setQuestionNine,
    setQuestionTen,
    setUnidade,
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
        case FormActions.setQuestionThird:
            return { ...state, questionThird: action.payload };
        case FormActions.setQuestionFourth:
            return { ...state, questionFourth: action.payload };
        case FormActions.setQuestionFive:
            return { ...state, questionFive: action.payload };
        case FormActions.setQuestionSix:
            return { ...state, questionSix: action.payload };
        case FormActions.setQuestionSeven:
            return { ...state, questionSeven: action.payload };
        case FormActions.setQuestionEight:
            return { ...state, questionEight: action.payload };
        case FormActions.setQuestionNine:
            return { ...state, questionNine: action.payload };
        case FormActions.setQuestionTen:
            return { ...state, questionTen: action.payload };
        case FormActions.setUnidade:
            return { ...state, unidade: action.payload };
        default:
            return state;
    }
}

// Provider

export const FormProvider = ({ children }: FormProviderProps) => {

    const [state, dispatch] = useReducer(FormReducer, initialData)
    const value = { state, dispatch }

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