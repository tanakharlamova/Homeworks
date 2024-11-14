// Создайте пустой массив с именем grades и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию Math.random().
// Рассчитайте и выведите средний балл студентов, используя методы массивов.
// Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.
// Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.
// Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.
// Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.
// Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
// Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
// Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
// Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
// Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
// Если оценка ниже 20, преобразуйте её в "E"
// Выведите все найденные значения на экран.

const printGrade1 = document.querySelector(".grade1");
const printGrade2 = document.querySelector(".grade2");
const printGrade3 = document.querySelector(".grade3");
const printGrade4 = document.querySelector(".grade4");
const printGrade5 = document.querySelector(".grade5");
const printGrade6 = document.querySelector(".grade6");
const printGrade7 = document.querySelector(".grade7");
const printGrade8 = document.querySelector(".grade8");
const printGrade9 = document.querySelector(".grade9");
const printGrade10 = document.querySelector(".grade10");
const printGrade11 = document.querySelector(".grade11");
const printGrade12 = document.querySelector(".grade12");

const avg = document.querySelector(".avg");
const minGradePrint = document.querySelector(".minGrade");
const maxGradePrint = document.querySelector(".maxGrade");
const positiveGradesPrint = document.querySelector(".positive");
const negativeGradesPrint = document.querySelector(".negative");

const grades = new Array();
Array(12).fill().map(()=> {
  grades.push(Math.floor(Math.random()*100))
})

const averageGrade = Math.floor(grades.reduce((a, b) => a + b) / grades.length);

const maxGrade = Math.max(...grades);
const minGrade = Math.min(...grades);
const positiveGrades = grades.filter(function(grade){
    return grade >= 60;
})
const negativeGrades = grades.filter(function(grade){
    return grade < 60;
})

const letterGrades = grades.map((grade) => {

    if (80 < grade && grade < 100) {
        const letterGrade = 'A';
        return letterGrade;
    }
    else if (60 < grade && grade < 79) {
        const letterGrade = 'B';
        return letterGrade;
    }
    else if (40 < grade && grade < 59) {
        const letterGrade = 'C';
        return letterGrade;
   
    }
    else if (20 < grade && grade < 39) {
        const letterGrade = 'D';
        return letterGrade;
   
    }
    else {
        const letterGrade = 'E';
        return letterGrade;
    }
})


function printAll(){
    printGrade1.textContent = `Студент 1, баллы: ${grades[0]}, буквенная оценка: ${letterGrades[0]}`;
    printGrade2.textContent = `Студент 2, баллы: ${grades[1]}, буквенная оценка: ${letterGrades[1]}`;
    printGrade3.textContent = `Студент 3, баллы: ${grades[2]}, буквенная оценка: ${letterGrades[2]}`;
    printGrade4.textContent = `Студент 4, баллы: ${grades[3]}, буквенная оценка: ${letterGrades[3]}`;
    printGrade5.textContent = `Студент 5, баллы: ${grades[4]}, буквенная оценка: ${letterGrades[4]}`;
    printGrade6.textContent = `Студент 6, баллы: ${grades[5]}, буквенная оценка: ${letterGrades[5]}`;
    printGrade7.textContent = `Студент 7, баллы: ${grades[6]}, буквенная оценка: ${letterGrades[6]}`;
    printGrade8.textContent = `Студент 8, баллы: ${grades[7]}, буквенная оценка: ${letterGrades[7]}`;
    printGrade9.textContent = `Студент 9, баллы: ${grades[8]}, буквенная оценка: ${letterGrades[8]}`;
    printGrade10.textContent = `Студент 10, баллы: ${grades[9]}, буквенная оценка: ${letterGrades[9]}`;
    printGrade11.textContent = `Студент 11, баллы: ${grades[10]}, буквенная оценка: ${letterGrades[10]}`;
    printGrade12.textContent = `Студент 12, баллы: ${grades[11]}, буквенная оценка: ${letterGrades[11]}`;
    avg.textContent = `Средний балл: ${averageGrade}`;
    maxGradePrint.textContent = `Максимальный балл: ${maxGrade}`;
    minGradePrint.textContent = `Минимальный балл: ${minGrade}`;
    positiveGradesPrint.textContent = `Количество положительных оценок: ${positiveGrades.length}`;
    negativeGradesPrint.textContent = `Количество отрицательных оценок: ${negativeGrades.length}`;

}
printAll();


// Рассчет оценок прекрасный, они были бы довольны!
// - все выполнено отлично, немного прооптимизировал твой код, сделал его читаемее
// const printGrades = [
// document.querySelector(".grade1"), document.querySelector(".grade2"),
// document.querySelector(".grade3"), document.querySelector(".grade4"),
// document.querySelector(".grade5"), document.querySelector(".grade6"),
// document.querySelector(".grade7"), document.querySelector(".grade8"),
// document.querySelector(".grade9"), document.querySelector(".grade10"),
// document.querySelector(".grade11"), document.querySelector(".grade12")
// ];
// const avg = document.querySelector(".avg");
// const minGradePrint = document.querySelector(".minGrade");
// const maxGradePrint = document.querySelector(".maxGrade");
// const positiveGradesPrint = document.querySelector(".positive");
// const negativeGradesPrint = document.querySelector(".negative");

// function generateGrades(numStudents = 12) {
// return Array.from({ length: numStudents }, () => Math.floor(Math.random() * 100));
// }

// function calculateAverage(grades) {
// return Math.floor(grades.reduce((sum, grade) => sum + grade) / grades.length);
// }

// function assignLetterGrades(grades) {
// return grades.map(grade => {
// if (grade >= 80) return 'A';
// if (grade >= 60) return 'B';
// if (grade >= 40) return 'C';
// if (grade >= 20) return 'D';
// return 'E';
// });
// }

// function displayResults(grades, letterGrades) {
// grades.forEach((grade, index) => {
// printGrades[index].textContent = `Студент ${index + 1}, баллы: ${grade}, буквенная оценка: ${letterGrades[index]}`;
// });

// avg.textContent = `Средний балл: ${calculateAverage(grades)}`;
// maxGradePrint.textContent = `Максимальный балл: ${Math.max(...grades)}`;
// minGradePrint.textContent = `Минимальный балл: ${Math.min(...grades)}`;
// positiveGradesPrint.textContent = `Количество положительных оценок: ${grades.filter(grade => grade >= 60).length}`;
// negativeGradesPrint.textContent = `Количество отрицательных оценок: ${grades.filter(grade => grade < 60).length}`;
// }

// const grades = generateGrades();
// const letterGrades = assignLetterGrades(grades);

// displayResults(grades, letterGrades);