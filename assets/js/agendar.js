//!---| INICIO CALENDARIO
function buildCalendar() {
    const calendar = document.getElementById("calendar");
    const currentMonthElement = document.getElementById("currentMonth");
    const nextMonthBtn = document.getElementById("nextMonthBtn");
    const prevMonthBtn = document.getElementById("prevMonthBtn");
    const weekdays = document.getElementById("weekdays");
    const daysContainer = document.getElementById("days");

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    updateCalendar();

    nextMonthBtn.addEventListener("click", function () {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });

    prevMonthBtn.addEventListener("click", function () {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    function updateCalendar() {
        // Lógica para generar el calendario
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
        const months = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        currentMonthElement.textContent = `${months[currentMonth]}`;

        daysContainer.innerHTML = "";

        for (let i = 0; i < firstDayIndex; i++) {
            const emptyDay = document.createElement("div");
            emptyDay.classList.add("empty-day");
            daysContainer.appendChild(emptyDay);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");

            if (currentYear === currentDate.getFullYear() && currentMonth === currentDate.getMonth()) {
                if (day < currentDate.getDate()) {
                    dayElement.classList.add("past-day");
                } else {
                    dayElement.classList.add("current-day");
                }
            } else {
                dayElement.classList.add("current-day");
            }

            dayElement.textContent = day;
            daysContainer.appendChild(dayElement);
        }
    }
}

buildCalendar();
//TODO: FIN CALENDARIO ---|


//! ---| INICIO SACAR TEXTO DEL SELECT
var option = document.getElementById("selectTime");
var timeSeccion = document.getElementById("timeSeccion");

option.addEventListener("change", function () {
    timeSeccion.textContent = option.options[option.selectedIndex].value;
});
//TODO: FIN SACAR TEXTO DEL SELECT ---|


//! ---| INICIO ESCOGER HORARIO
var choose = document.querySelectorAll('.contentHours .setTime .hour');

choose.forEach(function (item) {
    item.addEventListener('click', function () {
        choose.forEach(function (choose) {
            choose.classList.remove('choose');
        });

        item.classList.add('choose');
    });
});
//TODO: FIN ESCOGER HORARIO ---|

//! ---| INICIO ESCOGER FECHA
var daysContainer = document.getElementById('days');

daysContainer.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('current-day')) {
        var allCurrentDays = document.querySelectorAll('.current-day');

        allCurrentDays.forEach(function(currentDay) {
            currentDay.classList.remove('chooseDay');
        });

        target.classList.add('chooseDay');
    }
});

//Todo: FIN ESCOGER FECHA ---|