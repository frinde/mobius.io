function scrolltoright() {
    var scrolling = document.getElementById("scrollable");
    var arrow = document.getElementById("arrowScroll");
    
    if (scrolling.scrollLeft === 0 ) {
        scrolling.scrollLeft += 400;
        arrow.style.transform = "rotate(180deg)"
    }   else {
        scrolling.scrollLeft = 0;
        arrow.style.transform = "rotate(0deg)"
    }
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

function tooltipCoffe() {
    var tooltip = document.getElementById("donatetooltip");
    setTimeout(function() {
        tooltip.style.display = "block";
    }, 200);
}

function tooltipleave() {
    document.getElementById("donatetooltip").style.display = "none";
}

        // Cek apakah cookie 'firstVisit' sudah ada
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        // Tampilkan pesan selamat datang jika ini adalah kunjungan pertama kali
        if (!getCookie('firstVisit')) {
            // Tampilkan div pesan selamat datang
            const welcomeMessage = document.getElementById('welcome-message');
            welcomeMessage.style.display = 'flex';

            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + 1);
            document.cookie = 'firstVisit=true; expires=' + expirationDate.toUTCString();
        }

function deletemessage() {
    document.getElementById("welcome-message").style.display = "none"
}

function bab1() {
        // Get a reference to the target div
        var targetDiv = document.getElementById('bab1');

        // Scroll to the target div smoothly
        targetDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function bab2() {
    // Get a reference to the target div
    var targetDiv = document.getElementById('bab2');

    // Scroll to the target div smoothly
    targetDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function displayScrollto() {
    var fileContent = document.getElementById('fileContent');
    if (fileContent.style.display === "none") {
        fileContent.style.display = "block";
    } else {
        fileContent.style.display = "none"
    }

}
