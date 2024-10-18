const buttonDiscount = document.getElementById("applyDiscount");
const itemPrice1 = document.getElementById("itemPrice1");
const itemPrice2 = document.getElementById("itemPrice2");
const itemPrice3 = document.getElementById("itemPrice3");
const itemPrice4 = document.getElementById("itemPrice4");
const finalSum = document.getElementById("finalPart_sum");

const itemPrice1Number = parseInt(document.getElementById("itemPrice1").innerText);
const itemPrice2Number = parseInt(document.getElementById("itemPrice2").innerText);
const itemPrice3Number = parseInt(document.getElementById("itemPrice3").innerText);
const itemPrice4Number = parseInt(document.getElementById("itemPrice4").innerText);

function calcFullCost() {
    const fullCost = itemPrice1Number + itemPrice2Number + itemPrice3Number + itemPrice4Number;
    return fullCost;
}
const fullCostNoDiscount = calcFullCost();
finalSum.textContent = `${fullCostNoDiscount.toFixed(2)} руб.`;

buttonDiscount.addEventListener('click', calcDiscount);

function calcDiscount() {
        const fullCostDiscounted = fullCostNoDiscount * 0.8;
        finalSum.classList.add("discounted");
        const calcDiscountItem = (sum) => {
            const result = sum * 0.8;
            return result;
        }

        const itemPrice1Discounted = calcDiscountItem(itemPrice1Number);
        const itemPrice2Discounted = calcDiscountItem(itemPrice2Number);
        const itemPrice3Discounted = calcDiscountItem(itemPrice3Number);
        const itemPrice4Discounted = calcDiscountItem(itemPrice4Number);

        finalSum.textContent = `${fullCostDiscounted.toFixed(2)} руб.`;
        //finalSum.textContent.classList.add("discounted");
        itemPrice1.textContent = parseInt(itemPrice1Discounted).toFixed(2);
        itemPrice2.textContent = parseInt(itemPrice2Discounted).toFixed(2);
        itemPrice3.textContent = parseInt(itemPrice3Discounted).toFixed(2);
        itemPrice4.textContent = parseInt(itemPrice4Discounted).toFixed(2);
        
        
    }


   
    




