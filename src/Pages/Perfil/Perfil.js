import React, { useEffect, useState } from 'react'
import './Perfil.css'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FavoriteIcon from "@mui/icons-material/Favorite";
import api from '../../services/api';
import { getUser_id } from '../../services/auth';
import {logout} from "../../services/auth";
import LogoutIcon from '@mui/icons-material/Logout';


function Perfil() {
    
  
    const user_id = getUser_id();
    const [favoriteState, setFavoriteState] = useState(false);
    
    
    async function criarListaFavoritos() {
      const listaFavoritos = await api.get(
        `http://localhost:3333/favoritos/${user_id}`
      );
      const lista = listaFavoritos.data.map((produtos) => produtos.produtos_id);
      let arrayLista = [];
      for (let i = 0; i < lista.length; i++) {
        arrayLista[i] = await api.get(
          `http://localhost:3333/produtos?produtos_id=${lista[i]}`
        );
      }
  
      const produtosArray = [];
      arrayLista.map((objeto) => produtosArray.push(objeto.data[0]));
  
      setListaDeFavoritos(produtosArray);
    }
  
    useEffect(() => {
      criarListaFavoritos();
    }, []);
  
    const [listaDeFavoritos, setListaDeFavoritos] = useState([]);
  
    async function replaceIcon(id) {
      try {
        let adicionarFavorito;
  
        if (favoriteState === false) {
          adicionarFavorito = await api.post(
            `http://localhost:3333/favoritos?user_id=${user_id}`,
            { produtos_id: id }
          );
          setFavoriteState(true)
          document.getElementById(id).className = "botaoFavoritado";
        } else {
          await api.delete(`http://localhost:3333/favoritos/${id}`);
          setFavoriteState(false)
          document.getElementById(id).className = "botaoFavorito";
        }
      } catch (error) {
        console.warn(error);
      }
    }
    
 async function handlePerfil(){
     
     try {
        const response = await api.get(`http://localhost:3333/user?user_id=${user_id}`);
        
        setDataPersonal(response.data)
     } catch (error) {
        alert(error.response)

        
        console.warn(error);
     }
 }
 useEffect(()=>{
    handlePerfil();
  },[]);
  function Logout(){
      logout();
      window.location.href = "http://localhost:3000/home";
  }
  const [dataPersonal,setDataPersonal] = useState([]);

    console.log(dataPersonal)
    
    
    const dadosPessoais= 

    
        [
            {
                title: 'E-mail:',
                value:dataPersonal["email"],
            },
            {
                title: 'Nome completo:',
                value: dataPersonal["nome"],
            },
            {
                title: 'CPF:',
                value: dataPersonal["CPF"],
            },
            {
                title: 'Telefone:',
                value: dataPersonal["telefone"],
            },
            {
                title: 'Endereço:',
                value: dataPersonal["endereco"],
            },
            {
                title: 'Cidade:',
                value: dataPersonal["cidade"],
            },
            {
                title: 'Estado:',
                value: dataPersonal["estado"],
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
        <div>
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
                            <button className= "botaoLogout" onClick = {Logout}>Logout  <LogoutIcon fontSize='small'/></button>
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
                            {listaDeFavoritos.map((pedidosFavoritos) => {
                                    return (
                                        <div className="boxProduto">
                                            <div className="imagemUltimosPedidos">
                                                <img className="imgUltimosComprados" src={pedidosFavoritos.imagem} />
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
        </div>
    );
}


export default Perfil
