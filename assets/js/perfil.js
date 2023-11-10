//!---| INICIO MOSTRAR NOMBRE ARCHIVO SELECCIONADO
// NOMBRE DE HOJA DE VIDA
document.getElementById("fileInput").addEventListener("change", function () {
    const fileName = this.files[0].name;
    document.getElementById("selectedFileName").textContent = fileName;
});

// NOMBRE DE FOTO PERFIL
document.getElementById("fileInputImg").addEventListener("change", function () {
    const fileNameImg = this.files[0].name;
    document.getElementById("selectedFileNameImg").textContent = fileNameImg;
});

// NOMBRE DE FOTO BANNER
document.getElementById("fileInputBanner").addEventListener("change", function () {
    const fileNameBanner = this.files[0].name;
    document.getElementById("selectedFileNameBanner").textContent = fileNameBanner;
});
//TODO: FIN MOSTRAR NOMBRE ARCHIVO SELECCIONADO ---|

//!---| INICIO ABRIR / CERRAR ACTUALIZACION DE DATOS
var btnClose = document.querySelector('.topU .close .iconClose');
var update = document.getElementById('pencilUpdate');
var update2 = document.querySelector('.alertPerfil');
var pageUpdate = document.querySelector('.pageUpdate');

update.addEventListener('click', function(){
    pageUpdate.classList.remove('pageHidde');
});

update2.addEventListener('click', function(){
    pageUpdate.classList.remove('pageHidde');
});

btnClose.addEventListener('click', function(){
    pageUpdate.classList.add('pageHidde');
});
//TODO: FIN ABRIR / CERRAR ACTUALIZACION DE DATOS ---|

//!---| INICIO VISTA PREVIA DE IMAGEN (BANNER-PERFIL)
function previewImage(inputId, previewId, fileNameId) {
    var fileInput = document.getElementById(inputId);
    var imagePreview = document.getElementById(previewId);
    var selectedFileName = document.getElementById(fileNameId);

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.src = e.target.result;
        };

        reader.readAsDataURL(fileInput.files[0]);

        selectedFileName.textContent = fileInput.files[0].name;
    } else {
        imagePreview.src = '';
        selectedFileName.textContent = '';
    }
}
//TODO: FIN VISTA PREVIA DE IMAGEN (BANNER-PERFIL) ---|

//!---| INICIO DESACARGAR ARCHIVO SELECCIONADO (HOJA DE VIDA)
document.getElementById('fileInput').addEventListener('change', function () {
    var selectedFileName = document.getElementById('selectedFileName');
    var downloadLink = document.getElementById('downloadLink');
    downloadLink.style.display = 'none';

    if (this.files.length > 0) {
        var selectedFile = this.files[0];
        selectedFileName.textContent = selectedFile.name;

        // Actualizamos el enlace de descarga con el archivo seleccionado y su nombre.
        var objectURL = URL.createObjectURL(selectedFile);
        downloadLink.href = objectURL;
        downloadLink.setAttribute('download', selectedFile.name); // Establecemos el nombre de descarga.
        downloadLink.style.display = 'block'; // Mostramos el enlace de descarga.
    } else {
        selectedFileName.textContent = '';
    }
});
//TODO: FIN DESACARGAR ARCHIVO SELECCIONADO (HOJA DE VIDA) ---|