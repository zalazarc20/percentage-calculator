import Form from "./components/Form.js";

let app = document.getElementById('app');

const getResult = (val1, val2, boolean) =>{
    let result;
    
    if(boolean){
        const a = val1 * val2;
        const b = a / 100;
        result = b + parseInt(val1);
    }else{
        result = parseInt(val1) / parseInt(val2);
    }

    return `<hr><h2 class="title">Resultado: <span class="text-bold">${boolean ? '$'+result : result.toFixed(3) + ' kg'}</span></h2>`;
}

const Submit = (val1, val2, boolean) => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        
        // pintando resultado
        document.getElementById('total').innerHTML = getResult(val1, val2, boolean);
    
        form.reset()
    })
}

const Validate = (form) => {
    // escucho al input, valido que no este vacio y mando los datos
    form.addEventListener('input', e => {
        let {percentage, oficialPrice} = form;
        let inputValue;

        if(percentage != undefined) {
            inputValue = percentage;
        }

        if(oficialPrice != undefined) {
            inputValue = oficialPrice;
            
        };


        if(form.price.value != '') {
            // esta operacion realiza el calculo
            Submit(form.price.value, inputValue.value, inputValue == percentage ? true : false);
        }
    });
}

document.addEventListener('DOMContentLoaded', e => {
    app.innerHTML = Form(true);
    let form = document.querySelector('#form');

    // esta funcion valida y hace el submit
    Validate(form);
});


let button1 = document.getElementById('btn-porcentage');
let button2 = document.getElementById('btn-precio');

document.addEventListener('click', e => {
    if(e.target == button1) {
        app.innerHTML = Form(true);
        document.body.style.backgroundColor = '#8C46FF';
    };

    if(e.target === button2){
        app.innerHTML = Form(false);
        document.body.style.backgroundColor = '#ff466e';
    }
    Validate(form)

})




