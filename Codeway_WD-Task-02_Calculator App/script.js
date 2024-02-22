const clicksound = new Audio('./Clicksound.mpeg');

function Solve(val) {
   var v = document.getElementById('res');
   v.value += val;
   clicksound.play();
}

function Result() {
   var num1 = document.getElementById('res').value;
   var num2 = eval(num1);
   document.getElementById('res').value = num2;
   clicksound.play();
}

function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
   clicksound.play();
}

function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0,-1);
   clicksound.play();
}