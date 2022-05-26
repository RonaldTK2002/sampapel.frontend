import React, { useEffect, useState } from "react";
import "./Carrossel.css";
import Carousel from "react-bootstrap/Carousel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import api from "../../services/api";
import { keys } from "@mui/system";


function CarrosselUm() {
  const categoria = 'material_escolar'
  const produtos_ = []
  function replaceIcon(id) {
    if (document.getElementById(id).className === "botaoFavorito")
      document.getElementById(id).className = "botaoFavoritado";
    else document.getElementById(id).className = "botaoFavorito";
  }
  async function getProducts(){
     
    try {
      
      const response = await api.get('http://localhost:3333/produtos');
       setProdutos([...response.data])
       console.log([...response.data])
       
    } catch (error) {
      console.warn(error);
       alert('Algo deu errado')
     }

   }
   useEffect(()=>{
     getProducts();
   },[])
   
  const [produtos,setProdutos] = useState(produtos_)
console.log(produtos)
  
  return (
    <Carousel variant="dark">
      {produtos.map((produtos) => (
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
