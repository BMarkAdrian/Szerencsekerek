var jatekos1;
var jatekos2;
var jatekos3;
var jatekos1pont = 0;
var jatekos2pont = 0;
var jatekos3pont = 0;
var megoldas;
var kerdes;
var kor = 0;

function veletlenszam(also, felso) {
    return Math.floor(Math.random() * (felso - also + 1) + also);
}
function Jatekosgen()
{
   jatekos1 = "Guest"+ veletlenszam(1,9) + veletlenszam(1,9) + veletlenszam(1,9) +veletlenszam(1,9) + veletlenszam(1,9);
   jatekos2 = "Guest"+ veletlenszam(1,9) + veletlenszam(1,9) + veletlenszam(1,9) +veletlenszam(1,9) + veletlenszam(1,9);
   jatekos3 = "Guest"+ veletlenszam(1,9) + veletlenszam(1,9) + veletlenszam(1,9) +veletlenszam(1,9) + veletlenszam(1,9);
   if(jatekos2 == jatekos1)
   {
    jatekos2="";
    jatekos2 = "Guest"+ veletlenszam(1,9) + veletlenszam(1,9) + veletlenszam(1,9) +veletlenszam(1,9) + veletlenszam(1,9);
   }
   else if(jatekos3 == jatekos1)
   {
    jatekos3="";
    jatekos3 = "Guest"+ veletlenszam(1,9) + veletlenszam(1,9) + veletlenszam(1,9) +veletlenszam(1,9) + veletlenszam(1,9);
   }
   else if(jatekos3 == jatekos2)
   {
    jatekos2="";
    jatekos2 = "Guest"+ veletlenszam(1,9) + veletlenszam(1,9) + veletlenszam(1,9) +veletlenszam(1,9) + veletlenszam(1,9);
   }

}

function KarakterGen()
{

    var j1 = document.getElementById("k1");
    var j2 = document.getElementById("k2");
    var j3 = document.getElementById("k3");
    j1.innerHTML+=jatekos1 + "-" + jatekos1pont+ "p";
    j2.innerHTML+=jatekos2 + "-" + jatekos2pont+ "p";
    j3.innerHTML+=jatekos3 + "-" + jatekos3pont + "p";
}

function GombokGen()
{
    
    var hely = document.getElementById("vezerlo");
    var gomb1 = document.createElement("input");
    var gomb2 = document.createElement("input");
    var gomb3 = document.createElement("input");
    gomb1.type="button";
    gomb2.type="button";
    gomb3.type="button";
    gomb1.value="Jóváhagyás"
    gomb1.onclick=Megvizsgal();
    gomb3.value="Pörgetés"
    gomb2.value="Reset"
    hely.appendChild(gomb1);
    hely.appendChild(gomb2);
    hely.appendChild(gomb3);
    gomb1.style.border="3px solid grey";
    gomb1.style.borderRadius="5px";
    

    gomb2.style.border="3px solid grey";
    gomb2.style.borderRadius="5px";

    gomb3.style.border="3px solid grey";
    gomb3.style.borderRadius="5px";
}
 function KerdesGen()
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
        megoldas = lehetosegek[veletlenszam(0,9)];
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
function Divgen()
{
  var hely = document.getElementById("negyzetek");
  var hossz = megoldas.length;
  console.log(hossz);

  // Konténer elem létrehozása
  var kontener = document.createElement("div");
  kontener.style.display = "flex"; // Flexbox engedélyezése
  kontener.style.flexWrap = "wrap"; // A div-ek sortörését engedélyezzük

  for (let i = 0; i < hossz; i++) {
    if(i == 17)
    {
        var br = document.createElement("br");
        kontener.appendChild(br);
    }
    var div = document.createElement("div");
    div.style.textAlign = "center";
    div.style.height = "60px";
    div.style.width = "5%";
    div.style.border = "3px solid black";
    div.id = i;
    div.className = "col";
    console.log(div.id);
    
    kontener.appendChild(div);
  }

  hely.appendChild(kontener);
}
function Megvizsgal()
{
    kor++;
    console.log(kor);
    Jatekosmutat();
    var Megkap = document.getElementById("input").value;
    let k = 0;
    while (k < megoldas.length && !(megoldas[k].toLowerCase() === Megkap.toLowerCase()))
    {
        k++;
    }
    if (k < megoldas.length)
    {
        
        for (let i = 0; i < megoldas.length; i++) {
            if (megoldas[i].toLowerCase() === Megkap.toLowerCase()) {
              console.log("Az adott betű megtalálható a mondatban.");
                var div = document.getElementById(i);
                div.innerHTML=Megkap;
            }
        }
    }
    else
    {
        
        Rossz();
    }
}

var rosszaktombje = new Array();
function Rossz()
{
    var Megkap = document.getElementById("input").value;
    var hely = document.getElementById("rosszak");
    
    if (!VaneTombben(rosszaktombje, Megkap))
    {
        rosszaktombje.push(Megkap);
    }
    for(let j = 0; j < rosszaktombje.length; j++)
    {
        hely.innerHTML = rosszaktombje.join(",");
        console.log(rosszaktombje);
    }
}

function VaneTombben(tomb, a)
{
    let i = 0;
    while (i < tomb.length && tomb[i] != a)
    {
        i++;
    }
    return i < tomb.length;
}


function Jatekosmutat() {

    if(kor % 3 == 0)
    {
        var div1 = document.getElementById("k1");
        div1.style.borderColor="green";
        var div2 = document.getElementById("k2");
        div2.style.borderColor="grey";
        var div3 = document.getElementById("k3");
        div3.style.borderColor="grey";
    }
    if(kor % 3 == 1)
    {
        var div2 = document.getElementById("k2");
        div2.style.borderColor="green";
        var div1 = document.getElementById("k1");
        div1.style.borderColor="grey";
        var div3 = document.getElementById("k3");
        div3.style.borderColor="grey";
    }
    if(kor % 3 == 2)
    {
        var div3 = document.getElementById("k3");
        div3.style.borderColor="green";
        var div2 = document.getElementById("k2");
        div2.style.borderColor="grey";
        var div1 = document.getElementById("k1");
        div1.style.borderColor="grey";
    }
    
}

function PlayAudio()
{
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

}

var options = ["$100", "$10", "$25", "$250", "$30", "$1000", "$1", "$200", "$45", "$500", "$5", "$20", "Lose", "$1000000", "Lose", "$350", "$5", "$99"];

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;

var ctx;

document.getElementById("spin").addEventListener("click", spin);

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function RGB2Color(r,g,b) {
	return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function getColor(item, maxitem) {
  var phase = 0;
  var center = 128;
  var width = 127;
  var frequency = Math.PI*2/maxitem;
  
  red   = Math.sin(frequency*item+2+phase) * width + center;
  green = Math.sin(frequency*item+0+phase) * width + center;
  blue  = Math.sin(frequency*item+4+phase) * width + center;
  
  return RGB2Color(red,green,blue);
}

function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    var outsideRadius = 130;
    var textRadius = 90;
    var insideRadius = 75;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    ctx.font = 'bold 12px Helvetica, Arial';

    for(var i = 0; i < options.length; i++) {
      var angle = startAngle + i * arc;
      //ctx.fillStyle = colors[i];
      ctx.fillStyle = getColor(i, options.length);

      ctx.beginPath();
      ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
      ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
      ctx.stroke();
      ctx.fill();

      ctx.save();
      ctx.shadowOffsetX = -1;
      ctx.shadowOffsetY = -1;
      ctx.shadowBlur    = 0;
      ctx.shadowColor   = "rgb(220,220,220)";
      ctx.fillStyle = "black";
      ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
                    250 + Math.sin(angle + arc / 2) * textRadius);
      ctx.rotate(angle + arc / 2 + Math.PI / 2);
      var text = options[i];
      ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
      ctx.restore();
    } 

    //Arrow
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
    ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
    ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
    ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
    ctx.fill();
  }
}

function spin() {
  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;
  rotateWheel();
}

function rotateWheel() {
  spinTime += 30;
  if(spinTime >= spinTimeTotal) {
    stopRotateWheel();
    return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  spinTimeout = setTimeout('rotateWheel()', 30);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 30px Helvetica, Arial';
  var text = options[index]
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();
}

function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}



function Main()
{
    Jatekosmutat();
    Jatekosgen();
    KarakterGen();
    KerdesGen();
    Divgen();
    drawRouletteWheel();
    
}
Main();
