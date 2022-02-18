// objeto literal con los curso en linea. precios publicados en USD
let misCursos = {
    curso1 : {
        id: 1,
        nombre: "Pack Excel: Básico + Intermedio + Avanzado",
        descripcion: "",
        precio: 20,
        linkpago: "https://www.ppaypal.com/23423433"
    },
    curso2 : {
        id: 2,
        nombre: "Curso básico de Excel",
        descripcion: "",
        precio: 45,
        linkpago: "https://www.ppaypal.com/23423433"
    },
    curso3 : {
        id: 3,
        nombre: "Curso básico de wordpress",
        descripcion: "",
        precio: 30,
        linkpago: "https://www.ppaypal.com/23423433"
    },
}
//objeto literal con las valuaciones de moneda
//https://stackoverflow.com/questions/7089057/javascript-code-dynamically-change-currencies-with-dropdown-html
let  preciosMonedas = {
          AUD: 1.0490, 
          EUR: 1.4407,
          GBP: 1.6424,
          USD: 1.0,
          AR: 210.3
    };
// particularizo los elementos del dom que necesito
const titulo_curso = document.querySelector(".titulo_curso");
const price = document.getElementById("price");
const selector_monedas = document.getElementById("select_de_monedas");
const simbol = document.getElementById("currency");
////////////////////////////////////////////////////////

//pongo los datos del primer curso para iniciar el sitio
titulo_curso.innerHTML = misCursos.curso1.nombre; 
price.innerHTML = misCursos.curso1.precio; 
////////////////////////////////////////////////////////


        // creo la lista de cursos que se ve en la columna derecha.
        for (var key in misCursos) {
            //creo un input radio button 
            //https://www.w3schools.com/jsref/dom_obj_radio.asp
            let x = document.createElement("INPUT");
            x.setAttribute("type", "radio");
            x.setAttribute("name", "Cursos");
            x.setAttribute("onchange", "handleChange(this);");
            x.setAttribute("value", misCursos[key].id);
    
            //creo un label que contendrá al input radio button
            let label = document.createElement('label');
            label.appendChild(x);
            label.innerHTML += misCursos[key].nombre;
            label.innerHTML += "<br><br>";
            
            //agrego el curso a la lista de radio buttons
            lista_cursos.appendChild(label);
        }

        // funcion invocada por los radio button de los cursos
        function handleChange(src) {
            //https://codepen.io/ramtob/pen/qZWzeE
            console.log(src.value);
            for (var key in misCursos) {

                if (misCursos[key].id == src.value ){ 
                    titulo_curso.innerHTML = misCursos[key].nombre;
                    price.innerHTML = misCursos[key].precio; 
                }
            }    

        }

        //selector de monedas
        selector_monedas.onchange = function () {
            console.log('cambio de moneda');
            let currency = selector_monedas.value.toUpperCase();
            precio_actual = document.getElementById("price").innerHTML;
            price.innerHTML = preciosMonedas[currency]*precio_actual;
            simbol.innerHTML = currency;
        }