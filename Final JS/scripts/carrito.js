let infoCarrito = JSON.parse(localStorage.getItem("carrito"));

const contenedorDos = document.querySelector(".container");
let cardAHtml = (lista) => {
  const cardReduce = lista.reduce((acc, element) => {
    return (
      acc +
      `
    <div class="product" id="lista-${element.id}">
            <div class="product-description">
        <h4>
        $${element.price}
        </h4>
            <h5>
            ${element.title}
        </h5>
        
        <button id="boton-${element.id}" class="boton-producto">
        X
        </button>
    </div>
    </div>
    `
    );
  }, "");
  document.querySelector(".carrito-contenedor").innerHTML = cardReduce;
};
cardAHtml(infoCarrito || []);

function eliminarDelCarrito(lista) {
  const botonAgregar = document.querySelectorAll(".boton-producto");
  botonAgregar.forEach((boton) => {
    boton.onclick = () => {
      const id = boton.id.slice(6);
      const eliminarProducto = lista.filter((elemento, i) => {
        return elemento.id != Number(id);
      });
      infoCarrito = eliminarProducto;
      localStorage.setItem("carrito", JSON.stringify(infoCarrito));
      cardAHtml(infoCarrito);
      eliminarDelCarrito(infoCarrito);
    };
  });
}
eliminarDelCarrito(infoCarrito);

const botonBorrarCarrito = document.querySelector("#borrar-button");
botonBorrarCarrito.onclick = () => {
  localStorage.removeItem("carrito");
  document.querySelector(".carrito-contenedor").innerHTML =
    "no hay productos en el carrito";
};

const botonFinalizarCompra = document.querySelector("#finalizarcompra-button");
botonFinalizarCompra.onclick = () => {
  localStorage.removeItem("carrito");
  document.querySelector(".carrito-contenedor").innerHTML =
    "no hay productos en el carrito";
  alert("Su compra ha finalizado, Gracias por confiar!");
};
