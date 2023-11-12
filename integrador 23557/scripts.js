
const ticket = 10000;


let descPanaderia = 0.25;
let descPastelería = 0.20;
let descBrunch = 0.15;


const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const totalPagar = document.getElementById('totalAPagar');
const btnResumen = document.getElementById('resumen');


function calcularPago(){
    let total = cantidad.value * ticket
    switch (categoria.value) {
        case "panaderia":
            total = total - (total * descPanaderia);
            break;
        case "pastelería":
            total = total - (total * descPastelería);
            break;
        case "brunch":
            total = total - (total * descBrunch);
            break;
    
    } 
    
    totalPagar.textContent = `Total a Pagar: $ ${total}`;
}

btnResumen.addEventListener('click',(e)=>{
    e.preventDefault()
    calcularPago()
});

