function calcularIdades() {
    var anoNascimento = parseInt(document.getElementById("anoNascimento1").value);
    var anoAtual = parseInt(document.getElementById("anoAtual1").value);

    var idadeAtual = anoAtual - anoNascimento;
    var idade2050 = 2050 - anoNascimento;

    document.getElementById("resultadoIdadeAtual1").innerHTML = "Idade atual: " + idadeAtual + " anos";
    document.getElementById("resultadoIdade20501").innerHTML = "Idade em 2050: " + idade2050 + " anos";
}

function calcularNovoSalario() {
    var salario = parseFloat(document.getElementById("salario").value);
    var novoSalario = salario * 1.25;

    document.getElementById("resultadoSalario").innerHTML = "Novo salário: R$ " + novoSalario.toFixed(2);
}

function converterTemperatura() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 1.8) + 32;

    document.getElementById("resultadoTemperatura").innerHTML = "Temperatura em Fahrenheit: " + fahrenheit.toFixed(2) + " °F";
}

function calcularMedia() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var media = (nota1 + nota2 + nota3) / 3;

    document.getElementById("resultadoMedia").innerHTML = "Média: " + media.toFixed(2);
}

function calcularHipotenusa() {
    var cateto1 = parseFloat(document.getElementById("cateto1").value);
    var cateto2 = parseFloat(document.getElementById("cateto2").value);

    var hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));

    document.getElementById("resultadoHipotenusa").innerHTML = "Hipotenusa: " + hipotenusa.toFixed(2);
}

function calcularPropriedades() {
    var raio = parseFloat(document.getElementById("raio").value);

    var comprimento = 2 * Math.PI * raio;
    var area = Math.PI * Math.pow(raio, 2);
    var volume = (3 / 4) * Math.PI * Math.pow(raio, 3);

    document.getElementById("resultadoComprimento").innerHTML = "Comprimento: " + comprimento.toFixed(2);
    document.getElementById("resultadoArea").innerHTML = "Área: " + area.toFixed(2);
    document.getElementById("resultadoVolume").innerHTML = "Volume: " + volume.toFixed(2);
}