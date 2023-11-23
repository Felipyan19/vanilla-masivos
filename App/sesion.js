
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Función para obtener el valor de una cookie
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}

// Función para comprobar el estado de inicio de sesión

// Función para ocultar el formulario de inicio de sesión
function ocultarFormularioLogin() {
    const loginContainer = document.getElementById("formLogin");
    const bodytemplate = document.getElementById("bodytemplate");
    const body = document.getElementById("body");
    
    loginContainer.style.display = "none";
    body.classList.remove("d-flex");
    body.classList.remove("align-items-center");
    body.classList.remove("py-4");
    body.classList.remove("bg-body-tertiary");
    bodytemplate.style.display = "block";
}

function comprobarEstadoSesion() {
    const loggedIn = getCookie("loggedIn");
    if (loggedIn === "true") {

        
        // Si el usuario ha iniciado sesión previamente, ocultar el formulario de inicio de sesión
        ocultarFormularioLogin();
    }
}


export { comprobarEstadoSesion, ocultarFormularioLogin, setCookie, getCookie };
