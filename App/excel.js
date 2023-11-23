// excel.js
let csvContent
let registros_correctos
let registros_incorrectos
// Función para cargar y validar el archivo Excel
function cargarYValidarArchivo( selectPlantilla ) {

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
                console.log(selectPlantilla+ " soy plantilla");
                if (selectPlantilla !== "" ) {
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

export { cargarYValidarArchivo, descargarEjemplo };
