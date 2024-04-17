import React, { useState } from "react";
import "./Topbar.css"; // Importa tu archivo de estilos CSS
import { Link, redirect } from "react-router-dom";

const Topbar = () => {
  const [searchText, setSearchText] = useState("");

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Texto de búsqueda:", searchText);
  };

  return (
    <div className="Container">
      <div className="Wrapper">
        <div className="Left">
          <div className="Center">
            <h1 className="Logo">NEXUS</h1>
          </div>
        </div>
        <div className="SearchContainer">
          <form onSubmit={handleSubmit}>
            <input
              className="Input"
              type="text"
              placeholder="Buscar productos"
              value={searchText}
              onChange={handleInputChange}
            />
              <button className="SearchButton" type="submit">
                Buscar
              </button>
          </form>
        </div>
        <div className="Right">
          <span className="Language">ES</span>
          <div className="MenuItem">Listas</div>
          <div className="MenuItem">Devoluciones y pedidos</div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
