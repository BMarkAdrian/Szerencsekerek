var rndAngle
x="skyblue,green,yellow,orange,red,pink,purple,darkblue".split(",")
var count =1
window.onload=function(){
var wheel=document.getElementById("wheel")}
function spin(){
    rndAngle=((Math.floor(Math.random()*8)*(45))-22.5)+1440*count
    count++
    wheel.style.transform="rotate("+rndAngle+"deg)"
    if((x[Math.abs(((rndAngle+22.5)/22.5)%16)/2])==document.getElementsByTagName("select")[0].value){
        setTimeout(function(){alert("Wow you win ₹1,00,00,000")},1900)
    }
}
