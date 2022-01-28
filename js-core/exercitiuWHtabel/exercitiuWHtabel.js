document.write('<table>')
document.write('<tr>')
for(let h = 1; h <= 42; h++){
    document.write('<td>')

    for(let w = 1; w <= 22; w++){
    
        if(h == 1|| h == 42 || w == 1 || w == 22){
            document.write('  #  ')

        }else{
            document.write('  0  ')
        }

    
    }
    document.write('</td>')
}
document.write('</tr>')
document.write('</table>')