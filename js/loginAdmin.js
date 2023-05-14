/* LOGIN ADMIN */

const botonAdmin = document.querySelector("#botonRegistro")
botonAdmin.addEventListener("click", (e) => {
    e.preventDefault()
    Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'Escriba su nombre y legajo tal cual como fue registrado en su inscripción presencial.',
        showConfirmButton: false,
        timer: 3000
    }).then (() => {
        window.location.href = "../pages/loginAdmin.html"
      })
})

let count = 100
const nombresAdmins = []
class Administrador{
    constructor(nombre, legajo){
        this.nombre = nombre,
        this.legajo = count++
    }
}

const administrador1 = new Administrador ("Juan Pérez")
const administrador2 = new Administrador ("Ignacio Loles")
const administrador3 = new Administrador ("Marcela López")
const administrador4 = new Administrador ("Liliana Moreno")

nombresAdmins.push(administrador1, administrador2, administrador3, administrador4)
localStorage.setItem("nombresAdmins", JSON.stringify(nombresAdmins))

const formLoginAdmin = document.querySelector("#formLoginAdmin")
formLoginAdmin.addEventListener("submit", (e)=>{
    e.preventDefault()
    const adminValido = document.getElementById("admin").value
    const legajoValido = document.getElementById("legajo").value
    const nombresAdmins = JSON.parse(localStorage.getItem("nombresAdmins"))

    if (nombresAdmins.some((admin)=> admin.nombre === adminValido && admin.legajo === Number(legajoValido))) {
        localStorage.setItem("admin", adminValido)
        localStorage.setItem("legajo", legajoValido)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido!',
            showConfirmButton: false,
            timer: 2500
          }).then (() => {
            window.location.href = "../pages/stock.html"
            })
    }else {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El nombre del administrador <br> o legajo no son correctos',
            showConfirmButton: false,
            timer: 2000
          })
    }
})