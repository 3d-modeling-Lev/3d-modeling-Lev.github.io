// let image = document.querySelectorAll("div.box")
// // let image = document.querySelectorAll("div.box")

// image.onclick = function() {
//     image.forEach(diva => {
//         diva.getElementsByClassName("h3_white").style.backgroundColor = "red";
//         // document.getElementById("rabota").style.backgroundColor = "red"
//     });
// }


let button = document.querySelectorAll(".box");

function bebe() {
    button.forEach(buba => {
        buba.getElementById('pic1').style.border = "10px solid red"
    })
}

button.addEventListener('mouseover', bebe)