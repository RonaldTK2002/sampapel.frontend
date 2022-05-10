import React from 'react'
import './Perfil.css'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Box from '@mui/material/Box';

function Perfil(){
  return (
    <di>
        <Header />
        <div className="backgroundPerfil">
            <div className="perfilContainer">
            <div className="linhaPerfil">
                <h1 className="perfilTitle">Seu perfil!</h1>
            </div>
            <form className="inputsPaginaPerfil">
                <div className="perfilInputContainer">
                <div className="dados">
                    <h2 className="fonteDados">Dados pessoais:</h2>
                </div>
                <h3>E-mail:</h3>
                <input
                    className="inputPerfil"
                    type="email"
                    placeholder="E-mail"
                    required
                />
                <h3>Nome completo:</h3>
                <input
                    className="inputPerfil"
                    type="nome"
                    placeholder="Nome completo"
                    required
                />
                <h3>CPF:</h3>
                <input
                    className="inputPerfil"
                    type="CPF"
                    placeholder="___.___.___ - __"
                    required
                />
                <h3>Telefone:</h3>
                <input
                    className="inputPerfil"
                    type="telefone"
                    placeholder="(__) ____-____"
                    required
                />
                <h3>Endereço:</h3>
                <input
                    className="inputPerfil"
                    type="endereço"
                    placeholder="Rua e número"
                    required
                />
                <h3>Cidade:</h3>
                <input
                    className="inputPerfil"
                    type="cidade"
                    placeholder="Cidade"
                    required
                />
                <h3>Estado:</h3>
                <input
                    className="inputPerfil"
                    type="estado"
                    placeholder="Estado"
                    required
                />
                <div className="linha" />

              <h1 className="fonteDados">Últimos pedidos:</h1>
              <div className='boxUltimosPedidos'>
                  <div className="boxProduto">
                      <Box
                        sx={{
                        width: 95,
                        height: 145,
                        borderRadius: 5,
                        backgroundColor: 'primary.dark','&:hover': 
                            {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                        />
                        <div className="dadosProduto">
                            <h3>Produto A</h3>
                            <h3 className="fonteValor">R$10,00</h3>
                            <h5 className="fonteValor">Comprado em:__/__/____</h5>
                            <button
                                id="buttonComprarNovamente"
                                className="buttonsComprarNovamente"
                                type="submit"
                                value="submit"
                                >
                                Comprar novamente!
                            </button>
                        </div>
                  </div>
                  <div className="boxProduto">
                      <Box
                        sx={{
                        width: 95,
                        height: 145,
                        borderRadius: 5,
                        backgroundColor: 'primary.dark','&:hover': 
                            {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                        />
                        <div className="dadosProduto">
                            <h3>Produto A</h3>
                            <h3 className="fonteValor">R$10,00</h3>
                            <h5 className="fonteValor">Comprado em:__/__/____</h5>
                            <button
                                id="buttonComprarNovamente"
                                className="buttonsComprarNovamente"
                                type="submit"
                                value="submit"
                                >
                                <h4 class="fontBotton">Comprar novamente!</h4>
                                </button>
                        </div>
                  </div>
                  <div className="boxProduto">
                      <Box
                        sx={{
                        width: 95,
                        height: 145,
                        borderRadius: 5,
                        backgroundColor: 'primary.dark','&:hover': 
                            {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                            },
                        }}
                        />
                        <div className="dadosProduto">
                            <h3>Produto A</h3>
                            <h3 className="fonteValor">R$10,00</h3>
                            <h5 className="fonteValor">Comprado em:__/__/____</h5>
                            <button
                                id="buttonComprarNovamente"
                                className="buttonsComprarNovamente"
                                type="submit"
                                value="submit"
                                >
                                <h4 class="fontBotton">Comprar novamente!</h4>
                                </button>
                        </div>
                  </div>
              </div>
              
              <div className="linha" />
              <h1 className="fonteDados">Favoritos:</h1>

            </div> 
          </form>
        </div>
      </div>
      <Footer />
    </di>
  );
}


export default Perfil
