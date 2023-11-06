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
               {nombre: "pure de tomate ", cantidad: 250, unidad: "ml"},
               {nombre: "crema de leche", cantidad: 360, unidad: "ml"},
               {nombre: "papas", cantidad: 2, unidad: "k"}
            ] 
        },
        {
            id : 2,
            titulo : "Pastas",
            nombre : "Mostachol a la parmesano",
            img: "img/pasta2.jpg",
            ingredientes: [
                {nombre: "queso", cantidad: 110, unidad:"gr"},
                {nombre: "oregano", cantidad: 100, unidad:"gr"}
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
            var res = ingrediente.cantidad * inputCantidad.value;
            var unidadMil;
            if(ingrediente.unidad == 'ml'){
                unidadMil = ' lt';
            }else if (ingrediente.unidad == 'gr'){
                unidadMil = ' kg';
            }
            tdCantidad.textContent = res >= 1000 ? res/1000 + unidadMil : res + ' ' +ingrediente.unidad;
            
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

function conversorPesaje(peso, cantidad ) {
  cantidad = cantidad >= 1000 ? cantidad / 1000 : cantidad;
  const unidad = cantidad >= 1000 ? 'kg' : 'gr';
  
  // Formatea el resultado como un String
  const resultado = cantidad.toString() + ' ' + unidad; // 2.5k
  
  return resultado;
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


