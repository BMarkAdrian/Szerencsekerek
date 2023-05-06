
var megoldas;
var kerdes;

function Kerdesgen()
{
    var tomb = ["Közmondás","Hobbi","Filmcím","Márka","Híresség","Fiktív rajzfilm karakter","Országnév","Városnév"];
    kerdes = tomb[veletlenszam(0,7)];
    console.log(kerdes)
    var kerd = document.getElementById("kerdes");
    kerd.innerHTML=kerdes;
    if(kerdes == "Közmondás")
    {
        let lehetosegek = ["Jobb adni, mint kapni.","Kétszer ad, aki gyorsan ad.","Ki mint veti ágyát, úgy alussza álmát.","Ha kidobják az ajtón, bemegy az ablakon.","Nem babra megy a játék.","Alkuszik mint zsidó a gyapjura.","Az irott virágot sokan dicsérik, de senki se szagolja.","Rózsaágyban is félhetni tövistől.","Sötétben minden tehén fekete.","Hasznos munkának nincsen fáradsága."];
        megoldas = lehetosegek[veletlenszam(0,10)];
        console.log(megoldas);
        /*megoldas= xy */
    }
    else if(kerdes == "Filmcím")
    {
        let lehetosegek = ["Bosszúállók Végjáték","Star Wars Egy új remény","Nagypapa hadművelet", "Gyagyás gyilkosság","Családi üzelmek","A remény rabjai","Forrest Gump","Életrevalók","Elrabolva","Kapj el, ha tudsz!"];
        megoldas = lehetosegek[veletlenszam(0,10)];
        console.log(megoldas);
       /*megoldas= xy */
    }
    else if(kerdes == "Hobbi")
    {
        let lehetosegek = ["Túrázás","Barkácsolás","Búvárkodás","Sakkozás","Horgolás","Rajzolás","Rejtvényfejtés","Programozás","Sportolás","Meditálás"];
        megoldas = lehetosegek[veletlenszam(0,10)];
        console.log(megoldas);
        /*megoldas= xy */
    }
    else if(kerdes == "Márka")
    {
        let lehetosegek = ["Gucci","Hermes","Amiri","Milka","Bugatti","Hugo Boss","Nike","Dior","Clive Christian","Loro Piana"];
        megoldas = lehetosegek[veletlenszam(0,10)];
        console.log(megoldas);
        /*megoldas= xy */
    }
    else if(kerdes == "Híresség")
    {
        let lehetosegek = ["Kanye West","Iman Gadzhi","Gáspár László","Andrew Tate","Sneako","Alex Eubank","Pap Olivér","Jordan B Peterson","Joji","Azariah"];
        megoldas = lehetosegek[veletlenszam(0,10)];
        console.log(megoldas);
        /*megoldas= xy */
    }
    else if(kerdes == "Fiktív rajzfilm karakter")
    {
        let lehetosegek = ["Miki egér","Mini Egér","Peter Griffin","Gideon Gleeful","Timmy Turner","Spongyabob Kockanadrág","Homer Simpson","Sterling Archer","Eric Cartmen","Rick Sanchez"];
        megoldas = lehetosegek[veletlenszam(0,10)];
        console.log(megoldas);
        /*megoldas= xy */
    }
    else if(kerdes == "Országnév")
    {
        let lehetosegek = ["Magyarország","Franciaország","Olaszország","Kanada","Japán","Oroszország","Kína","Egyesült Arab Emírségek","Svédország"];
        megoldas = lehetosegek[veletlenszam(0,10)];
        console.log(megoldas);
        /*megoldas= xy */
    }
    else if(kerdes == "Városnév")
    {
        let lehetosegek = ["Budapest","Manchester","Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch","Ököritófülpös","Chernelházadamonya","Debrecen","Nyíregyháza","Cegléd","Kecskemét","Siófok"];
        megoldas = lehetosegek[veletlenszam(0,10)];
        console.log(megoldas);
        /*megoldas= xy */
    }
}

function veletlenszam(also, felso) {
    return Math.floor(Math.random() * (felso - also + 1) + also);
}


function Megvizsgal()
{
    
    var Megkap = document.getElementById("input").value;
    
    for (let i = 0; i < megoldas.length; i++) {
        if (megoldas[i].toLowerCase() === Megkap.toLowerCase()) {
          console.log("Az adott betű megtalálható a mondatban.");
            var div = document.getElementById(i);
            div.innerHTML=Megkap;
        }
        else if(megoldas[i].toLowerCase() != Megkap.toLowerCase())
        {
            Rossz();
        }
      }
      
    
}
var rosszaktombje = [];
function Rossz()
{
    var Megkap = document.getElementById("input").value;
    var hely = document.getElementById("rosszak");
    
    rosszaktombje.push(Megkap);
    for(let j = 0; j < rosszaktombje.length; j++)
    {
        hely.innerHTML=rosszaktombje[j]+",";
        console.log(rosszaktombje);
    }
    
}

function Divgen()
{
    var hely = document.getElementById("allas");
    var hossz = megoldas.length;
    console.log(hossz);
    for (let i = 0; i < hossz; i++) {
        var div = document.createElement("div");
        div.style.textAlign="center";  
        div.style.height="50px";
        div.style.width="50px";
        div.style.border="2px solid black";
        div.id=i;
        div.className="col";
        console.log(div.id);
        hely.appendChild(div);
        }
}
function Main()
{
    Kerdesgen();
    Divgen();
}
Main();
