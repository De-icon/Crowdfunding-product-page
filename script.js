
const backProject = document.querySelector("#backProject")
const modalCtn = document.querySelector("#modalCtn")
const continueModal = document.querySelectorAll(".continueModal")
const bambooStand1 = document.querySelector(".bambooStand1")
const modal2 = document.querySelector("#modal2")
const closeModal = document.querySelector("#closeModal")
const gotIt = document.querySelector("#gotIt")
const Successful = document.getElementsByClassName("Successful")
let yo = document.querySelector('#yo')
let yoo = document.querySelector('#yoo')


//? command to open the modal

backProject.addEventListener("click", () => {
    modalCtn.style.display = "flex"
})
//? command to close the modal
closeModal.addEventListener("click", () => {
    modalCtn.style.display = "none"
})

yo.addEventListener("click", () => {
    Successful.style.display = "flex"
})
// yoo.addEventListener("click", () => {
//     Successful.style.display = "flex"
// })

// bambooStand1.forEach(bambooStand1 => {
//     const Successful = document.querySelectorAll(".Successful")
//     bambooStand1.addEventListener("click", () => {
//         Successful.style.display = "flex"
//     })
// });

