function verificarPrimo() {
    const numero = parseInt(document.getElementById('numeroPrimo').value);
    let esPrimo = true;

    if (isNaN(numero) || numero <= 1) {
        esPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                esPrimo = false;
                break;
            }
        }
    }

    document.getElementById('resultadoPrimo').innerText = esPrimo ? `${numero} es un número primo` : `${numero} no es un número primo`;
}

function eliminarDuplicados() {
    const entrada = document.getElementById('arregloDuplicados').value;
    const numeros = entrada.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    const sinDuplicados = [...new Set(numeros)];

    document.getElementById('resultadoDuplicados').innerText = `Arreglo sin duplicados: ${sinDuplicados.join(', ')}`;
}

function calcularFactorial() {
    const numero = parseInt(document.getElementById('numeroFactorial').value);
    let factorial = 1;

    if (isNaN(numero) || numero < 0) {
        factorial = 'Número inválido';
    } else {
        for (let i = 2; i <= numero; i++) {
            factorial *= i;
        }
    }

    document.getElementById('resultadoFactorial').innerText = factorial === 'Número inválido' ? factorial : `Factorial de ${numero} es ${factorial}`;
}

function contarVocales() {
    const palabra = document.getElementById('palabraVocales').value.toLowerCase();
    const vocales = palabra.match(/[aeiouáéíóúü]/gi);
    const cantidad = vocales ? vocales.length : 0;

    document.getElementById('resultadoVocales').innerText = `La palabra "${palabra}" tiene ${cantidad} vocales`;
}

function sumarArreglo() {
    const entrada = document.getElementById('arregloSuma').value;
    const numeros = entrada.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    const suma = numeros.reduce((acc, num) => acc + num, 0);

    document.getElementById('resultadoSuma').innerText = `Suma del arreglo: ${suma}`;
}

function encontrarMaximo() {
    const entrada = document.getElementById('arregloMaximo').value;
    const numeros = entrada.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    const maximo = Math.max(...numeros);

    document.getElementById('resultadoMaximo').innerText = `Máximo del arreglo: ${maximo}`;
}

function invertirCadena() {
    const entrada = document.getElementById('cadenaInvertir').value;
    const numeros = entrada.split(',').map(num => num.trim()).filter(num => num !== '');
    const invertidos = numeros.reverse();

    document.getElementById('resultadoInvertir').innerText = `Cadena invertida: ${invertidos.join(', ')}`;
}
