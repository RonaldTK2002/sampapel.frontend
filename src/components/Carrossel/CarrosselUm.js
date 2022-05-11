import React from "react";
import "./Carrossel.css";
import Carousel from "react-bootstrap/Carousel";
import FavoriteIcon from "@mui/icons-material/Favorite";

function CarrosselUm() {
  function replaceIcon(id) {
    if (document.getElementById(id).className === "botaoFavorito")
      document.getElementById(id).className = "botaoFavoritado";
    else document.getElementById(id).className = "botaoFavorito";
  }

  class ProdutoDestaque {
    constructor(nome, preço, imagem, id) {
      (this.nome = nome), (this.preço = `${preço} R$`);
      this.imagem = imagem;
      this.id = id;
    }
  }
  const produtosDestaque = [
    new ProdutoDestaque("Borracha Mercur", "2,00", "/images/borracha.png", "borrachamercur"),
    new ProdutoDestaque("Lápis", "7,50", "images/lapis.png", "lapisfabercastell"),
  ];
  return (
    <Carousel variant="dark">
      {produtosDestaque.map((produtos) => (
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

export default CarrosselUm;
