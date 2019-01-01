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

var devanimate = document.querySelectorAll(".devanimate");

var designanimate = document.querySelectorAll(".designanimate");

//buttons

var allbtn = document.querySelector(".allbtn");

var devbtn = document.querySelector(".devbtn");

var designbtn = document.querySelector(".designbtn");

var pwetty = document.querySelectorAll(".pwetty");

var devfilter = document.querySelectorAll(".devfilter");

var designfilter = document.querySelectorAll(".designfilter");

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

function devdisplay() {
    devchart.classList.add("d-block");
    devchart.classList.remove("d-none");

    designchart.classList.add("d-none");
    designchart.classList.remove("d-block");



}

function designdisplay() {
    designchart.classList.add("d-block");
    designchart.classList.remove("d-none");

    devchart.classList.add("d-none");
    devchart.classList.remove("d-block");


}


for (let i = 0; i < devanimate.length; i++) {
    devanimate[i].classList.add("full");
    console.log(devanimate[i]);
}

for (let i = 0; i < designanimate.length; i++) {
    designanimate[i].classList.add("full");

}

pumpkin.addEventListener("click", change);

designclick.addEventListener("click", designdisplay);

devclick.addEventListener("click", devdisplay);



//buttons filtering

function allshow() {
    for (let i = 0; i < pwetty.length; i++) {
        pwetty[i].classList.remove("d-none");
    }

}

function devshow() {
    for (let i = 0; i < pwetty.length; i++) {
        designfilter[i].classList.add("d-none");
        devfilter[i].classList.remove("d-none");
    }
}

function designshow() {
    for (let i = 0; i < pwetty.length; i++) {
        devfilter[i].classList.add("d-none");
        designfilter[i].classList.remove("d-none");
    }
}

allbtn.addEventListener("click", allshow);
devbtn.addEventListener("click", devshow);
designbtn.addEventListener("click", designshow);











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


// var bar = new ProgressBar.Line(container, {
//     strokeWidth: 4,
//     easing: 'easeInOut',
//     duration: 1400,
//     color: '#FFEA82',
//     trailColor: '#eee',
//     trailWidth: 1,
//     svgStyle: {
//         width: '100%',
//         height: '100%'
//     },
//     text: {
//         style: {
//             // Text color.
//             // Default: same as stroke color (options.color)
//             color: '#999',
//             position: 'absolute',
//             right: '0',
//             top: '30px',
//             padding: 0,
//             margin: 0,
//             transform: null
//         },
//         autoStyleContainer: false
//     },
//     from: {
//         color: '#FFEA82'
//     },
//     to: {
//         color: '#ED6A5A'
//     },
//     step: (state, bar) => {
//         bar.setText(Math.round(bar.value() * 100) + ' %');
//     }
// });

// bar.animate(1.0);