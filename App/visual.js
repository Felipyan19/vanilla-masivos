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
function manual() {
    if (this.checked) {

        document.getElementById("label-check").innerHTML = "Excel";
        document.getElementById("textoincial").innerHTML = `Suba el excel con los numeros que desee enviar la plantilla `;
        document.getElementById("descargarEjemplo").style.display = "block";
        document.getElementById("archivoExcel").style.display = "block";
        document.getElementById("inputNumeros").style.display = "none";

    } else {

        document.getElementById("label-check").innerHTML = "Manual";
        document.getElementById("textoincial").innerHTML = `Ingrese los numeros de telefono para enviar`;
        document.getElementById("inputNumeros").style.display = "block";
        document.getElementById("archivoExcel").style.display = "none";
        document.getElementById("descargarEjemplo").style.display = "none";


    }
}

export { mostrarToast, manual };