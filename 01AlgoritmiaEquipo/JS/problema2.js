function problema2(){
    var num1 = document.querySelector('#N1').value;
    var num2 = document.querySelector('#N2').value;
    var num3 = document.querySelector('#N3').value;

    if (num1 == "" || num2 == "" || num3 == ""){
        alert("Debes ingresar al menos un numero")
    }
    else{
        if(validarn(num1, "Num 1:") == true && validarn(num2, "Num 2:") == true && validarn(num3, "Num 3:") == true){
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            num3 = parseInt(num3);
    
            if (num1 > num2 && num1 > num3){
                document.getElementById('p2-output').textContent = "El numero mas grande es:  " + num1;
            }
            else if (num2 > num1 && num2 > num3){
                document.getElementById('p2-output').textContent = "El numero mas grande es:  " + num2;
            }
            else if (num3 > num1 && num3 > num2){
                document.getElementById('p2-output').textContent = "El numero mas grande es:  " + num3;
            }
            else{
                document.getElementById('p2-output').textContent = "Los tres numeros son iguales:  " + num1;
            }
        }
    }
    
}

function validarn(campo, nombreCampo){
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
        alert("Escriba unicamente números enteros en " + nombreCampo);
        return false;
    }
    return true;
}