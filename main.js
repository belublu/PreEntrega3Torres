/* Bienvenida */
function bienvenida (){
    alert ("Bienvenido! Comencemos con el registro para realizar tu compra")
}
bienvenida()


/* Ingreso de datos personales */
let nombreUsuario = prompt ("Ingresa tu nombre y apellido")
nombreUsuario = nombreUsuario.toLowerCase()
console.log (nombreUsuario)
while(nombreUsuario == " " || nombreUsuario == false){
    alert("Nombre y apellido ingresado incorrectamente. Intentalo nuevamente.")
    nombreUsuario = prompt ("Ingresa tu nombre y apellido")
    
}

let edadUsuario = prompt ("Ingresa tu edad")
console.log (edadUsuario)
while (edadUsuario <= 18){
    alert ("No podes continuar con el registro ya que sos menor de edad")
    edadUsuario = prompt ("Ingrese su edad")
    console.log (edadUsuario)
}

let diaNacUsuario = parseInt(prompt("Ingresa tu día de nacimiento"))
console.log (diaNacUsuario)
while ((diaNacUsuario <= 0 || diaNacUsuario >= 32) || diaNacUsuario == false || diaNacUsuario == " " || isNaN(diaNacUsuario)){
    alert ("Día ingresado incorrectamente")
    diaNacUsuario = prompt ("Ingrese su día de nacimiento")
    console.log (diaNacUsuario)
}

let mesNacUsuario
let salir = true    
do {
    mesNacUsuario = prompt ("Ingrese su mes de nacimiento").toLowerCase()
    switch(mesNacUsuario){
        case "enero":
            salir = false
            break

            case "febrero":
            salir = false
            break

            case "marzo":
            salir = false
            break

            case "abril":
            salir = false
            break

            case "mayo":
            salir = false
            break

            case "junio":
            salir = false
            break

            case "julio":
            salir = false
            break

            case "agosto":
            salir = false
            break

            case "septiembre":
            salir = false
            break

            case "octubre":
            salir = false
            break

            case "noviembre":
            salir = false
            break

            case "diciembre":
            salir = false
            break
    }
} while (salir)
console.log (mesNacUsuario)

let anioNacUsuario = parseInt(prompt ("Ingresa tu año de nacimiento"))
console.log (anioNacUsuario)
while (anioNacUsuario > 2005 || anioNacUsuario == " " || isNaN(anioNacUsuario)){
    alert ("Año ingresado incorrectamente.")
    anioNacUsuario = prompt ("Ingresa tu año de nacimiento")
    console.log (anioNacUsuario)
}


/* Carrito de compra */
let totalCarrito = 0;

function agregarProducto(precio) {
  let cantidad = parseInt(prompt("Ingresa la cantidad que quieres agregar al carrito"));
  totalCarrito += cantidad * precio;
}

function productos() {
  let agregarOtro = true;

  while (agregarOtro) {
    let productosElegido = parseInt(prompt("Ingresa el número que corresponde al producto que queres agregar al carrito de compras.\n 1) Funko Pop! Iron Man $5500 \n 2) Funko Pop! Darth Vader $6500 \n 3) Juego Funko Verse Rick & Morty $14800 \n 4) Pin Spiderman $1200 \n 5) Vinyl Soda Superman $4900 \n 6) Mochila Avengers $25450"));

    switch (productosElegido) {
      case 1:
        alert("Seleccionaste un Funko Pop! Iron Man y su valor es de $5500");
        agregarProducto(5500);
        break;

      case 2:
        alert("Seleccionaste un Funko Pop! Darth Vader y su valor es de $6500");
        agregarProducto(6500);
        break;

      case 3:
        alert("Seleccionaste un Juego Funko Verse Rick & Morty y su valor es de $14800");
        agregarProducto(14800);
        break;

      case 4:
        alert("Seleccionaste un Pin Spiderman y su valor es de $1200");
        agregarProducto(1200);
        break;

      case 5:
        alert("Seleccionaste un Vinyl Soda Superman y su valor es de $4900");
        agregarProducto(4900);
        break;

      case 6:
        alert("Seleccionaste una Mochila Avengers y su valor es de $25450");
        agregarProducto(25450);
        break;

      default:
        alert("La opción ingresada no es correcta. Ingresa un número del 1 al 6.");
        break;
    }

    agregarOtro = confirm("¿Quieres agregar otro producto?");
  }

  console.log("El total del carrito es de: $" + totalCarrito);
}

productos();


/* Envío */
let direccion
let codigoPostal
let valorEnvio = 0
function envio(){
    direccion = prompt("Ingresa la dirección de envío").toLowerCase()
    console.log (direccion)
    codigoPostal = parseInt(prompt("Ingresa sólo los números de tu código postal."))
    console.log (codigoPostal)
    if (codigoPostal <= 2000){
        valorEnvio = 1000
        console.log (valorEnvio)
        alert ("El valor del envío es de $1000")
    }else{
        valorEnvio = 1500
        console.log (valorEnvio)
        alert ("El valor del envío es de $1500")
    }
}
envio()


/* Venta */
let totalCompra = totalCarrito + valorEnvio
function venta(){
    alert ("El total de tu compra incluido el envío es de: $" + totalCompra)
}
venta()


/* Agradecimiento */
function agradecimiento(){
    alert("¡Muchas gracias por tu compra! Que la disfrutes!")
}
agradecimiento()