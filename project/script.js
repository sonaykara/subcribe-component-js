const inputData = document.getElementById("email")
const button = document.getElementById("btn")
const popupArea = document.getElementById("pop-up-area")
const main = document.getElementById("main")
const popBtn = document.getElementById("pop-up-btn")
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(inputData , button , popupArea , popBtn)
const required = document.getElementById("required");



let arrData= []
function getData () {
    if (inputData.value.trim() === "") {
        required.innerText = "E-mail is required";
        required.classList.add("required")
    } else if (!emailPattern.test(inputData.value)) {
        required.innerText = "E-mail format is not valid";
    } else {
        required.innerText = ""; 
        arrData.push(inputData.value);
        inputData.value = ""
        console.log(arrData);
        popupArea.classList.add("pop-up-area-active")
        main.style.opacity = "0.3"



    }



}

function closePopup () {
    popupArea.classList.remove("pop-up-area-active")
    main.style.opacity = "1"
}

popBtn.addEventListener("click" , closePopup)


button.addEventListener("click" , getData)

