const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const generateBtn = document.getElementById("calculate")
const totalInput = document.getElementById("total");


function generateBill(){
    const billAmount = parseFloat(billInput.value);
    const tipPercentage = parseFloat(tipInput.value);

    let totalBill = billAmount + ((tipPercentage / 100) * billAmount);
    console.log(totalBill.toFixed(2))

    totalInput.innerText = totalBill.toFixed(2);
}

generateBtn.addEventListener("click", generateBill);