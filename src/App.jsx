
import "./App.css";
import Dado from "./components/Dado.jsx";

function App() {
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

        <section className="seccion-dado">
          <h2>¿Qué número te tocará?</h2>

          <Dado />
        </section>

        <footer className="pie-juego">
          <p>Proyecto 04 · Grupo 2</p>
        </footer>

      </div>
    </main>
  );
}

export default App;
