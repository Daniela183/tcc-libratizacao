function mudarImg1()
{
    var test = document.getElementById("teste1");
    test.innerHTML = "";
    var texto = document.createElement("input"); 
    texto.type = "text";
    texto.id = "resp1";
    texto.onmouseout = function(){verificarResposta01(this);};
    texto.classList.add("form-control");
    texto.placeholder = "Digite a palavra que corresponde ao sinal";
    var botao = document.createElement("button");
    var textoBotao = document.createTextNode("Voltar");
    botao.id = "mybt0";
    botao.classList.add("btn") ;
    botao.classList.add("btn-info");
    var botao1 = document.createElement("button");
    var textoBotao1 = document.createTextNode("Verificar");
    botao1.id = "mybt";
    botao1.classList.add("btn") ;
    botao1.classList.add("btn-success");
    botao.onclick = function(){voltarImagem1();};
    botao1.onclick = function(){verificarResposta1();};
    var titulo = document.createElement("h1");
    titulo.id = "h";
    botao.appendChild(textoBotao);
    botao1.appendChild(textoBotao1);
    test.appendChild(botao);
    test.appendChild(texto);
    test.appendChild(botao1);
    test.appendChild(titulo); 
}
function voltarImagem1(){
    var test = document.getElementById("teste1");
    test.innerHTML = "";
    var imagem = document.createElement("img");
    imagem.id = "carr1";
    imagem.src = "../../../img/gif/dia.gif";
    imagem.classList.add("d-block");
    imagem.classList.add("w-100");
    imagem.onclick = function(){mudarImg7();};
    test.appendChild(imagem);
}
function verificarResposta1(){
    var elemento = document.getElementById("resp1");
    var titulo = document.getElementById("h");
    if(elemento.value === "DIA"){
       titulo.innerHTML = "Você acertou!";
       titulo.style.color = "green";
       imagem.src = "../../../img/gif/aprovacao.gif";
    } else{
        titulo.innerHTML = "Você errou!";
        titulo.style.color = "red";
        imagem.src = "../../../img/gif/negacao.gif";
    }
}
function verificarResposta01(elemento){
    elemento.value = elemento.value.toUpperCase();
}
/*------------------------------------------------------------------- */
function mudarImg2()
{
    var test = document.getElementById("teste2");
    test.innerHTML = "";
    var texto = document.createElement("input"); 
    texto.type = "text";
    texto.id = "resp2";
    texto.onmouseout = function(){verificarResposta02(this);};
    texto.classList.add("form-control");
    texto.placeholder = "Digite a palavra que corresponde ao sinal";
    var botao = document.createElement("button");
    var textoBotao = document.createTextNode("Voltar");
    botao.id = "mybt0";
    botao.classList.add("btn") ;
    botao.classList.add("btn-info");
    var botao1 = document.createElement("button");
    var textoBotao1 = document.createTextNode("Verificar");
    botao1.id = "mybt";
    botao1.classList.add("btn") ;
    botao1.classList.add("btn-success");
    botao.onclick = function(){voltarImagem2();};
    botao1.onclick = function(){verificarResposta2();};
    var titulo = document.createElement("h1");
    titulo.id = "h";
    botao.appendChild(textoBotao);
    botao1.appendChild(textoBotao1);
    test.appendChild(botao);
    test.appendChild(texto);
    test.appendChild(botao1);
    test.appendChild(titulo); 
}
function voltarImagem2(){
    var test = document.getElementById("teste2");
    test.innerHTML = "";
    var imagem = document.createElement("img");
    imagem.id = "carr2";
    imagem.src = "../../../img/gif/segunda.gif";
    imagem.classList.add("d-block");
    imagem.classList.add("w-100");
    imagem.onclick = function(){mudarImg2();};
    test.appendChild(imagem);
}
function verificarResposta2(){
    var elemento = document.getElementById("resp2");
    var titulo = document.getElementById("h");
    if(elemento.value === "SEGUNDA" || elemento.value === "SENGUDA FEIRA" || elemento.value === "SENGUDA-FEIRA"){
       titulo.innerHTML = "Você acertou!";
       titulo.style.color = "green";
    } else{
        titulo.innerHTML = "Você errou!";
        titulo.style.color = "red";
    }
}
function verificarResposta02(elemento){
    elemento.value = elemento.value.toUpperCase();
}
/*------------------------------------------------------------------- */

function mudarImg3()
{
    var test = document.getElementById("teste3");
    test.innerHTML = "";
    var texto = document.createElement("input"); 
    texto.type = "text";
    texto.id = "resp3";
    texto.onmouseout = function(){verificarResposta03(this);};
    texto.classList.add("form-control");
    texto.placeholder = "Digite a palavra que corresponde ao sinal";
    var botao = document.createElement("button");
    var textoBotao = document.createTextNode("Voltar");
    botao.id = "mybt0";
    botao.classList.add("btn") ;
    botao.classList.add("btn-info");
    var botao1 = document.createElement("button");
    var textoBotao1 = document.createTextNode("Verificar");
    botao1.id = "mybt";
    botao1.classList.add("btn") ;
    botao1.classList.add("btn-success");
    botao.onclick = function(){voltarImagem3();};
    botao1.onclick = function(){verificarResposta3();};
    var titulo = document.createElement("h1");
    titulo.id = "h";
    botao.appendChild(textoBotao);
    botao1.appendChild(textoBotao1);
    test.appendChild(botao);
    test.appendChild(texto);
    test.appendChild(botao1);
    test.appendChild(titulo); 
}
function voltarImagem3(){
    var test = document.getElementById("teste1");
    test.innerHTML = "";
    var imagem = document.createElement("img");
    imagem.id = "carr1";
    imagem.src = "../../../img/gif/terca.gif";
    imagem.classList.add("d-block");
    imagem.classList.add("w-100");
    imagem.onclick = function(){mudarImg3();};
    test.appendChild(imagem);
}
function verificarResposta3(){
    var elemento = document.getElementById("resp3");
    var titulo = document.getElementById("h");
    if(elemento.value === "TERCA"|| elemento.value === "TERÇA" || elemento.value === "TERCA FEIRA" || elemento.value === "TERCA-FEIRA" || elemento.value === "TERÇA FEIRA" || elemento.value === "TERÇA-FEIRA"){
       titulo.innerHTML = "Você acertou!";
       titulo.style.color = "green";
    } else{
        titulo.innerHTML = "Você errou!";
        titulo.style.color = "red";
    }
}
function verificarResposta03(elemento){
    elemento.value = elemento.value.toUpperCase();
}
/*------------------------------------------------------------------- */
function mudarImg4()
{
    var test = document.getElementById("teste4");
    test.innerHTML = "";
    var texto = document.createElement("input"); 
    texto.type = "text";
    texto.id = "resp4";
    texto.onmouseout = function(){verificarResposta04(this);};
    texto.classList.add("form-control");
    texto.placeholder = "Digite a palavra que corresponde ao sinal";
    var botao = document.createElement("button");
    var textoBotao = document.createTextNode("Voltar");
    botao.id = "mybt0";
    botao.classList.add("btn") ;
    botao.classList.add("btn-info");
    var botao1 = document.createElement("button");
    var textoBotao1 = document.createTextNode("Verificar");
    botao1.id = "mybt";
    botao1.classList.add("btn") ;
    botao1.classList.add("btn-success");
    botao.onclick = function(){voltarImagem4();};
    botao1.onclick = function(){verificarResposta4();};
    var titulo = document.createElement("h1");
    titulo.id = "h";
    botao.appendChild(textoBotao);
    botao1.appendChild(textoBotao1);
    test.appendChild(botao);
    test.appendChild(texto);
    test.appendChild(botao1);
    test.appendChild(titulo); 
}
function voltarImagem4(){
    var test = document.getElementById("teste4");
    test.innerHTML = "";
    var imagem = document.createElement("img");
    imagem.id = "carr4";
    imagem.src = "../../../img/gif/quarta.gif";
    imagem.classList.add("d-block");
    imagem.classList.add("w-100");
    imagem.onclick = function(){mudarImg4();};
    test.appendChild(imagem);
}
function verificarResposta4(){
    var elemento = document.getElementById("resp4");
    var titulo = document.getElementById("h");
    if(elemento.value === "QUARTA"|| elemento.value === "QUARTA FEIRA" || elemento.value === "QUARTA-FEIRA"){
       titulo.innerHTML = "Você acertou!";
       titulo.style.color = "green";
    } else{
        titulo.innerHTML = "Você errou!";
        titulo.style.color = "red";
    }
}
function verificarResposta04(elemento){
    elemento.value = elemento.value.toUpperCase();
}
/*------------------------------------------------------------------- */
function mudarImg5()
{
    var test = document.getElementById("teste5");
    test.innerHTML = "";
    var texto = document.createElement("input"); 
    texto.type = "text";
    texto.id = "resp5";
    texto.onmouseout = function(){verificarResposta05(this);};
    texto.classList.add("form-control");
    texto.placeholder = "Digite a palavra que corresponde ao sinal";
    var botao = document.createElement("button");
    var textoBotao = document.createTextNode("Voltar");
    botao.id = "mybt0";
    botao.classList.add("btn") ;
    botao.classList.add("btn-info");
    var botao1 = document.createElement("button");
    var textoBotao1 = document.createTextNode("Verificar");
    botao1.id = "mybt";
    botao1.classList.add("btn") ;
    botao1.classList.add("btn-success");
    botao.onclick = function(){voltarImagem5();};
    botao1.onclick = function(){verificarResposta5();};
    var titulo = document.createElement("h1");
    titulo.id = "h";
    botao.appendChild(textoBotao);
    botao1.appendChild(textoBotao1);
    test.appendChild(botao);
    test.appendChild(texto);
    test.appendChild(botao1);
    test.appendChild(titulo); 
}
function voltarImagem5(){
    var test = document.getElementById("teste5");
    test.innerHTML = "";
    var imagem = document.createElement("img");
    imagem.id = "carr5";
    imagem.src = "../../../img/gif/quinta.gif";
    imagem.classList.add("d-block");
    imagem.classList.add("w-100");
    imagem.onclick = function(){mudarImg5();};
    test.appendChild(imagem);
}
function verificarResposta5(){
    var elemento = document.getElementById("resp5");
    var titulo = document.getElementById("h");
    if(elemento.value === "QUINTA" || elemento.value === "QUINTA FEIRA" || elemento.value === "QUINTA-FEIRA"){
       titulo.innerHTML = "Você acertou!";
       titulo.style.color = "green";
    } else{
        titulo.innerHTML = "Você errou!";
        titulo.style.color = "red";
    }
}
function verificarResposta05(elemento){
    elemento.value = elemento.value.toUpperCase();
}
/*------------------------------------------------------------------- */
function mudarImg6()
{
    var test = document.getElementById("teste6");
    test.innerHTML = "";
    var texto = document.createElement("input"); 
    texto.type = "text";
    texto.id = "resp6";
    texto.onmouseout = function(){verificarResposta06(this);};
    texto.classList.add("form-control");
    texto.placeholder = "Digite a palavra que corresponde ao sinal";
    var botao = document.createElement("button");
    var textoBotao = document.createTextNode("Voltar");
    botao.id = "mybt0";
    botao.classList.add("btn") ;
    botao.classList.add("btn-info");
    var botao1 = document.createElement("button");
    var textoBotao1 = document.createTextNode("Verificar");
    botao1.id = "mybt";
    botao1.classList.add("btn") ;
    botao1.classList.add("btn-success");
    botao.onclick = function(){voltarImagem6();};
    botao1.onclick = function(){verificarResposta6();};
    var titulo = document.createElement("h1");
    titulo.id = "h";
    botao.appendChild(textoBotao);
    botao1.appendChild(textoBotao1);
    test.appendChild(botao);
    test.appendChild(texto);
    test.appendChild(botao1);
    test.appendChild(titulo); 
}
function voltarImagem6(){
    var test = document.getElementById("teste6");
    test.innerHTML = "";
    var imagem = document.createElement("img");
    imagem.id = "carr6";
    imagem.src = "../../../img/gif/sexta 2.gif";
    imagem.classList.add("d-block");
    imagem.classList.add("w-100");
    imagem.onclick = function(){mudarImg6();};
    test.appendChild(imagem);
}
function verificarResposta6(){
    var elemento = document.getElementById("resp6");
    var titulo = document.getElementById("h");
    if(elemento.value === "SEXTA" || elemento.value === "SEXTA FEIRA" || elemento.value === "SEXTA-FEIRA"){
       titulo.innerHTML = "Você acertou!";
       titulo.style.color = "green";
    } else{
        titulo.innerHTML = "Você errou!";
        titulo.style.color = "red";
    }
}
function verificarResposta06(elemento){
    elemento.value = elemento.value.toUpperCase();
}
/*------------------------------------------------------------------- */

function mudarImg7()
{
    var test = document.getElementById("teste7");
    test.innerHTML = "";
    var texto = document.createElement("input"); 
    texto.type = "text";
    texto.id = "resp7";
    texto.onmouseout = function(){verificarResposta07(this);};
    texto.classList.add("form-control");
    texto.placeholder = "Digite a palavra que corresponde ao sinal";
    var botao = document.createElement("button");
    var textoBotao = document.createTextNode("Voltar");
    botao.id = "mybt0";
    botao.classList.add("btn") ;
    botao.classList.add("btn-info");
    var botao1 = document.createElement("button");
    var textoBotao1 = document.createTextNode("Verificar");
    botao1.id = "mybt";
    botao1.classList.add("btn") ;
    botao1.classList.add("btn-success");
    botao.onclick = function(){voltarImagem7();};
    botao1.onclick = function(){verificarResposta7();};
    var titulo = document.createElement("h1");
    titulo.id = "h";
    botao.appendChild(textoBotao);
    botao1.appendChild(textoBotao1);
    test.appendChild(botao);
    test.appendChild(texto);
    test.appendChild(botao1);
    test.appendChild(titulo); 
}
function voltarImagem7(){
    var test = document.getElementById("teste7");
    test.innerHTML = "";
    var imagem = document.createElement("img");
    imagem.id = "carr7";
    imagem.src = "../../../img/gif/sabado.gif";
    imagem.classList.add("d-block");
    imagem.classList.add("w-100");
    imagem.onclick = function(){mudarImg7();};
    test.appendChild(imagem);
}
function verificarResposta7(){
    var elemento = document.getElementById("resp7");
    var titulo = document.getElementById("h");
    if(elemento.value === "SABADO" || elemento.value === "SABÁDO"){
       titulo.innerHTML = "Você acertou!";
       titulo.style.color = "green";
    } else{
        titulo.innerHTML = "Você errou!";
        titulo.style.color = "red";
    }
}
function verificarResposta07(elemento){
    elemento.value = elemento.value.toUpperCase();
}
/*------------------------------------------------------------------- */

function mudarImg8()
{
    var test = document.getElementById("teste8");
    test.innerHTML = "";
    var texto = document.createElement("input"); 
    texto.type = "text";
    texto.id = "resp8";
    texto.onmouseout = function(){verificarResposta08(this);};
    texto.classList.add("form-control");
    texto.placeholder = "Digite a palavra que corresponde ao sinal";
    var botao = document.createElement("button");
    var textoBotao = document.createTextNode("Voltar");
    botao.id = "mybt0";
    botao.classList.add("btn") ;
    botao.classList.add("btn-info");
    var botao1 = document.createElement("button");
    var textoBotao1 = document.createTextNode("Verificar");
    botao1.id = "mybt";
    botao1.classList.add("btn") ;
    botao1.classList.add("btn-success");
    botao.onclick = function(){voltarImagem8();};
    botao1.onclick = function(){verificarResposta8();};
    var titulo = document.createElement("h1");
    titulo.id = "h";
    botao.appendChild(textoBotao);
    botao1.appendChild(textoBotao1);
    test.appendChild(botao);
    test.appendChild(texto);
    test.appendChild(botao1);
    test.appendChild(titulo); 
}
function voltarImagem8(){
    var test = document.getElementById("teste8");
    test.innerHTML = "";
    var imagem = document.createElement("img");
    imagem.id = "carr8";
    imagem.src = "../../../img/gif/domingo.gif";
    imagem.classList.add("d-block");
    imagem.classList.add("w-100");
    imagem.onclick = function(){mudarImg8();};
    test.appendChild(imagem);
}
function verificarResposta8(){
    var elemento = document.getElementById("resp8");
    var titulo = document.getElementById("h");
    if(elemento.value === "DOMINGO"){
       titulo.innerHTML = "Você acertou!";
       titulo.style.color = "green";
    } else{
        titulo.innerHTML = "Você errou!";
        titulo.style.color = "red";
    }
}
function verificarResposta08(elemento){
    elemento.value = elemento.value.toUpperCase();
}
/*------------------------------------------------------------------- */

function mudarImg9()
{
    var test = document.getElementById("teste9");
    test.innerHTML = "";
    var texto = document.createElement("input"); 
    texto.type = "text";
    texto.id = "resp9";
    texto.onmouseout = function(){verificarResposta09(this);};
    texto.classList.add("form-control");
    texto.placeholder = "Digite a palavra que corresponde ao sinal";
    var botao = document.createElement("button");
    var textoBotao = document.createTextNode("Voltar");
    botao.id = "mybt0";
    botao.classList.add("btn") ;
    botao.classList.add("btn-info");
    var botao1 = document.createElement("button");
    var textoBotao1 = document.createTextNode("Verificar");
    botao1.id = "mybt";
    botao1.classList.add("btn") ;
    botao1.classList.add("btn-success");
    botao.onclick = function(){voltarImagem9();};
    botao1.onclick = function(){verificarResposta9();};
    var titulo = document.createElement("h1");
    titulo.id = "h";
    botao.appendChild(textoBotao);
    botao1.appendChild(textoBotao1);
    test.appendChild(botao);
    test.appendChild(texto);
    test.appendChild(botao1);
    test.appendChild(titulo); 
}
function voltarImagem9(){
    var test = document.getElementById("teste9");
    test.innerHTML = "";
    var imagem = document.createElement("img");
    imagem.id = "carr9";
    imagem.src = "../../../img/gif/Mes.gif";
    imagem.classList.add("d-block");
    imagem.classList.add("w-100");
    imagem.onclick = function(){mudarImg9();};
    test.appendChild(imagem);
}
function verificarResposta9(){
    var elemento = document.getElementById("resp9");
    var titulo = document.getElementById("h");
    if(elemento.value === "MES" || elemento.value === "MÊS"){
       titulo.innerHTML = "Você acertou!";
       titulo.style.color = "green";
    } else{
        titulo.innerHTML = "Você errou!";
        titulo.style.color = "red";
    }
}
function verificarResposta09(elemento){
    elemento.value = elemento.value.toUpperCase();
}
/*------------------------------------------------------------------- */

function mudarImg10()
{
    var test = document.getElementById("teste10");
    test.innerHTML = "";
    var texto = document.createElement("input"); 
    texto.type = "text";
    texto.id = "resp10";
    texto.onmouseout = function(){verificarResposta010(this);};
    texto.classList.add("form-control");
    texto.placeholder = "Digite a palavra que corresponde ao sinal";
    var botao = document.createElement("button");
    var textoBotao = document.createTextNode("Voltar");
    botao.id = "mybt0";
    botao.classList.add("btn") ;
    botao.classList.add("btn-info");
    var botao1 = document.createElement("button");
    var textoBotao1 = document.createTextNode("Verificar");
    botao1.id = "mybt";
    botao1.classList.add("btn") ;
    botao1.classList.add("btn-success");
    botao.onclick = function(){voltarImagem10();};
    botao1.onclick = function(){verificarResposta10();};
    var titulo = document.createElement("h1");
    titulo.id = "h";
    botao.appendChild(textoBotao);
    botao1.appendChild(textoBotao1);
    test.appendChild(botao);
    test.appendChild(texto);
    test.appendChild(botao1);
    test.appendChild(titulo); 
}
function voltarImagem10(){
    var test = document.getElementById("teste10");
    test.innerHTML = "";
    var imagem = document.createElement("img");
    imagem.id = "carr10";
    imagem.src = "../../../img/gif/ano.gif";
    imagem.classList.add("d-block");
    imagem.classList.add("w-100");
    imagem.onclick = function(){mudarImg10();};
    test.appendChild(imagem);
}
function verificarResposta10(){
    var elemento = document.getElementById("resp10");
    var titulo = document.getElementById("h");
    if(elemento.value === "ANO"){
       titulo.innerHTML = "Você acertou!";
       titulo.style.color = "green";
    } else{
        titulo.innerHTML = "Você errou!";
        titulo.style.color = "red";
    }
}
function verificarResposta010(elemento){
    elemento.value = elemento.value.toUpperCase();
}
/*------------------------------------------------------------------- */
