import { useState } from "react";
import "./FormularioJugador.css";

function FormularioJugador({ onGuardarJugador }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [errores, setErrores] = useState({}); // Guarda los mensajes de error, un mensaje por campo.

  const validar = () => {   // Revisa los tres campos y devuelve un objeto con los errores encontrados.
    const nuevosErrores = {};
    if (nombre.trim() === "") {
      nuevosErrores.nombre = "El nombre es obligatorio";
    }
    if (apellido.trim() === "") {
      nuevosErrores.apellido = "El apellido es obligatorio";
    }
    const edadNumero = Number(edad);    // Revisa los tres campos y devuelve un objeto con los errores encontrados.
    if (edad === "") {  // El campo está vacío
      nuevosErrores.edad = "La edad es obligatoria";
    } else if (!Number.isInteger(edadNumero) || edadNumero <= 0) {  // No es un entero o es 0 o negativo
      nuevosErrores.edad = "Ingresá una edad válida (número entero mayor a 0)";
    }
    return nuevosErrores;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const nuevosErrores = validar();
  setErrores(nuevosErrores);
  if (Object.keys(nuevosErrores).length > 0) {
    return;
  }
  onGuardarJugador({
    nombre: nombre.trim(),
    apellido: apellido.trim(),
    edad: Number(edad),
  });
};

  return (
    <form onSubmit={handleSubmit}>
      <div className="campo-formulario">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {errores.nombre && (
          <span className="error-campo">{errores.nombre}</span>
        )}
      </div>

      <div className="campo-formulario">
        <label htmlFor="apellido">Apellido</label>
        <input
          id="apellido"
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        {errores.apellido && (
          <span className="error-campo">{errores.apellido}</span>
        )}
      </div>

      <div className="campo-formulario">
        <label htmlFor="edad">Edad</label>
        <input
          id="edad"
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
        {errores.edad && <span className="error-campo">{errores.edad}</span>}
      </div>
      <button type="submit">Guardar jugador</button>
    </form>
  );
}

export default FormularioJugador;
