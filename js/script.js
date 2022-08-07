function start(){
    var buttonCalculateImc = document.querySelector('#button-calculate-imc');
    buttonCalculateImc.addEventListener('click', handleButtonClick);

    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');

    inputWeight.addEventListener('input', handleButtonClick);
    inputHeight.addEventListener('input', handleButtonClick);

    handleButtonClick();
}

function calculateImc(weight, height){
    return weight / (height * height);
}

function imcResultText(imcValue){
    if (imcValue < 16){
        return 'Faixa inválida.'
    }else if (imcValue >= 16 && imcValue <= 17){
        return 'Muito abaixo do peso.';
    }else if (imcValue > 17 && imcValue <= 18.5){
        return 'Abaixo do peso.';
    }else if (imcValue > 18.5 && imcValue <= 25){
        return 'Peso Normal.';
    }else if (imcValue > 25 && imcValue <= 30){
        return 'Acima do peso.';
    }else if (imcValue > 30 && imcValue <= 35){
        return 'Obesidade Grau I.';
    }else if (imcValue > 35 && imcValue <= 40){
        return 'Obesidade Grau II.';
    }else if (imcValue > 40){
        return 'Obesidade Grau III.';
    }
}

function handleButtonClick(){
    var inputWeight = document.querySelector('#input-weight');
    var inputHeight = document.querySelector('#input-height');
    var imcResult = document.querySelector('#imc-result');
    var imcTextResult2 = document.querySelector('#imc-result-text');

    var weight = Number(inputWeight.value);
    var height = Number(inputHeight.value);

    var imc = calculateImc(weight, height);
    var imcTextResult = imcResultText(imc);
    
    imcResult.textContent = imc.toFixed(2).replace('.', ',');
    imcTextResult2.textContent = imcTextResult;
}

start();