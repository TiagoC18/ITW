var start = true;
var controlo = 1;
var op1 = "";
var op2 = "";
var operacao = "";
var res = document.getElementById("res")

function addNumber() {
    var x = event.target.value;
    if (controlo == 1) {
        op1 = op1 + x;
    }
    else {
        op2 = op2 + x;
    }
    if (start == true) {
        res.innerText = "";
        start = false;
    }
    res.innerText += x
}


function clearResult() {
    start = true;
    controlo = 1;
    op1 = "";
    op2 = "";
    operacao = "";
    res.innerText = "0"
}

function addOperation() {
    var x = event.target.value;

    if (operacao =="" && op1 !="") {
        operacao = x;
        res.innerText += x;
        controlo = 2;
    }
    else {
        erro()
    }

}

function erro() {
    start = true;
    controlo = 1;
    op1 = "";
    op2 = "";
    operacao = "";
    res.innerText = "Erro!!!";
}

function calculate() {
    var error = 0;

    var op1_numeric = parseInt(op1);
    var op2_numeric = parseInt(op2);

    if (controlo == 2 && op2 != "") {
        switch (operacao) {
            case "+":
                op1 = op1_numeric + op2_numeric;
                break;
            case "-":
                op1 = op1_numeric - op2_numeric;
                break;
            case "+":
                op1 = op1_numeric * op2_numeric;
                break;
            case "/":
                if (op2_numeric == 0) {
                    erro();
                    error = 1;
                    break;
                }
                op1 = op1_numeric / op2_numeric;
                break;
        }
        if (!error) {
            controlo = 1;
            op2 = "";
            operacao = "";
            res.innerText = op1;
        }
    }else {
        erro()
    }

}
