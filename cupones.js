cupones = [
    {
        cupon: "Cupon 1",
        descuento: 10
    },
    {
        cupon: "Cupon 2",
        descuento: 20
    },
    {
        cupon: "Cupon 3",
        descuento: 30
    }
]

cuponesActuales = [];
actualPrice = 30000;
totalCupones = 0;
function validarCupon(cupon) {
    return cupon.cupon === cuponUsuario;
}

function agregarCupon() {
    const cuponUsuario = document.getElementById("coupon-code").value;
    const priceField = document.getElementById("price");
    function validarCupon(cupon) {
        return cupon.cupon === cuponUsuario;
    }
    const validandoCupon = cupones.find(validarCupon);
    if (validandoCupon) {
        cuponesActuales.push([validandoCupon.cupon, validandoCupon.descuento]);
        console.log(cuponesActuales);
        totalCupones += validandoCupon.descuento;
    } else {
        alert("Cupon no encontrado");
    }
    if (cuponesActuales.length > 0) {
        const cupon = document.getElementById("cupones-aplicados");
        cupon.innerHTML = '<span><h3 class="sub-title">Cupones aplicados</h3></span>';
        for (var i = 0; i < cuponesActuales.length; i++) {
            cupon.innerHTML += '<div class="cart-data"><p>' + cuponesActuales[i][0] + '</p><p>$' + cuponesActuales[i][1] + '</p></div>';
        }
        priceField.innerHTML = "Price: $" + (actualPrice - totalCupones);
    }
}



