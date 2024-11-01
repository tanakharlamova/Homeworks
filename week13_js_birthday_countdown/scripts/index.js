const input = document.getElementById("input");
const errorMsg = document.getElementById("error");
const button = document.getElementById("btn");
button.addEventListener('click', calculate);
const result = document.getElementById("result");

function calculate(){
    const inputDate = input.value;
   
    const currentTimestamp = Date.now();
    const futureTimestamp = Date.parse(inputDate);
    const diff = futureTimestamp - currentTimestamp;
    const diffDays = Math.floor(diff/(1000*3600*24));
    
    if (inputDate === '') {
        errorMsg.innerHTML = 'Пожалуйста, выберите дату';
        input.addEventListener('change', ()=> {
            errorMsg.innerHTML = '';
        })
        result.textContent = ''; 
    }
    else if (diffDays === 1) {
        errorMsg.innerHTML = '';
        result.textContent = `До вашего дня рождения остался ${diffDays} день.`
    }
    else if (diffDays.toString().slice(-1) === '1') {
        errorMsg.innerHTML = '';
        result.textContent = `До вашего дня рождения остался ${diffDays} день.`
    }
    else if (diffDays === 2 || diffDays === 3 || diffDays === 4) {
        errorMsg.innerHTML = '';
        result.textContent = `До вашего дня рождения осталось ${diffDays} дня.`
    }
    else if (diffDays.toString().slice(-1) === '2' || diffDays.toString().slice(-1) === '3' || diffDays.toString().slice(-1) === '4') {
        errorMsg.innerHTML = '';
        result.textContent = `До вашего дня рождения осталось ${diffDays} дня.`
    }
    else {
        errorMsg.innerHTML = '';
        result.textContent = `До вашего дня рождения осталось ${diffDays} дней.`
    }
    
}

