var player1=localStorage.getItem("name1");
var player2=localStorage.getItem("name2");

var score1=0;
var score2=0;

document.getElementById("player1").innerHTML=player1+":";
document.getElementById("player2").innerHTML=player2+":";
document.getElementById("score_player1").innerHTML=score1;
document.getElementById("score_player2").innerHTML=score2;

document.getElementById("turno_pergunta").innerHTML="Turno de pergunta -"+player1;
document.getElementById("turno_resposta").innerHTML="Turno de resposta -"+player2;

function enviar(){
    getword=document.getElementById("word").value;
    word=getword.toLowerCase();

    charAt1=word.charAt(1);
    lengthd1=Math.floor(word.length/2);

    charAt2=word.charAt(lengthd1);
    lengthMenos1=word.length-1;
    charAt3=word.charAt(lengthMenos1);

    removeCharAt1=word.replace(charAt1,"_");
    removeCharAt2=removeCharAt1.replace(charAt2,"_");
    removeCharAt3=removeCharAt2.replace(charAt3,"_");

    qw="<h4 id='wordDisplay'>P."+removeCharAt3+"</h4>";
    inputBox="<br>resposta:<input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row=qw+inputBox+checkButton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value=""


}
    var questionTurn="player1";
    var respTurn="player2";
function check(){
    get_resp=document.getElementById("inputCheckBox").value;
    resp=get_resp.toLowerCase();
    if (resp==word) {
       if (respTurn=="player1") {
        score1=score1+1;
        document.getElementById("score_player1").innerHTML=score1;
       } else{
        score2=score2+1;
        document.getElementById("score_player2").innerHTML=score2;
       }
    }
    else{
        alert("A palavra está incorreta")
    }

    if (questionTurn=="player1") {
        questionTurn="player2";
        document.getElementById("turno_pergunta").innerHTML="Turno de pergunta -"+player2;
    }
    else{questionTurn="player1";
    document.getElementById("turno_pergunta").innerHTML="Turno de pergunta -"+player1;
    }

    if (respTurn=="player1") {
        respTurn="player2";
        document.getElementById("turno_resposta").innerHTML="Turno de resposta -"+player2;
    }
    else{respTurn="player1";
    document.getElementById("turno_resposta").innerHTML="Turno de resposta -"+player1;

    }
    document.getElementById("output").innerHTML=""
}