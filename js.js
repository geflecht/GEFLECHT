var gaesteliste = [
    "KAMILJAN ADILOV", 
    "VIKTOR BENDER", 
    "IRINA BENDER", 
    "MAXIMILIAN BENDER",
    "LUCAS BENDER",
    "MANUEL CASUPANAN",
    "DANIEL CHOURANI",
    "RAYAN DAOU",
    "JASMIN DREISTEIN",
    "GRISCHA DYCK",
    "TATJANA DYCK",
    "JULY DYCK",
    "AMY DYCK",
    "LUIS DYCK",
    "JANA VLASKIN",
    "NATALIA GOSSEN",
    "JASON GOSSEN",
    "SALI HODAIB",
    "ALEKSEJ KARASSEV",
    "JENNY KARASSEV",
    "EDUARD KETTSCHICK",
    "OLGA KETTSCHICK",
    "ERIK KETTSCHICK",
    "RUDI KETTSCHICK",
    "IRINA KLOOZ",
    "ALISA KLOOZ",
    "VALERIA KLOOZ",
    "WILHELM KLOOZ",
    "ALEXANDER KRÜGER",
    "KATJA LEER",
    "MARKUS LEER",
    "NIKOL PROKOPOVA",
    "MICHELLE SHILJAKOW",
    "DANIEL SOMO",
    "ORMINA SOMO",
    "KATARINA VLASJUK",
    "ALINA VLASJUK",
    "LENNART SCHRÖDER"
];

// Manus callback function
document.getElementById("name").addEventListener("input", function() {
    checkName()
});

function checkName() {
    var name = document.getElementById("name").value;
    
    if (name.length <= 3 && name != "AMY") {
        var output = "IHRE EINGABE IST ZU KURZ";
    }
    
    else if (name === "AMY" || name.length >= 4) {
        var output = "FOLGENDE PERSONEN MIT DEM NAMEN " + name + " STEHEN AUF DER GAESTELISTE:<br>";
        for (var i = 0; i < gaesteliste.length; i++) {
      
            if (gaesteliste[i].includes(name)) {
            output += "<br>" + gaesteliste[i] ;
            } 
        }
    }
    document.getElementById("output").innerHTML = output;
}

// Prevents iOS/iPhone from zooming on imput
const addMaximumScaleToMetaViewport = () => {
    const el = document.querySelector('meta[name=viewport]');
  
    if (el !== null) {
      let content = el.getAttribute('content');
      let re = /maximum\-scale=[0-9\.]+/g;
  
      if (re.test(content)) {
          content = content.replace(re, 'maximum-scale=1.0');
      } else {
          content = [content, 'maximum-scale=1.0'].join(', ')
      }
  
      el.setAttribute('content', content);
    }
  };
  
  const disableIosTextFieldZoom = addMaximumScaleToMetaViewport;
  
  // https://stackoverflow.com/questions/9038625/detect-if-device-is-ios/9039885#9039885
  const checkIsIOS = () =>
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
  if (checkIsIOS()) {
    disableIosTextFieldZoom();
  }
