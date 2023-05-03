/* PRODUCTOS EN TIENDA */
let carrito = []
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalCont")

const productos = JSON.parse(localStorage.getItem("productos")) || []

const contenedorProductos = document.querySelector("#tienda")
productos.forEach(producto => {
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "productosTienda"
    tarjetaProducto.innerHTML = `
                                <img src="../assets/imagenes/popLogo.webp" class="imgProdTienda" alt="Foto producto tienda">
                                <h3 class="tituloProdTienda">${producto.nombre}</h3>
                                <p class="descripProdTienda">${producto.descripcion}</p>
                                <span class="precioProdTienda">$ ${producto.precio}</span>
                                <button class="btnCarritoTienda">Agregar al carrito</button>
                            `
contenedorProductos.append(tarjetaProducto)

tarjetaProducto.addEventListener("click", (e)=>{
    const productoRepetido = carrito.some((productoRepe)=> productoRepe.id === producto.id)

    if(productoRepetido === true){
        carrito.map((producto)=>{
            if(producto.id === producto.id){
                producto.cantidad++
            }
        })
    }else{
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: producto.precio,
            cantidad: 1
        })
    }
    })
})


/* CARRITO */
const carritoCliente = ()=>{
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
                            <h1 class="modalHeaderTitulo">Mi Carrito</h1>
                        `
    modalContainer.append(modalHeader)

    const modalBoton = document.createElement("h1")
    modalBoton.innerText = "Cerrar"
    modalBoton.className = "modalHeaderBoton"
    modalBoton.addEventListener("click", ()=>{
        modalContainer.style.display = "none"
    })
    modalHeader.append(modalBoton)

    carrito.forEach((producto)=>{
        const carritoContainer = document.createElement("div")
        carritoContainer.className = "modal-content"
        carritoContainer.innerHTML = `
                            <img src="../assets/imagenes/popLogo.webp" class="imgProdTienda" alt="Foto producto tienda">
                            <h3 class="productoModal">${producto.nombre}</h3>
                            <p class="precioModal">$ ${producto.precio}</p>
                            <p class="cantidadModal">Cantidad: ${producto.cantidad}</p>
                            <p class="subtotalModal">Subtotal: ${producto.cantidad * producto.precio}</p>
                        `
        modalContainer.append(carritoContainer)

        let eliminarProducto = document.createElement("span")
        eliminarProducto.innerText = "Eliminar"
        eliminarProducto.className = "eliminarProducto"
        carritoContainer.append(eliminarProducto)

        eliminarProducto.addEventListener("click", eliminarProductoCarrito)
    })

    const totalCarrito = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
    const totalCompra = document.createElement("div")
    totalCompra.className = "totalCompra"
    totalCompra.innerHTML = `
                            El total a pagar es: $ ${totalCarrito}
                        `
    modalContainer.append(totalCompra)
}

verCarrito.addEventListener("click", carritoCliente)

const eliminarProductoCarrito = ()=>{
    const buscarId = carrito.find((element)=> element.id)
    carrito = carrito.filter((carritoId)=>{
        return carritoId !== buscarId
    })

    carritoCliente()
}
