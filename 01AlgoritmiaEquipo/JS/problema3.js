function problema3(){
    var horas = parseInt(document.getElementById('p3-input').value);

    validarNumeros(horas, "las horas");
    if(horas < 0 || document.getElementById('p3-input').value == ""){
        alert("Ingrese el número de horas trabajadas, no puede ser un número negativo.");
        document.getElementById('p3-input').focus();
    } else if (horas >= 0){
        if(horas >= 0 && horas <= 40){
            document.getElementById('p3-output').textContent = "Te deberán pagar " + horas + " horas.";
        } else if(horas > 41 && horas <= 48){
            var horasExtras = horas - 40;
            var horasTotales = horas + horasExtras;
            document.getElementById('p3-output').textContent = "Te deberán pagar " + horasTotales + " horas.";
        } else if(horas > 48){
            var horasExtras = horas - 40;
            var horasExtrasTriple = (horas - 48) * 2;
            var horasTotales = horas + horasExtras + horasExtrasTriple;
            document.getElementById('p3-output').textContent = "Te deberán pagar " + horasTotales + " horas.";
        } 
    }
}

function validarNumeros(campo, nombreCampo){
    var checkOk = "1234567890";
    var checkStr = campo
    var todoesvalido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOk.length; j++){
            if(ch == checkOk.charAt(j)){
                break;
            }
        }

        if(j == checkOk.length){
            todoesvalido = false;
            break;
        }
    }

    if(!todoesvalido){
        alert("Escriba unicamente números en " + nombreCampo);
        return false;
    }
}