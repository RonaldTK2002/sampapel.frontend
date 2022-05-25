import React from 'react'
import './Perfil.css'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Typography } from '@mui/material';

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

    const boxUltimosPedidos =
        [
            {
                src: '/images/mochilaben10.png',
                id: "mochilaben10",
                nome: "Mochila Ben 10",
                valor: "150,00",
                dia: 3,
                mes: 1,
                ano: 2022,
            },
            {
                src: '/images/lapis.png',
                id: "lapisfabercastell",
                nome: "Lápis",
                valor: "7,50",
                dia: 2,
                mes: 1,
                ano: 2022,
            },
            {
                src: '/images/borracha.png',
                id: "borrachamercur",
                nome: "Borracha",
                valor: "2,00",
                dia: 1,
                mes: 1,
                ano: 2022,
            },
            {
                src: '/images/cadernosurf.png',
                id: "cadernosurf",
                nome: "Caderno Surf D+",
                valor: "35,50",
                dia: 31,
                mes: 12,
                ano: 2021,
            },
        ];

        const boxFavoritos =
        [
            {
                src: '/images/mochilaben10.png',
                id: "mochilaben10",
                nome: "Mochila Ben 10",
                valor: "150,00",
            },
            {
                src: '/images/lapis.png',
                id: "lapisfabercastell",
                nome: "Lápis",
                valor: "7,50",
            },
            {
                src: '/images/cadernosurf.png',
                id: "cadernosurf",
                nome: "Caderno Surf D+",
                valor: "35,50",
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
                            <div className="dadosPerfil">
                                <h2 className="fonteDadosPerfil">Dados pessoais:</h2>
                            </div>
                            {dadosPessoais.map((dados) => {
                                return (
                                    <div>
                                        <h5 className="fonteDadosInput">{dados.title}</h5>
                                        <div className="dadosValor"><h6 className="fonteDadosValor">{dados.value}</h6></div>
                                    </div>
                                );
                            })}
                            <div className="linha" />
                            <h1 className="fonteDadosPerfil">Últimos pedidos:</h1>
                            <div className='boxUltimosPedidos'>
                                {boxUltimosPedidos.map((ultimosPedidos) => {
                                    return (
                                        <div className="boxProduto">
                                            <div className="imagemUltimosPedidos">
                                                <img className="imgUltimosComprados" src={ultimosPedidos.src} />
                                                <button
                                                    className="botaoFavorito"
                                                    id={ultimosPedidos.id}
                                                    onClick={() => replaceIcon(ultimosPedidos.id)}
                                                >
                                                    <FavoriteIcon fontSize="large" />
                                                </button>
                                            </div>
                                            <div className="dadosProduto">
                                                <h3 className='fonteNome'>{ultimosPedidos.nome}</h3>
                                                <h4 className="fonteValor">R${ultimosPedidos.valor}</h4>
                                                <h6 className="fonteValor">Comprado em: {ultimosPedidos.dia}/{ultimosPedidos.mes}/{ultimosPedidos.ano}</h6>
                                                <button className="botaoComprarNovamente">
                                                    Comprar novamente!
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="linha" />
                            <h1 className="fonteDados">Favoritos:</h1>
                            <div className='boxFavoritos'>
                            {boxFavoritos.map((pedidosFavoritos) => {
                                    return (
                                        <div className="boxProduto">
                                            <div className="imagemUltimosPedidos">
                                                <img className="imgUltimosComprados" src={pedidosFavoritos.src} />
                                                <button
                                                    className="botaoFavoritado"
                                                >
                                                    <FavoriteIcon fontSize="large" />
                                                </button>
                                            </div>
                                            <div className="dadosProduto">
                                                <h3  className='fonteNome'>{pedidosFavoritos.nome}</h3>
                                                <h4 className="fonteValor">R${pedidosFavoritos.valor}</h4>
                                                <button className="botaoComprar">
                                                    Comprar!
                                                </button>
                                            </div>
                                        </div>
                                    );
                                })}
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
