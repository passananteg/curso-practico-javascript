const lista1 = [
    100,
    200,
    300,
    500
]

let sumaLista1 = 0;

for (let i = 0; i < lista1.length; i++) {
    sumaLista1 += lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;

function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista += lista[i];
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    return promedioLista = sumaLista / lista.length;
}