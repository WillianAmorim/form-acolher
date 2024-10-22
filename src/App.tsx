import Router from './router'
import { FormProvider } from './contexts/FormContext'
import { GlobalStyles } from './components/Theme/GlobalStyles';

const App = () => {
    return (
        <FormProvider>
            <GlobalStyles />
            <Router />
        </FormProvider>
    )
}

export default App;
