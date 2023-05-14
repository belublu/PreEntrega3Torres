/* PRODUCTOS EN TIENDA */
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalCont")

const productos = JSON.parse(localStorage.getItem("productos")) || []

const getProducts = async () => {
    const response = await fetch("../js/productos.json")
    const productosJson = await response.json()
    productos.unshift(...productosJson)
    const contenedorProductos = document.querySelector("#tienda")
    productos.forEach(producto => {
        const tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "productosTienda"
        tarjetaProducto.innerHTML = `
                                    <img class="fotoProdTienda" src="${producto.img}" alt="">
                                    <h3 class="tituloProdTienda">${producto.nombre}</h3>
                                    <p class="descripProdTienda">${producto.licencia}</p>
                                    <p class="descripProdTienda">${producto.descripcion}</p>
                                    <span class="precioProdTienda">$ ${parseFloat(producto.precio).toLocaleString("es-AR")}</span>
                                    <p>Cantidad: ${producto.cantidad}</p>
                                `
    contenedorProductos.append(tarjetaProducto)

    let comprar = document.createElement("button")
    comprar.innerText = "Agregar al carrito"
    comprar.className = "btnCarritoTienda"
    tarjetaProducto.append(comprar)

    comprar.addEventListener("click", (e) => {
        Toastify({
            text: "Agregaste el producto al carrito",
            duration: 3000,
            className: "toastifyTexto",
            style: {
                background: "linear-gradient(to right, #1895cf, #1ec6ff)",
                border: "solid 3px #5895cf",
            },
            close: true,
            }).showToast();

        const productoRepetido = carrito.some(
          (productoRepe) => productoRepe.id === producto.id
        );
  
        if (productoRepetido) {
          carrito = carrito.map((productoCarrito) => {
            if (productoCarrito.id === producto.id) {
              productoCarrito.cantidad++;
            }
            return productoCarrito;
          });
        } else {
          carrito.push({
            id: producto.id,
            img: producto.img,
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            precio: producto.precio,
            cantidad: 1,
          });
        }
        guardarCarritoEnLocalStorage();
      });
    });
  };
  getProducts();



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

    const modalBoton = document.createElement("div")
    modalBoton.innerHTML = `
                          <img class="iconCierre" src="../assets/imagenes/closeIcon.png" alt="">
                          `
    modalBoton.className = "modalHeaderBoton"
    modalBoton.addEventListener("click", ()=>{
        modalContainer.style.display = "none"
    })
    modalHeader.append(modalBoton)

    carrito.forEach((producto)=>{
        const carritoContainer = document.createElement("div")
        carritoContainer.className = "modal-content"
        carritoContainer.innerHTML = `
                            <img class="fotoProdModal" src="${producto.img}" alt="Foto producto tienda">
                            <p class="productoModal">${producto.nombre}</p>
                            <p class="descripModal">${producto.descripcion}</p>
                            <p class="precioModal">$ ${parseFloat(producto.precio).toLocaleString("es-AR")}</p>
                            <span class="menos"> - </span>
                            <p class="cantidadModal">Cantidad: ${producto.cantidad}</p>
                            <span class="mas"> + </span>
                            <p class="subtotalModal">Subtotal: $${(producto.cantidad * parseFloat(producto.precio)).toLocaleString("es-AR")}</p>
                        `
        modalContainer.append(carritoContainer)

        const menos = carritoContainer.querySelector(".menos")
        menos.addEventListener("click", () => {
            if(producto.cantidad != 1){
                producto.cantidad --
            }
            guardarCarritoEnLocalStorage();
            carritoCliente()
        })

        const mas = carritoContainer.querySelector(".mas")
        mas.addEventListener("click", () => {
            producto.cantidad ++
            guardarCarritoEnLocalStorage();
            carritoCliente()
        })

        let eliminarProducto = document.createElement("span")
        eliminarProducto.innerText = "Eliminar"
        eliminarProducto.className = "eliminarProducto"
        carritoContainer.append(eliminarProducto)

        eliminarProducto.addEventListener("click", () => {
          Swal.fire({
            title: 'Estás seguro que querés eliminar el producto?',
            text: 'Luego, si querés lo podés agregar nuevamente desde la tienda.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Eliminado!',
                'El producto ha sido eliminado del carrito.',
                'success'
              )
              eliminarProductoCarrito(producto.id);  
            }
          })           
          });
    })

    const totalCarrito = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
    const totalCompra = document.createElement("div")
    totalCompra.className = "totalCompra"
    totalCompra.innerHTML = `
                            El total a pagar es: $ ${parseFloat(totalCarrito).toLocaleString("es-AR")}
                        `
    modalContainer.append(totalCompra)

    const modalBotonDos = document.createElement("div")
    modalBotonDos.innerText = "Finalizar compra"
    modalBotonDos.className = "modalFinalCompraBoton"
    modalBotonDos.addEventListener("click", ()=>{
        Swal.fire({
            title: 'Muchas gracias por tu compra! <br> Que la disfrutes!!',
            width: 600,
            padding: '5em',
            color: "#3c3c3c",
            background: '#fff url(/assets/imagenes/backDos.avif)' ,
            backdrop: `
              rgba(0,0,123,0.4)
              url("/assets/imagenes/funkoBlue.gif")
              left top
              no-repeat
            `
          })
        modalContainer.style.display = "none"
    })
    modalContainer.append(modalBotonDos)
}

verCarrito.addEventListener("click", carritoCliente)

const eliminarProductoCarrito = (productoId) => {
    carrito = carrito.filter((producto) => producto.id !== productoId);
    guardarCarritoEnLocalStorage();
    carritoCliente();
    };

const guardarCarritoEnLocalStorage = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};