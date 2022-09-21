let btnQuote = document.getElementById("btnQuote");
btnQuote.addEventListener("click", function(e){
e.preventDefault();
let hours = parseInt(document.getElementById("inputHours").value ); 
let rate = parseFloat(document.getElementById("inputRate").value );
let iva = document.getElementById("checkIVA").checked;
let extras = document.getElementById("inputExtras");
let changes = parseFloat(document.getElementById("inputChange").value );
let fixedcost = parseFloat(document.getElementById("inputCost").value );
//console.log(extras.selectedIndex);
//console.log(extras.options[extras.selectedIndex].value);
//console.log(iva);
//console.log(typeof(iva));

let cardtext = document.getElementById("cardText");
if(isNaN(hours)){
    console.log("Horas no es un número");
    document.getElementById("inputHours").style.borderBlockColor = "#FF0000";
}

if(isNaN(rate)){
    console.log("Rate no es un número");
    document.getElementById("inputRate").style.borderBlockColor = "#FF0000";}

//cardtext.innerHTML = quote(hours, rate,iva, extras.selectedIndex).toFixed(2);
cardtext.innerHTML = "$ " +quote(hours, rate,iva, extras,changes,fixedcost).toFixed(2);

});


function quote (h,r,vat,ex,p,fc){
    p /=100;
    let result = (h*r)*(1+p);
    let i=0;
do {
    console.log( ex.options[i].selected);
    if(ex.options[i].selected){
    result += parseFloat(ex.options[i].value);
 }
 i++;
}
while (i < ex.options.length) 
result += fc;
    if (vat){
        result *= 1.16;
    }
    return result;
}


/*function quote (h,r,vat,ex){
    let result = h*r;
for (let i = 0; i < ex.options.length; i++) {
    console.log( ex.options[i].selected);
    result += parseFloat(ex.options[i].value)
}
    if (vat){
        result *= 1.16;
    }
    return result;
}
    //if (vat==true){
   /* if (vat){
       result  = h*r*1.16;
    }else{
        result = h*r;

    }
   if (index ==1){
    result += 7000;

   }else if (index ==2){
    result += 1500;
   }
   else if (index +=3){
    result += 12000;
   }
return result;

};//cotizar*/
/*   switch (index) {
        case 1:
            result +=7000;
            break;
            case 2:
                result +=1500;
            
                break;
                case 3:
                    result +=12000
            
                    break;
    
        default:
            break
    }*/