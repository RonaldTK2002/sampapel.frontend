import React, { useEffect, useState } from "react";
import "./Carrossel.css";
import Carousel from "react-bootstrap/Carousel";
import "./Carrossel.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import api from "../../services/api";

function CarrosselDois() {
  function replaceIcon(id) {
    if (document.getElementById(id).className === "botaoFavorito")
      document.getElementById(id).className = "botaoFavoritado";
    else document.getElementById(id).className = "botaoFavorito";
  }

  async function getProductsNovidade(){
     
    try {
      
    const response = await api.get(`http://localhost:3333/produtos?categoria=eletronicos`);
       setProdutosNovidade([...response.data])
      
       
    } catch (error) {
      console.warn(error);
       alert('Algo deu errado')
     }

   }
   useEffect(()=>{
     getProductsNovidade();
   },[])
   
   const [produtosNovidade,setProdutosNovidade] = useState([])

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
            <p>{"R$ " + produtos["valor"]}</p>
            <button className="botaoCarrossel">Comprar</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarrosselDois;
