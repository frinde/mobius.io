function scrolltoright() {
    var scroll = document.getElementById("scrollable");
    scroll.scrollLeft += 300
}

function sortBoxGrid() {
    document.getElementById("grid").style.display = "flex";
    document.getElementById("table").style.display = "none";
}

function sortBoxtable() {
    document.getElementById("grid").style.display = "none";
    document.getElementById("table").style.display = "block";
}

function closead() {
    document.getElementById("bannersection").style.display = "none";
}
