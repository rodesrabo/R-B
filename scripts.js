document.addEventListener('DOMContentLoaded', () => {
    const regalos = document.querySelectorAll('.regalo');
    const forms = document.querySelectorAll('#lista-regalos form');

    forms.forEach((form, index) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const cuotaInput = form.querySelector('input[name="cuota"]');
            const cuota = parseInt(cuotaInput.value);
            const progresoDiv = form.closest('.regalo').querySelector('.progreso');
            const porcentajeTexto = form.closest('.regalo').querySelector('p:nth-of-type(2)');
            let progresoActual = parseInt(progresoDiv.style.width);

            // Actualizar el progreso
            progresoActual += (cuota / 1000) * 100; // Suponiendo que 1000 Bs es el total del regalo
            if (progresoActual >= 100) {
                progresoActual = 100;
                progresoDiv.style.backgroundColor = '#4caf50'; // Cambiar color a verde
                porcentajeTexto.textContent = 'Regalo listo';
                // Habilitar el siguiente regalo
                if (index + 1 < regalos.length) {
                    const siguienteRegalo = regalos[index + 1];
                    siguienteRegalo.querySelectorAll('input, textarea, button').forEach(element => {
                        element.disabled = false;
                    });
                }
            } else {
                porcentajeTexto.textContent = `${progresoActual}% completado`;
            }
            progresoDiv.style.width = `${progresoActual}%`;
        });
    });
});
