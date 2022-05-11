import React from 'react'
import './Perfil.css'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Typography } from '@mui/material';
import CarrosselPerfilProdutosComprados from '../../components/Carrossel/CarrosselPerfilProdutosComprados';


function Perfil() {

    function replaceIcon(id) {
        if (document.getElementById(id).className === "botaoFavorito")
            document.getElementById(id).className = "botaoFavoritado";
        else document.getElementById(id).className = "botaoFavorito";
    }

    const dadosPessoais =
        [
            {
                title: 'E-mail:',
                value: 'exemplo@cpejr.com.br',
            },
            {
                title: 'Nome completo:',
                value: 'João da Silva',
            },
            {
                title: 'CPF:',
                value: '111.111.111-11',
            },
            {
                title: 'Telefone:',
                value: '(31)9xxxx-xxxx',
            },
            {
                title: 'Endereço:',
                value: 'Rua Alguma , 10',
            },
            {
                title: 'Cidade:',
                value: 'Belo Horizonte',
            },
            {
                title: 'Estado:',
                value: 'Minas Gerais',
            },
        ];



    return (
        <di>
            <Header />
            <div className="backgroundPerfil">
                <div className="perfilContainer">
                    <div className="linhaPerfil">
                        <h1 className="perfilTitle">Seu perfil!</h1>
                    </div>
                    <div className="inputsPaginaPerfil">
                        <div className="perfilInputContainer">
                            <div className="dados">
                                <h2 className="fonteDados">Dados pessoais:</h2>
                            </div>
                            {dadosPessoais.map((dados) => {
                                return (
                                    <div>
                                        <Typography variant="h5">{dados.title}</Typography>
                                        <div className="dadosValor"><Typography variant="h6" marginLeft={"25px"}>{dados.value}</Typography></div>
                                    </div>
                                );
                            })}
                            <div className="linha" />
                            <h1 className="fonteDados">Últimos pedidos:</h1>
                            <div className='boxUltimosPedidos'>
                                <div className="boxProduto">
                                    <div className="imagemBotao">
                                        <img className="imgUltimosComprados" src="/images/mochilaben10.png" />
                                        <button
                                            className="botaoFavorito"
                                            id="mochilaben10"
                                            onClick={() => replaceIcon(id)}
                                        >
                                            <FavoriteIcon fontSize="large" />
                                        </button>
                                    </div>
                                    <div className="dadosProduto">
                                        <h3>Produto A</h3>
                                        <h3 className="fonteValor">R$10,00</h3>
                                        <h5 className="fonteValor">Comprado em:__/__/____</h5>
                                        <button className="botaoComprarNovamente">
                                            Comprar novamente!
                                        </button>
                                    </div>
                                </div>
                                <div className="boxProduto">
                                    <div className="imagemBotao">
                                        <img className="imgUltimosComprados" src="/images/mochilaben10.png" />
                                        <button
                                            className="botaoFavorito"
                                            id="mochilaben10"
                                            onClick={() => replaceIcon(id)}
                                        >
                                            <FavoriteIcon fontSize="large" />
                                        </button>
                                    </div>
                                    <div className="dadosProduto">
                                        <h3>Produto A</h3>
                                        <h3 className="fonteValor">R$10,00</h3>
                                        <h5 className="fonteValor">Comprado em:__/__/____</h5>
                                        <button className="botaoComprarNovamente">
                                            Comprar novamente!
                                        </button>
                                    </div>
                                </div>
                                <div className="boxProduto">
                                    <div className="imagemBotao">
                                        <img className="imgUltimosComprados" src="/images/mochilaben10.png" />
                                        <button
                                            className="botaoFavorito"
                                            id="mochilaben10"
                                            onClick={() => replaceIcon(id)}
                                        >
                                            <FavoriteIcon fontSize="large" />
                                        </button>
                                    </div>
                                    <div className="dadosProduto">
                                        <h3>Produto A</h3>
                                        <h3 className="fonteValor">R$10,00</h3>
                                        <h5 className="fonteValor">Comprado em:__/__/____</h5>
                                        <button className="botaoComprarNovamente">
                                            Comprar novamente!
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="linha" />
                            <h1 className="fonteDados">Favoritos:</h1>
                            <div className="boxFavoritos">
                                <CarrosselPerfilProdutosComprados />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </di>
    );
}


export default Perfil
