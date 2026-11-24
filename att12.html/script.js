let inscritos = 0;

function desafio(){

    inscritos = inscritos + 1;

    let times = 0;
    let sobras = inscritos % 3;

    if(inscritos >= 3){
        times = (inscritos - sobras) / 3;
    }

    document.getElementById('resultado').innerHTML =
    "Total de inscritos: " + inscritos;

    document.getElementById('resultado').innerHTML +=
    " Times possíveis: " + times;

    document.getElementById('resultado').innerHTML +=
    " Sobras: " + sobras;

    if(times >= 4){
        document.getElementById('resultado').innerHTML +=
        " Campeonato vai acontecer!";
    }else{
        document.getElementById('resultado').innerHTML +=
        " Ainda não temos 4 times.";
    }

}