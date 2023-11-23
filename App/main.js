const username = document.getElementById("username");
const password = document.getElementById("password");
const numeroEjemplo = document.getElementById("numeroEjemplo");

import {  login, cerrarSesion, obtenerUser } from './login.js';
import {  cargarYValidarArchivo, descargarEjemplo } from './excel.js';
import { enviarRegistro, enviarRegistros, enviarEjemplo } from './envio.js';
import { mostrarToast, manual } from './visual.js';
import { cargarPlantillas, obtenerPlantilla, obtenerImagen } from './plantillas.js';
import {  comprobarEstadoSesion, ocultarFormularioLogin, setCookie, getCookie  } from './sesion.js';

// Comprobar el estado de inicio de sesión al cargar la página
comprobarEstadoSesion();
console.log("Estado de sesión: " );
// Eventos y funciones relacionados con el inicio de sesión
document.getElementById("btnLogin").addEventListener("click", () => {

    login( username.value, password.value);
    console.log("Login: " );

});

document.getElementById("ContEnviarEjemplo").addEventListener("click", mostrarToast);
document.getElementById("ContEnviarArchivo").addEventListener("click", mostrarToast);
document.getElementById("flexSwitch").addEventListener("click", manual);
document.getElementById("descargarEjemplo").addEventListener("click", descargarEjemplo);

// Eventos y funciones relacionados con la carga y validación de archivos Excel
document.getElementById("archivoExcel").addEventListener("change", () =>{
    
    const plantilla2 = obtenerPlantilla();
    cargarYValidarArchivo(plantilla2);

});

// Eventos y funciones relacionados con el envío de registros
document.getElementById("enviarArchivo").addEventListener("click",() => {

    const plantilla1 = obtenerPlantilla();
    const imagen1 = obtenerImagen();
    const user1 = obtenerUser();

    enviarRegistros(plantilla1, imagen1, user1);
});

// // Eventos y funciones relacionados con la carga de plantillas y el envío de ejemplo
document.getElementById("selectPlantilla").addEventListener("change", () =>{
    console.log("Plantilla: " );
    cargarPlantillas();
});

// Eventos y funciones relacionados con el envío de ejemplo
document.getElementById("enviarEjemplo").addEventListener("click", () => {
    
    const plantilla = obtenerPlantilla();
    const imagen = obtenerImagen();
    const user = obtenerUser();

    enviarEjemplo(numeroEjemplo, plantilla, imagen, user);

});

// Eventos y funciones relacionados con el cierre de sesión
document.getElementById("salirbtn").addEventListener("click", () => {
    cerrarSesion( setCookie );
});



