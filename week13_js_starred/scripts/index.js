// напротив аватара и имени должна появляться дата когда и во сколько был написан комментарий;
// под заголовком «Оставьте ваш комментарий» должен быть чекбокс, который даёт выбор показывать ваше имя в комментарии или нет;
// если пользователь не указал имя, то вместо имени должно появляться username ;
// если пользователь не ввел ссылку на аватар, то должна появляться стандартная аватарка. Стандартных аватаров должно быть больше пяти, они должны подставляться в рандомном порядке.

const userName = document.getElementById("input_name");
const showName = document.getElementById("showName_yes");
const dontShowName = document.getElementById("showName_no");
const userAvatar = document.getElementById("input_img");
const button = document.getElementById("btn");
button.addEventListener('click', submitComm);
const userComment = document.getElementById("textarea");

const outputImg = document.getElementById("chatpart_avatar");
const outputName = document.getElementById("chatpart_name");
const outputComment = document.getElementById("chatpart_comment");
const date = document.getElementById("chatpart_date");
const avatars = [
    './assets/images/cat-avatar.svg',
    './assets/images/dog-avatar.svg',
    './assets/images/hedgehog-avatar.svg',
    './assets/images/lion-avatar.svg',
    './assets/images/owl-avatar.svg'
]

function submitComm(e) {
    e.preventDefault();
    if (userName.value == '') {
        outputName.innerText = 'username'
    }
    else {
        const nameCorrected = userName.value.toLowerCase().trim();
        const nameCorrectedCapitalised = nameCorrected.replace(nameCorrected[0], nameCorrected[0].toUpperCase());

        if (showName.checked == true) {
            outputName.innerText = nameCorrectedCapitalised;
        }   
        else if (dontShowName.checked == true || showName.checked == false || dontShowName.checked == false) {
            outputName.innerText = '';
        }
    }
    
    const avatarAdded = userAvatar.value;

    if (userAvatar.value == '') {
        let avatar = avatars[Math.floor(Math.random() * avatars.length)];
        outputImg.src = avatar;
        outputImg.classList.add("imageAdded");
    }
    else {
        outputImg.src = avatarAdded;
        outputImg.classList.add("imageAdded");
    }
    

    let options = {
        weekday: 'short',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }
    date.innerHTML = `${new Date().toLocaleString("en-fi", options)}`;

    const commentAdded = userComment.value;
    
    function checkSpam(str){
            const commentChecked = commentAdded.replace(/viagra/gi, '***').replace(/xxx/gi, '***');
            return commentChecked;
    }
    const commentChecked = checkSpam(commentAdded);
    outputComment.innerText = commentChecked;
    outputComment.classList.add("chatpart_added");

}
