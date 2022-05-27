import { Link, Typography } from "@mui/material";
import React,{useState} from "react";
import Footer from "../../components/Footer"
import Header from "../../components/Header";
import "./Cadastro.css";
import api from "../../services/api"

function Cadastro() {
  async function handleCadastro(e){
    
      e.preventDefault();
      try {
        const response = await api.post('http://localhost:3333/user', {...inputInfo });          
        console.log({...inputInfo});
        alert("Usuário criado com sucesso " );
      
        window.location.href = "/login"
       
      } catch (error) {
        console.log({...inputInfo})
        alert(error)

        
        console.warn(error);

      }
    }
    
  
  const inputInfo={
    "nome":"",
    "CPF":"",
    "CEP":"",
    "endereco":"",
    "cidade":"",
    "estado":"",
    "data_nasc":"",
    "telefone":"",
    "email":"",
    "password":"",
  };


  const dadosPessoaisCadastro =
    [
      {
        title: "Nome completo:",
        type: "nome",
        placeholder: "Nome completo",
        set:"nome"
      },
      {
        title: "CPF:",
        type: "CPF",
        placeholder: "___.___.___ - __",
        set:"CPF"
      },
      {
        title: "CEP:",
        type: "CEP",
        placeholder: "__-___.___",
        set:"CEP"
      }, {
        title: "Endereço:",
        type: "endereco",
        placeholder: "Rua e número",
        set:"endereco"
      }, {
        title: "Cidade:",
        type: "cidade",
        placeholder: "Cidade",
        set:"cidade"
      }, {
        title: "Estado:",
        type: "estado",
        placeholder: "Estado",
        set:"estado"
      },
      {
        title: "Data de nascimento:",
        type: "dataDeNascimento",
        placeholder: "__ /__ / ____",
        set:"data_nasc"
      },
      {
        title: "Telefone:",
        type: "telefone",
        placeholder: "(__) ____-____",
        set:"telefone"
      },
    ];
   

  const dadosLogin =
    [
      {
        title: "E-mail:",
        type: "email",
        placeholder: "E-mail",
        set:"email"
      },
      {
        title: "Crie uma senha:",
        type: "password",
        placeholder: "Senha",
        set:"password"
      },
    ];
    
   
  
  return (
    <div>

      <Header />
       
      
      <div className="backgroundCadastro">
        <div className="cadastroContainer">
          <div className="linhaCadastro">
            <h1 className="cadastroTitle">Crie seu cadastro!</h1>
          </div>
          <form className="inputsPaginaCadastro">
            <div className="cadastroInputContainer">
              <div className="dadosCadastro">
                <h1 className="fonteDadosCadastro">Dados pessoais:</h1>
              </div>
              {dadosPessoaisCadastro.map((dadosP) => {
                
                return (
                 
                  <div>
                    
                    <h5 className="fonteDadosInput">{dadosP.title}</h5>
                    <input
                      className="inputCadastro"
                      type={dadosP.type}
                      placeholder={dadosP.placeholder}
                      onChange = {(e)=>inputInfo[dadosP.set] = e.target.value}
                       
                      required
                    />
                  </div>
                );
              })}
              
              <div className="linhaDadosLogin" />
              <h1 className="fonteDadosCadastro">Dados de Login:</h1>
              {dadosLogin.map((dadosL) => {
                return (
                  <div>
                    <h5 className="fonteDadosInput">{dadosL.title}</h5>
                    <input
                      className="inputCadastro"
                      type={dadosL.type}
                      placeholder={dadosL.placeholder}
                      onChange = {(e)=>inputInfo[dadosL.set] = e.target.value}
                      required
                    />
                  </div>
                );
              })}
              <h5 className="fonteDadosInput">Confirme sua senha!</h5>
            <input className = "inputCadastro"
            type = "password" placeholder = "Senha" required/>
            </div>
            
            <div className="cadastroButtonContainer">
              <button
                id="buttonPaginaCadastro"
                className="buttonsPaginaCadastro"
                type="submit"
                value="submit"
                onClick = {handleCadastro}
              >
                Criar cadastro!
              </button>
            </div>
            <Link
              href="#"
              color="inherit"
              className="linkLogin"
              
            >
              <div className="jaCadastro">Já possui cadastro? Login</div>
            </Link>
          </form>
        </div>
      </div>
     
      <Footer />
    </div>
    
  );
  
}

export default Cadastro;
