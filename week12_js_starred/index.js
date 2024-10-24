// Создадим сервис комментариев. В нём будет три поля ввода:

// поле для ввода имени. Сделайте интерфейс преобразования имени, который учтёт, все нюансы — лишние пробелы, отсутствие больших букв в имени и прочее. Например, было введено пользователем : иВаН . Стало: Иван .
// поле для ввода ссылки на аватар;
// поле ввода сообщения. Необходимо реализовать отображение и добавление сообщений, а также функцию checkSpam(str), заменяющую 'viagra' или 'XXX' на *** ;
// функция должна быть нечувствительна к регистру:

const userName = document.getElementById("input_name");
const userAvatar = document.getElementById("input_img");
const button = document.getElementById("btn");
button.addEventListener('click', submitComm);
const userComment = document.getElementById("textarea");

const outputImg = document.getElementById("chatpart_avatar");
const outputName = document.getElementById("chatpart_name");
const outputComment = document.getElementById("chatpart_comment");


function submitComm(e) {
    e.preventDefault();
    const nameCorrected = userName.value.toLowerCase().trim();
    const nameCorrectedCapitalised = nameCorrected.replace(nameCorrected[0], nameCorrected[0].toUpperCase());
    outputName.innerText = nameCorrectedCapitalised;
    
    const avatarAdded = userAvatar.value;
    outputImg.src = avatarAdded;
    outputImg.classList.add("imageAdded");

    const commentAdded = userComment.value;
    
    function checkSpam(str){
            const commentChecked = commentAdded.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
            return commentChecked;
    }
    const commentChecked = checkSpam(commentAdded);
    outputComment.innerText = commentChecked;
    outputComment.classList.add("chatpart_added");

}
