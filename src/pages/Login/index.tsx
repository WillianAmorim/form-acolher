import * as C from './styles'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";




const Login = () => {
    return (
        <C.Container>
            <C.Form action="">
                <C.DivHeader><h1>Pré-matrícula</h1></C.DivHeader>
                <C.DivInputs>
                    <C.DivInput>
                        <C.IconStyleLogin as={MdEmail}/>
                        <label htmlFor="">
                            <input
                                type="text"
                                autoFocus
                                placeholder='Login'
                            // value={state.name}
                            // onChange={handleNameChange}
                            />
                        </label>
                    </C.DivInput>
                    <C.DivInput>
                        <label htmlFor="">
                            <C.IconStylePassword as={RiLockPasswordFill}/>
                            <input
                                type="text"
                                autoFocus
                                placeholder='Password'
                            // value={state.name}
                            // onChange={handleNameChange}
                            />
                        </label>
                    </C.DivInput>
                </C.DivInputs>

                <C.Button>Entrar</C.Button>
            </C.Form>
        </C.Container>
    )
}

export default Login