var digito1 = "0", digito2 = "", operacao = null, resultadoG;
function incluirDigito(digito){
    if((digito1) && (digito2) && (operacao) && (resultadoG)){
        limpar();
    }
    if((!operacao)){
        if(digito1 == "0"){
            digito1 = digito;
        }else{
            digito1 += digito;
        }
        mostrarDisplay(digito1);
    }else{
        digito2 += digito;
        mostrarDisplay(digito2);
    }
    
    
}
function mostrarDisplay(algumaCoisa){
    document.querySelector('#display').innerHTML = algumaCoisa;
}
function iniciarCalculo(operador){
    if((!digito2) || (!operacao)){
        operacao = operador;
    }
    if(resultadoG){
        digito2 = "";
    }
    if((digito2)){
        digito1 = calcular(operacao);
        mostrarDisplay(digito1);
        digito2 = "";
        operacao = operador;
    }
}
function calcular(simbolo){
    let resultadoDaOperacao = 0, digito1F = parseFloat(digito1), digito2F = parseFloat(digito2);
    switch(simbolo){
        case "+":
            resultadoDaOperacao = (digito1F + digito2F);
        break;
        case "-":
            resultadoDaOperacao = (digito1F - digito2F);
        break;
        case "*":
            resultadoDaOperacao = (digito1F * digito2F);
        break;
        case "/":
            resultadoDaOperacao = (digito1F / digito2F);
        break;
    } 
    return resultadoDaOperacao;
}
function limpar(){
    digito1 = "0";
    digito2 = "";
    operacao = null;
    resultadoG = null;
    mostrarDisplay(digito1);
}
function finalizarCalculo(){
    resultadoG = calcular(operacao);
    digito1 = resultadoG;
    mostrarDisplay(resultadoG);
}
function incluirPonto(){
    if(digito1 === "0" && (!operacao) && (!digito2)){
        digito1 = "0.";
    }else if((!operacao) && (!digito2)){
        digito1 += ".";
    }else if((!digito2) && (operacao)){
        digito2 = "0.";
    }else if((digito2) && (operacao)){
        digito2 += "."
    }
}
function obterPorcento(){
    if((!digito2) || digito1 == "0"){
            digito1 = "0";
            mostrarDisplay(digito1);
    }else{
        if((operacao) && (operacao === "+" || operacao === "-")){
            digito2 = (digito2 * digito1) / 100;
            mostrarDisplay(digito2);
        }else{
            digito2 = digito2 / 100;
            mostrarDisplay(digito2);
        }
    }
    
}