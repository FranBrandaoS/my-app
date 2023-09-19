import React, { useState } from 'react';

function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [resultado, setResultado] = useState('Digite os dados para prosseguir');

  const verificarLogin = () => {
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
        <div className="form-group">
          <button onClick={verificarLogin} className="login-button">
            Acessar
          </button>
        </div>
      </div>
      <p className="status">{resultado}</p>
    </div>
  );
}

export default Login;
