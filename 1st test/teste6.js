//--- TODO
var quantidades = 0;
var total = 0;
var controlo=0

function addProduct(number) {
    numero = document.getElementById("price" + number).value;
    qty = document.getElementById("qty" + number).value;
    qty += 1;
    total += parseFloat(numero);
    quantidades += qty;
    calculate()
}

function calculate() {
    if (quantidades >= 5 || total > 100) {
        var novototal = total * 0.95;
        controlo = 1;
    }
    document.getElementById("").innerText(quantidades);
    if (controlo == 1) {
        document.getElementById("total").innerText(novototal);
    } else {
        document.getElementById("total").innerText(total);
    }
    
}

function valid() {
    if (quantidades = 0) {
        alert("Tem de adicionar pelo menos um produto");
        return false;
    }
    else {
        return true;
    }
}

function clean() {
    document.getElementById("total").innerText("0");
    document.getElementById("quantidades").innerText("0");
    quantidades = 0;
    total = 0;
    controlo = 0;
}