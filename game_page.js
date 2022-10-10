var nomejogador1 = localStorage.getItem("jogador1")
var nomejogador2 = localStorage.getItem("jogador2")

var pontuacaojogador1 = 0
var pontuacaojogador2 = 0

document.getElementById("jogador1").innerHTML = nomejogador1 + " : "
document.getElementById("jogador2").innerHTML = nomejogador2 + " : "

document.getElementById("pontuacao1").innerHTML = pontuacaojogador1
document.getElementById("pontuacao2").innerHTML = pontuacaojogador2 

document.getElementById("jogadorpergunta").innerHTML = "turno de pergunta: " + nomejogador1
document.getElementById("jogadorresponde").innerHTML = "turno de resposta: " + nomejogador2

function enviar(){ 
     pegarpalavra = document.getElementById("input").value
     palavra = pegarpalavra.toLowerCase()
    console.log("palavra em caixa baixa" + palavra)
    var charAt1 = palavra.charAt(1)
    console.log(charAt1)
    var dividir = Math.floor(palavra.length/2)
    var charAt2 = palavra.charAt(dividir)
    console.log(charAt2)
    var diminuir = palavra.length - 1
    var charAt3 = palavra.charAt(diminuir)

    var substituir1 = palavra.replace(charAt1,"_")
    var substituir2 = substituir1.replace(charAt2,"_")
    var substituir3 = substituir2.replace(charAt3,"_")
    console.log(substituir3)

    var pergunta = "<h4 id='wordDisplay'> P."+substituir3+"</h4>"
    var inputresposta ="<br>Resposta : <input type='text' id='inputCheckBox'>"
    var botaochecar = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    var linha = pergunta + inputresposta + botaochecar
    document.getElementById("output").innerHTML = linha
    document.getElementById("input").value = ""
}

var turnopergunta = "player1"
var turnoresposta = "player2"


function check(){
    var pegarresposta = document.getElementById("inputCheckBox").value
    var resposta = pegarresposta.toLowerCase()

    if(resposta == palavra){
        if(turnoresposta == "player1"){
            pontuacaojogador1 = pontuacaojogador1 + 1
            document.getElementById(pontuacao1).innerHTML = pontuacaojogador1
        }
        else{
            pontuacaojogador2 = pontuacaojogador2 + 1
            document.getElementById(pontuacao2).innerHTML = pontuacaojogador2
        }
    }

    if(turnopergunta == "player1"){
        turnopergunta = "player2"
        document.getElementById("jogadorpergunta").innerHTML = "turno da pergunta :" + nomejogador2
    }
    else{
        turnopergunta = "player1"
        document.getElementById("jogadorpergunta").innerHTML = "turno da pergunta :" + nomejogador1
    }

    if(turnoresposta == "player1"){
        turnoresposta = "player2"
        document.getElementById("jogadorresponde").innerHTML = "turno da resposta :" + nomejogador2
    }
    else{
        turnoresposta = "player1"
        document.getElementById("jogadorresponde").innerHTML = "turno da resposta :" + nomejogador1
    }
    document.getElementById("output").innerHTML = ""
}


