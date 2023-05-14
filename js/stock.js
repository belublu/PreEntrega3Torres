/* Administrador - Crear, editar y borrar productos */
class Producto{
    constructor(id, nombre, descripcion, licencia, precio, cantidad){
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.licencia = licencia
        this.precio = parseFloat(precio)
        this.cantidad = 1
        
    }
}
  
const productosAlmacenados  = (JSON.parse(localStorage.getItem("productos")) ?? [])
const productos = []
productosAlmacenados.forEach((producto) =>{
    productos.push(new Producto(
        producto.id,
        producto.nombre,
        producto.descripcion,
        producto.licencia,
        producto.precio,
    ))
})


const eliminarProducto = (id)=>{
    const eliminarProductoBtn = document.querySelector("#btnEliminar" + id)
    eliminarProductoBtn.addEventListener("click", ()=>{
        Toastify({
            text: "Producto eliminado",
            duration: 3000,
            className: "toastifyTexto",
            style: {
                background: "linear-gradient(to right, #1895cf, #1ec6ff)",
                border: "solid 3px #5895cf",
            },
            close: true,
            }).showToast();
        const index = productos.findIndex((producto) => producto.id == id)
        productos.splice(index, 1)
        localStorage.setItem("productos", JSON.stringify(productos))
        const tarjetaProducto = document.querySelector("#producto" + id)
        tarjetaProducto.remove()
    })
}

const editarProducto = (id) =>{
    const editarProductoFormulario = document.querySelector("#editar" + id)
    editarProductoFormulario.addEventListener("submit", (e)=>{
        Toastify({
            text: "Producto editado",
            duration: 3000,
            className: "toastifyTexto",
            style: {
                background: "linear-gradient(to right, #1895cf, #1ec6ff)",
                border: "solid 3px #5895cf",
            },
            close: true,
            }).showToast();
        e.preventDefault()
        const datos = e.target.children
        const index = productos.findIndex((producto) => producto.id == id)
        productos[index].nombre = datos["nombre"].value
        productos[index].descripcion = datos["descripcion"].value
        productos[index].licencia = datos["licencia"].value
        productos[index].precio = datos["precio"].value
        localStorage.setItem("productos", JSON.stringify(productos))
    })
}

const verProducto = (producto)=>{
    const contenedorProductos = document.querySelector("#productos")
    const tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "producto"
        tarjetaProducto.id = "producto" + producto.id
        tarjetaProducto.innerHTML = `
                                    <img class="fotoProdTienda" src="../assets/imagenes/popLogo.webp" alt="">
                                    <form class="editar" id="editar${producto.id}">
                                        <input type="text" name="nombre" value="${producto.nombre}">
                                        <input type="text" name="descripcion" value="${producto.descripcion}">
                                        <input type="text" name="licencia" value="${producto.licencia}">
                                        <input type="number" name="precio" value="${producto.precio}">
                                        <button class="btnEditar" id="btnEditar" type="submit">Editar</button>
                                    </form>
                                    
                                    <button class="btnEliminar" id="btnEliminar${producto.id}">Eliminar</button>
                                `

                               
    contenedorProductos.append(tarjetaProducto)
    eliminarProducto(producto.id)
    editarProducto(producto.id)
}

const crearProducto = ()=>{
const formularioCrearProd = document.querySelector("#crearProducto")
formularioCrearProd.addEventListener("submit", (e)=>{
    Toastify({
        text: "Producto creado exitosamente",
        duration: 3000,
        className: "toastifyTexto",
        style: {
            background: "linear-gradient(to right, #1895cf, #1ec6ff)",
            border: "solid 3px #5895cf",
        },
        close: true,
        }).showToast();
    e.preventDefault()
    let idProducto = parseInt(localStorage.getItem("idProducto")) || 0
    const datos = e.target.children
    const producto = new Producto(
        idProducto,
        datos["nombre"].value, 
        datos["descripcion"].value, 
        datos["licencia"].value,
        datos["precio"].value
    )
    productos.push(producto)
    localStorage.setItem("productos", JSON.stringify(productos))
    formularioCrearProd.reset()
    idProducto++
    localStorage.setItem("idProducto", idProducto)
    verProducto(producto)
})
}

const verProductos = () => {
    productos.forEach((producto) => {
      verProducto(producto);
    });
  };
  
  verProductos();
  crearProducto();