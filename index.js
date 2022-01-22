var random_no1 = Math.floor(Math.random()*6)+1;
var random_imgsrc1 = "images/"+"dice"+random_no1+".png";
document.querySelectorAll("img")[0].setAttribute("src", random_imgsrc1);

var random_no2 = Math.floor(Math.random()*6)+1;
var random_imgsrc2 = "images/"+"dice"+random_no2+".png";
document.querySelectorAll("img")[1].setAttribute("src", random_imgsrc2);

if(random_no1>random_no2)
{
    document.querySelector("h1").innerHTML = "PLAYER 1 Wins";
}
else if(random_no1==random_no2)
{
    document.querySelector("h1").innerHTML = "Draw!!!";
}
else
{
    document.querySelector("h1").innerHTML = "PLAYER 2 Wins";
}