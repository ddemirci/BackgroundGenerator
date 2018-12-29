var css = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body = document.getElementById("gradient");
var btnRandom = document.getElementById("btnRandom");

setGradient();
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient);
btnRandom.addEventListener("click", btnRandomClicked);

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent= "Chosen style is " + body.style.background ;
}

function btnRandomClicked(){
	//Random rgb for color1
	r1 = Math.floor(Math.random() * 255);
	g1 = Math.floor(Math.random() * 255);
	b1 = Math.floor(Math.random() * 255);

	//Random rgb for color2
	r2 = Math.floor(Math.random() * 255);
	g2 = Math.floor(Math.random() * 255);
	b2 = Math.floor(Math.random() * 255);
	
	document.querySelector(".color1").value = rgbToHex(r1,g1,b1);
	document.querySelector(".color2").value = rgbToHex(r2,g2,b2);
	setGradient();
}

function componentToHex(comp) {
    var hex = comp.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}