function checkAge() {
    const age = document.getElementById('age').value;
    const result = age >= 18 ? 'Ya puedes conducir.' : 'No puedes conducir.';
    document.getElementById('ageResult').textContent = result;
}

function checkGrade() {
    const grade = document.getElementById('grade').value;
    let result;

    if (grade >= 0 && grade < 3) {
        result = 'Muy deficiente';
    } else if (grade >= 3 && grade < 5) {
        result = 'Insuficiente';
    } else if (grade >= 5 && grade < 6) {
        result = 'Suficiente';
    } else if (grade >= 6 && grade < 7) {
        result = 'Bien';
    } else if (grade >= 7 && grade < 9) {
        result = 'Notable';
    } else if (grade >= 9 && grade <= 10) {
        result = 'Sobresaliente';
    } else {
        result = 'Nota inválida.';
    }
    
    document.getElementById('gradeResult').textContent = result;
}

let texts = [];

function addText() {
    const text = document.getElementById('textInput').value;
    if (text) {
        texts.push(text);
        document.getElementById('textInput').value = '';
    }
}

function showTexts() {
    document.getElementById('textResult').textContent = texts.join('-');
}

function addTextWithPrompt() {
    let text;
    while (true) {
        text = prompt("Introduce una cadena de texto (o pulsa Cancelar para terminar):");
        if (text === null) {
            break;
        }
        if (text) {
            texts.push(text);
        }
    }
    document.getElementById('textResult').textContent = texts.join('-');
}

function checkDNI() {
    const dni = document.getElementById('dni').value;
    const letras = 'TRWAGMYFPDXBNJZSQVHLCKE';

    if (dni >= 0 && dni <= 99999999) {
        const letra = letras[dni % 23];
        document.getElementById('dniResult').textContent = `La letra de tu DNI es: ${letra}`;
    } else {
        alert('El número debe estar entre 0 y 99999999.');
    }
}
