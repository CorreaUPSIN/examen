

function Resultados(){

    let tipoDeViaje = document.getElementById('TipoViaje').value; //1 sencillo, 2 Doble

    let subTotal = parseFloat(document.getElementById('Precio').value);
    let impuesto = 0;
    let edad = document.getElementById('Edad').value;
    let descuento = 0;
    let TotalAPagar = 0;

    if(tipoDeViaje == "1"){
        console.log('SubTotal: ' + subTotal);
        document.getElementById('SubTotal').value = subTotal;
    }else if(tipoDeViaje == "2"){
        subTotal = subTotal * 1.80;
        console.log('SubTotal: ' + subTotal);
        document.getElementById('SubTotal').value = subTotal;
    }

    impuesto = subTotal * 0.16;
    console.log('Impuesto: ' + impuesto);
    document.getElementById('Impuesto').value = impuesto;

    if(edad >= 60){
        descuento = subTotal * 0.50;
        console.log('Descuento: ' + descuento);
        document.getElementById('Descuento').value = descuento;
    }else{
        console.log('Descuento: ' + descuento);
        document.getElementById('Descuento').value = descuento;
    }

    TotalAPagar = (subTotal + impuesto) - descuento;
    console.log('Total a Pagar: ' + TotalAPagar);
    document.getElementById('TotalAPagar').value = TotalAPagar;

    console.log('');


}