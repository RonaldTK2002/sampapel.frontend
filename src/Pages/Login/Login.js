import React,{useState} from "react";
import "./Login.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import api from "../../services/api";
import {login} from "../../services/auth"


function Login() {

const [email,setEmail] =useState();
const [password,setPassword] = useState();
  async function handleLogin(e) 
  {
    e.preventDefault();
    try {
      const response = await api.post('http://localhost:3333/login', {email,password});
      alert("Bem Vindo, " + response.data.user["nome"]);
      
      login(response.data.accessToken);
      window.location.href = "/perfil"
     
    } catch (error) {
      if(error.response.status === 403){
        alert("Credenciais Inválidas")
      }else{
      alert('Campos prenchidos incorretamente ');
    }
  console.warn(error)}
  };

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
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="inputLogin"
                type="password"
                placeholder="Senha"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="loginButtonContainer">
              <button
                id="buttonLogin"
                className="buttonsLogin"
                type="submit"
                value="submit"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                id="buttonCadastro"
                className="buttonsLogin"
                type="button"
                value="cadastro"
                onClick={() => {window.location.href = "cadastro"}}
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
