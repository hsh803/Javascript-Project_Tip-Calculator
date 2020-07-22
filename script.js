function tipCal(){

let totalAmount = document.getElementById("total").value;
let personAmount = document.getElementById("person").value;
let tipPercent = document.getElementById("tip").value;
let tipAmount = (totalAmount * (tipPercent/100)) / personAmount;
let totalPay = (totalAmount/personAmount) + tipAmount;

if (totalAmount === "" || personAmount === "" || tipPercent === ""){
   alert("Please fill numbers")
 }

else {
    document.getElementById("total").value = "";
    document.getElementById("person").value = "";
    document.getElementById("tip").value = "";
    document.getElementById("cal").innerHTML = totalPay + " /person";    
 }

}
