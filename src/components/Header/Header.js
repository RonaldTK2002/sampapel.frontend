import React, { useState } from "react";
import "./Header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
function Header() {
  function pushHome() {
    if (window.location.href !== "http://localhost:3000/login" && 'http://localhost:3000/cadastro') {
      window.location.href = "home";
    }
    else alert('Antes de prosseguir, efetue o login/cadastro')
  }
  const [menu, setMenu] = useState(false);
  function handleOpen() {
    if(window.location.href !== "http://localhost:3000/login" && window.location.href !== 'http://localhost:3000/cadastro' ){
      setMenu(true);
    }
    else alert('Antes de prosseguir, efetue o login/cadastro')
    
  }
  function handleClose() {
    setMenu(false);
  }
  return (
    <header>
      <div className="headerContainer">
        <button onClick={handleOpen} className="headerButtons">
          <MenuOutlinedIcon fontSize="large" />
        </button>
        <Menu className="menuHeader"
          anchorOrigin={{
            vertical:70,
            horizontal:210,
          }}
          open={menu}
          onClose={handleClose}
        >
          <h1 className='menuTitle'>Produtos</h1>
          <MenuItem>Categoria A</MenuItem>
          <MenuItem>Categoria B</MenuItem>
          <MenuItem>Categoria C</MenuItem>
        </Menu>
        <button className="heart">
          <FavoriteBorderOutlinedIcon fontSize="large" />
        </button>
        <button className="headerButtons" onClick={pushHome}>
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
