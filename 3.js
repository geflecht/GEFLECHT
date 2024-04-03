window.onload = function() {
    var element = document.getElementById("bar-txt");
    var height = element.offsetHeight; // Use offsetHeight instead of clientHeight

    // Save the height to a CSS variable
    document.documentElement.style.setProperty('--imagecaption-h', height + 'px');

    console.log("Height of the element: " + height + "px");
};



//stops from triggering menu scroll/swipe up/down
const propaStop = document.querySelectorAll('.stop-propagation');
propaStop.forEach(content => {
    content.addEventListener('wheel', function(event) {
        event.stopPropagation();
    });
});

// Prevents iOS/iPhone from zooming on imput
function addMaximumScaleToMetaViewport() {
    const el = document.querySelector('meta[name=viewport]');

    if (el !== null) {
        let content = el.getAttribute('content');
        let re = /maximum\-scale=[0-9\.]+/g;

        if (re.test(content)) {
            content = content.replace(re, 'maximum-scale=1.0');
        } else {
            content = [content, 'maximum-scale=1.0'].join(', ');
        }

        el.setAttribute('content', content);
    }
}
  
const disableIosTextFieldZoom = addMaximumScaleToMetaViewport;
  
// https://stackoverflow.com/questions/9038625/detect-if-device-is-ios/9039885#9039885
function checkIsIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
}
  
if (checkIsIOS()) {
    disableIosTextFieldZoom();
}


// wheel even
window.addEventListener('wheel', function(event) {
    var menu = document.getElementById('id-menu');
    var curtain = document.getElementById('id-curtain');
    var main = document.getElementById('id-main')

    
    console.log(event.deltaY);

    if (event.deltaY >= 0) {
        // scroll down
        menu.style.bottom = '0px';
        curtain.style.opacity = '1';
        /*main.style.height = 'calc(var(--main-h) - var(--footer-h))';*/
        document.querySelector(".m-space").classList.add("step");
    } else {
        //scroll up
        menu.style.bottom = 'calc(var(--footer-h) * -1)';
        curtain.style.opacity = '0';
        /*main.style.height = 'var(--main-h)';*/
        document.querySelector(".m-space").classList.remove("step");
        document.querySelector(".inner-div").classList.add("col");
        document.querySelector(".outer-div").classList.add("col");
        document.querySelector(".m-space").classList.remove("col");
    }
});


/*
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
this.classList.toggle("active");
var panel = this.nextElementSibling;
if (panel.style.maxHeight){
  panel.style.maxHeight = null;
} else {
  panel.style.maxHeight = panel.scrollHeight + "px";
}
});
}
*/

/*
const accordionBtns = document.querySelectorAll('.acc-btn');

accordionBtns.forEach(button => {
    button.addEventListener('click', function() {
        // Finde das nächste nachfolgende <div> Element
        const nextDiv = this.nextElementSibling;

        // Überprüfe, ob das nachfolgende Element ein <div> Element ist und ob es die Klasse .outer-div enthält
        if (nextDiv && nextDiv.classList.contains('outer-div')) {
            // Finde das .inner-div Element im nächsten <div>
            const innerDiv = nextDiv.querySelector('.inner-div');
            if (innerDiv) {
                // Toggle die Klasse col für die inner-div und outer-div Elemente
                innerDiv.classList.toggle('col');
                nextDiv.classList.toggle('col');
            }
        }
    });
});
*/

document.getElementById("acc-btn-1").addEventListener("click", function() {
    document.querySelector(".inner-div").classList.toggle("col");
    document.querySelector(".outer-div").classList.toggle("col");
    document.querySelector(".m-space").classList.toggle("col");
    /*
    var main = document.getElementById('id-main')
    main.style.height = 'calc(var(--main-h) - var(--footer-h) - var(--cptn-1))';
    */ 
});

document.getElementById("acc-btn-2").addEventListener("click", function() {
    document.querySelector(".footer").classList.toggle("plus");
});
