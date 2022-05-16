import { Link, Typography } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./Cadastro.css";

function Cadastro() {

  const dadosPessoaisCadastro =
    [
      {
        title: "Nome completo:",
        type: "nome",
        placeholder: "Nome completo",
      },
      {
        title: "CPF:",
        type: "CPF",
        placeholder: "___.___.___ - __",
      },
      {
        title: "CEP:",
        type: "CEP",
        placeholder: "__-___.___",
      }, {
        title: "Endereço:",
        type: "endereco",
        placeholder: "Rua e número",
      }, {
        title: "Cidade:",
        type: "cidade",
        placeholder: "Cidade",
      }, {
        title: "Estado:",
        type: "estado",
        placeholder: "Estado",
      },
      {
        title: "Data de nascimento:",
        type: "dataDeNascimento",
        placeholder: "__ /__ / ____",
      },
      {
        title: "Telefone:",
        type: "telefone",
        placeholder: "(__) ____-____",
      },
    ];

  const dadosLogin =
    [
      {
        title: "E-mail:",
        type: "email",
        placeholder: "E-mail",
      },
      {
        title: "Crie uma senha:",
        type: "password",
        placeholder: "Senha",
      },
      {
        title: "Confirme sua senha:",
        type: "password",
        placeholder: "Senha",
      },
    ];

  return (
    <di>
      <Header />

      <div className="backgroundCadastro">
        <div className="cadastroContainer">
          <div className="linhaCadastro">
            <h1 className="cadastroTitle">Crie seu cadastro!</h1>
          </div>
          <form className="inputsPaginaCadastro">
            <div className="cadastroInputContainer">
              <div className="dados">
                <h1 className="fonteDados">Dados pessoais:</h1>
              </div>
              {dadosPessoaisCadastro.map((dadosP) => {
                return (
                  <div>
                    <Typography variant="h5">{dadosP.title}</Typography>
                    <input
                      className="inputCadastro"
                      type={dadosP.type}
                      placeholder={dadosP.placeholder}
                      required
                    />
                  </div>
                );
              })}
              <div className="linhaDadosLogin" />
              <h1 className="fonteDados">Dados de Login:</h1>
              {dadosLogin.map((dadosL) => {
                return (
                  <div>
                    <Typography variant="h5">{dadosL.title}</Typography>
                    <input
                      className="inputCadastro"
                      type={dadosL.type}
                      placeholder={dadosL.placeholder}
                      required
                    />
                  </div>
                );
              })}
            </div>
            <div className="cadastroButtonContainer">
              <button
                id="buttonPaginaCadastro"
                className="buttonsPaginaCadastro"
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
