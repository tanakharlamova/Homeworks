const container = document.querySelector(".div");
const parag = document.querySelector("p");
let array = [];

// function getPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => {
//         response.json()
//         console.log(response)
// })
//     .then((data) => {
//         console.log(JSON.parse(data));
//         const receivedData = JSON.parse(data);
//         const newArr = array.push(receivedData)
//         console.log(array);
//         console.log(newArr)
//         return newArr;
//     })
//     .catch((error) => {
//         console.log('error' + error)
//     }); 
//     return newArr;
// }
// const data = getPost(array);
// console.log(newArr);

// receivedDataArr.forEach((element, index) => {
//     receivedDataArr.push(element);
//     const title = document.createElement("h1");
//     const par = document.createElement("p");
//     container.appendChild(title);
//     container.appendChild(par);
//     title.textContent = `Title: ${received}`;
//     par.textContent = `Body: `;
// });


async function getPost(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data)
    return data; 
}
function generatePosts(array){
    const posts = {
        title: [],
        body: []
    }
}

array.forEach((item)=>{
    for (let item of array){
        console.log("key", post)
    }
    console.log(item.title)
})
getPost(array).then((posts) => {
    generatePosts(item.title)
})

// getPost().then((data) => {
//     console.log(data)
//     receivedDataArr = getPost(receivedDataArr);
//     let newArr = receivedDataArr.push(data)
//     console.log(newArr)
// })
// .catch(()=>
// console.log("error"))
// .then((response) => 
// )


