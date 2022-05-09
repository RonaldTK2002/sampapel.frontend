import React from "react";
import "./Menu.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Typography } from "@mui/material";

function MenuIcon() {
  return (
    <div>
      <Menu open = {true}>
          <MenuItem><Typography>Produtos</Typography></MenuItem>
          <MenuItem>Categoria A</MenuItem>
          <MenuItem>Categoria B</MenuItem>
          <MenuItem>Categoria C</MenuItem>
          
      </Menu>
    </div>
  );
}

export default MenuIcon;
