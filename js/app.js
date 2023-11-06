var categoriasJs = ['Pastas','Entradas','Postres','Plato Principal','Guarniciones','otro'];

var recetas = [
    {
        id : 1,
        titulo : "Pastas",
        nombre : "Fideos con Camarones",
        img: "img/pasta1.jpg",
        ingredientes: [
           {nombre: "Camarones", cantidad: "1/2 k"},
           {nombre: "crema de leche", cantidad: "360 ml"},
           {nombre: "Cebolla", cantidad: "1 unidad"},
           {nombre: "Ajo", cantidad: "2 dientes"}
        ],
        instrucciones: "Mezcle los ingredientes del aderezo en un tazón pequeño y sazone con sal y pimienta. Dejar de lado. Cocine la pasta según las instrucciones del paquete. Agregue los guisantes dulces durante el último minuto del tiempo de cocción. Mientras tanto, caliente el aceite en un wok o sartén grande, agregue el ajo y la guindilla y cocine a fuego bastante suave durante unos 30 segundos sin dejar que el ajo se dore. Vierta los langostinos y cocine a fuego alto, revolviendo con frecuencia, durante unos 3 minutos hasta que se pongan rosados. Agregue los tomates y cocine, revolviendo ocasionalmente, durante 3 minutos hasta que comiencen a ablandarse. Escurre bien la pasta y el azúcar y luego mézclalos con la mezcla de gambas. Corte las hojas de albahaca, revuelva y sazone con sal y pimienta. Sirva con hojas de ensalada rociadas con aderezo de lima y pan crujiente caliente."
    },
    {
        id : 2,
        titulo : "Pastas",
        nombre : "Mostachol con bechamel",
        img: "img/pasta2.jpg",
        ingredientes: [
            {nombre: "harina", cantidad: "45 gr."},
            {nombre: "leche", cantidad: "500 ml."},
            {nombre: "manteca", cantidad: "45 gr."},
            {nombre: "sal,pimienta,nuez moscada", cantidad: "c/n"}
         ],
         instrucciones:`Calentar la leche, no dejarla hervir.
            Derretir la manteca en una sarten, luego incorporar la harina sin dejar de revolver.
            Una vez cocinado, incorporar la leche tibia sin dejar de revolver.
            Una vez espesado, sacar del fuego y condimentar.`
    },
    {
        id : 3,
        titulo : "Pastas",
        nombre : "Fideos Salsa 4 Quesos",
        img: "img/pasta3.jpg",
        ingredientes: [
            {nombre: "Crema de Leche", cantidad: "360 gr."},
            {nombre: "Queso Parmesano", cantidad: "75 gr."},
            {nombre: "Queso Muzzarella", cantidad: "150 gr."},
            {nombre: "Queso Azul", cantidad: "75 gr."},
            {nombre: "Queso Tibo", cantidad: "150 gr."}
         ],
         instrucciones : `
            Cortar y/o rallar los quesos.
            Incorporamos la crema de leche en una cacerola.
            Cuando este caliente, le incorporamos todos los quesos y mezclar.
            Una vez fundidos los quesos, consimentar.`
    },
    {
        id : 4,
        titulo : "Pastas",
        nombre : "Ñam Ñam",
        img: "img/pasta4.jpg",
        ingredientes: [
            {nombre: "Queso Parmesano", cantidad: "50 gr."},
            {nombre: "Yema de huevo", cantidad: "2 unidades"},
            {nombre: "Panceta", cantidad: "100 gr"},
            {nombre: "pimienta,sal", cantidad: "c/n"},
         ],
         instrucciones: `Cortamos la panceta en tiras y la ponemos a dorar en una sartén. Reservamos la panceta cuando esté dorada.
         Por otro lado, en un bol batimos las yemas de los dos huevos e incorporamos el queso rallado junto con una pizca de sal y pimienta.
         Sin dejar que se enfríe la pasta la volvemos a poner en la cazuela y la mezclamos con el huevo batido y el queso.`
    },
    {
        id : 5,
        titulo : "Entradas",
        nombre : "Sopa de Brócoli",
        img: "img/entrada1.jpg",
        ingredientes: [
            {nombre: "pure de tomate", cantidad: "1/2 caja"},
            {nombre: "crema de leche", cantidad: "500 ml"}
         ]

    },
    {
        id : 6,
        titulo : "Entradas",
        nombre : "Sopa de Cebolla y Papas",
        img: "img/entrada2.jpg",
        ingredientes: [
            {nombre: "pure de tomate", cantidad: "1/2 caja"},
            {nombre: "crema de leche", cantidad: "500 ml"}
         ]
    },
    {
        id : 7,
        titulo : "Entradas",
        nombre : "Tarteleta Capresse",
        img: "img/entrada3.jpg",
        ingredientes: [
            {nombre: "pure de tomate", cantidad: "1/2 caja"},
            {nombre: "crema de leche", cantidad: "500 ml"}
         ]
    },
    {
        id : 8,
        titulo : "Entradas",
        nombre : "Sopa de Tomates",
        img: "img/entrada4.jpg",
        ingredientes: [
           {nombre: "pure de tomate", cantidad: "1/2 caja"},
           {nombre: "crema de leche", cantidad: "500 ml"}
        ]
    },
    {
        id : 9,
        titulo : "Postres",
        nombre : "Pancake de Banana",
        img: "img/postre2.jpg",
        ingredientes: [
           {nombre: "banana", cantidad: "2"},
           {nombre: "harina", cantidad: "1K"}
        ]
    },
    {
        id : 10,
        titulo : "Postres",
        nombre : "Carrot Cake",
        img: "img/postre3.jpg",
        ingredientes: [
           {nombre: "zanahoria", cantidad: "1/2K"},
           {nombre: "harina", cantidad: "1/2K"}
        ]
    }
];




var selectCategorias = document.getElementById("categorias");

// necesito crear una instancia de un objeto Modal de bootstrap para mostrar abrir y cerrar el pop up de cada tarjeta con su receta
const modal = new bootstrap.Modal('#modal', {});

for(var i = 0; i < categoriasJs.length; i++) {
    var option = document.createElement("option");
    option.text = categoriasJs[i];
    option.value = categoriasJs[i];
    selectCategorias.appendChild(option);
}

var elementoJS = document.createElement("elementoNuevo");
elementoJS.value = '100';
elementoJS.text = 'Bebidas';


if(selectCategorias) {
    selectCategorias.addEventListener('change', seleccionarCategoria)
}


const resultado = document.querySelector('#resultado');

function mostrarRecetas(recetas = [],categoria) {
    
    recetas = recetas.filter(receta => {
        return receta.titulo === categoria;
    });

    
    limpiarHtml(resultado);

    const heading = document.createElement('H2');
    heading.classList.add('text-center', 'text-black', 'my-3');
    heading.textContent = recetas.length ? 'Resultados ': 'No Hay Resultados';
    resultado.appendChild(heading);

    recetas.forEach(receta => {
        const recetaContenedor = document.createElement('DIV');
        recetaContenedor.classList.add('col-md-4');
        const recetaCard = document.createElement('DIV');
        recetaCard.classList.add('card', 'mb-4');
        const recetaCardBody = document.createElement('DIV');
        recetaCardBody.classList.add('card-body');
        
        const recetaImagen = document.createElement('IMG');
        recetaImagen.classList.add('card-img-top');
        recetaImagen.src = receta.img;

        const recetaHeading = document.createElement('H3');
        recetaHeading.classList.add('card-title', 'mb-3');
        recetaHeading.textContent = receta.nombre;

        recetaCardBody.appendChild(recetaHeading);
        
        const recetaButton = document.createElement('BUTTON');
        recetaButton.classList.add('btn','btn-success','w-100');
        recetaButton.textContent='Ver receta';
        recetaButton.onclick = function() {
            seleccionarRecetaModal(receta);
        }
        recetaCardBody.appendChild(recetaButton);
        
        recetaCard.appendChild(recetaImagen);
        recetaCard.appendChild(recetaCardBody);
                
      
        
        recetaContenedor.appendChild(recetaCard);
       
        resultado.appendChild(recetaContenedor);
        });

        function seleccionarRecetaModal(recetaSeleccionada){
            console.log('pop up ver la receta id: '+recetaSeleccionada.id);
             // Añadir contenido al modal
            const modalTitle = document.querySelector('.modal .modal-title');
            const modalBody = document.querySelector('.modal .modal-body');

            modalTitle.textContent = recetaSeleccionada.nombre;
            
            modalBody.innerHTML = `
                <img class="img-fluid" src=${recetaSeleccionada.img} alt="" />
                <h3 class="my-3">Instrucciones</h3>
                <p> ${recetaSeleccionada.instrucciones ? recetaSeleccionada.instrucciones : "Proximamente ..."}
                <h3 class="my-3">Ingredientes y Cantidades</h3>
            `;

            const listGroup = document.createElement('UL'); // aca creo el elemento de lista <ul></ul>
            listGroup.classList.add('list-group'); //  <ul class="list-group"></ul>
            
            // console.log('listGroup: '+ listGroup.outerHTML);

            // Mostrar cantidades e ingredientes
            for (let i = 0; i < recetaSeleccionada.ingredientes.length; i++) {
                const ingredienteLi = document.createElement('LI');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${recetaSeleccionada.ingredientes[i].nombre} - ${recetaSeleccionada.ingredientes[i].cantidad}`                
                
                listGroup.appendChild(ingredienteLi);
            }

            modalBody.appendChild(listGroup);

             // Muestra el modal
            modal.show();
        }
    }
    
    function seleccionarCategoria(e) {
        const categoria = e.target.value;
        console.log('categoria seleccionada -> '+categoria);
        if(categoria === '-- Seleccione --'){
            limpiarHtml(resultado);
            return;
        }
    
        mostrarRecetas(recetas,categoria);
    }
    
    function limpiarHtml(selector) { // Esto crea un bucle while que se ejecutará siempre que existan elementos hijos en el elemento referenciado por selector. Es decir, que se ejecutará hasta que no queden más elementos hijos.
    console.log('selector -> '+selector);
    console.log('selector.firstChild -> '+selector.firstChild);
    while(selector.firstChild){ // selector es el elemento HTML del que se eliminarán los elementos hijos. selector.firstChild se refiere al primer hijo del elemento selector.
        selector.removeChild(selector.firstChild);
    }

    
}