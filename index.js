var bMain  = document.getElementById('bMain')
var Main  = document.getElementById('Main')
var bA1  = document.getElementById('bA1')
var A1  = document.getElementById('A1')
var bA2  = document.getElementById('bA2')
var A2  = document.getElementById('A2')


setTimeout(bMain.onclick = function(){
  A1.style.transform = 'translateX(75%)'
},1000
);

bA1.onclick = function(){
  A2.style.transform = 'translateX(75%)'
}
;
bA2.onclick = function(){
  Main.style.transform = 'translateX(0)'
}
;