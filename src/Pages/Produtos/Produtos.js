import React from "react";
import "./Produtos.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Produtos() {
    function replaceIcon(id) {
        if (document.getElementById(id).className === "botaoFavorito")
          document.getElementById(id).className = "botaoFavoritado";
        else document.getElementById(id).className = "botaoFavorito";
      };
  class MaterialEscolar {
    constructor(nome, preço, imagem, id) {
      this.nome = nome;
      this.preço = `${preço} R$`;
      this.imagem = imagem;
      this.id = id;
    }
  }
  const listaMaterialEscolar = [
    new MaterialEscolar(
      "Mochila Ben 10",
      "150,00",
      "/images/mochilaben10.png",
      "mochilaben10"
    ),
    new MaterialEscolar(
      "Caderno Surf D+",
      "35,50",
      "/images/cadernosurf.png",
      "cadernosurf"
    ),
    new MaterialEscolar(
      "Borracha Mercur",
      "2,00",
      "/images/borracha.png",
      "borrachamercur"
    ),
    new MaterialEscolar(
      "Lápis FaberCastell",
      "7,50",
      "images/lapis.png",
      "lapisfabercastell"
    ),
  ];
  return (
    <div>
      <Header />
      <div className="backgroundContainerProdutos">
        <div className="containerProdutos">
          <h1 className="tituloPrincipalProdutos"> Material Escolar:</h1>
          <div>
            <ul className="produtosGridBox">
              {listaMaterialEscolar.map((produtos) => (
                <li className = 'produtosGridItems'>
                  <img src={produtos["imagem"]} />
                  <button
                    className="botaoFavorito"
                    id={produtos.id}
                    onClick={() => replaceIcon(produtos.id)}
                  >
                    <FavoriteIcon fontSize="large" />
                  </button>
                  <h3>{produtos["nome"]}</h3>
                  <p>{produtos["preço"]}</p>
                  <button className="botaoCarrossel">Comprar</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="containerProdutos">
          <h1 className="tituloPrincipalProdutos">Novidades:</h1>
          <div>
            <ul className="produtosGridBox">
              <li></li>
            </ul>
          </div>
        </div>
        <div className="containerProdutos">
          <h1 className="tituloPrincipalProdutos">Favoritos:</h1>
          <div>
            <ul className="produtosGridBox">
              <li></li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Produtos;