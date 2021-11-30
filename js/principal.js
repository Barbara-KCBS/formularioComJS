var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

    for(let i = 0; i < pacientes.length; i++){
        var paciente = pacientes[i]
        var peso = paciente.querySelector(".info-peso");
        peso = peso.textContent;
        var altura = paciente.querySelector(".info-altura");
        altura = altura.textContent;

        var tdImc = paciente.querySelector(".info-imc");

        var pesoEhValido = validaPeso(peso);
        var alturaEhValida = validaAltura(altura);

        if(!pesoEhValido){
            pesoEhValido = false;
            tdImc.textContent = "Peso inválido!";
            // paciente.style.backgroundColor = 'lightcoral'
            paciente.classList.add('paciente-invalido')
        }

        if(!alturaEhValida){
            alturaEhValida = false;
            tdImc.textContent = "Altura inválida!"
            paciente.classList.add('paciente-invalido')
        }

        if(alturaEhValida && pesoEhValido){
            var imc = calculaImc(peso, altura);
            tdImc.textContent = imc;
        }

}

function validaPeso(peso){
    if(peso >= 0 && peso < 100){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
