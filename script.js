// Adding JS to implement Smooth scroll on thw eb page
// The anchor tagxs take us to the link abruptly
// We can make a scrolling effect using JS

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');  // getting all the 14 nav menu elements in an array
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) { // iterating over nav menu elements
    navMenuAnchorTags[i].addEventListener('click', function (event) { // on click for each of them will call this function
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase(); // the text of each list item is now a targetSection ID
       // console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID); // this ID is now used to make a target section
        //console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);

        interval = setInterval(function () {   // new var created to call sroll function after every 20 ms.
            scrollVertically(targetSection);
        }, 20);
    });
}


function scrollVertically(targetSection) { // on clicking a funtion is called which calls setinterval func which calls scroll function
    var targetSectionCoordinates = targetSection.getBoundingClientRect(); // gets the target section's top pixel
    if (targetSectionCoordinates.top <= 0) { // keep scrolling till top of the target section is reached
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50); // keep scrolling by 50 px every 20 ms
}


var progressBars = document.querySelectorAll(".skill-progress > div");
var skillsContainer = document.getElementById('skills-container');
var animationDone = false;



function initialiseBars() {
    for (var bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

initialiseBars();



function fillBars() {

    for (let bar of progressBars) {
        let currentWidth = 0;
        let interval = setInterval(function () {
            let targetWidth = bar.getAttribute('data-bar-width');
            if (currentWidth >= targetWidth) {
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 5);
    }
}



function checkScroll() {

    var coordinates = skillsContainer.getBoundingClientRect();
    if (!animationDone && coordinates.top <= window.innerHeight) {
        animationDone = true;
        fillBars();
    } else if (coordinates.top > window.innerHeight) {
        animationDone = false;
        initialiseBars();
    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);
