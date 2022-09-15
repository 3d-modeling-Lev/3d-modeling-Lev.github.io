// closedPhoto = document.getElementsByClassName("closed_photo");
closedPhoto = document.querySelectorAll(".closed_photo");
button = document.getElementById("button_works");

let appear = function() {
    closedPhoto.forEach(buba => {
        buba.style.display = "block";
    })
}

button.onclick = appear;