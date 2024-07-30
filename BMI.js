let pesoUsuario = prompt("Introduce el peso en KG");
let alturaUsuario =prompt("Introduce la altura en altura en metros");

let peso = parseFloat(pesoUsuario);
let altura = parseFloat(alturaUsuario);
let totalBmi;

function calcularBmi(){
    totalBmi = peso/(altura**2);
   return totalBmi
   
}

function clasificarBmi(){
    if (totalBmi<18.5) {
        console.log('Usted esta en peso bajo');
    }else if(totalBmi>= 18.5 && totalBmi < 24.9){
        console.log('Usted esta en peso normal');
    }else if(totalBmi>= 25 && totalBmi < 29.9){
        console.log('Usted esta en soborepeso');
    }else {console.log('Usted esta en obesidad'); }
}
console.log("su Bmi es " + calcularBmi())  
clasificarBmi()