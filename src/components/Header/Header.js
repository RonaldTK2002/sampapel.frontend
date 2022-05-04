import React from "react";
import "./Header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
function Header() {
  return (
    <header>
      <div className ='headerContainer'>
        <MenuOutlinedIcon fontSize = 'large'/>
        <FavoriteBorderOutlinedIcon fontSize = 'large'/>
        <img className = 'logoHeader' src = '/images/sampapellogo.png'/>
        <ShoppingCartOutlinedIcon fontSize = 'large' />
        <AccountCircleOutlinedIcon fontSize = 'large'/>
      </div>
    </header>
  );
}

export default Header;
