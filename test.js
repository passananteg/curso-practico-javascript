 matriz = [
    {
        nombre: 'Gianpaolo',
        edad: 36,
        sexo: 'Masculino'
    },
    {
        nombre: 'Valentina',
        edad: 38,
        sexo: 'Femenino'
    }
]

function consigueValor(valor) {
    return valor.nombre == 'Gianpaolo'
}

console.log(matriz.find(consigueValor))