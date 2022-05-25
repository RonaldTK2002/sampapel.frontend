import React, { useState } from "react";
import "./Header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useMediaQuery } from '@mui/material/';

function Header() {
  function pushHome() {
    window.location.href = "http://localhost:3000/home";
  }
  const [menu, setMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
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
  function linkMenu(link) {
    window.location.href = link;
    setMenu(false)
  }

  const matches800 = useMediaQuery('(max-width:800px)');

  const cellFontProps = {
    sx: matches800
      &&{
        fontSize: '2.5vh',
      }
  };

  return (
    <header>
      <div className="headerContainer">
        <button onClick={handleOpen} className="headerButtons">
          <MenuOutlinedIcon {...cellFontProps} fontSize="large" />
        </button>

        <Menu
          className="menuHeader"
          anchorEl={anchorEl}
          open={menu}
          onClose={handleClose}
        >
          <MenuItem onClick={() => window.location.href = '/login'}>
            <h1 className="menuTitle">Login</h1>
          </MenuItem>
          <MenuItem onClick={() => window.location.href = '/produtos'}>
            <h1 className="menuTitle">Produtos</h1>
          </MenuItem>
          <MenuItem onClick={() => linkMenu('/produtos')}>
            <p className="menuCategorias">Material escolar</p>
          </MenuItem>
          <MenuItem onClick={() => linkMenu('/produtos#escritorioAnchor')}>
            <p className="menuCategorias">Produtos de escritório</p>
          </MenuItem>
          <MenuItem onClick={() => linkMenu('/produtos#eletronicosAnchor')}>
            <p className="menuCategorias">Produtos Eletrônicos</p>
          </MenuItem>

        </Menu>

        <button className="heart" onClick={() => linkMenu('/produtos#favoritos')}>
          <FavoriteBorderOutlinedIcon {...cellFontProps} fontSize="large" />
        </button>
        <button className="headerButtons" onClick={pushHome}>
          <img className="logoHeader" src="/images/sampapellogo.png" />
        </button>
        <button className="headerButtons">
          <ShoppingCartOutlinedIcon {...cellFontProps} fontSize="large" />
        </button>
        <button className="headerButtons" onClick={pushPerfil}>
          <AccountCircleOutlinedIcon {...cellFontProps} fontSize="large" />
        </button>
      </div>
    </header>
  );
}

export default Header;
