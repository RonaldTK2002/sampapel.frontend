import React, { useEffect, useState } from "react";
import "./Carrossel.css";
import Carousel from "react-bootstrap/Carousel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import api from "../../services/api";
import { keys } from "@mui/system";


function CarrosselUm() {
  
  function replaceIcon(id) {
    if (document.getElementById(id).className === "botaoFavorito")
      document.getElementById(id).className = "botaoFavoritado";
    else document.getElementById(id).className = "botaoFavorito";
  }
  async function getProductsDestaque(){
     
    try {
      
    const response = await api.get(`http://localhost:3333/produtos?categoria=material_escolar`);
       setProdutos([...response.data])
      
       
    } catch (error) {
      console.warn(error);
       alert('Algo deu errado')
     }

   }
   useEffect(()=>{
     getProductsDestaque();
   },[])
   
   const [produtos,setProdutos] = useState([])
  

  
  return (
    <Carousel variant="dark">
      {produtos &&
      produtos.map((produtos) => (
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
            <p>{produtos["valor"] +" R$"}</p>
            <button className="botaoCarrossel">Comprar</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarrosselUm;
