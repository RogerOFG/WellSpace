//!---| INICIO ROTAR REGISTER & LOGIN
var btnRegister = document.getElementById('btnRegister');
var btnLogin = document.getElementById('btnLogin');
var rotarLogin = document.querySelector('.loginContent');
var rotarRegister = document.querySelector('.registerContent');
var fatherL = document.querySelector('.loginFather');
var fatherR = document.querySelector('.registerFather');


btnRegister.addEventListener('click', function(){
    rotarLogin.classList.add('rotarLogin');
    rotarRegister.classList.add('rotarRegister');
    fatherL.classList.remove('ShowUp');
    fatherL.classList.add('ABC');
    fatherR.classList.add('ShowUp');
});

btnLogin.addEventListener('click', function(){
    rotarLogin.classList.remove('rotarLogin');
    rotarRegister.classList.remove('rotarRegister');
    fatherL.classList.add('ShowUp');
    fatherL.classList.remove('ABC');
    fatherR.classList.remove('ShowUp');
});
//TODO: FIN ROTAR REGISTER & LOGIN ---|

//!---| INICIO MOSTRAR NOMBRE ARCHIVO SELECCIONADO
document.getElementById("fileInput").addEventListener("change", function () {
    const fileName = this.files[0].name;
    document.getElementById("selectedFileName").textContent = fileName;
});
//TODO: FIN MOSTRAR NOMBRE ARCHIVO SELECCIONADO ---|

//!---| INICIO MOSTRAR / OCULTAR SUBIDA DE HOJA DE VIDA
document.getElementById("tipoUsuario").addEventListener("change", function() {
const selectedValue = this.value;
const customFileContainer = document.querySelector(".custom-file-container");

    if (selectedValue === "2") {
        customFileContainer.classList.remove("hiddeFile");
    } else {
        customFileContainer.classList.add("hiddeFile");
    }
});
//TODO: FIN MOSTRAR / OCULTAR SUBIDA DE HOJA DE VIDA ---|