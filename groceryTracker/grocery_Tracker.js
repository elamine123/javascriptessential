let amount1;
let amount2;
let amount3;

function calculateGroceryTotal(){
    amount1=parseFloat(document.getElementById("grocery1").value);
    amount2=parseFloat(document.getElementById("grocery2").value);
    amount3=parseFloat(document.getElementById("grocery3").value);

    let total=amount1+amount2+amount3;
    document.getElementById("result").innerText=`the total amount is :$ ${total}`;
}