var precoA = 0;
var precoB = 0;
var precoC = 0;
var precoD = 0;
var precoE = 0;
var precoTotal;

function preco1(){
    var preco1 = document.getElementsByName('placavideo');
        for (var i = 0;i<preco1.length;i++){
            if (preco1[i].checked){
                precoA = parseFloat(preco1[i].value);

            }
        }
    precoTotal = precoA + precoB + precoC + precoD + precoE + 1500;
        document.getElementById('resultado').value = "R$" + precoTotal.toFixed(2);    
}

function preco2(){
    var preco2 = document.getElementsByName('processador');
        for (var i = 0;i<preco2.length;i++){
            if (preco2[i].checked){
                precoB = parseFloat(preco2[i].value);
            }
        }
        precoTotal = precoA + precoB + precoC + precoD + precoE + 1500;
        document.getElementById('resultado').value = "R$" + precoTotal.toFixed(2); 
}

function preco3(){
    var preco3 = document.getElementsByName('ram');
        for (var i = 0;i<preco3.length;i++){
            if (preco3[i].checked){
                precoC = parseFloat(preco3[i].value);
                
            }
        }
        precoTotal = precoA + precoB + precoC + precoD + precoE + 1500;
        document.getElementById('resultado').value = "R$" + precoTotal.toFixed(2);     
}

function preco4(){
    var preco4 = document.getElementsByName('hd');
        for (var i = 0;i<preco4.length;i++){
            if (preco4[i].checked){
                precoD = parseFloat(preco4[i].value);
                
            }
        }
        precoTotal = precoA + precoB + precoC + precoD + precoE + 1500;
        document.getElementById('resultado').value = "R$" + precoTotal.toFixed(2); 
    }


    function preco5(){
        var preco5 = document.getElementsByName('ssd');
            for (var i = 0;i<preco5.length;i++){
                if (preco5[i].checked){
                    precoE = parseFloat(preco5[i].value);
                    
                }
            }
            precoTotal = precoA + precoB + precoC + precoD + precoE + 1500;
            document.getElementById('resultado').value = "R$" + precoTotal.toFixed(2); 
        }    