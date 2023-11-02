var recetas = [];
obtenerDatos();

var selectCategorias = document.getElementById("categorias");


for(var i = 0; i < recetas.length; i++) {
    var option = document.createElement("option");
    option.text = recetas[i].nombre;
    option.value = recetas[i].nombre;
    selectCategorias.appendChild(option);
}

const resultado = document.querySelector('#resultado');


function obtenerDatos(){
    recetas = [
        {
            id : 1,
            titulo : "Pastas",
            nombre : "Fetucchini con salsa mixta",
            img: "img/pasta1.jpg",
            ingredientes: [
               {nombre: "pure de tomate 250ml", cantidad: 1},
               {nombre: "crema de leche 500ml", cantidad: 2}
            ] 
        },
        {
            id : 2,
            titulo : "Pastas",
            nombre : "Mostachol a la parmesano",
            img: "img/pasta2.jpg",
            ingredientes: [
                {nombre: "queso", cantidad: 5},
                {nombre: "oregano", cantidad: 2}
             ]
        },
        // {
        //     id : 3,
        //     titulo : "Pastas",
        //     nombre : "Fideos a la bolognesa",
        //     img: "img/pasta3.jpg" 
        // },
        // {
        //     id : 4,
        //     titulo : "Pastas",
        //     nombre : "Ñam Ñam",
        //     img: "img/pasta4.jpg" 
        // },
        // {
        //     id : 5,
        //     titulo : "Entradas",
        //     nombre : "Entrada1",
        //     img: "img/entrada1.jpg" 
        // },
        // {
        //     id : 6,
        //     titulo : "Entradas",
        //     nombre : "Entrada2",
        //     img: "img/entrada2.jpg" 
        // },
        // {
        //     id : 7,
        //     titulo : "Entradas",
        //     nombre : "Entrada3",
        //     img: "img/entrada3.jpg" 
        // },
        // {
        //     id : 8,
        //     titulo : "Entradas",
        //     nombre : "Entrada4",
        //     img: "img/entrada4.jpg" 
        // }
    ];
}
function calcular(event) {
    event.preventDefault();
    obtenerDatos();
    limpiarHtml(resultado);
    var inputCantidad = document.getElementById("cantidad");

    if(selectCategorias.value === '-- Seleccione --') {
        alert('Seleccione un menú');
        return;
    }
    if(inputCantidad.value < 1){
        alert('Ingrese un nro mayor a cero');
        inputCantidad.value = '';
        return;
    }

    var table = document.createElement("TABLE");
    table.classList.add('table');

    var thead = document.createElement("thead");
    var tr = document.createElement("tr");
    table.appendChild(thead);
    table.appendChild(tr);
    table.innerHTML = `
        <th scope="col">Producto</th>
        <th scope="col">Cantidad a Comprar</th>
    `;


    var tbody = document.createElement("tbody");
    table.appendChild(tbody);

    var tbody = document.createElement("tbody");

    recetas = recetas.filter(receta => {
        return receta.nombre === selectCategorias.value;
    });

    recetas.forEach(receta => {
        receta.ingredientes?.forEach(ingrediente => {
            var tr = document.createElement("tr");
            var tdProducto = document.createElement("td");
            tdProducto.textContent = ingrediente.nombre;
            var tdCantidad = document.createElement("td");
            tdCantidad.textContent = (ingrediente.cantidad * inputCantidad.value) + ' unidades';
            
            tr.appendChild(tdProducto);
            tr.appendChild(tdCantidad);
            tbody.appendChild(tr);
        });
    });

    table.appendChild(tbody);
    resultado.appendChild(table);
}

function limpiarHtml(selector) { // Esto crea un bucle while que se ejecutará siempre que existan elementos hijos en el elemento referenciado por selector. Es decir, que se ejecutará hasta que no queden más elementos hijos.
    while(selector.firstChild){ // selector es el elemento HTML del que se eliminarán los elementos hijos. selector.firstChild se refiere al primer hijo del elemento selector.
        selector.removeChild(selector.firstChild);
    }
}

// table.appendChild = `
//     <tr>
//         <th scope="row">1</th>
//         <td>Mark</td>
//         <td>Otto</td>
//         <td>@mdo</td>
//     </tr>
// `;

{/* <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> */}


