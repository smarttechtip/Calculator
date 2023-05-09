let display = document.getElementById('display');

function add(val){
    display.value  += val;
}
function deleteVal(){
    display.value ='';
}
function deleteChar(){
    display.value= display.value.slice(0,-1);
}
function calculate(){
    display.value= eval(display.value);
}