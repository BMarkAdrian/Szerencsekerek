
var megoldas;
var kerdes;
var kor = 0;
var jatekos1;
var jatekos2;
var jatekos3;
var jatekos1pont = 0;
var jatekos2pont = 0;
var jatekos3pont = 0;

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
        megoldas = lehetosegek[veletlenszam(0,9)];
        console.log(megoldas);
        /*megoldas= xy */
    }
    else if(kerdes == "Filmcím")
    {
        let lehetosegek = ["Bosszúállók Végjáték","Star Wars Egy új remény","Nagypapa hadművelet", "Gyagyás gyilkosság","Családi üzelmek","A remény rabjai","Forrest Gump","Életrevalók","Elrabolva","Kapj el, ha tudsz!"];
        megoldas = lehetosegek[veletlenszam(0,9)];
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
        megoldas = lehetosegek[veletlenszam(0,9)];
        console.log(megoldas);
        /*megoldas= xy */
    }
    else if(kerdes == "Híresség")
    {
        let lehetosegek = ["Kanye West","Iman Gadzhi","Gáspár László","Andrew Tate","Sneako","Alex Eubank","Pap Olivér","Jordan B Peterson","Joji","Azariah"];
        megoldas = lehetosegek[veletlenszam(0,9)];
        console.log(megoldas);
        /*megoldas= xy */
    }
    else if(kerdes == "Fiktív rajzfilm karakter")
    {
        let lehetosegek = ["Miki egér","Mini Egér","Peter Griffin","Gideon Gleeful","Timmy Turner","Spongyabob Kockanadrág","Homer Simpson","Sterling Archer","Eric Cartmen","Rick Sanchez"];
        megoldas = lehetosegek[veletlenszam(0,9)];
        console.log(megoldas);
        /*megoldas= xy */
    }
    else if(kerdes == "Országnév")
    {
        let lehetosegek = ["Magyarország","Franciaország","Olaszország","Kanada","Japán","Oroszország","Kína","Egyesült Arab Emírségek","Svédország"];
        megoldas = lehetosegek[veletlenszam(0,9)];
        console.log(megoldas);
        /*megoldas= xy */
    }
    else if(kerdes == "Városnév")
    {
        let lehetosegek = ["Budapest","Manchester","Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch","Ököritófülpös","Chernelházadamonya","Debrecen","Nyíregyháza","Cegléd","Kecskemét","Siófok"];
        megoldas = lehetosegek[veletlenszam(0,9)];
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
    kor++;
    for (let i = 0; i < megoldas.length; i++) {
        if (megoldas[i].toLowerCase() === Megkap.toLowerCase()) {
          console.log("Az adott betű megtalálható a mondatban.");
            var div = document.getElementById(i);
            div.innerHTML=Megkap;
            
            console.log(kor);
        }
        else if(megoldas[i].toLowerCase() != Megkap.toLowerCase())
        {
            Rossz();
            
            console.log(kor);
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
        div.style.height="60px";
        div.style.width="100%"
        div.style.border="3px solid black";
        div.id=i;
        div.className="col";
        console.log(div.id);
        hely.appendChild(div);
        }
}


function Jatekosmutat()
{
    if(kor % 3 == 3)
    {

    }
    else if(kor % 2 == 1)
    {

    }
    else if(kor % 3 == 0)
    {

    }
}
function Telitalalat()
{
    var megkap = document.getElementById("telitalalat");
    if(megkap == megoldas)
    {
        if(kor % 3 == 3)
        {
            alert(jatekos1+"telibetalált!");
            jatekos1pont +=1000;
            Pontok();
        }
        else if(kor % 3 == 1)
        {
            alert(jatekos2+"telibetalált!");
            jatekos3pont +=1000;
            Pontok();
            
        }
        else if(kor % 3 == 0)
        {
            alert(jatekos3+"telibetalált!");
            jatekos3pont +=1000;
            Pontok();
            
        }
    }
    else if(megkap != megoldas)
    {
        if(kor % 3 == 3)
        {
            alert(jatekos1+"elrontotta!");
            jatekos1pont -=1000;
            Pontok();
        }
        else if(kor % 3 == 1)
        {
            alert(jatekos2+"elrontotta!");
            jatekos3pont -=1000;
            Pontok();
            
        }
        else if(kor % 3 == 0)
        {
            alert(jatekos3+"elrontotta!");
            jatekos3pont -=1000;
            Pontok();
            
        }
    }
}


function Jatekosgen()
{
    jatekos1 = "Guest"+veletlenszam(100,999999);
    while(jatekos1 == jatekos2)
    {
        jatekos2="";
        jatekos2 = "Guest"+veletlenszam(100,999999);
    }
    while(jatekos3 == jatekos2 || jatekos3 == jatekos1)
    {
        jatekos3="";
        jatekos3 = "Guest"+veletlenszam(100,999999);
    }
    var nev1hely = document.getElementById("p1nev");
    nev1hely.innerHTML=jatekos1;
    var nev2hely = document.getElementById("p2nev");
    nev2hely.innerHTML=jatekos2;
    var nev3hely = document.getElementById("p3nev");
    nev3hely.innerHTML=jatekos3;
}


function Pontok()
{
    var pont1hely = document.getElementById("p1pont");
    pont1hely.innerHTML=jatekos1pont;
    var pont2hely = document.getElementById("p2pont");
    pont2hely.innerHTML=jatekos2pont;
    var pont3hely = document.getElementById("p3pont");
    pont3hely.innerHTML=jatekos3pont;
    
}
function Main()
{
    Pontok();
    Jatekosgen();
    Kerdesgen();
    Divgen();
    Jatekosmutat();
}
Main();
