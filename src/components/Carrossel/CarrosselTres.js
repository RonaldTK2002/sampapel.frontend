import React from "react";
import "./Carrossel.css";
import Carousel from "react-bootstrap/Carousel";
import './Carrossel.css'
import FavoriteIcon from '@mui/icons-material/Favorite';



function CarrosselTres() {
    class ProdutoFavorito {
        constructor(nome, preço, imagem) {
          (this.nome = nome), (this.preço = `${preço} R$`);
          this.imagem = imagem;
        }
      }
      const produtosFavorito = [
        new ProdutoFavorito('Mochila Ben 10', '150,00','/images/mochilaben10.png')
        
      ];
  return (
    <Carousel variant="dark">
      {produtosFavorito.map((produtos) => (
        <Carousel.Item>
          <div className="imagemBotao">
            <img className="img" src={produtos["imagem"]} alt="Second slide" />
            <button className = 'botaoFavoritado'><FavoriteIcon fontSize="large" /></button>
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

export default CarrosselTres