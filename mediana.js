const lista1 = [
    100,
    200,
    500,
    400000000
];

function sortNumber(a, b) {
    return a - b;
}

list1 = lista1.sort(sortNumber);
const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    return promedioLista = sumaLista / lista.length;
}


let mediana;
if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];
}