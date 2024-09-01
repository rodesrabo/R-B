document.addEventListener('DOMContentLoaded', () => {
    const regalos = [
        { nombre: "Juego de ollas", precio: 1000, completado: 0 },
        { nombre: "Microondas", precio: 1500, completado: 0 },
        { nombre: "Juego de sábanas", precio: 800, completado: 0 },
        // Añade más regalos aquí
    ];

    const regalosContainer = document.getElementById('regalos-container');

    regalos.forEach((regalo, index) => {
        const regaloElement = document.createElement('div');
        regaloElement.className = 'regalo';
        regaloElement.innerHTML = `
            <h3>${regalo.nombre}</h3>
            <p>Precio: Bs. ${regalo.precio}</p>
            <div class="barra-completitud">
                <div class="progreso" style="width: ${(regalo.completado / regalo.precio) * 100}%"></div>
            </div>
            <p>${Math.round((regalo.completado / regalo.precio) * 100)}% completado</p>
            <form class="aporte-form">
                <label for="aporte-${index}">Aporte:</label>
                <input type="number" id="aporte-${index}" name="aporte" min="1" required>
                <button type="submit">Aportar</button>
            </form>
        `;
        regalosContainer.appendChild(regaloElement);

        const form = regaloElement.querySelector('.aporte-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const aporte = Number(form.aporte.value);
            regalo.completado += aporte;
            if (regalo.completado > regalo.precio) {
                regalo.completado = regalo.precio;
            }
            actualizarProgreso(regaloElement, regalo);
            form.reset();
        });
    });
});

function actualizarProgreso(element, regalo) {
    const barra = element.querySelector('.progreso');
    const porcentaje = (regalo.completado / regalo.precio) * 100;
    barra.style.width = `${porcentaje}%`;
    element.querySelector('p:last-of-type').textContent = `${Math.round(porcentaje)}% completado`;
}

// Aquí puedes añadir la lógica para transferir fondos de regalos incompletos
// cuando se termine el plazo. Esto probablemente requerirá una función
// que se ejecute en una fecha específica o mediante un botón de administrador.