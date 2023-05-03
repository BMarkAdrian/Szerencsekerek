
var megoldas;
var kerdes;

function Kerdesgen()
{
    var tomb = ["Egy közmondás","Híres mondat","Filmcím","Fogalom"];
    kerdes = tomb[veletlenszam(0,3)];
    console.log(kerdes)
    var kerd = document.getElementById("kerdes");
    kerd.innerHTML=kerdes;
    if(kerdes == "Egy közmondás")
    {
        let lehetosegek = ["Jobb adni, mint kapni.","Kétszer ad, aki gyorsan ad.","Ki mint veti ágyát, úgy alussza álmát.","Ha kidobják az ajtón, bemegy az ablakon.","Nem babra megy a játék."];
        megoldas = lehetosegek[veletlenszam(0,4)];
        console.log(megoldas);
        /*megoldas= xy */
    }
    else if(kerdes == "Egy közmondás")
    {
        let lehetosegek = [];
       /*megoldas= xy */
    }
    else if(kerdes == "Egy közmondás")
    {
        let lehetosegek = [];
        /*megoldas= xy */
    }
    else if(kerdes == "Egy közmondás")
    {
        let lehetosegek = [];
        /*megoldas= xy */
    }
}

function veletlenszam(also, felso) {
    return Math.floor(Math.random() * (felso - also + 1) + also);
}


function Megvizsgal()
{
    Kerdesgen();
    let mondat = "htjrjgd d gylhgr hkj.";
    var Megkap = document.getElementById("input").value;
    for (let i = 0; i < mondat.length; i++) {
        if (mondat[i].toLowerCase() === Megkap.toLowerCase()) {
          console.log("Az adott betű megtalálható a mondatban.");
          break;
        }
      }
}

function Main()
{
    Kerdesgen();
}
Main();