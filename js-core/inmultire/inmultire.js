var i = 2;
var j = 1;
var max = 10;

while(j <= max){
    // string cu concatenare
    message = j + ' x ' + i  + ' = ' + (j * i) + '<br>'
    // string cu interpolare
    message = `${j} x ${i} = ${j*i} <br> `
    document.write(message)
    j++
}