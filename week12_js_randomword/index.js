const par = document.getElementById("par");

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function getRandomWord() {
    const letterOne = Math.floor(Math.random(alphabet) * alphabet.length);
    const letterTwo = Math.floor(Math.random(alphabet) * alphabet.length);
    const letterThree = Math.floor(Math.random(alphabet) * alphabet.length);
    const letterFour = Math.floor(Math.random(alphabet) * alphabet.length);

    return result = `${alphabet[letterOne]}${alphabet[letterTwo]}${alphabet[letterThree]}${alphabet[letterFour]}`
}
par.innerText = getRandomWord();
