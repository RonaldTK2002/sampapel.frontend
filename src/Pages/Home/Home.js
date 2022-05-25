import React from "react";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CarrosselUm from "../../components/Carrossel/CarrosselUm";
import CarrosselDois from "../../components/Carrossel/CarrosselDois";
import CarrosselTres from "../../components/Carrossel/CarrosselTres";

function Home() {
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
            <div className="carrossel">
              <CarrosselTres />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Home;
