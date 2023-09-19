import React, { useState } from 'react';

import './App';


function Login() {
  // Cria os estados para armazenar as variáveis login e senha
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  // Cria um estado para armazenar o resultado da requisição
  const [resultado, setResultado] = useState('Digite os dados para prosseguir');

  const verificarLogin = () => {
    // Verifica se o login e a senha foram preenchidos
    if (login === '' || senha === '') {
      setResultado('Preencha os dados para prosseguir');
      return;
    }

    if (login === 'admin' && senha === '1234') {
      setResultado('Login efetuado com sucesso');
      return;
    }

    setResultado('Login ou senha inválidos');
  };

  return (
    <div id="root">
      <img
        src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"
        className="logo"
        alt="React logo"
      />
      <h1>Login ADS - React</h1>
      <div className="card">
        <div className="card-header">
          <h2>Informe os dados</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="login">Login</label>
            <input
              type="text"
              id="login"
              className="form-control"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              className="form-control"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <button onClick={verificarLogin}>Acessar</button>
        </div>
      </div>
      <p className="status">{resultado}</p>
    </div>
  );
}

export default Login;
