
console.log("-.... -... / -.... ..... / --... ...-- / --... .- / -.... ----. / --... ....- / -.... ..... / --... ....- / --... ....- / -.... ..... / ...-- .- / ....- ..--- / -.... .---- / -.... -.-. / -.... -.-. / -.... ..-. / -.... . / ....- -.. / -.... .---- / --... ..--- / -.... -... / -.... ..... / --... ...-- / ....- ..--- / --... ..... / -.... .- / -.... ....- / -.... ..-. / --... ...-- / -.... ..-. / ....- ..--- / -.... .---- / -.... -.-. / -.... ----. / -.... . / --... ....- / -.... --... / --... ..--- / -.... .---- / --... ....- / --... ..... / -.... -.-. / -.... .---- / -.... -.-. / --... ..... / -.... . / -.... -... / -.... .---- / -.... -.. / -.... ..... / -.... --... / -.... ..-. / -.... -.-. / -.... ....- / -.... ..-. / -.... . / -.... .---- / -.... -... / ...-- -.-. / ...-- ...-- / ..--- .----");
/*Valtozok vege */
var jatekos1;
var jatekos2;
var jatekos3;
var jatekos1pont = 0;
var jatekos2pont = 0;
var jatekos3pont = 0;
var megoldas;
var kerdes;
var kor = 0;
var text;
var button = document.getElementById("button");
var gombsor = document.getElementById("input");
var button2 = document.getElementById("button2");
var gombsor2 = document.getElementById("telitalalat");
var porgete = document.getElementById("spin");
var Actuallkorszamol = 1;
var betusPont= 0;
var osszesbetu = new Array();
var gyoztesnev;
var rosszaktombje = new Array();
/*valtozok vege*/ 

/*gombok alapbeallitasai*/
button.disabled = true;
gombsor.disabled = true;
button2.disabled = true;
gombsor2.disabled = true;
porgete.disabled = false;
/*gombok alapbeallitasainak vege*/

/*Randomszam generalas*/
function veletlenszam(also, felso) {
    return Math.floor(Math.random() * (felso - also + 1) + also);
}
/*Randomszam generalas vege*/

/*Jatekosgeneralas(nev ami alapbol Guest+5db veletlen szam, ismetlodes kiszurve)*/
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
/*Jatekosgeneralas vege*/

/*Pontok hozzarendelese a jatekosokhoz(csak az alap ami 0)*/
function KarakterGen()
{

    var j1 = document.getElementById("j1");
    var j2 = document.getElementById("j2");
    var j3 = document.getElementById("j3");
    j1.innerHTML=jatekos1 + "-" + jatekos1pont+ "p";
    j2.innerHTML=jatekos2 + "-" + jatekos2pont+ "p";
    j3.innerHTML=jatekos3 + "-" + jatekos3pont + "p";
}
/*Pontok hozzarendelese a jatekosokhoz*/

/*Gombok kigeneralasa (azert generaljuk, mivel ezek utolagos valtoztatasok voltak
es akkor egyszerubbnek lattuk. A mukodest nem befolyasolja igy maradt.)*/
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

    gomb1.style.border="3px solid black";
    gomb1.style.borderRadius="5px";
    
    gomb2.style.border="3px solid black";
    gomb2.style.borderRadius="5px";

    gomb3.style.border="3px solid black";
    gomb3.style.borderRadius="5px";
}
/*Gombgeneralas vege*/

/*Kerdesek generalassanak kezdete. Itt tombokkel dolgozunk, mukodese pedig a tombbol valo random kivalasztason
alapul.Ez egy generalas folyaman ketszer tortenik egyszer temavalasztaskor es egyszer maga a kitalasra szant
szonal. Osszesegeben 8 temank es ezekhez tartozoan 79 szo vagy kozmondas, netan cim tartozik. */
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
        megoldas = lehetosegek[veletlenszam(0,8)];
        console.log(megoldas);
        /*megoldas= xy */
    }
    else if(kerdes == "Városnév")
    {
        let lehetosegek = ["Budapest","Manchester","New York","Ököritófülpös","Chernelházadamonya","Debrecen","Nyíregyháza","Cegléd","Kecskemét","Siófok"];
        megoldas = lehetosegek[veletlenszam(0,9)];
        console.log(megoldas);
        /*megoldas= xy */
    }
}
/*Kerdesgeneralas vege*/

/*Divek kigeneralas, melybe kesobb a betuk jelennek meg*/
function Divgen()
{
  var hely = document.getElementById("negyzetek");
  var hossz = megoldas.length;
  //console.log(hossz);

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
    //console.log(div.id);
    if (megoldas[i].toLowerCase() === " ")
    {
      div.innerHTML = " ";
      div.style.border="none";
    }
    
    kontener.appendChild(div);
  }

  hely.appendChild(kontener);
}
/*Divek generalasanak vege*/

/*Megvizsgalas kezdete*/
function Megvizsgal()
{
  var Megkap = document.getElementById("input").value;
  if (!VaneTombben(osszesbetu, Megkap.toLowerCase()))
  {
  button.disabled = true;
  gombsor.disabled = true;
  button2.disabled = true;
  gombsor2.disabled = true;
  porgete.disabled = false;
  osszesbetu.push(Megkap);
  let k = 0;
  
  while (k < megoldas.length && !(megoldas[k].toLowerCase() === Megkap.toLowerCase()))
  {
      k++;
  }
  if (k < megoldas.length)
  {
      for (let i = 0; i < megoldas.length; i++) {
          if (megoldas[i].toLowerCase() === Megkap.toLowerCase()) {
            //console.log("Az adott betű megtalálható a mondatban.");
              var div = document.getElementById(i);
              div.innerHTML=Megkap;
          }
      }
  
      if(kor % 3 == 0)
      {
        //console.log(betusPont);
        if(betusPont == 0.5)
        {
          jatekos1pont *= betusPont;
          j1.innerHTML=jatekos1 + "-" + jatekos1pont+ "p";
        }
        else if(betusPont == 0.25)
        {
          jatekos1pont *= betusPont;
          j1.innerHTML=jatekos1 + "-" + jatekos1pont+ "p";
        }
        else if(betusPont == 0)
        {
          jatekos1pont *= 0;
          j1.innerHTML=jatekos1 + "-" + jatekos1pont+ "p";
        } 
        else if(betusPont == "x2")
        {
          jatekos1pont *= 2;
          j1.innerHTML=jatekos1 + "-" + jatekos1pont+ "p";
        }
        else if(betusPont == 1.5)
        {
          jatekos1pont *= 1.5;
          j1.innerHTML=jatekos1 + "-" + jatekos1pont+ "p";
        }
        else if(betusPont == 0.5)
        {
          jatekos1pont *= 0.5;
          j1.innerHTML=jatekos1 + "-" + jatekos1pont+ "p";
        }
        else
        {
          jatekos1pont += betusPont;
          j1.innerHTML=jatekos1 + "-" + jatekos1pont+ "p";
        }  
      }
      else if(kor % 3 == 1)
      {
        //console.log(betusPont);
        if(betusPont == 0.5)
        {
          jatekos2pont *= betusPont;
          j2.innerHTML=jatekos2 + "-" + jatekos2pont+ "p";
        }
        else if(betusPont == 0.25)
        {
          jatekos2pont *= betusPont;
          j2.innerHTML=jatekos2 + "-" + jatekos2pont+ "p";
        }
        else if(betusPont == 0)
        {
          jatekos2pont *= 0;
          j2.innerHTML=jatekos2 + "-" + jatekos2pont+ "p";
        } 
        else if(betusPont == "x2")
        {
          jatekos2pont *= 2;
          j2.innerHTML=jatekos2 + "-" + jatekos2pont+ "p";
        }
        else if(betusPont == 1.5)
        {
          jatekos2pont *= 1.5;
          j2.innerHTML=jatekos2 + "-" + jatekos2pont+ "p";
        }
        else if(betusPont == 0.5)
        {
          jatekos2pont *= 0.5;
          j2.innerHTML=jatekos2 + "-" + jatekos2pont+ "p";
        }
        else
        {
          jatekos2pont += betusPont;
          j2.innerHTML=jatekos2 + "-" + jatekos2pont+ "p";
        }  
      }
      else if(kor % 3 == 2)
      {
        //console.log(betusPont);
        if(betusPont == 0.5)
        {
          jatekos3pont *= betusPont;
          j3.innerHTML=jatekos3 + "-" + jatekos3pont+ "p";
        }
        else if(betusPont == 0.25)
        {
          jatekos3pont *= betusPont;
          j3.innerHTML=jatekos3 + "-" + jatekos3pont+ "p";
        }
        else if(betusPont == 0)
        {
          jatekos3pont *= 0;
          j3.innerHTML=jatekos3 + "-" + jatekos3pont+ "p";
        } 
        else if(betusPont == "x2")
        {
          jatekos3pont *= 2;
          j3.innerHTML=jatekos3 + "-" + jatekos3pont+ "p";
        }
        else if(betusPont == 1.5)
        {
          jatekos3pont *= 1.5;
          j3.innerHTML=jatekos3 + "-" + jatekos3pont+ "p";
        }
        else if(betusPont == 0.5)
        {
          jatekos3pont *= 0.5;
          j3.innerHTML=jatekos3 + "-" + jatekos3pont+ "p";
        }
        else
        {
          jatekos3pont += betusPont;
          j3.innerHTML=jatekos3 + "-" + jatekos3pont+ "p";
        }  
      }
    }

    else
    {
        kor++;
        Rossz();
    }
    
    //console.log(kor);
    Jatekosmutat();

    gombsor.value = "";
    gombsor2.value = "";

    let j = 0;
    for (let i = 0; i < megoldas.length; i++)
    {
      if (document.getElementById(i).innerHTML === megoldas[i].toLowerCase())
      {
        j++;
      }
    }
    //console.log(j);
    if (j == megoldas.length)
    {
      osszesbetu = new Array();
      DivTorol();
      RosszBetukTorol();
      KerdesGen();
      Divgen();
      Actuallkorszamol++;
      AktKOr();
    }
  }
}

function Telitalalat()
{
    button.disabled = true;
    gombsor.disabled = true;
    button2.disabled = true;
    gombsor2.disabled = true;
    porgete.disabled = false;

    let k = 0;

    if (gombsor2.value.length == megoldas.length)
    {
      for (let i = 0; i < megoldas.length; i++)
      {
        if (megoldas[i].toLowerCase() === gombsor2.value[i].toLowerCase())
        {
          k++;
        }
      }
    }

    if (k == megoldas.length)
    {
      if(kor % 3 == 0)
      {
          jatekos1pont += 1000;
          j1.innerHTML=jatekos1 + "-" + jatekos1pont+ "p";
          DivTorol();
          KerdesGen();
          Divgen();
          Actuallkorszamol++;
          AktKOr();
          RosszBetukTorol();
          osszesbetu = new Array();
      }

      else if(kor % 3 == 1)
      {
          jatekos2pont += 1000;
          j2.innerHTML=jatekos2 + "-" + jatekos2pont+ "p";
          DivTorol();
          KerdesGen();
          Divgen();
          Actuallkorszamol++;
          AktKOr();
          RosszBetukTorol();
          osszesbetu = new Array();
      }

      else if(kor % 3 == 2)
      {
          jatekos3pont += 1000;
          j3.innerHTML=jatekos3 + "-" + jatekos3pont+ "p";
          DivTorol();
          KerdesGen();
          Divgen();
          Actuallkorszamol++;
          AktKOr();
          RosszBetukTorol();
          osszesbetu = new Array();
      }

    }
    else
    {
      kor++;
    }

    gombsor.value = "";
    gombsor2.value = "";

    //console.log(kor);

    Jatekosmutat();
}


function Rossz()
{
    var Megkap = document.getElementById("input").value;
    var hely = document.getElementById("rosszakh");
    
    if (!VaneTombben(rosszaktombje, Megkap))
    {
        rosszaktombje.push(Megkap);
    }
    for(let j = 0; j < rosszaktombje.length; j++)
    {
        hely.innerHTML = rosszaktombje.join(",");
        //console.log(rosszaktombje);
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
        div2.style.borderColor="black";
        var div3 = document.getElementById("k3");
        div3.style.borderColor="black";
    }
    if(kor % 3 == 1)
    {
        var div2 = document.getElementById("k2");
        div2.style.borderColor="green";
        var div1 = document.getElementById("k1");
        div1.style.borderColor="black";
        var div3 = document.getElementById("k3");
        div3.style.borderColor="black";
    }
    if(kor % 3 == 2)
    {
        var div3 = document.getElementById("k3");
        div3.style.borderColor="green";
        var div2 = document.getElementById("k2");
        div2.style.borderColor="black";
        var div1 = document.getElementById("k1");
        div1.style.borderColor="black";
    }
    
}


var options = ["5p", "10p", "25p", "250p", "5p", "1/2", "20p", "200p", "x1.5", "500p", "x2", "5p", "NULAA", "1/5", "NULAA", "350p", "30p", "20p"];
var options2 = [5, 10, 25, 250, 5, 0.5, 20, 200, 1.5, 500, "x2", 5, 0, 0.25, 0, 350, 30, 20];


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
  canvas.style.color="white";
  if (canvas.getContext) {
    var outsideRadius = 180;
    var textRadius = 145;
    var insideRadius = 120;

    ctx = canvas.getContext("2d");
    ctx.clearRect(0,0,500,500);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    ctx.font = 'bold 10px Helvetica, Arial';

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
      text = options[i];
      
      
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
  porgete.disabled = true;
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
  button.disabled = false;
  gombsor.disabled = false;
  button2.disabled = false;
  gombsor2.disabled = false;
  porgete.disabled = true;
  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 30px Helvetica, Arial';
  var text = options[index];
  betusPont = options2[index];
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();
}

function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}
function AktKOr()
{
  if(Actuallkorszamol >5)
  {
    togglePopup();
    Gyoztes();
  button.disabled = true;
  gombsor.disabled = true;
  button2.disabled = true;
  gombsor2.disabled = true;
  porgete.disabled = true;
  }
  if(Actuallkorszamol <6)
  {
    var korhely = document.getElementById("kor");
  korhely.innerHTML = Actuallkorszamol +"."+" "+"kör";
  }
  
  
}
function DivTorol() {
  for (let x = 0; x < megoldas.length; x++) {
    var divElem = document.getElementById(x);
    divElem.remove();
  }
}
function RosszBetukTorol()
{
  var rossz = document.getElementById("rosszakh");
  rossz.innerHTML="";
  rosszaktombje = new Array();
}
function togglePopup()
{
    document.getElementById("popup-1").classList.toggle("active");
}

function Reset()
{
  location.reload();

}
function Gyoztes()
{
  if(jatekos1pont > jatekos2pont && jatekos1pont > jatekos3pont)
  {
    gyoztesnev = jatekos1;
  }
  if(jatekos2pont > jatekos1pont && jatekos2pont > jatekos3pont)
  {
    gyoztesnev = jatekos2;
  }
  if(jatekos3pont > jatekos1pont && jatekos3pont > jatekos2pont)
  {
    gyoztesnev = jatekos3;
  }
  var nev = document.getElementById("gyoztes");
  nev.innerHTML += " " + gyoztesnev;
}


function Main()
{
    AktKOr();
    Jatekosmutat();
    Jatekosgen();
    KarakterGen();
    KerdesGen();
    Divgen();
    drawRouletteWheel();
    
}
Main();
