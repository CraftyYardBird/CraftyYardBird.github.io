
function myFunction() {
    var x = document.getElementById("primaryNavigation");
    if (x.className === "hide") {
        x.className += "show";
    } else {
        x.className = "hide";
    }
}