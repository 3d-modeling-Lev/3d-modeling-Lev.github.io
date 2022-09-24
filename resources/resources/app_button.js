// closedPhoto = document.getElementsByClassName("closed_photo");
closedPhoto = document.querySelectorAll(".closed_photo");

button = document.getElementById("button_works");
buttontwo = document.getElementById("button_works_two");
gridone = document.getElementById("grid_one");


knopka = document.getElementById("knopka_works");
knopkatwo = document.getElementById("knopka_works_two");

let Appear = function() {
    closedPhoto.forEach(buba => {
        buba.style.display = "block";
    })
    button.style.display = "none";
    buttontwo.style.display = "block";

    gridone.style.gridTemplateColumns = "1fr 1fr";

}

let Disappear = function() {
    closedPhoto.forEach(biba => {
        biba.style.display = "none";
    })
    button.style.display = "block"
    buttontwo.style.display = "none";

    gridone.style.gridTemplateColumns = "1fr";
}

button.onclick = Appear;
buttontwo.onclick = Disappear;


knopka.onclick = function() {
    document.getElementById('closed_text').style.display = "block";
    document.getElementById('closed_dots').style.display = "none";
    // document.getElementById("one").style.display = "none";
    knopka.style.display = "none"
    knopkatwo.style.display = "block"

    document.querySelector(".container_photo").style.alignItems = "start"
}

knopkatwo.onclick = function() {
    knopka.style.display = "block"
    knopkatwo.style.display = "none"
    document.getElementById('closed_text').style.display = "none";
    document.getElementById('closed_dots').style.display = "block";
}