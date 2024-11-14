let numbers = [];

for(let i = -10; i <= 10; i++){
    numbers.push(Number(i));
}

//Используя циклы, выполните следующие операции над массивом numbers:
//Удалите все отрицательные числа из массива
//Возведите каждое число в квадрат
//Отсортируйте числа в порядке убывания
//Выведите полученный массив numbers в консоль

numbers = numbers.filter((number) => {
      return number >= 0;
  })


for(let i = 0; i < numbers.length; i++){
    let sqNum = numbers[i] ** 2;
    numbers[i] = sqNum;
}

numbers.sort((a, b)=>{
    return b - a;
})
console.log(numbers)
