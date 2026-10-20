import "./MensajeResultado.css";
 
// Recibe por props el resultado del dado (numero) y muestra un mensaje según su valor.
function MensajeResultado({ numero }) {
  let mensaje;
  let clase; // Clase CSS que cambia el color según el resultado.
 
  if (numero === 1) {
    mensaje = "Mala suerte, sacaste 1";
    clase = "mala-suerte";
  } else if (numero >= 2 && numero <= 5) {
    mensaje = "Buen tiro!";
    clase = "buen-tiro";
  } else if (numero === 6) {
    mensaje = "¡FELICIDADES! ¡Sacaste el mayor!";
    clase = "felicidades";
  }
 
  return <p className={`mensaje-resultado ${clase}`}>{mensaje}</p>;
}
 
export default MensajeResultado;