function tipCal(){

let totalAmount = document.getElementById("total").value;
let personAmount = document.getElementById("person").value;
let tipPercent = document.getElementById("tip").value;
let tipAmount = (totalAmount * tipPercent) / personAmount;
let totalPay = (totalAmount/personAmount) + tipAmount;

if (totalAmount === "" && personAmount === ""){
   document.getElementById("warning1").innerHTML = "Please fill numbers.";
   document.getElementById("warning2").innerHTML = "Please fill numbers.";
   document.getElementById("total").value = "";
   document.getElementById("person").value = "";
 }
else if (totalAmount === ""){
   document.getElementById("warning1").innerHTML = "Please fill number.";
   document.getElementById("warning2").innerHTML = "";
   document.getElementById("total").value = "";
 }

else if (personAmount === ""){
   document.getElementById("warning1").innerHTML = "";
   document.getElementById("warning2").innerHTML = "Please fill number.";
   document.getElementById("person").value = "";
 }
else {
    document.getElementById("total").value = "";
    document.getElementById("person").value = "";
    document.getElementById("warning1").innerHTML = "";
    document.getElementById("warning2").innerHTML = "";
    alert(totalPay + "/person"  + " (Tip: " + tipAmount + "/person)");
 }

}
