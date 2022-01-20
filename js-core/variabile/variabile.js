var date = new Date()
var hour = date.getHours()
var minutes = date.getMinutes()
var message = "Hello! Este ora " + hour + ":" + minutes + "!"
//alert(message)
console.log(message)

// document reprezinta html-ul nostru
document.write("<h1>" + message + "</h1>");