const productos = JSON.parse(localStorage.getItem("productos")) || []

const contenedorProductos = document.querySelector("#productos")
productos.forEach(producto => {
    const tarjetaProducto = document.createElement("div")
    tarjetaProducto.className = "producto"
    tarjetaProducto.innerHTML = `
                                <img src="../assets/imagenes/popLogo.webp" alt="">
                                <h3>${producto.nombre}</h3>
                                <p>${producto.descripcion}</p>
                                <span>$ ${producto.precio}</span>
                                <button class="btnCarrito">Agregar al carrito</button>
                            `
contenedorProductos.append(tarjetaProducto)

})
