function tipCal(){

let totalNum = document.getElementById("total").value;
let personNum = document.getElementById("person").value;
let tipNum = document.getElementById("tip").value;
let payNum = (totalNum * tipNum) / personNum;
let total = Math.round(payNum)
let orgNum = (totalNum/personNum) + total;

if ((totalNum === "" && personNum === "") || (isNaN(totalNum) === true && isNaN(personNum) === true)){
   document.getElementById("warning1").innerHTML = "Please fill number.";
   document.getElementById("warning2").innerHTML = "Please fill number.";
   document.getElementById("total").value = "";
   document.getElementById("person").value = "";
 } 
else if (totalNum === "" || isNaN(totalNum) === true){
   document.getElementById("warning1").innerHTML = "Please fill number.";
   document.getElementById("total").value = "";
 }

else if (personNum === "" || isNaN(personNum) === true){
   document.getElementById("warning2").innerHTML = "Please fill number.";
   document.getElementById("person").value = "";
 } 
  else {
    document.getElementById("total").value = "";
    document.getElementById("person").value = "";
    document.getElementById("warning1").innerHTML = "";
    document.getElementById("warning2").innerHTML = "";
    document.getElementById('result').innerHTML = alert("Each person pay " + orgNum + " (Tip:" + total + " each person)"); 
 }
  
}
