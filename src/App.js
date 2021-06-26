import { useState, useEffect } from "react";
import DolarOficial from "./components/DolarOficial";
import DolarBlue from "./components/DolarBlue";
import DolarSoja from "./components/DolarSoja";
import DolarLiqui from "./components/DolarLiqui";
import DolarBolsa from "./components/DolarBolsa";
import "./styles.css";

export default function App() {
  //funciones que guardan los valores
  const [oficialDolar, guardarValorOficial] = useState({});
  const [BlueDolar, guardarValorBlue] = useState({});
  const [SojaDolar, guardarValorSoja] = useState({});
  const [LiquiDolar, guardarValorLiqui] = useState({});
  const [BolsaDolar, guardarValorBolsa] = useState({});

  //request the api
  const apiDolar = async () => {
    const api = await fetch(
      "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
    );
    const apiDolarInfo = await api.json();
    //save the values in hooks
    guardarValorOficial(apiDolarInfo[0].casa);
    guardarValorBlue(apiDolarInfo[1].casa);
    guardarValorSoja(apiDolarInfo[2].casa);
    guardarValorLiqui(apiDolarInfo[3].casa);
    guardarValorBolsa(apiDolarInfo[4].casa);
  };
  //call the api
  useEffect(() => {
    apiDolar();
  }, []);

  return (
    <>
      <div className="App">
        {/* the components receives the data hooks*/}
        <DolarOficial compra={oficialDolar.compra} venta={oficialDolar.venta} />
        <DolarBlue compra={BlueDolar.compra} venta={BlueDolar.venta} />
        <DolarSoja compra={SojaDolar.compra} venta={SojaDolar.venta} />
        <DolarLiqui compra={LiquiDolar.compra} venta={LiquiDolar.venta} />
        <DolarBolsa compra={BolsaDolar.compra} venta={BolsaDolar.venta} />
      </div>
    </>
  );
}
