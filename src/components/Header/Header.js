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
    window.location.href = "http://localhost:3000/home";
  }
  const [menu, setMenu] = useState(false);
  const [anchorEl,setAnchorEl] = useState(false);
  function pushPerfil() {
    window.location.href = "http://localhost:3000/perfil";
  }
  function handleOpen(event) {
 
      setMenu(true);
      setAnchorEl(event.currentTarget)

  }
  function handleClose() {
    setMenu(false);
  }
  function linkMenu(link){
    window.location.href = link;
    setMenu(false)
  }
  return (
    <header>
      <div className="headerContainer">
        <button onClick={handleOpen} className="headerButtons">
          <MenuOutlinedIcon fontSize="large" />
        </button>

        <Menu
          className="menuHeader"
          anchorEl={anchorEl}
          open={menu}
          onClose={handleClose}
        >
          <MenuItem onClick={()=>window.location.href = '/produtos'}>
            <h1 className="menuTitle">Produtos</h1>
          </MenuItem>
          <MenuItem onClick = {()=>linkMenu( '/produtos')}>
            <p className="menuCategorias">Material escolar</p>
          </MenuItem>
          <MenuItem onClick={()=>linkMenu( '/produtos#escritorioAnchor')}>
            <p className="menuCategorias">Produtos de escritório</p>
          </MenuItem>
          <MenuItem onClick={()=>linkMenu('/produtos#eletronicosAnchor')}>
            <p className="menuCategorias">Produtos Eletrônicos</p>
          </MenuItem>
          
        </Menu>

        <button className="heart" onClick = {()=>linkMenu('/produtos#favoritos')}>
          <FavoriteBorderOutlinedIcon fontSize="large" />
        </button>
        <button className="headerButtons" onClick={pushHome}>
          <img className="logoHeader" src="/images/sampapellogo.png" />
        </button>
        <button className="headerButtons">
          <ShoppingCartOutlinedIcon fontSize="large" />
        </button>
        <button className="headerButtons" onClick={pushPerfil}>
          <AccountCircleOutlinedIcon fontSize="large" />
        </button>
      </div>
    </header>
  );
}

export default Header;
