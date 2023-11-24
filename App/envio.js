// envio.js
const url = "https://desarrollo.ccgltda.com/pruebas/masivos3/newphp.php";
async function send_to_excel(response) {
    const url = 'https://script.google.com/macros/s/AKfycbzBtbRc0poamnKGInDexoESmf1GKcwN9AnOUu4RgBDJ3VAWecOmuzK6NutYQMbEY0XkSQ/exec';

    const options = {
        method: 'POST',
        body: new URLSearchParams(response),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const responseData = await response.json();
            return responseData;
        } else {
            throw new Error('Error en la solicitud a Google Sheets.');
        }
    } catch (error) {
        console.error('Error:', error);
        throw error; // Lanzar el error nuevamente para que se maneje en el código que llama a esta función.
    }
}

async function enviarRegistro(registro, plantilla, imagen) {
    const formData = new FormData();

    formData.append("loginCheck", true);
    formData.append("registro", JSON.stringify({
        identificador: registro.identificador,
        telefono: registro.telefono,
        plantilla: plantilla,
        imagen: imagen,
    }));

    return fetch(url, {
        method: "POST",
        body: formData,
    })
        .then(response => {
            if (response.ok) {
                return response.json()
                    .then(responseData => {
                        responseData.fecha = new Date();
                        return responseData;
                    });
            } else {
                throw new Error("Error en la solicitud");
            }
        });
}

async function enviarRegistros(plantilla, imagen, user) {
    const archivoInput = document.getElementById("archivoExcel");
    const archivo = archivoInput.files[0];

    if (!archivo) {
        alert("Por favor, selecciona un archivo Excel.");
        return;
    }

    const reader = new FileReader();
    reader.onload = async function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

        if (
            firstSheet["A1"] &&
            firstSheet["B1"] &&
            /^[0-9]+$/.test(firstSheet["A1"].v) &&
            /^[0-9]+$/.test(firstSheet["B1"].v)
        ) {
            const validacionModal = new bootstrap.Modal(
                document.getElementById("validacionModal")
            );
            const spinner = document.getElementById("spinner");
            const mensajeDetalles = document.getElementById("mensajeDetalles");
            spinner.style.display = "inline-block";
            validacionModal.show();

            const registros = Object.keys(firstSheet)
                .filter((cell) => cell.startsWith("A"))
                .map((cell) => {
                    const identificador = firstSheet[cell].v;
                    const telefonoCell = `B${cell.substring(1)}`;
                    const telefono = firstSheet[telefonoCell].v;

                    return { identificador, telefono, plantilla, imagen };
                });

            const resultados = []; // Almacena los resultados
            const startTime = performance.now();
            for (let i = 0; i < registros.length; i++) {
                try {
                    // Enviar registro y esperar la respuesta
                    const response1 = await enviarRegistro(registros[i], plantilla, imagen);
                    
                    const estado = response1.messages?.[0]?.message_status || "refused";
                    const codigo = response1.messages?.[0] ? "201" : "100";
                    const meta_id = response1.messages?.[0]?.id || response1.error?.fbtrace_id;
                    const Telefono = response1.telephone;
                    const Fecha = response1.fecha;
                    // Enviar a Google Sheets y esperar la respuesta
                    
                    const response2 = await send_to_excel({
                        estado,
                        codigo,
                        meta_id,
                        Telefono,
                        plantilla,
                        user,
                        Fecha,
                        source:"DiBanka"

                    });

                    console.log("response2:", response2);
                    console.log("response1:", response1);
        
        
                    mensajeDetalles.innerHTML = `<p>Registro procesado ${i + 1}</p>`;
        
                    resultados.push({
                        estado,
                        codigo,
                        meta_id,
                        Telefono,
                        plantilla,
                        user,
                        Fecha,
                    });
                } catch (error) {
                    console.error("Error al enviar registros:", error);
                    mensajeDetalles.innerHTML = `<p>Error al enviar registros: ${error.message}</p>`;
                }
            }
            const endTime = performance.now();
    
            const tiempoTranscurrido = (endTime - startTime) / 1000; // Convertir milisegundos a segundos
        
            console.log(`Tiempo transcurrido: ${tiempoTranscurrido} segundos`);
            

            // Crear un archivo CSV a partir de los resultados
            let csvContent = "Estado,Codigo,Meta_ID,Telefono,Plantilla,Usuario,Fecha\n";
            resultados.forEach(envio => {
                csvContent += `${envio.estado},${envio.codigo},${envio.meta_id},${envio.Telefono},${envio.plantilla},${envio.user},${envio.Fecha.toISOString()}\n`;
            });

            // Crear un enlace para descargar el archivo CSV
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", "data:text/csv;charset=utf-8," + encodedUri);
            link.setAttribute("download", "detalles_envio.csv");
            link.style.display = "none"; // Ocultar el enlace
            document.body.appendChild(link);

            // Simular un clic en el enlace para descargar el archivo
            link.click();

            // Eliminar el enlace después de la descarga
            document.body.removeChild(link);

            // Mostrar el número de registros correctos e incorrectos
            document.getElementById("registrosCorrectos").textContent = `Registros correctos: ${resultados.filter(res => res.estado === "accepted").length}`;
            document.getElementById("registrosIncorrectos").textContent = `Registros incorrectos: ${resultados.filter(res => res.estado !== "accepted").length}`;

            spinner.style.display = "none";
        } else {
            alert("El archivo debe tener dos columnas: identificador y número telefónico.");
        }
    };
    reader.readAsArrayBuffer(archivo);
}



function enviarEjemplo(numeroEjemplo, plantilla, imagen, user) {

    if (numeroEjemplo.value !== "" && numeroEjemplo.value.length == 10) {

        console.log("numero de ejemplo:" + numeroEjemplo.value);
        console.log("plantilla:" + plantilla);
        console.log("imagen:" + imagen);

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
        console.log(user);
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

}

export { enviarRegistro, enviarRegistros, enviarEjemplo };