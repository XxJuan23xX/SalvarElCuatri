document.getElementById('generar').addEventListener('click', generarNombre);

function generarNombre() {
    const nombres1 = ['Miguel', 'Sofía', 'Luis', 'Yahir', 'Mía'];
    const nombres2 = ['Rosado', 'Manzanero', 'Lopez', 'Gotze', 'Messi'];

    const nombreAleatorio1 = nombres1[Math.floor(Math.random() * nombres1.length)];
    const nombreAleatorio2 = nombres2[Math.floor(Math.random() * nombres2.length)];

    const nombreCompleto = `${nombreAleatorio1} ${nombreAleatorio2}`;

    document.getElementById('nombre-resultado').textContent = nombreCompleto;
}