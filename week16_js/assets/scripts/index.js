const form = document.forms.formOne;
const nameOne = form.elements.nameOne;
const emailOne = form.elements.emailOne;
const ageOne = form.elements.ageOne;
const genderOne = form.elements.genderOne;
const passwordOne = form.elements.passwordOne;
const checkboxOne = form.elements.checkboxOne; 
const showPasswordBtn = form.elements.showPassword;
//const {nameOne, emailOne, ageOne, genderOne, passwordOne, checkboxOne} = form.elements;
const btn = document.getElementById("send");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const element = e.target;
    validateName(nameOne);
    validateEmail(emailOne);
    validateAge(ageOne);
    validateGender(genderOne);
    validatePassword(passwordOne);
    validateCheckbox(checkboxOne);

})


function validateName(input){
    const regex = /^[a-zA-Zа-яА-ЯЁё\s]+$/;
    const correctValue = input.value.trim();
    if (correctValue === ''){
        showErrorMsg(input, 'Введите имя')
        return;
     }
     if (correctValue.length < 2){
        showErrorMsg(input, "Имя должно содержать не менее 2 символов");
        return;
    }
    if (correctValue.length > 20){
        showErrorMsg(input, "Имя должно содержать не более 20 символов");
        return;
    }
    if (regex.test(correctValue) === false) {
        console.log("incorrect name!")
        showErrorMsg(input, "Имя должно состоять из букв и пробелов");
        return;
    } 
    closeErrorMsg(input);
}

function validateEmail(input){
    const correctValue = input.value.trim();
    const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (correctValue === '') {
        console.log(correctValue)
        showErrorMsg(input, "Введите электронную почту");
        return;
    }
    if (regex.test(correctValue) === false) {
        console.log("incorrect email!")
        showErrorMsg(input, "Неверный формат электронной почты");
        return;
    }
    closeErrorMsg(input);

}
function validateAge(input){
    const correctValue = input.value.trim();
    // const regex = /^[0-9]+$/;
    if (correctValue === '') {
        console.log("please enter age!")
        showErrorMsg(input, "Введите возраст")
        return;
    }
    // if (regex.test(correctValue) === false){
    //     showErrorMsg(input, "Возраст должен состоять из цифр")
    //     return;
    // }
    closeErrorMsg(input);
}

function validateGender(genderOne){
    const errorMsgGender = document.getElementById("errorGender");
    if (genderOne.checked === false){
        console.log("Please select your gender!")
        errorMsgGender.textContent = "Укажите ваш пол";
        errorMsgGender.classList.remove("none");
        return;
    }
    errorMsgGender.textContent = "";
    errorMsgGender.classList.add("none");
    
    
}

function validatePassword(input){
    showPassword(showPasswordBtn.checked);
    const correctValue = input.value.trim();
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (correctValue === ''){
        showErrorMsg(input, "Введите пароль")
        return;
    }
    if (regex.test(correctValue) === false){
        console.log("incorrect password!")
        showErrorMsg(input, "Пароль должен содержать как минимум одну заглавную букву, одну строчную букву и одну цифру");
        return;
    }
    closeErrorMsg(input);
    
}
function showPassword(checked){
    if (passwordOne.type === "password"){
        passwordOne.type = "text"
    }
    else {
        passwordOne.type = "password"
    }
}


function validateCheckbox(checkboxOne){
    if (!checkboxOne.checked){
        console.log("Please accept terms and conditions!")
        //showErrorMsg(checkboxOne, "Please accept terms and conditions!")
        document.getElementById("errorTerms").textContent = "Пожалуйста, согласитесь с условиями обработки данных!";
        document.getElementById("errorTerms").classList.remove("none");
        return;
    }
    document.getElementById("errorTerms").textContent = "";
    document.getElementById("errorTerms").classList.add("none");
}

function showErrorMsg(input, message){
    const parentElement = input.parentElement;
    const errorMsg = parentElement.querySelector(".errorMsg");
    errorMsg.textContent = message;
    errorMsg.classList.remove("none");
}

function closeErrorMsg(input){
    const parentElement = input.parentElement;
    const errorMsg = parentElement.querySelector(".errorMsg");
    errorMsg.textContent = '';
    errorMsg.classList.add("none");
}

function validateAll(inputs){
    const inputErr = inputs.filter((input) => input.value.trim() === '');
    if(inputErr.length === 0 && checkboxOne.checked === true) {
        btn.disabled = false;
        return;
    }
    btn.disabled = true;
}

nameOne.addEventListener('input', () => validateAll([nameOne, emailOne, ageOne, passwordOne, checkboxOne]));
emailOne.addEventListener('input', () => validateAll([nameOne, emailOne, ageOne, passwordOne, checkboxOne]));
ageOne.addEventListener('input', () => validateAll([nameOne, emailOne, ageOne, passwordOne, checkboxOne]));
passwordOne.addEventListener('input', () => validateAll([nameOne, emailOne, ageOne, passwordOne, checkboxOne]));
checkboxOne.addEventListener('input', () => validateAll([nameOne, emailOne, ageOne, passwordOne, checkboxOne]));