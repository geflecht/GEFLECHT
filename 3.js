document.addEventListener('DOMContentLoaded', function () {
    // Initialize Flickity
    var flkty = new Flickity( '.main-carousel', {
        "setGallerySize": false, "autoPlay": 6000, "pageDots": false
    });

    // Function to update text based on the selected slide
    function updateText(index) {
        switch (index) {
            case 0:
                document.getElementById('title-medium').innerHTML = "MONARCH, 2024<br>acrylic on canvas"
                document.getElementById('dimensions').innerHTML = "230 × 190 cm | 90.6 × 74.8 in"
                break;
            case 1:
                document.getElementById('title-medium').innerHTML = "EINHEIT, 2023<br>acrylic on canvas"
                document.getElementById('dimensions').innerHTML = "230 × 190 cm | 90.6 × 74.8 in"
                break;
            case 2:
                document.getElementById('title-medium').innerHTML = "WEHMUT, 2025<br>acrylic on canvas"
                document.getElementById('dimensions').innerHTML = "330 × 190 cm | 60.6 × 30.9 in"
                break;
            // Add more cases for additional slides as needed
        }
    }

    // Initial call to update text based on the selected slide
    updateText(flkty.selectedIndex);

    // Listen for the select event and update text accordingly
    flkty.on('select', function () {
        updateText(flkty.selectedIndex);
    });
});



window.onload = function() {
    var element = document.getElementById("bar-txt");
    var height = element.offsetHeight; // Use offsetHeight instead of clientHeight

    // Save the height to a CSS variable
    document.documentElement.style.setProperty('--imagecaption-h', height + 'px');

    console.log("Height of the element: " + height + "px");
};



//Prevents from triggering menu scroll/swipe up/down in every <div> with the class stop-propagation
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

//wheel event listener
//------------------------------------------------------------------------------------------

window.addEventListener('wheel', function(event) {
    var curtain = document.getElementById('id-curtain');

    if (event.deltaY >= 0) {
        //scroll down 
        curtain.style.opacity = '1';
        
        addSpaceForMenu();
        showMenu();
        closeA();
        closeB();
        closeImpPP();
    } else {
        //scroll up
        curtain.style.opacity = '0';
        
        removeSpaceForMenu();
        hideMenu()
        closeA();
        closeB();
        closeImpPP();
    }

    //console.log(event.deltaY);
});

//show/hide menu
//------------------------------------------------------------------------------------------

function showMenu() {
    document.querySelector(".footer").classList.add("open");
}

function hideMenu() {
    document.querySelector(".footer").classList.remove("open");
}

//add/remove space for menu/expanded-menu 
//------------------------------------------------------------------------------------------

function addSpaceForMenu() {
    document.querySelector(".m-space").classList.add("scrolled");
}

function removeSpaceForMenu() {
    document.querySelector(".m-space").classList.remove("scrolled");
}

function addExpandedMenuSpace() {
    document.querySelector(".m-space").classList.add("closed");
}

function removeExpandedMenuSpace() {
    document.querySelector(".m-space").classList.remove("closed");
}

//open/close menu sections
//------------------------------------------------------------------------------------------

function openA() {
    document.querySelector(".inner-div").classList.toggle("closed");
    document.querySelector(".outer-div").classList.toggle("closed");
}

function closeA() {
    document.querySelector(".inner-div").classList.add("closed");
    document.querySelector(".outer-div").classList.add("closed");
}

function openB() {
    document.querySelector(".inner-div-2").classList.toggle("closed");
    document.querySelector(".outer-div-2").classList.toggle("closed");
}

function closeB() {
    document.querySelector(".inner-div-2").classList.add("closed");
    document.querySelector(".outer-div-2").classList.add("closed");
}

//menu button event listener
//------------------------------------------------------------------------------------------

document.getElementById("btn-1").addEventListener("click", function() {
    openA();
    closeB();
    checkMenuState();
});

document.getElementById("btn-2").addEventListener("click", function() {
   openB();
   closeA();
   checkMenuState();
});

document.getElementById("btn-imp").addEventListener("click", function() {
    impClicked();
});

document.getElementById("btn-pp").addEventListener("click", function() {
    ppClicked();
});

//menu functions
//------------------------------------------------------------------------------------------

function ppClicked() {
    const check1 = document.querySelector(".imp-pp-outer-div");
    const check2 = document.querySelector(".imprint");
    const check3 = document.querySelector(".privacy-policy")

    if (check1.classList.contains('closed')) {
        
        check2.classList.remove("displayed");
        check3.classList.add("displayed");
        toggleImpPP();
    } else if (check2.classList.contains('displayed')) {
        check2.classList.remove("displayed");
        check3.classList.add("displayed");
    } else {
        toggleImpPP();
    }
}

function impClicked() {
    const check1 = document.querySelector(".imp-pp-outer-div");
    const check2 = document.querySelector(".imprint");
    const check3 = document.querySelector(".privacy-policy")

    if (check1.classList.contains('closed')) {
        
        check3.classList.remove("displayed");
        check2.classList.add("displayed");
        toggleImpPP();
    } else if (check3.classList.contains('displayed')) {
        check3.classList.remove("displayed");
        check2.classList.add("displayed");
    } else {
        toggleImpPP();
    }
}

function toggleImpPP() {
    document.querySelector(".imp-pp-inner-div").classList.toggle("closed");
    document.querySelector(".imp-pp-outer-div").classList.toggle("closed");
    checkMenuState();
}

function closeImpPP() {
    document.querySelector(".imp-pp-inner-div").classList.add("closed");
    document.querySelector(".imp-pp-outer-div").classList.add("closed");
    checkMenuState();
}

function checkMenuState() {
    const element1 = document.querySelector(".outer-div");
    const element2 = document.querySelector(".outer-div-2");
    const element3 = document.querySelector(".imp-pp-outer-div");

    if (element1.classList.contains('closed') && element2.classList.contains('closed') && element3.classList.contains('closed')) {
        removeExpandedMenuSpace();
    } else {
        addExpandedMenuSpace();
    }
}



/*
function checkMenuState2() {
    const element1 = document.querySelector(".outer-div");
    const element2 = document.querySelector(".outer-div-2");
    const element3 = document.querySelector(".imp-pp-outer-div");

    if (element1.classList.contains('closed') && element2.classList.contains('closed') && element3.classList.contains('closed')) {
        removeExpandedMenuSpace();
    } else {
        addExpandedMenuSpace();
    }
}

*/

// SAFE
/*
window.addEventListener('wheel', function(event) {
    var menu = document.getElementById('id-menu');
    var curtain = document.getElementById('id-curtain');
    var main = document.getElementById('id-main')

    
    console.log(event.deltaY);

    if (event.deltaY >= 0) {
    menu.style.bottom = '0px';
    curtain.style.opacity = '1';
    main.style.height = 'calc(var(--main-h) - var(--footer-h))';
    } else {
    menu.style.bottom = 'calc((var(--footer-h)) * -1)'; //'calc((var(--footer-h) - 1px) * -1)'
    curtain.style.opacity = '0';
    main.style.height = 'var(--main-h)';
    }
});

*/
/*
document.addEventListener('DOMContentLoaded', function () {
    // Function to update text based on the selected slide
    function updateText() {
      const carouselCells = document.querySelectorAll('.carousel-cell');

      // Loop through each carousel-cell
      carouselCells.forEach((cell, index) => {
        // Check if the cell has the is-selected class
        if (cell.classList.contains('is-selected')) {
          // Update text based on the index of the selected cell
          switch (index) {
            case 0:
              slideText.textContent = "Text for Slide 1";
              break;
            case 1:
              slideText.textContent = "Text for Slide 2";
              break;
            case 2:
              slideText.textContent = "Text for Slide 3";
              break;
            // Add more cases for additional slides as needed
          }
        }
      });
    }

    // Call updateText initially to set the initial text
    updateText();

    // Listen for changes in the class of the carousel-cells
    document.querySelector('.main-carousel').addEventListener('change', updateText);
});



document.addEventListener("DOMContentLoaded", function() {
    // Get the carousel element
    var carousel = document.getElementById('id-main');
    // Get the caption element
    var caption = document.getElementById('bar-txt').querySelector('a');

    // Function to update text based on the selected slide
    function updateText() {
        const carouselCells = carousel.querySelectorAll('.carousel-cell');

        // Loop through each carousel-cell
        carouselCells.forEach((cell, index) => {
            // Check if the cell has the is-selected class
            if (cell.classList.contains('is-selected')) {
                // Update text based on the index of the selected cell
                switch (index) {
                    case 0:
                        caption.textContent = "Text for Slide 1";
                        break;
                    case 1:
                        caption.textContent = "Text for Slide 2";
                        break;
                    case 2:
                        caption.textContent = "Text for Slide 3";
                        break;
                    // Add more cases for additional slides as needed
                }
            }
        });
    }

    // Call the function initially to set the text for the default selected slide
    updateText();

    // Add an event listener to the carousel to update the text when the selected slide changes
    carousel.addEventListener('change.flickity', updateText);
});



//swipe detection
//------------------------------------------------------------------------------------------

let startY;

document.getElementById('swipeArea').addEventListener('touchstart', function(event) {
  // Get the initial touch position
  startY = event.touches[0].clientY;
}, { passive: true });

document.getElementById('swipeArea').addEventListener('touchmove', function(event) {
  // Calculate the distance moved
  let deltaY = event.touches[0].clientY - startY;

  // Threshold for swipe detection
  let swipeThreshold = 90;

  var curtain = document.getElementById('id-curtain');

  // Check if swipe is up or down
  if (deltaY > swipeThreshold) {
    console.log('Swiped down');
    // Your code for swipe down action
    curtain.style.opacity = '0';
        
    removeSpaceForMenu();
    hideMenu()
    closeA();
    closeB();
    closeImpPP();

  } else if (deltaY < -swipeThreshold) {
    console.log('Swiped up');
    // Your code for swipe up action
    curtain.style.opacity = '1';
        
    addSpaceForMenu();
    showMenu();
    closeA();
    closeB();
    closeImpPP();
  }
}, { passive: true });

*/

