var date = new Date();
var year = date.getFullYear()
document.write("Salut suntem in anul " + year + '!')

var age = 13;
var generationAlpha = age < 6;
var generarationZ = age < 20;
var generarationY = age < 35;
var generarationX = age < 50;
var generarationBb = age < 69;
var generarationB = age > 70;

if(generationAlpha){
    document.write("<h2>Salut! Faci parte din generatia Alpha!</h2>")
}else if(generarationZ){
    document.write("<h2>Salut! Faci parte din generatia Z!</h2>")
}else if(generarationY){
    document.write("<h2>Salut! Faci parte din generatia Y!</h2>")
}else if(generarationX){
    document.write("<h2>Salut! Faci parte din generatia X!</h2>")
}else if(generarationBb){
    document.write("<h2>Salut! Faci parte din generatia Baby Boomers!</h2>")
}else if(generarationB){
    document.write("<h2>Salut! Faci parte din generatia Builders!</h2>")
}




