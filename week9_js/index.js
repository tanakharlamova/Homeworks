//let time;
//time = 34;

//console.log('Старт поездки. Осталось минут: ' + time);

//time -= 15;
//console.log('Немного сторис в соцсетях. Осталось минут: ' + time);

//time -= 10;
//console.log('Немного не новостей, но событий. Осталось минут: ' + time);

//time = 0;
//console.log('Вы приехали. Добро пожаловать в Москву.');


const input = document.querySelector("#inputSum");
input.addEventListener("keydown", calculate);


function calculate(e) {
    const inputValue = input.value; 
    let resultSum = inputValue * 1.07;
    resultSum = resultSum.toFixed(2);
    document.querySelector("#par").textContent = `Через год у вас будет ${resultSum} руб. на счету`;
}





