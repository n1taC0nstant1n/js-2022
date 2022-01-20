var date = new Date();
var hour = date.getHours();

if(hour <= 10){
    document.write('Buna Dimineata!<br>');
}else if(hour >= 11 && hour <= 17){
    document.write('Buna ziua!<br>')
}else if(hour >= 18 && hour <= 20){
    document.write('Buna Seara!<br>');
}else if(hour > 21){
    document.write("Noapte buna!<br>");
}

// daca e dimineata atunci scriu 'Buna dimineata!'
// daca este pranz scriu 'Pofta buna!'
// daca este dupa amiaza scriu 'Buna ziua!'
// daca este seara scriu 'Buna seara!'
// daca este noapte scriu 'Noapte buna!'

var startOfNight = 22
var endOfNight = 4
var isNight = hour > startOfNight && hour < endOfNight
if(hour < 4){
    document.write('Noapte buna!');
}else if(hour < 12){
    document.write('Buna Dimineata!')
}else if(hour  == 12){
    document.write('Pofta buna!');
}else if( hour < 17){
    document.write('Buna ziua');
}else if(hour < startOfNight){
    document.write('Buna seara!')
}else{
    document.write('Noapte buna!')
}