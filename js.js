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

