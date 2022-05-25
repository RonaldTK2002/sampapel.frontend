import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useMediaQuery } from '@mui/material/';


function Footer() {

  const matches800 = useMediaQuery('(max-width:715px)');

  const cellFontProps = {
    sx: matches800
      &&{
        fontSize: '3vh',
      }
  };

  return (
    <footer>
      <div>
        <div className="listaSuporte">
          <p>Suporte</p>
          <p>Sobre</p>
          <p>Trabalhe conosco</p>
          <p>Parceiros</p>
        </div>
        <div className="footerContainer">
          <h1 className = 'tituloFooter'>REDES SOCIAIS</h1>
          <div className="footerContainerIcons">
            <ul className="socialIcons">
              <li className="icons">
                <FacebookIcon {...cellFontProps} fontSize="large" />
                <p className="socialmedia"> SamPapel</p>
              </li>
              <li className="icons">
                <InstagramIcon {...cellFontProps} fontSize="large" />
                <p className="socialmedia"> @sampapel</p>
              </li>
              <li className="icons">
                <TwitterIcon {...cellFontProps} fontSize="large" />
                <p className="socialmedia"> @sampapel</p>
              </li>
              <li className="icons">
                <TelegramIcon {...cellFontProps} fontSize="large" />
                <p className="socialmedia"> @sampapel</p>
              </li>
            </ul>
            <img className="logoFooter" src="images/sampapelpretobranco.png" />
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
