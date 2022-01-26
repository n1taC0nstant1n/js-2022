// var number = 1;
// var i = 1;

// while(number <= 9){
//     while(i <= 9){
//         document.write(number + ' x ' +  i + ' = ' + number * i + "<br>")
//         i++;
        
//     }
//     number++;
// }

for( var number = 1; number <= 9; number++){
    document.write("<h2>Inmultirea cu " + number + "</h2>")
    for(var i = 1; i<= 9; i++){
        document.write(number + ' x ' +  i + ' = ' + number * i + "<br>")
        
    }
    document.write('<hr>');
}