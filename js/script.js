a=[]


document.getElementById("add").addEventListener("click",add)
function add() {
    let fno=parseInt(document.getElementById("fno").value);
    let sno=parseInt(document.getElementById("sno").value);
if (fno&&sno) {
   document.getElementById("ans").innerHTML=` ${fno+sno}`
    
}
else{
    document.getElementById("ans").innerHTML=`enter valid number` 
    
}
}


document.getElementById("sub").addEventListener("click",sub)
function sub() {
    let fno=parseInt(document.getElementById("fno").value);
    let sno=parseInt(document.getElementById("sno").value);
if (fno&&sno) {
    document.getElementById("ans").innerHTML=` ${fno-sno}`
    
}
else{
    document.getElementById("ans").innerHTML=`enter valid number` 
    
}
}




document.getElementById("mul").addEventListener("click",mul)
function mul() {
    let fno=parseInt(document.getElementById("fno").value);
    let sno=parseInt(document.getElementById("sno").value);
if (fno&&sno) {
    document.getElementById("ans").innerHTML=` ${fno*sno}`
    
}
else{
    document.getElementById("ans").innerHTML=`enter valid number` 
    
}
}



document.getElementById("div").addEventListener("click",div)
function div() {
    let fno=parseInt(document.getElementById("fno").value);
    let sno=parseInt(document.getElementById("sno").value);
if (fno&&sno) {
    document.getElementById("ans").innerHTML=` ${fno/sno}`
    
}
else{
    document.getElementById("ans").innerHTML=`enter valid number` 
    
}
}