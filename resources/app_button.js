// closedPhoto = document.getElementsByClassName("closed_photo");
closedPhoto = document.querySelectorAll(".closed_photo");
button = document.getElementById("button_works");

knopka = document.getElementById("knopka_works");
knopkatwo = document.getElementById("knopka_works_two");

let appear = function() {
    closedPhoto.forEach(buba => {
        buba.style.display = "block";
    })
}

button.onclick = appear;
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