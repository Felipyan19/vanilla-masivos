// plantillas.js
let plantilla = "";
let imagen = "";
const selectPlantilla = document.getElementById("selectPlantilla");
const imgPlantilla = document.getElementById("imgPlantilla");
// Función para cargar las plantillas disponibles

function cargarPlantillas() {
    // const vector = inputtextarea.value.split('\n').map(Number);
    // const vectorJSON = vector.map((numero, posicion) => ({ numero, posicion, imagen: imagen, plantilla: plantilla }));

    // console.log(vectorJSON);
    console.log(selectPlantilla.value);
    if(selectPlantilla.value === "bienestar"){
        plantilla="bienestar";
        imgPlantilla.style.display = "block";
        imgPlantilla.src = "https://i.ibb.co/fqzVVK0/Screenshot-5.png"
        imagen = "";
    }
    if(selectPlantilla.value === "newapp"){
        plantilla="newapp";
        imgPlantilla.style.display = "block";
        imgPlantilla.src = "https://i.ibb.co/t4dmCn5/Screenshot-4.png"
        imagen = "";
    }
     if(selectPlantilla.value === "masivolive"){
        plantilla="masivolive";
        imgPlantilla.style.display = "block";
        imgPlantilla.src = "https://i.ibb.co/LCF7qLd/Piezalive-Unisanitas.jpg"
        imagen = "https://i.ibb.co/LCF7qLd/Piezalive-Unisanitas.jpg";
    }
         if(selectPlantilla.value === "admitidosvencidos"){
        plantilla="admitidosvencidos";
        imgPlantilla.style.display = "block";
        imgPlantilla.src = "https://i.ibb.co/FYDFF71/RECIBOSVENCIDOS.jpg"
        imagen = "https://i.ibb.co/FYDFF71/RECIBOSVENCIDOS.jpg";
    }
         if(selectPlantilla.value === "recibosvigentes"){
        plantilla="recibosvigentes";
        imgPlantilla.style.display = "block";
        imgPlantilla.src = "https://i.ibb.co/4gGCvxD/Admitidos-Vigentes.jpg"
        imagen = "https://i.ibb.co/4gGCvxD/Admitidos-Vigentes.jpg";
    }
};

function obtenerPlantilla() {
    return plantilla;
}

function obtenerImagen() {
    return imagen;
}

export { cargarPlantillas, obtenerPlantilla, obtenerImagen };
