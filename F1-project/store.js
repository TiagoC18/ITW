var quantidade = document.getElementById("quantidades");
var total = document.getElementById("total");

var precoproduto1 = parseFloat(document.getElementById("precoproduto1").value);
var precoproduto2 = parseFloat(document.getElementById("precoproduto2").value);
var precoproduto3 = parseFloat(document.getElementById("precoproduto3").value);
var precoproduto4 = parseFloat(document.getElementById("precoproduto4").value);
var precoproduto5 = parseFloat(document.getElementById("precoproduto5").value);
var precoproduto6 = parseFloat(document.getElementById("precoproduto6").value);
var precoproduto7 = parseFloat(document.getElementById("precoproduto7").value);
var precoproduto8 = parseFloat(document.getElementById("precoproduto8").value);

var produto1 = parseFloat(document.getElementById("produto1").value);
var produto2 = parseFloat(document.getElementById("produto2").value);
var produto3 = parseFloat(document.getElementById("produto3").value);
var produto4 = parseFloat(document.getElementById("produto4").value);
var produto5 = parseFloat(document.getElementById("produto5").value);
var produto6 = parseFloat(document.getElementById("produto6").value);
var produto7 = parseFloat(document.getElementById("produto7").value);
var produto8 = parseFloat(document.getElementById("produto8").value);

var somaProdutos = produto1 + produto2 + produto3 + produto4 + produto5 + produto6 + produto7 + produto8
var precoTotalInicial = produto1 * precoproduto1 + produto2 * precoproduto2 + produto3 * precoproduto3 + produto4 * precoproduto4 + produto5* precoproduto5 + produto6 * precoproduto6 + produto7 * precoproduto7 + produto8 * precoproduto8

function calcular() {


    var precoproduto1 = parseFloat(document.getElementById("precoproduto1").value);
    var precoproduto2 = parseFloat(document.getElementById("precoproduto2").value);
    var precoproduto3 = parseFloat(document.getElementById("precoproduto3").value);
    var precoproduto4 = parseFloat(document.getElementById("precoproduto4").value);
    var precoproduto5 = parseFloat(document.getElementById("precoproduto5").value);
    var precoproduto6 = parseFloat(document.getElementById("precoproduto6").value);
    var precoproduto7 = parseFloat(document.getElementById("precoproduto7").value);
    var precoproduto8 = parseFloat(document.getElementById("precoproduto8").value);

    var produto1 = parseFloat(document.getElementById("produto1").value);
    var produto2 = parseFloat(document.getElementById("produto2").value);
    var produto3 = parseFloat(document.getElementById("produto3").value);
    var produto4 = parseFloat(document.getElementById("produto4").value);
    var produto5 = parseFloat(document.getElementById("produto5").value);
    var produto6 = parseFloat(document.getElementById("produto6").value);
    var produto7 = parseFloat(document.getElementById("produto7").value);
    var produto8 = parseFloat(document.getElementById("produto8").value);

    var somaProdutos = produto1 + produto2 + produto3 + produto4 + produto5 + produto6 + produto7 + produto8
    var precoTotal = produto1 * precoproduto1 + produto2 * precoproduto2 + produto3 * precoproduto3 + produto4 * precoproduto4 + produto5 * precoproduto5 + produto6 * precoproduto6 + produto7 * precoproduto7 + produto8 * precoproduto8

   
    quantidade.innerText = somaProdutos
    total.innerText = precoTotal

}
function comprar(number) {
    var produto = document.getElementById("produto" + number);
    var x = parseFloat(produto.value) + 1;
    produto.value = x.toString();

    calcular()

}




function validar() {
    var retVal = true
    var somaProdutos = produto1 + produto2 + produto3 + produto4 + produto5 + produto6 + produto7 + produto8

    if (somaProdutos == 0) {
        alert("Tem de comprar no minimo um produto");
        retval = false
    }
    return retVal
}
function limpar() {
    for (var i = 1; i <= 4; i++) {
        var x = document.getElementById("produto" + i);
        x.value = "0";

    }


    quantidade.innerText = 0;
    total.innerText = "0.00";


}




var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/* Função de validação  */
function validate() {
    var retVal = true; /* Vamos partir do princípio de que o formulário está válido ... */
    var _nome = document.getElementById("usrname");
    var _nomeError = document.getElementById("NomeError");
    if (_nome.value.trim().length < 3) {
        retVal = false;
        _nomeError.classList.add("d-block")
        _nomeError.classList.remove("d-none");
    }
    else {
        _nomeError.classList.remove("d-block")
        _nomeError.classList.add("d-none");
    }
    var _email = document.getElementById("email");
    var _emailError = document.getElementById("EmailError");
    if (_email.value.trim().length < 3) {
        retVal = false;
        _emailError.classList.add("d-block")
        _emailError.classList.remove("d-none");
    }
    else {
        _emailError.classList.remove("d-block")
        _emailError.classList.add("d-none");
    }
    var _morada = document.getElementById("mr");
    var _moradaError = document.getElementById("MoradaError");
    var palavrasArray = _morada.value.split(' '); /* Partir a Morada em palavras */
    if (palavrasArray.length < 3) { /* Contar o número de palavras */
        retVal = false;
        _moradaError.classList.add("d-block")
        _moradaError.classList.remove("d-none");
    }
    else {
        _moradaError.classList.remove("d-block")
        _moradaError.classList.add("d-none");
    }
    var _telemovel = document.getElementById("tr");
    var _telemovelError = document.getElementById("TelemovelError");
    if (_telemovel.value.trim().length < 9) {
        retVal = false;
        _telemovelError.classList.add("d-block")
        _telemovelError.classList.remove("d-none");
    }
    else {
        _telemovelError.classList.remove("d-block")
        _telemovelError.classList.add("d-none");
    }
    var _payment = document.querySelectorAll('input[name="payment"]:checked').length;
    var _paymentError = document.getElementById("paymentError")
    if (_payment == 0) {
        retVal = false;
        _paymentError.classList.add("d-block")
        _paymentError.classList.remove("d-none");
    }
    else {
        _paymentError.classList.remove("d-block")
        _paymentError.classList.add("d-none");
    }
    return retVal
}