// Adding JS to implement Smooth scroll on thw eb page
// The anchor tagxs take us to the link abruptly
// We can make a scrolling effect using JS


var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");

var interval

for(var i = 0; i < navMenuAnchorTags.length;i++)

{
    navMenuAnchorTags[i].addEventListener("click",function(event)
        {
            event.preventDefault();
            var targetSectionID = this.textContent.trim().toLowerCase();
            var targetSection = document.getElementById(targetSectionID);
            
            interval = setInterval(scrollFunction, 50, targetSection);
        }
    );
}    

scrollFunction(targetSection) 
{
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) 
     {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}