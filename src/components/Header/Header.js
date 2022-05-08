import React from "react";
import "./Header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { jsx } from "@emotion/react";

function Header() {

  function pushHome(){
    if (window.location.href !== 'http://localhost:3000/login'){
      window.location.href = 'home'
    }
    
  }
  return (
    <header>
      <div className="headerContainer">
        <button className="headerButtons">
          <MenuOutlinedIcon fontSize="large" />
        </button>
        <button className="heart">
          <FavoriteBorderOutlinedIcon fontSize="large" />
        </button>
        <button
          className="headerButtons"
          onClick={pushHome}
        >
          <img className="logoHeader" src="/images/sampapellogo.png" />
        </button>
        <button className="headerButtons">
          <ShoppingCartOutlinedIcon fontSize="large" />
        </button>
        <button className="headerButtons">
          <AccountCircleOutlinedIcon fontSize="large" />
        </button>
      </div>
    </header>
  );
}

export default Header;
