# El Dado de la Suerte 🎲

**Proyecto 04 — Grupo 2**

Tecnicatura Universitaria en Diseño Integral de Videojuegos  
Facultad de Ingeniería — Universidad Nacional de Jujuy

## Descripción del proyecto

El Dado de la Suerte es una aplicación web desarrollada con React y Vite que simula el lanzamiento de un dado de seis caras.

El usuario puede registrar su nombre, apellido y edad, lanzar el dado y obtener un resultado aleatorio entre 1 y 6.

La aplicación está diseñada para mostrar un mensaje diferente según el resultado del lanzamiento.

## Tecnologías utilizadas

- HTML y CSS.
- JavaScript y JSX.
- React.
- Vite.
- Git y GitHub para el control de versiones.

## Integrantes y responsabilidades

| Andrea Cappiello | Organización del repositorio, integración de componentes, interfaz principal y estilos CSS |
| Gabriel Ruiz | Desarrollo del componente `Dado.jsx` y lanzamiento aleatorio |
| Leandro | Desarrollo de `FormularioJugador.jsx` y validaciones |
| Nicolás | Desarrollo de `MensajeResultado.jsx` y mensajes condicionales |

Cada integrante trabaja en su propia rama y registra sus aportes mediante commits.

## Funcionamiento

1. El jugador ingresa su nombre, apellido y edad.
2. El formulario valida los datos ingresados.
3. El usuario presiona el botón **Lanzar Dado**.
4. La aplicación genera un número aleatorio del 1 al 6.
5. Según el resultado, se muestra uno de los siguientes mensajes:
   - **1:** Mala suerte, sacaste 1.
   - **2 a 5:** Buen tiro!
   - **6:** ¡FELICIDADES! ¡Sacaste el mayor!

## Ejecución del proyecto

Para instalar las dependencias:

```bash
npm install
```

Para ejecutar el proyecto:

```bash
npm run dev
```

Después, abrir la dirección local que muestra Vite en la terminal.

## Uso de inteligencia artificial

Durante el desarrollo se utilizó **ChatGPT de OpenAI (GPT-5)** como herramienta de apoyo para comprender conceptos, organizar el trabajo y asistir en la implementación de determinadas funcionalidades.

### ¿En qué tareas se utilizó?


**1. Asistencia con Git y GitHub**

Se consultó cómo crear y gestionar ramas, realizar commits, publicar cambios, fusionar los aportes de los compañeros y mantener el historial de contribuciones.

**2. Integración de componentes React**

Se utilizó para comprender la importación de componentes, el uso de `useState`, las `props` y la comunicación entre componentes desde `App.jsx`.

**3. Diseño de la interfaz**

Se utilizó como asistencia para desarrollar y adaptar estilos CSS, incluyendo el fondo violeta, los detalles dorados, los botones y la animación visual del dado.

**4. Integración del formulario**

Se consultó cómo conectar el componente desarrollado por Leandro con `App.jsx` para recibir, almacenar y mostrar los datos del jugador.

**5. Explicación y revisión del código**

Se utilizó para comprender instrucciones de JavaScript, JSX y CSS, revisar posibles errores y orientar las pruebas de funcionamiento.

### Participación humana

Nosotros como equipo usamos la IA para guiarnos en la resolución del proyecto en react. Todos usamos chat gpt 5, pero siempre siguiendo las recomendaciones del profesor para poder hacer un proyecto acorde a su planificación y tambien usamos nuestro propio criterio personal como trainees en el uso de estas tecnologias. 

## Estado del proyecto

Proyecto en desarrollo. Se encuentran implementados el lanzamiento del dado, el registro del jugador y el diseño de la interfaz. Está pendiente la integración de los mensajes condicionales.