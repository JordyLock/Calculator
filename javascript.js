//Dit zorgt ervoor dat de variabele register een waarde heeft
var register = document.getElementById('register');
//Deze functie zorgt ervoor dat de register de waarde kan vinden in de HTML.
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
	document.getElementById("btn.").addEventListener("click", test);


var getal1 = register.innerHTML;
var status = "0";

//Dit zorgt ervoor dat je het plus knopje kan inklikken op de pagina en dat hij de cijfer ervoor onthoudt
function plus() {
    status = "1";
 getal1 = register.innerHTML;

  op = "+";


 register.innerHTML = "";




    
console.log(getal1);
 }
//Dit zorgt ervoor dat je het min knopje kan inklikken op de pagina en dat hij de cijfer ervoor onthoudt
function minus() {
	status = "2";
getal1 = register.innerHTML;

 op = "-";

	register.innerHTML = "";


	console.log(getal1);
}
//Dit zorgt ervoor dat je het deel knopje kan gebruiken en op de pagina het cijfer ervoor onthoudt.
function divide() {
	status = "3";
getal1 = register.innerHTML;

op = "/";

	register.innerHTML = "";
//Dit zorgt ervoor dat je het keer knopje kan gebruiken en getal1 onthoudt.
}
function multiply() {
	status = "4";
	getal1 = register.innerHTML;

 op ="/";

 register.innerHTML ="";

}



//Hiermee kan je de som uitrekenen door eerst te kijken welke status je hebt ingeklikt toen je op de operator klikte. 
//en daarna kijkt hij hoe je het uit moet rekenen en laat de uitkomst in de register zien.
 function is(){

console.log(status + " status");

    answer  = "=";
getal2 = register.innerHTML;
if (status === "1"){
	result = ((Number(getal1) *10) + (Number(getal2)*10))/10;
}	
	else if (status === "3") {
		result = ((Number(getal1) *10) / (Number(getal2)*10));
	}
	else if (status === "4") {

	result = ((Number(getal1)*10) * (Number(getal2)*10))/10;

}
	else if (status === "2") {
		result = ((Number(getal1)*10) - (Number(getal2)*10))/10;
	}

    document.getElementById("register").innerHTML = result;
   console.log(result);
}
 












































