// Codigo del cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;

function areaCuadrado(lado) {
    return lado * lado;
}
console.log("El area del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");


function areaTriangulo(base, altura) {
    return base * altura / 2;
}
// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + " cm2");

console.log("Los lados del triangulo miden: " 
            + ladoTriangulo1 
            + " cm, " 
            + ladoTriangulo2 
            + " cm y la base " 
            + baseTriangulo 
            + " cm");
console.groupEnd();

// Codigo del circulo
console.group("Circulos");
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + " cm");

function diametroCirculo(radio) {
    return 2 * radio;
}
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + " cm");

const PI = Math.PI;
console.log("El valor de PI es: " + PI);

function perimetroCirculo(radio) {
    return PI * diametroCirculo(radio);
}

// const perimetroCirculo = diametroCirculo * PI;

function areaCirculo(radio) {
    return PI * radio * radio;
}

// const areaCirculo = radioCirculo * radioCirculo * PI;
console.log("El area del circulo es: " + areaCirculo + " cm2");

console.groupEnd();

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const lado = input.value;
    const perimetro = perimetroCuadrado(lado);
    alert(perimetro)
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const lado = input.value;
    const area = areaCuadrado(lado);
    alert(area)
}