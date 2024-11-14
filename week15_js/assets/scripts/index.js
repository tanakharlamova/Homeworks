const cityTemp = document.querySelector(".cityTemp");
const maxTemp = document.getElementById("max_temp");
const minTemp = document.getElementById("min_temp");

const cities = ["Москва", "Санкт-Петербург", "Нью-Йорк", "Токио"];
const temperatures = [];

// cities.forEach((city, index) => {
//     const temperature = prompt(`Введите температуру для города ${city}`);
//     temperatures.push(Number(temperature));
//     const cityTempText = document.createElement("p");
//     cityTempText.textContent = `Температура в городе ${cities[index]}: ${temperatures[index]}`;
//     cityTemp.appendChild(cityTempText)
// })
// console.log(temperatures)

for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру для города ${cities[i]}`);
    temperatures.push(Number(temperature));
    const cityTempText = document.createElement("p");
    cityTempText.textContent = `Температура в городе ${cities[i]}: ${temperatures[i]}°C`;
    cityTemp.appendChild(cityTempText)
}


const maxMinTemp = temperatures.sort((a, b)=>{
    return b - a;
})
maxTemp.textContent = `Максимальная температура: ${maxMinTemp[0]}°C`
minTemp.textContent = `Минимальная температура: ${maxMinTemp[maxMinTemp.length - 1]}°C`
