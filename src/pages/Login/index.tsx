import { useState } from 'react';
import axios from 'axios';
import * as C from './styles';
import { MdEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { RiLockPasswordFill } from "react-icons/ri";
import LogoAcolher from '../../assets/LogoAcolher.webp';

const Login = () => {
    // Estados para email e senha
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Função para lidar com a mudança de input
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    // Função para fazer login
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevenir recarregamento da página
       
    
        try {
            const response = await axios.post('/api/login', { // Use caminho relativo
                email: email,
                password: password
            });
    
            const { token } = response.data;
    
            // Armazena o token no localStorage
            localStorage.setItem('token', token);
            alert('Login bem-sucedido!');
            navigate('/dashboard')
        } catch (error) {
            // Verifica se o error é uma instância de Error antes de acessar suas propriedades
            if (error instanceof Error) {
                console.error('Erro:', error.message);
                alert(error.message || 'Erro ao fazer login');
            } else {
                console.error('Erro desconhecido:', error);
                alert('Erro ao fazer login');
            }
        }
    };

    // Função para fazer logout (remova ou comente se não for necessária no momento)
    // const handleLogout = () => {
    //     localStorage.removeItem('token');
    //     alert('Logout bem-sucedido!');
    // };

    return (
        <C.Container>
            <C.Form onSubmit={handleLogin}>
                <C.DivHeader>
                    <img src={LogoAcolher} alt="Logo Acolher" />
                </C.DivHeader>
                <C.DivInputs>
                    <C.DivInput>
                        <C.IconStyleLogin as={MdEmail} />
                        <label htmlFor="email">
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </label>
                    </C.DivInput>
                    <C.DivInput>
                        <C.IconStyleLogin as={RiLockPasswordFill} />
                        <label htmlFor="password">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </label>
                    </C.DivInput>
                </C.DivInputs>

                <C.Button type="submit">Entrar</C.Button>
                {/* <C.Button type="button" onClick={handleLogout}>Logout</C.Button> */}
            </C.Form>
        </C.Container>
    );
};

export default Login;
