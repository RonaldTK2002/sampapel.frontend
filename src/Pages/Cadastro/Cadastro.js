import { Link } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Cadastro.css";

function Cadastro() {
  return (
    <di>
      <Header />

      <div className="backgroundLogin">
        <div className="loginContainer">
          <div className="linhaCadastro">
            <h1 className="loginTitle">Crie seu cadastro!</h1>
          </div>
          <form className="inputsPaginaLogin">
            <div className="loginInputContainer">
              <div className="dados">
                <h1 className="fonteDados">Dados pessoais:</h1>
              </div>
              <h3>Nome completo:</h3>
              <input
                className="inputLogin"
                type="nome"
                placeholder="Nome completo"
                required
              />
              <h3>CPF:</h3>
              <input
                className="inputLogin"
                type="CPF"
                placeholder="___.___.___ - __"
                required
              />
              <h3>CEP:</h3>
              <input
                className="inputLogin"
                type="CEP"
                placeholder="__-___.___"
                required
              />
              <h3>Endereço:</h3>
              <input
                className="inputLogin"
                type="endereço"
                placeholder="Rua e número"
                required
              />
              <h3>Cidade:</h3>
              <input
                className="inputLogin"
                type="cidade"
                placeholder="Cidade"
                required
              />
              <h3>Estado:</h3>
              <input
                className="inputLogin"
                type="estado"
                placeholder="Estado"
                required
              />
              <h3>Data de nascimento:</h3>
              <input
                className="inputLogin"
                type="dataDeNascimento"
                placeholder="__ /__ / ____"
                required
              />
              <h3>Telefone:</h3>
              <input
                className="inputLogin"
                type="telefone"
                placeholder="(__) ____-____"
                required
              />
              <div className="linha" />
              <h1 className="fonteDados">Dados de Login:</h1>
              <h3>E-mail:</h3>
              <input
                className="inputLogin"
                type="email"
                placeholder="E-mail"
                required
              />
              <h3>Crie uma senha:</h3>
              <input
                className="inputLogin"
                type="password"
                placeholder="Senha"
                required
              />
              <h3>Confirme sua senha:</h3>
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
                Criar cadastro!
              </button>
            </div>
            <Link
              href="#"
              color="inherit"
              className="linkLogin"
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Já possui cadastro? Login
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </di>
  );
}

export default Cadastro;
