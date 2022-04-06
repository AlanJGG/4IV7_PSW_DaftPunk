function validarn(e){

    var teclado=(document.all)? e.keyCode: e.which;
    if(teclado==8) return true;
    var patron=/[0-9\d .]/; 
    var codigo= String.fromCharCode(teclado);
    return patron.test(codigo)

        
}
function problema4(){

    var salario= document.querySelector('#p4-input-salario').value;
    var antiguedad= document.querySelector('#p4-input').value;
   
    if(salario != "" && antiguedad != "")
    {
        var salario=parseFloat(salario);
        var antiguedad=parseFloat(antiguedad);
    
        
        while (antiguedad<1) {
            alert("Por favor verifique los años de antigüedad");
            return false;
            
        }
        
        if(antiguedad<1 && antiguedad>0){

            var utilidad= salario*0.05;
        }
        else if(antiguedad>=1 && antiguedad<2){

            var utilidad=salario*0.07;
        }
        else if(antiguedad>=2 && antiguedad<5){

            var utilidad=salario*0.10;
        }
        else if(antiguedad>=5 && antiguedad<10){

            var utilidad=salario*0.15;
        }
        else if(antiguedad>=10){

            var utilidad=salario*0.20;
        }
        else{

            alert("Verifique por favor. Datos inválidos")
        }
        document.querySelector('#p4-output').textContent="Su utilidad de " +antiguedad+" años de trabajo es de: $"+utilidad*antiguedad;
    }
    else{
        alert("Debes ingresar al menos un numero")
    }
     
}