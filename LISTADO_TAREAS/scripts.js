document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nuevaTarea = document.getElementById('nuevaTarea').value;
    const fechaInicio = document.getElementById('fechaInicio').value;
    const fechaFin = document.getElementById('fechaFin').value;
    const fechaEntrega = document.getElementById('fechaEntrega').value;
    const responsable = document.getElementById('responsable').value;

    // Crear una nueva fila en la tabla
    const tableBody = document.getElementById('taskTableBody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${nuevaTarea}</td>
        <td>${fechaInicio}</td>
        <td>${fechaFin}</td>
        <td>${fechaEntrega}</td>
        <td>${responsable}</td>
        <td class="status"></td>
        <td>
            <button class="btn btn-success btn-sm resolve-btn" onclick="markCompleted(this)">Resolver</button>
            <button class="btn btn-secondary btn-sm unresolve-btn d-none" onclick="unmarkCompleted(this)">Desmarcar</button>
            <button class="btn btn-danger btn-sm" onclick="deleteTask(this)">Eliminar</button>
        </td>
    `;

    tableBody.appendChild(newRow);

    updateStatus(newRow);

    // Limpiar el formulario
    document.getElementById('taskForm').reset();
});

function markCompleted(button) {
    const row = button.parentElement.parentElement;
    const endDate = new Date(row.cells[2].innerText);
    const deliveryDate = new Date(row.cells[3].innerText);

    if (deliveryDate > endDate) {
        alert('No puede entregar tareas vencidas');
    } else {
        row.classList.add('completed');
        row.querySelector('.status').innerText = 'Completada';

        // Mostrar el botón de Desmarcar y ocultar el de Resolver
        row.querySelector('.unresolve-btn').classList.remove('d-none');
        row.querySelector('.resolve-btn').classList.add('d-none');
    }
}

function unmarkCompleted(button) {
    if (confirm('¿Está seguro de desmarcar la tarea?')) {
        const row = button.parentElement.parentElement;
        row.classList.remove('completed');
        row.querySelector('.status').innerText = '';

        // Mostrar el botón de Resolver y ocultar el de Desmarcar
        row.querySelector('.resolve-btn').classList.remove('d-none');
        row.querySelector('.unresolve-btn').classList.add('d-none');
    }
}

function deleteTask(button) {
    if (confirm('¿Está seguro de eliminar la tarea?')) {
        const row = button.parentElement.parentElement;
        row.remove();
    }
}

function updateStatus(row) {
    const endDate = new Date(row.cells[2].innerText);
    const deliveryDate = new Date(row.cells[3].innerText);

    if (deliveryDate > endDate) {
        row.classList.add('overdue');
        row.querySelector('.status').innerText = 'Vencida';
    } else {
        row.classList.remove('overdue');
        row.querySelector('.status').innerText = '';
    }
}

document.getElementById('searchInput').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const rows = document.getElementById('taskTableBody').getElementsByTagName('tr');

    for (let row of rows) {
        const taskName = row.cells[0].innerText.toLowerCase();
        row.style.display = taskName.includes(filter) ? '' : 'none';
    }
});

function sortTable(type) {
    const rowsArray = Array.from(document.getElementById('taskTableBody').rows);

    let compare;
    switch(type) {
        case 'dateNewest':
            compare = (rowA, rowB) => new Date(rowB.cells[2].innerText) - new Date(rowA.cells[2].innerText);
            break;
        case 'dateOldest':
            compare = (rowA, rowB) => new Date(rowA.cells[2].innerText) - new Date(rowB.cells[2].innerText);
            break;
        case 'alphabetical':
            compare = (rowA, rowB) => rowA.cells[0].innerText.localeCompare(rowB.cells[0].innerText);
            break;
    }

    rowsArray.sort(compare);

    const tableBody = document.getElementById('taskTableBody');
    rowsArray.forEach(row => tableBody.appendChild(row));
}



