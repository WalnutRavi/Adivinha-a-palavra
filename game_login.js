function login(){
    player1=document.getElementById("getname1").value ;
    player2=document.getElementById("getname2").value ;

    localStorage.setItem("name1",player1);
    localStorage.setItem("name2",player2);
    window.location="game_page.html"
}