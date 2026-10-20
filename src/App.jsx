
import { useState } from "react";
import "./App.css";

import Dado from "./components/Dado.jsx";
import FormularioJugador from "./components/FormularioJugador.jsx";

function App() {
  const [jugador, setJugador] = useState(null);

  const guardarJugador = (datos) => {
    setJugador(datos);
  };

  return (
    <main className="pagina-juego">
      <div className="tarjeta-juego">

        <header className="encabezado-juego">
          <span className="etiqueta-juego">
            JUEGO DE AZAR
          </span>

          <h1>El Dado de la Suerte</h1>

          <p>
            Poné a prueba tu suerte.
            ¡Lanzá el dado y descubrí tu destino!
          </p>
        </header>

        <section className="seccion-jugador">
          <h2>Datos del jugador</h2>

          <FormularioJugador
            onGuardarJugador={guardarJugador}
          />
        </section>

        <section className="seccion-dado">
          <h2>¿Qué número te tocará?</h2>
          <Dado />
        </section>

        {jugador && (
          <section className="datos-jugador">
            <h2>Jugador registrado</h2>
            <p>Nombre: {jugador.nombre}</p>
            <p>Apellido: {jugador.apellido}</p>
            <p>Edad: {jugador.edad}</p>
          </section>
        )}

        <footer className="pie-juego">
          <p>Proyecto 04 · Grupo 2</p>
        </footer>

      </div>
    </main>
  );
}

export default App;

