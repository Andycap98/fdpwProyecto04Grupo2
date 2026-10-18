import { useState } from "react";

function Dado() {
  const [valor, setValor] = useState(1);

  const lanzarDado = () => {
    const resultado = Math.floor(Math.random() * 6) + 1;
    setValor(resultado);
  };

  const caras = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

  return (
    <div className="contenedor-dado">
      <div
  className="cara-dado"
  style={{ fontSize: "100px", marginBottom: "30px" }}
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