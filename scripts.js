document.addEventListener('DOMContentLoaded', () => {
    const regalos = [
        { nombre: "Juego de ollas", precio: 1000, completado: 0 },
        { nombre: "Microondas", precio: 1500, completado: 0 },
        { nombre: "Juego de sábanas", precio: 800, completado: 0 },
        // Añade más regalos aquí
    ];

    const regalosContainer = document.getElementById('regalos-container');

    regalos.forEach((regalo, index) => {
        const regaloElement = crearElementoRegalo(regalo, index);
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

function crearElementoRegalo(regalo, index) {
    const regaloElement = document.createElement('div');
    regaloElement.className = 'regalo';
    regaloElement.setAttribute('data-aos', 'fade-up');
    regaloElement.setAttribute('data-aos-delay', (index * 100).toString());
    // ... resto del código para crear el elemento regalo ...
    return regaloElement;
}

function actualizarProgreso(element, regalo) {
    const barra = element.querySelector('.progreso');
    const porcentaje = (regalo.completado / regalo.precio) * 100;
    barra.style.width = `${porcentaje}%`;
    element.querySelector('p:last-of-type').textContent = `${Math.round(porcentaje)}% completado`;
}

// Aquí puedes añadir la lógica para transferir fondos de regalos incompletos
// cuando se termine el plazo. Esto probablemente requerirá una función
// que se ejecute en una fecha específica o mediante un botón de administrador.

document.addEventListener('DOMContentLoaded', function() {
    const formConfirmacion = document.getElementById('form-confirmacion');
    
    formConfirmacion.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const contacto = document.getElementById('contacto').value;
        const mensaje = document.getElementById('mensaje').value;
        
        // Aquí puedes añadir el código para enviar esta información a tu servidor
        // Por ahora, solo mostraremos un mensaje de confirmación
        alert(`Gracias ${nombre} por confirmar tu asistencia. Te contactaremos a través de: ${contacto}`);
        
        formConfirmacion.reset();
    });
});

// Aquí puedes añadir la lógica para transferir fondos de regalos incompletos
// cuando se termine el plazo. Esto probablemente requerirá una función
// que se ejecute en una fecha específica o mediante un botón de administrador.
