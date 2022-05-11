import React from "react";
import "./Carrossel.css";
import Carousel from "react-bootstrap/Carousel";
import "./Carrossel.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

function CarrosselDois() {
  function replaceIcon(id) {
    if (document.getElementById(id).className === "botaoFavorito")
      document.getElementById(id).className = "botaoFavoritado";
    else document.getElementById(id).className = "botaoFavorito";
  }

  class ProdutoNovidade {
    constructor(nome, preço, imagem, id) {
      (this.nome = nome), (this.preço = `${preço} R$`);
      this.imagem = imagem;
      this.id = id;
    }
  }
  const produtosNovidade = [
    new ProdutoNovidade(
      "Mochila Ben 10",
      "150,00",
      "/images/mochilaben10.png",
      "mochilaben10"
    ),
    new ProdutoNovidade('Caderno Surf D+','35,50','/images/cadernosurf.png','cadernosurf')

  ];
  return (
    <Carousel variant="dark">
      {produtosNovidade.map((produtos) => (
        <Carousel.Item>
          <div className="imagemBotao">
            <img className="img" src={produtos["imagem"]} alt="Second slide" />
            <button
              className="botaoFavorito"
              id={produtos.id}
              onClick={() => replaceIcon(produtos.id)}
            >
              <FavoriteIcon fontSize="large" />
            </button>
          </div>

          <Carousel.Caption>
            <h3>{produtos["nome"]}</h3>
            <p>{produtos["preço"]}</p>
            <button className="botaoCarrossel">Comprar</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarrosselDois;
