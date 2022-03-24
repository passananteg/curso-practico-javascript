function alturaTrianguloIsosceles() {
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;
    console.log(lado1);
    console.log(lado2);
    console.log(base);
    if (lado1 == lado2 && lado1 != base) {
        alert(Math.sqrt(lado1 ** 2  - (base ** 2) / 4));
    } else {
        alert("No es un triangulo isosceles");
    }
}
