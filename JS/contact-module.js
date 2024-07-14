let name = document.querySelector("#name")
let mail = document.querySelector("#mail")
let phone = document.querySelector("#phone")
let age = document.querySelector("#age")
let password = document.querySelector("#password")
let repassword = document.querySelector("#repassword")
let submitBtn = document.querySelector(".submitBtn")

function validationName() {
    let regex = /^[a-zA-Z]+$/
    if (regex.test(name.value) == true || name.value == "") {
        document.querySelector(".name").classList.replace("d-block", "d-none");
        return true;
    }
    else if (name.value == "") {
        document.querySelector(".name").classList.replace("d-block", "d-none");
    }
    else {
        document.querySelector(".name").classList.replace("d-none", "d-block");
        return false;
    }
}
name.addEventListener("input", validationName)
let testName = validationName()


function validationMail() {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (regex.test(mail.value) == true || mail.value == "") {
        document.querySelector(".mail").classList.replace("d-block", "d-none");
        return true;
    }
    else if (mail.value == "") {
        document.querySelector(".mail").classList.replace("d-block", "d-none");
    }
    else {
        document.querySelector(".mail").classList.replace("d-none", "d-block");
        return false;
    }
}
mail.addEventListener("input", validationMail)
let testMail = validationMail()


function validatioPhone() {
    let regex = /^(02)?01[0125][0-9]{8}$/
    if (regex.test(phone.value) == true) {
        document.querySelector(".phone").classList.replace("d-block", "d-none");
        return true;
    }
    else if (phone.value == "") {
        document.querySelector(".phone").classList.replace("d-block", "d-none");
    }
    else {
        document.querySelector(".phone").classList.replace("d-none", "d-block");
        return false;
    }
}
phone.addEventListener("input", validatioPhone)
let testPhone = validatioPhone()


function validationAge() {
    let regex = /^[0-9]{2}$/;
    if (regex.test(age.value) == true || age.value == "") {
        document.querySelector(".age").classList.replace("d-block", "d-none");
        return true;
    }
    else if (age.value == "") {
        document.querySelector(".age").classList.replace("d-block", "d-none");
    }
    else {
        document.querySelector(".age").classList.replace("d-none", "d-block");
        return false;
    }
}
age.addEventListener("input", validationAge)
let testAge = validationAge()

function validationPassword() {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if (regex.test(password.value) == true || password.value == "") {
        document.querySelector(".password").classList.replace("d-block", "d-none");
        return true;
    }
    else if (password.value == "") {
        document.querySelector(".password").classList.replace("d-block", "d-none");
    }
    else {
        document.querySelector(".password").classList.replace("d-none", "d-block");
        return false;
    }
}
password.addEventListener("input", validationPassword)
let testPassword = validationPassword()

function validationRepassword() {
    if (repassword.value == password.value) {
        document.querySelector(".repassword").classList.replace("d-block", "d-none");
        return true;
    } else {
        document.querySelector(".repassword").classList.replace("d-none", "d-block");
        return false;
    }
}
repassword.addEventListener("input", validationRepassword)
let testRepassword = validationRepassword()
console.log(testRepassword);

function getContact() {
    if (testName == true && testMail == true && testAge == true && testPhone == true && testPassword == true && testRepassword == true) {
        submitBtn.classList.remove("disabled")
    }
}
export function openContactPage() {
    document.querySelector(".contact").addEventListener("click", function () {
        document.querySelector(".mainpage").classList.replace("d-block", "d-none")
        document.querySelector(".contactpage").classList.replace("d-none", "d-block")
        document.querySelector(".search").classList.add("d-none")
        document.querySelector(".detailsPage").classList.add("d-none")
        document.querySelector(".categorypage").classList.add("d-none")
        document.querySelector(".mealPage").classList.add("d-none")
        document.querySelector(".areaPage").classList.add("d-none")
        document.querySelector(".integredientPage").classList.add("d-none")
        $(".sidenav").css("left", "-270px")
        $(".closeopenbtn").removeClass("fa-solid fa-xmark")
        $(".closeopenbtn").addClass("fa-solid fa-bars")
    })
    getContact()
}


