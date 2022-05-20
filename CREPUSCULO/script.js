let acertos = 0;


const verResposta= function(opcao){
    switch(opcao){
        case 'B': 
            document.getElementById("check1").innerHTML = "Resposta Correta!"
            document.getElementById("img1").src = "https://c.tenor.com/PacnlTfRatkAAAAd/bella-swan-twilight.gif"
            acertos += 1;
            break
        case 'A':
            document.getElementById("check1").innerHTML = "Resposta Incorreta, o nome completo de Bella é Isabella Marie Swan"
            document.getElementById("img1").src = "https://c.tenor.com/HYU2y12cKl0AAAAC/bella-bella-swan.gif"
            break
        }
}
const verResposta2= function(opcao){
    switch(opcao){
        case 'B': 
            document.getElementById("check2").innerHTML = "Resposta Correta!"
            document.getElementById("img2").src = "https://c.tenor.com/S1jPElopPFEAAAAC/smile-edward-cullen.gif"
            acertos += 1;
            break
        case 'A':
            document.getElementById("check2").innerHTML = "Resposta Incorreta, o nome completo do Edward é Edward Cullen."
            document.getElementById("img2").src = "https://c.tenor.com/8BP-2NhHD08AAAAM/edward-twilight-twilight-edward.gif"
            break
        }
}
const verResposta3= function(opcao){
    switch(opcao){
        case 'B': 
            document.getElementById("check3").innerHTML = "Resposta Correta!"
            document.getElementById("img3").src = "https://c.tenor.com/Hr5X4tHl6rAAAAAC/bellacullen-bella.gif"
            acertos += 1;
            break
        case 'A':
            document.getElementById("check3").innerHTML = "Resposta Incorreta, o nome da filha do Edward e da Bella é Renesmee."
            document.getElementById("img3").src = "https://c.tenor.com/8djwpIXuGV4AAAAC/renesme-renesme-cullen.gif"
            break
    }
}
const verResposta4= function(opcao){
    switch(opcao){
        case 'B': 
            document.getElementById("check4").innerHTML = "Resposta Correta!"
            document.getElementById("img4").src = "https://c.tenor.com/x6z7t62j2QMAAAAd/laughing-edward-cullen.gif"
            acertos += 1;
            break
        case 'A':
            document.getElementById("check4").innerHTML = "Resposta Incorreta, Edward virou vampiro com 17 anos de idade."
            document.getElementById("img4").src = "https://c.tenor.com/QQFqNTnWQ44AAAAd/look-down-edward-cullen.gif"
            break
    }
}
const verResposta5= function(opcao){
    switch(opcao){
        case 'B': 
            document.getElementById("check5").innerHTML = "Resposta Correta!"
            document.getElementById("img5").src = "https://c.tenor.com/ZVEt2jvAQOUAAAAC/carlisle.gif"
            acertos += 1;
            break
        case 'A':
            document.getElementById("check5").innerHTML = "Resposta Incorreta, quem transformou Edward foi Carlisle."
            document.getElementById("img5").src = "https://c.tenor.com/lpmaI8oBkVwAAAAC/stare-carlisle.gif"
            break
    }
}

function verificar() {
    let pontuacao = document.getElementById('pontuacao');
    let pontuacao2 = document.getElementById('pontuacao2');
   
    pontuacao2.innerHTML = "Pontuação: " + acertos;

    if(acertos >=4){
        pontuacao.innerHTML= "Você é muitooooooo fã da saga!";
    } else if( acertos ==3 ){
        pontuacao.innerHTML= "Você precisa assistir mais vezes :/";
    }else{
        pontuacao.innerHTML= "Você não é fã :(";
    }
    
}