// 2 pi r
function radius(){
    r1=Number(document.getElementById("i1").value);
    r2=Number(document.getElementById("i2").value);
    op = document.getElementById("selectop").value;
    if(op == 'Rectangle'){
        document.getElementById('area').innerHTML = r1*r2;
        document.getElementById('perimeter').innerHTML =2*(r1+r2);
    }
    else{
        document.getElementById('area').innerHTML = 3.14*r1*r1;
        document.getElementById('perimeter').innerHTML =2*(3.14*r1);
    }
    return false;
}

far = () =>{
    val = document.getElementById("input").value;
    document.getElementById('Output').innerHTML = (val * 9/5) + 32;
    return false;
}
cel = () =>{
    val = document.getElementById("input").value;
    document.getElementById('Output').innerHTML = 5/9 *(val-32);
    return false;
}

// Simple Intrest Calculator
Si = () =>{
    principal = document.getElementById("p").value;
    interest = document.getElementById("i").value;
    investment = document.getElementById("inv").value;
    ii = document.getElementById('int').innerHTML = principal*interest/100*investment;
    document.getElementById('amt').innerHTML = principal+ii;
    return false;
}


// Grade Calculator
m = () =>{
    mark = Number(document.getElementById("marks").value);
if(mark == 0 || mark < 30){
    document.getElementById('grade').innerHTML = "very Low";
}
else if(mark == 30 || mark < 60){
    document.getElementById('grade').innerHTML = "Average";
}
else if(mark == 60 || mark < 90){
    document.getElementById('grade').innerHTML = "Good Marks";
}
else{
    document.getElementById('grade').innerHTML = "Excellent";
}
    return false;
}



// Distance Calculator  
dist = () =>{
    xone = Number(document.getElementById("x1").value);
    yone = Number(document.getElementById("y1").value);
    xtwo = Number(document.getElementById("x2").value);
    ytwo = Number(document.getElementById("y2").value);
    document.getElementById('distance').innerHTML = Math.sqrt( Math.sqrt(xtwo-xone) + Math.sqrt(ytwo-yone) );
    return false;
}


// Time Conversion
conversion = () =>{
    sone = document.getElementById("selectone").value;
    stwo = document.getElementById("selecttwo").value;
    convalue = Number(document.getElementById("convert").value);
    if(sone == 'Hours' && stwo == 'Minute'){
        document.getElementById('conresult').innerHTML = convalue * 60;
    }
    else if(sone == 'Minute' && stwo == 'Hours'){
        document.getElementById('conresult').innerHTML = convalue / 60;
    }
    else{
        document.getElementById('conresult').innerHTML = "SELECT VALID CONVERSION";
    }
    return false;
}

// Factoral calculator
factorial =()=>{
    fv = Number(document.getElementById("factvalue").value);
    let fact=1;
    for(i=1;i<=fv;i++){
        fact = fact*i;
    }
    document.getElementById('factresult').innerHTML = fact;
    return false;
}