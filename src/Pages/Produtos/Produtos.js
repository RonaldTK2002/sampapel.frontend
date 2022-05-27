import React, { useState, useEffect } from "react";
import "./Produtos.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import api from "../../services/api";
import { getUser_id } from "../../services/auth";

function Produtos() {
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

  async function getProductsMaterialEscolar() {
    try {
      const response = await api.get(
        `http://localhost:3333/produtos?categoria=material_escolar`
      );
      setProdutosMaterialEscolar([...response.data]);
    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");
    }
  }
  useEffect(() => {
    getProductsMaterialEscolar();
  }, []);
  async function getProductsEscritorio() {
    try {
      const response = await api.get(
        `http://localhost:3333/produtos?categoria=escritorios`
      );
      setProdutosEscritorio([...response.data]);
    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");
    }
  }
  useEffect(() => {
    getProductsEscritorio();
  }, []);
  async function getProductsEletronico() {
    try {
      const response = await api.get(
        `http://localhost:3333/produtos?categoria=eletronicos`
      );
      setProdutosEletronico([...response.data]);
    } catch (error) {
      console.warn(error);
      alert("Algo deu errado");
    }
  }
  useEffect(() => {
    getProductsEletronico();
  }, []);

  const [produtosMaterialEscolar, setProdutosMaterialEscolar] = useState([]);
  const [produtosEscritorio, setProdutosEscritorio] = useState([]);
  const [produtosEletronico, setProdutosEletronico] = useState([]);

  return (
    <div>
      <Header />
      <div className="backgroundContainerProdutos">
        <div className="containerProdutos">
          <h1 className="tituloPrincipalProdutos"> Material Escolar:</h1>

          <ul className="produtosGridBox">
            {produtosMaterialEscolar.map((produtos) => (
              <li className="produtosGridItems">
                <img className="imagemProduto" src={produtos["imagem"]} />
                <button
                  className="botaoFavorito"
                  id={produtos.produtos_id}
                  onClick={() => replaceIcon(produtos.produtos_id)}
                >
                  <FavoriteIcon fontSize="large" />
                </button>
                <h3 className="produtoNomePrrodutos">{produtos["nome"]}</h3>
                <p className="preçoProdutos">{"R$ " + produtos["valor"]}</p>
                <a id="escritorioAnchor"></a>
                <button className="botaoCarrossel">Comprar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="containerProdutos">
          <h1 className="tituloPrincipalProdutos">Escritório:</h1>
          <div>
            <ul className="produtosGridBox">
              {produtosEscritorio.map((produtos) => (
                <li className="produtosGridItems">
                  <img className="imagemProduto" src={produtos["imagem"]} />
                  <button
                    className="botaoFavorito"
                    id={produtos.id}
                    onClick={() => replaceIcon(produtos.id)}
                  >
                    <FavoriteIcon fontSize="large" />
                  </button>
                  <h3>{produtos["nome"]}</h3>
                  <p>{"R$ " + produtos["valor"]}</p>
                  <a id="eletronicosAnchor"></a>
                  <button className="botaoCarrossel">Comprar</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="containerProdutos">
          <h1 className="tituloPrincipalProdutos">Eletrônicos:</h1>
          <div>
            <ul className="produtosGridBox">
              {produtosEletronico.map((produtos) => (
                <li className="produtosGridItems">
                  <img className="imagemProduto" src={produtos["imagem"]} />
                  <button
                    className="botaoFavorito"
                    id={produtos.id}
                    onClick={() => replaceIcon(produtos.id)}
                  >
                    <FavoriteIcon fontSize="large" />
                  </button>
                  <h3>{produtos["nome"]}</h3>
                  <p>{"R$ " + produtos["valor"]}</p>
                  <a id="favoritos"></a>
                  <button className="botaoCarrossel">Comprar</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="containerProdutos">
        <h1 className="tituloPrincipalProdutos"> Favoritos:</h1>

        <ul className="produtosGridBox">
          {listaDeFavoritos.map((favoritos) => (
            <li className="produtosGridItems">
              <img className="imagemProduto" src={favoritos["imagem"]} />
              <button
                className="botaoFavoritado"
                id={favoritos.id}
                onClick={() => replaceIcon(favoritos.produtos_id)}
              >
                <FavoriteIcon fontSize="large" />
              </button>
              <h3>{favoritos["nome"]}</h3>
              <p>{"R$ " + favoritos["valor"]}</p>
              <button className="botaoCarrossel">Comprar</button>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default Produtos;
