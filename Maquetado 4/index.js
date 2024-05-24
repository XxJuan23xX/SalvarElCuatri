const formulario = document.querySelector("#formulario");

const merCoords = { lat: 20.96709, lng: -89.62371}
const mapDiv = document.getElementById("map");
const input = document.getElementById("place_input")
let map;
let marker;
let autocomplete;


//funciones del mapa
function initMap () {
    map = new google.maps.Map(mapDiv, {
        center: merCoords, 
        zoom: 12,
    });

    marker= new google.maps.Marker({
        position: merCoords,
        map: map, 
    })
    initAutocomplete();
}

function initAutocomplete(){
    autocomplete = new google.maps.places.Autocomplete(input)
    autocomplete.addListener('place_changed', function (){
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) {
            console.log("Ubicación no válida");
            return;
        }
        map.setCenter(place.geometry.location);
        map.setPosition(place.geometry.location);
        map.setZoom(15);
    })
}




//crear evento
formulario.addEventListener( "submit", validarFormulario )

//funciones
function validarFormulario(e){
    e.preventDefault();
    const fecha = document.querySelector("#fecha").value
    const direccion = document.querySelector("#direccion").value
    const nombres = document.querySelector("#nombres").value
    const apellidos = document.querySelector("#apellidos").value

    const  respuestas = document.getElementById("Respuestas")
    respuestas.textContent = `Registro guardado para el: ${fecha}, en la dirección: ${direccion}, al nombre de: ${nombres} ${apellidos} `
}

