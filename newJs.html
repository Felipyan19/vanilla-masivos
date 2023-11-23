const loginContainer = document.getElementById("formLogin");
const bodytemplate = document.getElementById("bodytemplate")
const body = document.getElementById("body");

const selectPlantilla = document.getElementById("selectPlantilla");
const imgPlantilla = document.getElementById("imgPlantilla");
const numeroEjemplo = document.getElementById("numeroEjemplo");
const enviarEjemplo = document.getElementById("enviarEjemplo");
const inputtextarea = document.getElementById("inputtextarea");

const ContEnviarEjemplo = document.getElementById("ContEnviarEjemplo");
const ContEnviarArchivo = document.getElementById("ContEnviarArchivo");

let loginCheck = false;
let csvContent = "";
let registros_correctos = ""
let registros_incorrectos = ""
let plantilla = "";
let imagen = "";
let cont = 1

const username = document.getElementById("username");
const password = document.getElementById("password");
const btnLogin = document.getElementById("btnLogin");
const flexCheckDefault = document.getElementById("flexCheckDefault");
const url = "newphp.php";

enviarEjemplo.disabled = true;
btnLogin.addEventListener("click", login);
ContEnviarEjemplo.addEventListener("click", mostrarToast);
ContEnviarArchivo.addEventListener("click", mostrarToast);

document.getElementById("archivoExcel").disabled = true;
document.getElementById("archivoExcel").addEventListener("change", updateRecordCount);

function Start(flag) {

    if (!flag) {
        loginContainer.style.display = "block";
        body.classList.add("d-flex");
        body.classList.add("align-items-center");
        body.classList.add("py-4");
        body.classList.add("bg-body-tertiary");
        bodytemplate.style.display = "none";
    } else {
        loginContainer.style.display = "none";
        body.classList.remove("d-flex");
        body.classList.remove("align-items-center");
        body.classList.remove("py-4");
        body.classList.remove("bg-body-tertiary");
        bodytemplate.style.display = "block";
    }
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

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

// Función para verificar si el usuario ha iniciado sesión
function checkLoginStatus() {
    const loggedIn = getCookie("loggedIn");
    if (loggedIn === "true") {

        Start(0);
        // El usuario ha iniciado sesión previamente, realiza las acciones necesarias
        console.log("El usuario ha iniciado sesión.");

    } else {
        // El usuario no ha iniciado sesión previamente, puedes redirigirlo a la página de inicio de sesión
        console.log("El usuario no ha iniciado sesión.");

        Start(1); // Muestra el contenedor de inicio de sesión

    }
}

function login() {
    console.log("login");
    if (username.value === "" || password.value === "") {
        alert("Por favor, complete todos los campos.");
        return;
    } else {
        const data = new FormData();

        data.append("username", username.value);
        data.append("password", password.value);

        fetch(url, {
            method: "POST",
            body: data
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Error en la solicitud");
                }
            })
            .then(data => {
                if (data.message === "Credenciales válidas") {
                    // Las credenciales son válidas, oculta el contenedor de inicio de sesión y muestra el formulario.
                    Start(0);
                    loginCheck = data.loggedIn;
                    if (flexCheckDefault.checked) {
                        setCookie("loggedIn", "true", 1); // La cookie expira en 1 día
                    }

                    console.log("Usuario autenticado");
                } else {
                    // Las credenciales son inválidas, muestra una alerta.
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
function updateRecordCount() {
    const archivoInput = document.getElementById("archivoExcel");
    const archivo = archivoInput.files[0];
    const cantidadRegistros = document.getElementById("cantidadRegistros");
    csvContent = ""
    registros_correctos = ""
    registros_incorrectos = ""

    document.getElementById("registrosCorrectos").textContent = `${registros_correctos}`;
    document.getElementById("registrosIncorrectos").textContent = `${registros_incorrectos}`;

    if (archivo) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

            // Verifica que el archivo tenga dos columnas, una con números y otra con números de teléfono
            if (firstSheet["A1"] && firstSheet["B1"] &&
                /^[0-9]+$/.test(firstSheet["A1"].v) && /^[0-9]+$/.test(firstSheet["B1"].v)) {
                // Muestra la cantidad de registros en el archivo
                const rowCount = Object.keys(firstSheet).filter(cell => cell.startsWith("A")).length;
                cantidadRegistros.textContent = `Registros en el archivo: ${rowCount}`;
                // Habilita el botón "Enviar"
                if (selectPlantilla.value !== "Escoja una plantilla") {
                    document.getElementById("enviarArchivo").disabled = false;
                } else {
                    cantidadRegistros.textContent = "Escoja una platilla para enviar el archivo.";
                    document.getElementById("enviarArchivo").disabled = true;
                }
            } else {
                cantidadRegistros.textContent = "El archivo debe tener dos columnas: identificador y número telefónico.";
                // Deshabilita el botón "Enviar"
                document.getElementById("enviarArchivo").disabled = true;
            }
        };
        reader.readAsArrayBuffer(archivo);
    } else {
        cantidadRegistros.textContent = "Registros en el archivo: 0";
        // Deshabilita el botón "Enviar"
        document.getElementById("enviarArchivo").disabled = true;
    }
}

document.getElementById("flexSwitch").addEventListener("change", function () {
    console.log(this.checked);
    if (this.checked) {

        document.getElementById("label-check").innerHTML = "Excel";
        document.getElementById("textoincial").innerHTML = `Suba el excel con los numeros que desee enviar la plantilla <button class="btn btn-outline-secondary btn-sm" type="button" onclick="descargarEjemplo()">
                Ejemplo
            </button> `;

        document.getElementById("archivoExcel").style.display = "block";
        document.getElementById("inputNumeros").style.display = "none";

    } else {

        document.getElementById("label-check").innerHTML = "Manual";
        document.getElementById("textoincial").innerHTML = `Ingrese los numeros de telefono para enviar`;
        document.getElementById("inputNumeros").style.display = "block";
        document.getElementById("archivoExcel").style.display = "none";

    }
})

function enviarRegistro(registro) {
    console.log(registro);
    const formData = new FormData();
    formData.append("loginCheck", true);
    formData.append("registro", JSON.stringify(registro));
    return fetch(url, {
        method: "POST",
        body: formData,
    })
        .then(response => {
            if (response.ok) {
                return response.json()
                    .then(responseData => {
                        mensajeDetalles.innerHTML = "";
                        console.log(responseData); // Datos de respuesta JSON
                        mensajeDetalles.innerHTML = `<p>Registro procesado ${cont++}</p>`;
                        return responseData; // Devuelve los datos JSON
                    });
            } else {
                throw new Error("Error en la solicitud");
            }
        });
}

document.getElementById("enviarArchivo").addEventListener("click", function () {
    const archivoInput = document.getElementById("archivoExcel");
    const archivo = archivoInput.files[0];

    if (!archivo) {
        alert("Por favor, selecciona un archivo Excel.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

        if (firstSheet["A1"] && firstSheet["B1"] &&
            /^[0-9]+$/.test(firstSheet["A1"].v) && /^[0-9]+$/.test(firstSheet["B1"].v)) {

            const validacionModal = new bootstrap.Modal(document.getElementById('validacionModal'));
            const spinner = document.getElementById("spinner");
            const mensajeDetalles = document.getElementById("mensajeDetalles");
            spinner.style.display = "inline-block";
            mensajeDetalles.innerHTML = `<p>Cargando... </p>`;
            validacionModal.show();

            const registros = []; // Almacena los registros del archivo

            // Extrae los registros del archivo Excel y agrégalos al arreglo "registros"
            Object.keys(firstSheet).forEach(cell => {
                if (cell.startsWith("A")) {
                    const identificador = firstSheet[cell].v;
                    const telefonoCell = `B${cell.substring(1)}`;
                    const telefono = firstSheet[telefonoCell].v;

                    registros.push({ identificador, telefono, plantilla, imagen });
                }
            });

            const promesasEnvio = [];

            registros.forEach((registro) => {
                promesasEnvio.push(enviarRegistro(registro));
            });


            Promise.all(promesasEnvio)
                .then(responses => {
                    // Procesa las respuestas aquí
                    const resultados = [];

                    responses.forEach(response => {
                        const resultado = {
                            estado: response.Estado, // Cambia "estado" a "Estado"
                            codigo: response.codigo, // Mantén "codigo" como está
                            customer_id: response.customer_id, // Mantén "customer_id" como está
                            error: response.error || "", // Mantén "error" como está
                            mensaje: response.mensaje || "", // Mantén "mensaje" como está
                            telefono: response.telefono // Mantén "telefono" como está
                        };
                        resultados.push(resultado);
                    });

                    // Crear un archivo CSV a partir de los datos de respuesta
                    let csvContent = "estado,codigo,customer ID,Error,Mensaje,Telefono\n";
                    resultados.forEach(envio => {
                        csvContent += `${envio.estado},${envio.codigo},${envio.customer_id},"${envio.error}","${envio.mensaje}",${envio.telefono}\n`;
                    });

                    // Crear un enlace para descargar el archivo CSV
                    const encodedUri = encodeURI(csvContent);
                    const link = document.createElement("a");
                    link.setAttribute("href", "data:text/csv;charset=utf-8," + encodedUri);
                    link.setAttribute("download", "detalles_envio.csv");
                    document.body.appendChild(link);

                    // Simular un clic en el enlace para descargar el archivo
                    link.click();

                    // Mostrar el número de registros correctos e incorrectos
                    document.getElementById("registrosCorrectos").textContent = `Registros correctos: ${resultados.filter(res => res.estado === "Éxito").length}`;
                    document.getElementById("registrosIncorrectos").textContent = `Registros incorrectos: ${resultados.filter(res => res.estado !== "Éxito").length}`;
                })
                .catch(error => {
                    console.error("Error al enviar registros:", error);
                    mensajeDetalles.innerHTML = `<p>Error al enviar registros: ${error.message}</p>`;
                })
                .finally(() => {
                    spinner.style.display = "none";
                });
        } else {
            alert("El archivo debe tener dos columnas: identificador y número telefónico.");
        }
    };
    reader.readAsArrayBuffer(archivo);
});

// Función para obtener emojis
function getEmoji(emoji) {
    return String.fromCodePoint(emoji.codePointAt(0));
}

// Manejar la descarga del archivo de ejemplo
function descargarEjemplo() {
    // URL del archivo de ejemplo
    const ejemploURL = "Libro1.xlsx"; // Reemplaza con la URL real del archivo de ejemplo

    // Crear un enlace para descargar el archivo de ejemplo
    const link = document.createElement("a");
    link.setAttribute("href", ejemploURL);
    link.setAttribute("download", "ejemplo_envio.xlsx");
    link.style.display = 'none';
    document.body.appendChild(link);

    // Simular un clic en el enlace para descargar el archivo
    link.click();

    // Limpiar el enlace después de la descarga
    document.body.removeChild(link);
};

function cerrarSesion() {
    loginCheck = false;
    setCookie("loggedIn", "false", 0.1);
    Start(1);
}

function mostrarToast() {

    if (selectPlantilla.value === "Escoja una plantilla") {
        const toastContainer = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.classList.add('fade');
        toast.classList.add('show');
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        toast.setAttribute('aria-atomic', 'true');
        toast.innerHTML = `
            <div class="toast-header" style="background-color: #0d6efd;">
                <strong class="me-auto">ALERTA</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Cerrar"></button>
            </div>
            <div class="toast-body">
                Por favor, seleccione una plantilla.
            </div>
        `;
        toastContainer.appendChild(toast);
    
        // Cierra el toast después de 3 segundos
        setTimeout(() => {
            toast.remove();
        }, 4000);   
    }

}

selectPlantilla.addEventListener("change", function () {
    const vector = inputtextarea.value.split('\n').map(Number);
    const vectorJSON = vector.map((numero, posicion) => ({ numero, posicion , imagen : imagen , plantilla : plantilla }));

    console.log(vectorJSON);


    if (selectPlantilla.value === "conocedibanka") {
        imgPlantilla.style.display = "block";
        imgPlantilla.src = "https://i.ibb.co/0jH8Jxw/Screenshot-1.png";
        imagen = "https://i.ibb.co/KXM3QLT/Imagen-de-Whats-App-2023-09-26-a-las-17-31-42.jpg"
    }
    if (selectPlantilla.value === "presentacion") {
        imgPlantilla.style.display = "block";
        imgPlantilla.src = "https://i.ibb.co/r0rfGhx/Screenshot-2.png";
        imagen = "https://i.ibb.co/LS90SWG/Imagen-de-Whats-App-2023-09-26-a-las-14-09-00.jpg";

    }
    plantilla = selectPlantilla.value;
    document.getElementById("archivoExcel").disabled = false;
    enviarEjemplo.disabled = false;

});

enviarEjemplo.addEventListener("click", function () {

    if (numeroEjemplo.value !== "" && numeroEjemplo.value.length == 10) {

        const validacionModal = new bootstrap.Modal(document.getElementById('validacionModal'));
        const mensajeDetalles = document.getElementById("mensajeDetalles");
        spinner.style.display = "inline-block";
        mensajeDetalles.innerHTML = `<p>Cargando... </p>`;
        validacionModal.show();

        const formData2 = new FormData();
        formData2.append("loginCheck", true);
        formData2.append("registro", JSON.stringify({
            identificador: 1,
            telefono: "57" + numeroEjemplo.value,
            plantilla: plantilla,
            imagen: imagen
        }));

        fetch(url, {
            method: "POST",
            body: formData2,
        })
            .then(response => {
                if (response.ok) {
                    response.json()
                        .then(responseData => {
                            spinner.style.display = "none";
                            mensajeDetalles.innerHTML = "";
                            console.log(responseData); // Datos de respuesta JSON
                            mensajeDetalles.innerHTML = `<p>El numero : ${numeroEjemplo.value} fue procesado</p>`;
                            responseData; // Devuelve los datos JSON

                        });
                } else {
                    throw new Error("Error en la solicitud");
                }
            });
    } else {

        mensajeDetalles.innerHTML = "";
        mensajeDetalles.innerHTML = `Numero no valido`;
        console.log("Numero no valido");

    }
});

checkLoginStatus();
// Actualizar la cantidad de registros al cargar la página (en caso de que se haya preseleccionado un archivo)
updateRecordCount();



// {"messaging_product":"whatsapp","contacts":[{"input":"573228148974","wa_id":"573228148974"}],"messages":[{"id":"wamid.HBgMNTczMjI4MTQ4OTc0FQIAERgSRUE0MENGMUY4NzJBQTU3NDJGAA==","message_status":"accepted"}]}

// {"messaging_product":"whatsapp","contacts":[{"input":"5732281489748","wa_id":"5732281489748"}],"messages":[{"id":"wamid.HBgNNTczMjI4MTQ4OTc0OBUCABEYEkIyMzFDMjE1MkI3NjhDQTlGMgA=","message_status":"accepted"}]}

// {"error":{"message":"(#100) Invalid parameter","type":"OAuthException","code":100,"error_data":{"messaging_product":"whatsapp","details":"Parameter Invalid"},"fbtrace_id":"AJ6Zh7I8BCYXWwv8W3nEI8c"}}