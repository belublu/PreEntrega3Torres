/* LOGIN ADMIN */
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
        window.location.href = "../pages/stock.html"
    }else {
        console.log("El nombre del administrador no coincide con el legajo")
    }
})