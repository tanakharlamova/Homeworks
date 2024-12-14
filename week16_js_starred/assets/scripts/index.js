const form = document.forms.formOne;
const { brand, modelRenault, modelOpel, modelMazda, modelJaguar, fuel, capacity, condition, used, payment } = form.elements;
const calcBtn = document.getElementById("calculateBtn");
const pricePar = document.getElementById("finalPricePar");

form.addEventListener("submit", (e) => {
    e.preventDefault();
})


brand.addEventListener("change", (e) => {
    const element = e.target;
    // if (element.value === "brandNo") {
    //     document.querySelector(".display_modelRenault").classList.remove("none");
    //     document.getElementById("display_modelOpel").classList.add("none");
    //     document.getElementById("display_modelMazda").classList.add("none");
    //     document.getElementById("display_modelJaguar").classList.add("none");
    // } else 
    if (element.value === "brandRenault") {
        document.querySelector(".display_modelNo").classList.add("none");
        document.getElementById("display_modelRenault").classList.remove("none");
        element = '';
    } else if (element.value === "brandOpel") {
        document.querySelector(".display_modelNo").classList.add("none");
        document.getElementById("display_modelOpel").classList.remove("none");
    } else if (element.value === "brandMazda") {
        document.querySelector(".display_modelNo").classList.add("none");
        document.getElementById("display_modelMazda").classList.remove("none");
    } else if (element.value === "brandJaguar") {
        document.querySelector(".display_modelNo").classList.add("none");
        document.getElementById("display_modelJaguar").classList.remove("none");
    }
}

)
 