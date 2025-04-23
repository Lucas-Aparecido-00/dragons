import "./styles.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Bem-vindo de volta</h1>
        <p className="login-subtitle">Entre para continuar</p>
        <form className="login-form">
          <label className="login-label">
            Usuário
            <input
              type="text"
              placeholder="seuemail@exemplo.com"
              className="login-input"
            />
          </label>
          <label className="login-label">
            Senha
            <input
              type="password"
              placeholder="••••••••"
              className="login-input"
            />
          </label>
          <button type="submit" className="login-button">
            Entrar
          </button>
          <p className="login-footer">
            Esqueceu a senha? <a href="#">Recuperar</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
