import React from "react";
import "./Login.css";
import  Header from "../../components/Header";
import Footer from '../../components/Footer';

function Login() {
  return (
    <div>
      <Header />
      <div className="backgroundLogin">
        <div className="loginContainer">
          <h1 className="loginTitle">Login</h1>
          <form className="inputsPaginaLogin">
            <div className="loginInputContainer">
              <input
                className="inputLogin"
                type="email"
                placeholder="E-mail"
                required
              />
              <input
                className="inputLogin"
                type="password"
                placeholder="Senha"
                required
              />
            </div>
            <div className="loginButtonContainer">
              <button
                id="buttonLogin"
                className="buttonsLogin"
                type="submit"
                value="submit"
              >
                Login
              </button>
              <button
                id="buttonCadastro"
                className="buttonsLogin"
                type="button"
                value="cadastro"
              >
                Cadastre-se
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
