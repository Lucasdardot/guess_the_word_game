function adicionarusuario(){
    var jogador2 = document.getElementById("player2nameinput").value
    var jogador1 = document.getElementById("player1nameinput").value
    
    localStorage.setItem("jogador1",jogador1)
    localStorage.setItem("jogador2",jogador2)
    window.location = "game_page.html"
}