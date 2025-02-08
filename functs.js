function on() {
    document.getElementById("overlay").style.display = "block";
    
}

function off () {
    document.getElementById("overlay").style.display = "none";
}

// REDIRECT TO PAGE AFTER SEARCH CLICKED
document.getElementById("searchAgain").addEventListener("click", function() {
    window.location.href = "register-for-classes.html";
});