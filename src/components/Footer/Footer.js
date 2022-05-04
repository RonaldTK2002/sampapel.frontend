import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";

function Footer() {
  return (
    <footer>
      <div>
        <ul className="listaSuporte">
          <li>Suporte</li>
          <li>Sobre</li>
          <li>Trabalhe conosco</li>
          <li>Parceiros</li>
        </ul>
        <div className="footerContainer">
          <h1>REDES SOCIAIS</h1>
          <div className="footerContainerIcons">
            <ul className="socialIcons">
              <li className="icons">
                <FacebookIcon fontSize="large" />
                <p className="socialmedia"> SamPapel</p>
              </li>
              <li className="icons">
                <InstagramIcon fontSize="large" />
                <p className="socialmedia"> @sampapel</p>
              </li>
              <li className="icons">
                <TwitterIcon fontSize="large" />
                <p className="socialmedia"> @sampapel</p>
              </li>
              <li className="icons">
                <TelegramIcon fontSize="large" />
                <p className="socialmedia"> @sampapel</p>
              </li>
            </ul>
            <img className="logofooter" src="images/sampapelpretobranco.png" />
          </div>
        </div>
        <div className="infoContainer">
          <ul className="informaçõesPapelaria">
            <li>CNPJ xx.xxx.xxx/xxxx-xx</li>
            <li>Rua Algum Lugar, nº 001-Bairro Algum ai - Belo Horizonte,MG</li>
            <li>Telefone:(xx) xxxx-xxxx</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
