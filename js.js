const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const historial = []; 

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
                historial.push(pantalla.textContent); 
            } catch {
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (boton.id === "historial") {
            mostrarHistorial(); // Mostramos el historial al hacer clic en el botón "Ver Historial"
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})

function mostrarHistorial() {
    pantalla.textContent = historial.join(", ");
}
