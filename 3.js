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

/*
// Detect Wheel Events
document.addEventListener('wheel', function(event) {
    // Detect the direction of the wheel scroll
    const direction = event.deltaY > 0 ? 'down' : 'up';
  
    // Display an alert message
    console.log(`Mouse wheel scrolled ${direction}`);

    var footer = document.getElementById('footer');

    if (event.deltaY >= 0) {
        footer.classList.add('hidden')
    } else {
        footer.classList.remove('hidden')
    }
});
*/

window.addEventListener('wheel', function(event) {
    var menu = document.getElementById('id-menu');
    var shade = document.getElementById('id-shade');

    if (event.deltaY >= 0) {
    menu.style.bottom = '0px';
    shade.style.opacity = '1';
    } else {
    menu.style.bottom = '-125px';
    shade.style.opacity = '0';
    }
});
