//Javascript for wayfinding
$('#button').click(function () {
    $(this).addClass('active');
});
// ID of "primaryNavigation" is being used in the nav ul
var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length - 1];
if (pageHREF !== "active") {
    var menu = document.querySelectorAll('ul#mainmenu li a');
    var i;
    //loop through all the menu items in the navigation
    for (i = 0; i < menu.length; i++) {
        var currentURL = (menu[i].getAttribute("href"));
        menu[i].parentNode.className = ""; //turn off hilighting by default
        if (currentURL === pageHREF) {
            menu[i].parentNode.className = "active"; //turn on if a match
        } //end if 
    } //end of the search for a match
} // end of if !==
/* Hamburger Menu */
/* Toggle between show and hide */
function myFunction() {
    var x = document.getElementById("navigation";
    if (x.className === "show") {
        x.className = "hide";
    } else {
        x.className = "show";
   }
}

$(function () {
    // All jQuery code goes here
    $('#inset > li').hover(function () {
            // Executes when mouse is over list item
            $(this).addClass('openSesame');
        },

        function () {
            // Executes when mouse leaves list item                     
            $(this).removeClass('openSesame');
        });
})

$(function () {
    // All jQuery code goes here
    $('.mySidenav > li').hover(function () {
            // Executes when mouse is over list item
            $(this).addClass('openSesame');
        },

        function () {
            // Executes when mouse leaves list item                     
            $(this).removeClass('openSesame');
        });
})
/* River guides */
$(document).ready(function () {
    $("#cl").click(function () {
        $("#c").toggle();
    });
})
$(document).ready(function () {
    $("#fl").click(function () {
        $("#f").toggle();
    });
})
$(document).ready(function () {
    $("#js").click(function () {
        $("#j").toggle();
    });
})

/* Current Date */
var d = new Date();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayName = days[d.getDay()];
var day = d.getDate();
var monthName = months[d.getMonth()];
var year = d.getFullYear();
document.getElementById("date").innerHTML = dayName + ", " + day + " " + monthName + " " + year;
