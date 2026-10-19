
import { useState } from "react";
import "./Dado.css";

function Dado() {
  const [valor, setValor] = useState(1);
  const [lanzamientos, setLanzamientos] = useState(0);

  const lanzarDado = () => {
    const resultado = Math.floor(Math.random() * 6) + 1;
    setValor(resultado);
    setLanzamientos((anterior) => anterior + 1);
  };

  const caras = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  return (
    <div className="contenedor-dado">
      <div
        key={lanzamientos}
        className={`cara-dado ${lanzamientos > 0 ? "animando" : ""}`}
      >
        {caras[valor - 1]}
      </div>

      <button onClick={lanzarDado}>
        Lanzar Dado
      </button>
    </div>
  );
}

export default Dado;
