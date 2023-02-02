const gorrilaz = {image: "assesment-03\images\gorrilaz.png",founded: "1998", members: "Murdoc Niccals, 2-D, Noodle, Russel Hobbs", bestAlbum: "DEMON DAYS", website:"www.gorillaz.com"}
const prettyLights = {image: "assesment-03\images\prettyLights.jpg",founded: "2004", members: "Derek Vincent Smith", bestAlbum: "A Color Map of the Sun", website:"www.prettylightsmusic.com"}
const gramatik = {image: "assesment-03\images\gramatik.jpg",founded: "2008", members: "Denis Jašarević", bestAlbum: "#digitalfreedom EP", website:"www.gramatik.net"}
const randomRab = {image: "assesment-03\images\randomRab.jpg",founded: "2001", members: "Rab Clinton", bestAlbum: "Visurreal", website:"www.randomrab.com"}
const desertDwellers = {image: "assesment-03\images\desertDwellers.jpg",founded: "2003", members: "Amani Friend and Treavor Moontribe", bestAlbum: "DownTemple Dub: Remixed", website:"www.desertdwellers.org/"}
var listData = [gorrilaz,prettyLights,gramatik,randomRab,desertDwellers]
function insertData(){
    for(header in listData){
        let html = `<h2>Music</h2><ul>`;
 
        for(i of listData){
            //html += `<img src="${i.image}>`;
            html += `<li>founded: ${i.founded}</li>`;
            html += `<li>members: ${i.members}</li>`;
            html += `<li>bestAlbum: ${i.bestAlbum}</li>`;
            html += `<li>website: ${i.website}</li></br>`;
            //html += `<li>members: ${i.members}</li>`;
            //alert("we have liftoff");   
            document.getElementById("ob1").innerHTML = html;

        }
    }
    document.getElementById("ob1").innerHTML = html;

}

/*let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;*/