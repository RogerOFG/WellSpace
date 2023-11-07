 //!---| INICIO MENU PREGUNTAS (PAGINADO)
document.addEventListener('DOMContentLoaded', function () {
    const botonesSiguiente = document.querySelectorAll('.formContentAsk');
    const menuPreguntas = document.getElementById('menuPreguntas');

    menuPreguntas.addEventListener('click', function (e) {
        if (e.target.classList.contains('seleccionarPregunta')) {
            const numeroPregunta = e.target.getAttribute('data-pregunta');

            // Oculta todas las preguntas
            botonesSiguiente.forEach(function (pregunta) {
                pregunta.classList.add('hide');
            });

            // Muestra la pregunta seleccionada
            botonesSiguiente[numeroPregunta - 1].classList.remove('hide');
        }
    });
});
//TODO: FIN MENU PREGUNTAS (PAGINADO) ---|

//!---| INICIO MARCAR OPCION DE MENU 
var opMenu = document.querySelectorAll('.seleccionarPregunta');

opMenu.forEach(function(item){
    item.addEventListener('click', function(){
        opMenu.forEach(function(opMenu){
            opMenu.classList.remove('opActive');
        });

        item.classList.add('opActive');
    })
})

//TODO: FIN MARCAR OPCION DE MENU ---|

//!---| INICIO CONTEO DE PUNTOS POR PREGUNTA 
        // Función para calcular la suma de las respuestas en una pregunta
        function calcularSuma(pregunta) {
            const radios = pregunta.querySelectorAll('input[type=radio]');
            let suma = 0;
            
            radios.forEach(radio => {
                if (radio.checked) {
                    suma += parseInt(radio.value);
                }
            });
            
            return suma;
        }
        
        // Función para actualizar la suma y mostrarla
        function actualizarSuma() {
            const preguntas = document.querySelectorAll('.contentRight');
            let total = 0;
            
            preguntas.forEach(pregunta => {
                total += calcularSuma(pregunta);
            });
            
            document.querySelectorAll('.total').forEach(element => {
                element.textContent = total;
            });
        }
        
        // Agregar event listeners para los cambios en las respuestas
        const radios = document.querySelectorAll('input[type=radio]');
        radios.forEach(radio => {
            radio.addEventListener('change', actualizarSuma);
        });
//TODO: FIN CONTEO DE PUNTOS POR PREGUNTA ---|