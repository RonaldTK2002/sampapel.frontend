import React from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CarrosselUm from "../../components/Carrossel/CarrosselUm";
import CarrosselDois from "../../components/Carrossel/CarrosselDois";
import CarrosselTres from "../../components/Carrossel/CarrosselTres";
import {isAuthenticated} from "../../services/auth"

function Home() {
  function setField(){
    if(isAuthenticated() === false){
       return(
        <div className="loginButtonContainerHome">
          <h1 className = 'tituloBotao'> Para visualizar essa e mais outras funcionalidade você deve logar/cadastrar abaixo:</h1>
        <button
          id="buttonLogin"
          className="buttonsLogin"
          type="submit"
          value="submit"
          onClick={()=>{window.location.href = 'login'}}
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
       )
    }
    if(isAuthenticated()===true){
         return (
          <div className="carrossel">
          <CarrosselTres />
        </div>
          ) 
    }
    
  }
  return (
    <div>
      <div className="header">
      <Header />
      </div>
      <div className = "blockContainer">

      </div>

      <div className="backgroundContainer">
        <div className="blockHeader">
          <div className="container">
            <h1 className="tituloPrincipal">Destaques:</h1>

            <div className="carrossel">
              <CarrosselUm />
            </div>
          </div>
          <div className="container">
            <h1 className="tituloPrincipal">Novidades:</h1>
            <div className="carrossel">
              <CarrosselDois />
            </div>
          </div>
          <div className="container">
            <h1 className="tituloPrincipal">Favoritos:</h1>
               {setField()}
            
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
