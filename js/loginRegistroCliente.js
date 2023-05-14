/* LOGIN CLIENTE */
const formLoginCliente = document.querySelector("#formLoginCliente")
formLoginCliente.addEventListener("submit", (e)=>{
    e.preventDefault()
    const usuarioValido = document.getElementById("usuario").value
    const passwordValido = document.getElementById("password").value

    if (usuarioValido === usuarioValido.toLowerCase() && passwordValido.length >= 8 && passwordValido.length <= 12){
        localStorage.setItem("usuario", usuarioValido)
        localStorage.setItem("password", passwordValido)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido!',
            showConfirmButton: false,
            timer: 2000
          }).then (() => {
            window.location.href = "../pages/tienda.html"
          })

    }else if(usuarioValido === usuarioValido.toUpperCase() || passwordValido.length <8 && passwordValido.length >12){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Sólo ingresar minúsculas!',
            showConfirmButton: false,
            timer: 1500
          })
    }else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'La contraseña debe tener <br> entre 8 y 12 caracteres. <br> Intentalo nuevamente.',
            showConfirmButton: false,
            timer: 3000
        })
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
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'La contraseña debe tener <br> entre 8 y 12 caracteres. <br> Intentalo nuevamente.',
            showConfirmButton: false,
            timer: 3000
        })
    }else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'No te podés registrar ya que sos menor de 18 años.',
            showConfirmButton: false,
            timer: 3000
        })
    }
})
