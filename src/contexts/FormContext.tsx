// Context, Reducer, Provider, Hook

import { createContext, useContext, useReducer } from 'react'
import { ReactNode } from 'react';


type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
    genero: string;
    idade: string;
    matricula: string;
    turma: string;
    turno: string;
    mother: string;
    telefone: string;
    responsavelFinan: string;
    necessidadesEspec: string
    diagnostico: string;
    comorbidade: string[];
    atendenteTerapeuta: string;
    questionOne: string;
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
    name: '',
    level: 0,
    email: '',
    github: '',
    genero: '',
    idade: '',
    matricula: '',
    turma: '',
    turno: '',
    mother: '',
    telefone: '',
    responsavelFinan: '',
    necessidadesEspec: '',
    diagnostico: '',
    comorbidade: [],
    atendenteTerapeuta: '',
    questionOne: '',
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
    setName,
    setLevel,
    setEmail,
    setGitHub,
    setGenero,
    setIdade,
    setMatricula,
    setTurma,
    setTurno,
    setMother,
    setTelefone,
    setResponsavelFinan,
    setNecessidadesEspec,
    setDiagnostico,
    setComorbidade,
    setAtendenteTerapeuta,
    setQuestionOne,
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
        case FormActions.setName:
            return { ...state, name: action.payload };
        case FormActions.setLevel:
            return { ...state, level: action.payload };
        case FormActions.setEmail:
            return { ...state, email: action.payload };
        case FormActions.setGitHub:
            return { ...state, github: action.payload };
        case FormActions.setGenero:
            return { ...state, genero: action.payload };
        case FormActions.setIdade:
            return { ...state, idade: action.payload };
        case FormActions.setMatricula:
            return { ...state, matricula: action.payload };
        case FormActions.setTurma:
            return { ...state, turma: action.payload };
        case FormActions.setTurno:
            return { ...state, turno: action.payload };
        case FormActions.setMother:
            return { ...state, mother: action.payload };
        case FormActions.setTelefone:
            return { ...state, telefone: action.payload };
        case FormActions.setResponsavelFinan:
            return { ...state, responsavelFinan: action.payload };
        case FormActions.setNecessidadesEspec:
            return { ...state, necessidadesEspec: action.payload };
        case FormActions.setDiagnostico:
            return { ...state, diagnostico: action.payload };
        case FormActions.setComorbidade:
            return { ...state, comorbidade: action.payload };
        case FormActions.setAtendenteTerapeuta:
            return { ...state, atendenteTerapeuta: action.payload };
        case FormActions.setQuestionOne:
            return { ...state, questionOne: action.payload };
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