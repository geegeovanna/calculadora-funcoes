function OperacoesBasicas(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    operador = document.querySelector("input[name=opt]:checked").value;

    resultado = eval(parseInt(num1) + operador + parseInt(num2));

    document.getElementById("resultado").innerHTML = resultado;
}

function Potencia(){
    num = document.getElementById("num").value;
    expoente = document.getElementById("expoente").value;

    if(expoente < 0){
        resultado = ("<h3>O valor do expoente não pode ser menor que 0</h3>");
    }
    else{
        resultado = eval(parseInt(Math.pow(num, expoente)));
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function Raiz(){
    num = document.getElementById("número").value;
    raiz = document.getElementById("raiz").value;

    if(num < 0){
        resultado = ("<h3>O valor do radicando não pode ser menor que 0, pois não pertence aos reais</h3>");
    }
    else{
        resultado = eval(Math.pow(parseInt(num), 1.0/ parseInt(raiz)));
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function Area(){
    b = document.getElementById("base").value
    h = document.getElementById("altura").value

    resultado = eval((b * h)/2);

    document.getElementById("resultado").innerHTML = resultado + "cm²";
}

function Bhaskara(){
    A = document.getElementById("A").value;
    B = document.getElementById("B").value;
    C = document.getElementById("C").value;

    delta = eval(parseFloat((B * B) -4 * A * C));
    document.getElementById("resultado").innerHTML = "delta = " + delta;


    if(delta < 0){
        document.getElementById("resultado1").innerHTML = "O valor do primeiro coeficiente (A) pode ser diferente de 0 ";
    }
    else if(delta == 0){
        x1 = eval(parseFloat((-B + Math.sqrt(delta)) / (2 * A)));
        document.getElementById("resultado").innerHTML = "X1 e X2 = " + x1;


    } else{
        x1 = eval(parseFloat((-B + Math.sqrt(delta)) / (2 * A)));
        x2 = eval(parseFloat((-B - Math.sqrt(delta)) / (2 * A)));
        document.getElementById("resultado1").innerHTML = "X1 = " + x1;
        document.getElementById("resultado2").innerHTML = "X2 = " + x2;

       
    }
}