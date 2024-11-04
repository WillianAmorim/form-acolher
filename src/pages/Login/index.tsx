import * as C from './styles'
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import LogoAcolher from '../../assets/LogoAcolher.webp'



const Login = () => {
    return (
        <C.Container>
            <C.Form action="">
                <C.DivHeader>
                    <img src={LogoAcolher} alt="" />
                </C.DivHeader>
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
                        <C.IconStyleLogin as={RiLockPasswordFill}/>
                        <label htmlFor="">
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