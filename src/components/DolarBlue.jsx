import React from "react";
import "./dolar.css";

const DolarBlue = ({ compra, venta }) => {
  return (
    <>
      <div className="App__dolar">
        <div className="container-dolar">
          <h2>Dolar Blue</h2>
          <h3>
            COMPRA: <span>{compra}</span>{" "}
          </h3>
          <h3>
            VENTA: <span>{venta}</span>{" "}
          </h3>
        </div>
      </div>
    </>
  );
};

export default DolarBlue;
