
var register = document.getElementById('register');

function test(event) {
	console.log(event);
register.innerHTML = register.innerHTML + event.target.innerHTML;

}
	document.getElementById("btn1").addEventListener("click", test);
	document.getElementById("btn2").addEventListener("click", test);
	document.getElementById("btn3").addEventListener("click", test);
	document.getElementById("btn4").addEventListener("click", test);
	document.getElementById("btn5").addEventListener("click", test);
	document.getElementById("btn6").addEventListener("click", test);
	document.getElementById("btn7").addEventListener("click", test);
	document.getElementById("btn8").addEventListener("click", test);
	document.getElementById("btn9").addEventListener("click", test);
	document.getElementById("btn0").addEventListener("click", test);
	// document.getElementById("btn-").addEventListener("click", test);
	// document.getElementById("btn/").addEventListener("click", test);
	// document.getElementById("btnx").addEventListener("click", test);
	document.getElementById("btn.").addEventListener("click", test);


var getal1 = register.innerHTML;
var status = "0";


function plus() {
    status = "1";
 getal1 = register.innerHTML;

  op = "+";


 register.innerHTML = "";




    
console.log(getal1);
 }

function minus() {
	status = "2";
getal1 = register.innerHTML;

 op = "-";

	register.innerHTML = "";


	console.log(getal1);
}

function divide() {
	status = "3";
getal1 = register.innerHTML;

op = "/";

	register.innerHTML = "";

}
function multiply() {
	status = "4";
	getal1 = register.innerHTML;

 op ="/";

 register.innerHTML ="";

}




 function is(){

console.log(status + " status");

    answer  = "=";
getal2 = register.innerHTML;
if (status === "1"){
	result = +(Number(getal1) + Number(getal2)).toFixed(1);
}	
	else if (status === "3") {
		result = Number(getal1) / Number(getal2);
	}
	else if (status === "4") {

	result = Number(getal1) * Number(getal2);

}
	else if (status === "2") {
		result = +(Number(getal1) - Number(getal2)).toFixed(1);
	}

    document.getElementById("register").innerHTML = result;
   console.log(result);
}
 












































