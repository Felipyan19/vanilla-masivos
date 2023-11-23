import {  comprobarEstadoSesion, ocultarFormularioLogin, setCookie, getCookie  } from './sesion.js';

const loginContainer = document.getElementById("formLogin");
const bodytemplate = document.getElementById("bodytemplate")
const body = document.getElementById("body");
let loginCheck = false;
let actualyUser = "";

function Start(flag) {
    loginContainer.style.display = flag ? "block" : "none";
    body.classList.toggle("d-flex", flag);
    body.classList.toggle("align-items-center", flag);
    body.classList.toggle("py-4", flag);
    body.classList.toggle("bg-body-tertiary", flag);
    bodytemplate.style.display = flag ? "none" : "block";
    document.getElementById("user").innerHTML = flag ? actualyUser : getCookie("username");
}
// Función para realizar el inicio de sesión
function login( username, password ) {
    console.log("Logined: " );
    if (username === "" || password === "") {

        alert("Por favor, complete todos los campos.");

    } else {
        const data = new FormData();

        data.append("username", username);
        data.append("password", password);

        console.log(username, password);

        return fetch('https://desarrollo.ccgltda.com/pruebas/masivos3/newphp.php', {
            method: "POST",
            body: data
        })
            .then(response => {

                console.log(response);

                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Error en la solicitud");
                }
            })
            .then(data => {
                if (data.message === "Credenciales válidas") {
                    Start(0);
                    console.log("Usuario autenticado " + data.nameCreated);
                    actualyUser = data.nameCreated;
                    loginCheck = data.loggedIn;
                    if (flexCheckDefault.checked) {
                        setCookie("loggedIn", "true", 0.05);
                    }
                    console.log("Usuario autenticado");

                } else {
                    alert("Credenciales inválidas");
                    Start(1);

                }
            })
            .catch(error => {
                console.error("Error en la solicitud:", error);
                alert("Hubo un error en la solicitud. Por favor, inténtalo de nuevo más tarde.");

            });
    }
}

// Función para cerrar sesión
function cerrarSesion(setCookie) {
    loginCheck = false;
    setCookie("loggedIn", "false", -0.05);
    setCookie("username", "", -0.05);
    Start(1);
    window.location.reload();

}

function obtenerUser() {

    return actualyUser;
}

export { login, cerrarSesion, obtenerUser };
