var y="Albany|22.2*Caribou|9.5*Columbia|44.6*Denver|29.2*Indianapolis|26.5*Montgomery|46.6*San Diego|57.8*Tulsa|36.4*Tampa|61.3*Billings|24.0".split("|").join(",").split("*").join(",").split(",")
var a = new Array();
var b = new Array();
var c = new Array();
var cold = new Array();
var mod = new Array();
var hot = new Array();
var i=0;
while(i<=y.length,i+=2){
    a.push(c[i]);
    b.push(c[i+1]);
    }
function used(y){
    return ((x-32)*(5/9));
}
while(i<y.length-1,i++){
    c.push(temp(a[i]));
    c.push(b[i]);
}

while(i<=y.length,i+=2){
    if(c[i]<=20){
        cold.push(c[i+1]);
        cold.push(c[i]);
    }
    else if(c[i]<=30){
        mod.push(c[i+1]);
        mod.push(c[i]);
    }
    else (c[i]>30)
        hot.push(c[i+1]);
        hot.push(c[i]);
    }
    console.log("Cold");
    while(i< cold.length,i+=2){
        console.log(cold[i]);
    }
    console.log("Moderate");
    while(i< cold.length,i+=2){
        console.log(cold[i]);
    }
    console.log("Hot");
    while(i< cold.length,i+=2){
        console.log(cold[i]);
    }

