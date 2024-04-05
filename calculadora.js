let btnCalcular= document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", clickbtnCalcular);

function clickbtnCalcular(){
    let txtPeso=document.getElementById("txtPeso");
    let peso = txtPeso.value;

    let txtAltura=document.getElementById("txtAltura");
    let altura=txtAltura.value;

    let imc =  peso/(altura * altura);

    alert("El IMC es:" + Math.round(imc));
}

