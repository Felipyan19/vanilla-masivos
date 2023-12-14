// plantillas.js
let plantilla = "";
let imagen = "";
const selectPlantilla = document.getElementById("selectPlantilla");
const imgPlantilla = document.getElementById("imgPlantilla");
// Función para cargar las plantillas disponibles

function cargarPlantillas() {
    // const vector = inputtextarea.value.split('\n').map(Number);
    // const vectorJSON = vector.map((numero, posicion) => ({ numero, posicion, imagen: imagen, plantilla: plantilla }));

    // console.log(vectorJSON)
    // if(selectPlantilla.value === "invitacion_conectado"){
    //     plantilla="invitacion_conectado";
    //     imgPlantilla.style.display = "block";
    //     imgPlantilla.src = "https://i.ibb.co/YRscN44/Comunicado-invitacion.png"
    //     imagen = "https://i.ibb.co/YRscN44/Comunicado-invitacion.png";
    // }
        if(selectPlantilla.value === "cuidado-enfermeria"){
        plantilla="cuidado";
        imgPlantilla.style.display = "block";
        imgPlantilla.src = "https://i.ibb.co/LdkVYWJ/INVITACI-N-Charla-Enfermer-a.jpg"
        imagen = "https://i.ibb.co/LdkVYWJ/INVITACI-N-Charla-Enfermer-a.jpg";
    }
        if(selectPlantilla.value === "cuidado-psicologia"){
        plantilla="cuidado";
        imgPlantilla.style.display = "block";
        imgPlantilla.src = "https://i.ibb.co/kSBbypV/INVITACI-N-Charla-Psicolog-a-2.jpg"
        imagen = "https://i.ibb.co/kSBbypV/INVITACI-N-Charla-Psicolog-a-2.jpg";
    }
};

function obtenerPlantilla() {
    return plantilla;
}

function obtenerImagen() {
    return imagen;
}

export { cargarPlantillas, obtenerPlantilla, obtenerImagen };
