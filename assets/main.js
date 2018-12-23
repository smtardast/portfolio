var pumpkin = document.querySelector(".pumpkin");
var pie = document.querySelector(".pie");
var cream = document.querySelector(".cream");
var toffee = document.querySelector(".toffee");
var chocolate = document.querySelector(".chocolate");
var icecream = document.querySelector(".icecream");
var pic1 = document.querySelector(".pic1");
var pic2 = document.querySelector(".pic2");


// skills

var devchart = document.querySelector(".devchart");

var designchart = document.querySelector(".designchart");

var devclick = document.querySelector(".devclick");

var designclick = document.querySelector(".designclick");


function change() {
    if (pie.classList.contains("d-block")) {

        pie.classList.toggle("d-block");
        pie.classList.toggle("d-none");

        cream.classList.toggle("d-block");
        cream.classList.toggle("d-none");

    } else if (cream.classList.contains("d-block")) {

        cream.classList.toggle("d-block");
        cream.classList.toggle("d-none");

        toffee.classList.toggle("d-block");
        toffee.classList.toggle("d-none");

    } else if (toffee.classList.contains("d-block")) {

        toffee.classList.toggle("d-block");
        toffee.classList.toggle("d-none");

        chocolate.classList.toggle("d-block");
        chocolate.classList.toggle("d-none");

    } else if (chocolate.classList.contains("d-block")) {

        chocolate.classList.toggle("d-block");
        chocolate.classList.toggle("d-none");

        icecream.classList.toggle("d-block");
        icecream.classList.toggle("d-none");
    } else if (icecream.classList.contains("d-block")) {
        icecream.classList.toggle("d-block");
        icecream.classList.toggle("d-none");

        pie.classList.toggle("d-block");
        pie.classList.toggle("d-none");

    }
};

function hearts() {
    if (pic1.classList.contains("d-block")) {
        pic1.classList.toggle("d-none");
        pic1.classList.toggle("d-block");

        pic2.classList.toggle("d-none");
        pic2.classList.toggle("d-block");
    } else {
        pic1.classList.toggle("d-none");
        pic1.classList.toggle("d-block");

        pic2.classList.toggle("d-none");
        pic2.classList.toggle("d-block");
    }
};

function changechart() {
    if (devchart.classList.contains("d-block")) {
        devchart.classList.toggle("d-block");
        devchart.classList.toggle("d-none");

        designchart.classList.toggle("d-block");
        designchart.classList.toggle("d-none");
    } else {
        designchart.classList.toggle("d-block");
        designchart.classList.toggle("d-none");

        devchart.classList.toggle("d-block");
        devchart.classList.toggle("d-none");
    }
}



pumpkin.addEventListener("click", change);

designclick.addEventListener("click", changechart);

devclick.addEventListener("click", changechart);


// var text = new Blotter.Text("Sara Tardast", {
//     family: "Arial",
//     size: 30,
//     fill: "#e4ef09",
// });

// var material = new Blotter.Material();

// var blotter = new Blotter(material, {
//     texts: text
// });

// var elem = document.getElementById("here");

// var scope = blotter.forText(text);

// scope.appendTo(elem);