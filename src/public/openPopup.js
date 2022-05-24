const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById("overlay");


openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal);
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest(".popup");
        closeModal(modal);
    })
})

overlay.addEventListener('click', () => {
    const modal = document.querySelector('.popup.active');
    modal.forEach(modal => {
        closeModal(modal);
    })
})

function openModal (modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal (modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
}


// ------------------------------------------------------------------------------------------------------

function loadPopupData() {
    const name1 = document.getElementById("popup-name");
    const date1 = document.getElementById("popup-date");
    const address1 = document.getElementById("popup-address");
    const birthday1 = document.getElementById("popup-birthday");
    const age1 = document.getElementById("popup-age");
    const sex1 = document.getElementById("popup-sex");
    const contact1 = document.getElementById("popup-contact");
    const type1 = document.getElementById("popup-type");
    const studentid1 = document.getElementById("popup-student-id");
    const yearsec1 = document.getElementById("popup-year-sec");
    const employeeid1 = document.getElementById("popup-employee-id");
    const purpose1 = document.getElementById("popup-purpose");
    const assessment1 = document.getElementById("popup-assessment");
    const icon = document.getElementById("icon");


    name1.innerHTML = `${arguments[0]}`;
    var formatted_loggedin = arguments[1].toString().slice(0, 24);
    date1.innerHTML = "Logged in " + `${formatted_loggedin}`;
    address1.innerHTML = `${arguments[2]}`;
    var formatted_bday = arguments[3].toString().slice(0, 24);
    birthday1.innerHTML = `${formatted_bday}`;
    age1.innerHTML = `${arguments[4]}`;
    sex1.innerHTML = `${arguments[5]}`;
    contact1.innerHTML = `${arguments[6]}`;
    type1.innerHTML = `${arguments[7]}`;
    studentid1.innerHTML = `${arguments[8]}`;
    yearsec1.innerHTML = `${arguments[9]}`;
    employeeid1.innerHTML = `${arguments[10]}`;
    purpose1.innerHTML = `${arguments[11]}`;
    assessment1.innerHTML = `${arguments[12]}`;

    if (`${arguments[12]}` == "None") {
        icon.style.display = "none";
        assessment1.style.backgroundColor = "rgb(164, 236, 164)";
    }

    else {
        icon.style.display = "";
        assessment1.style.backgroundColor = "rgb(236, 164, 164)";
    }
}