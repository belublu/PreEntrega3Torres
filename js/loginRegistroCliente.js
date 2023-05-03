/* LOGIN CLIENTE */
const formLoginCliente = document.querySelector("#formLoginCliente")
formLoginCliente.addEventListener("submit", (e)=>{
    e.preventDefault()
    const usuarioValido = document.getElementById("usuario").value
    const passwordValido = document.getElementById("password").value

    if (usuarioValido === usuarioValido.toLowerCase() && passwordValido.length >= 8 && passwordValido.length <= 12){
        localStorage.setItem("usuario", usuarioValido)
        localStorage.setItem("password", passwordValido)
        window.location.href = "../pages/tienda.html"
    }else if(usuarioValido === usuarioValido.toUpperCase() || passwordValido.length <8 && passwordValido.length >12){
        console.log("Sólo ingresar minúsculas")
    }else{
        console.log("La contraseña debe tener entre 8 y 12 caracteres. Intentalo nuevamente.")
    }
})


/* REGISTRO CLIENTE */
const formRegistroCliente = document.querySelector("#formRegistroCliente")
formRegistroCliente.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nombreApellidoValido = document.getElementById("nombreApellidoCliente").value
    const edadValido = document.getElementById("edadCliente").value
    const fechaNaciClienteValido = document.getElementById("fechaNacCliente").value
    const fechaPermitida = new Date(2005, 0, 1)
    const fechaNacimiento = new Date(fechaNaciClienteValido)
    const passwordRegistro = document.getElementById("passwordRegistro").value

    if(edadValido > 19 && fechaNacimiento <= fechaPermitida && passwordRegistro.length >= 8 && passwordRegistro.length <= 12){
        localStorage.setItem("nombreApellidoCliente", nombreApellidoValido)
        localStorage.setItem("edadCliente", edadValido)
        localStorage.setItem("fechNacCliente", fechaNaciClienteValido)
        window.location.href = "../pages/tienda.html"
    }else if(passwordRegistro.length < 8 || passwordRegistro.length > 12){
        console.log("La contraseña debe tener entre 8 y 12 caracteres. Intentalo nuevamente.")
    }else{
        console.log("No te podés registrar ya que sos menor de 18 años.")
    }
})
