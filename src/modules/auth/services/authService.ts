const authService = {
    login: async (credentials: { username: string; password: string }) => {
      // Aqui você faria a chamada para o endpoint de login
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      localStorage.setItem('token', data.token);  // Armazenar o token de autenticação
    },
  
    logout: () => {
      localStorage.removeItem('token');  // Remover o token do localStorage
    },
  
    isAuthenticated: () => {
      return !!localStorage.getItem('token');  // Verificar se o token existe
    },
  };
  
  export default authService;
  