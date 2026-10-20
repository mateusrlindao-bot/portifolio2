function estacao(){
    let mes = prompt("Digite o mês por extenso (ex: Setembro):")
    let mostrar = document.getElementById('resultado');

    mes = mes.toUpperCase();

    console.log(mes);

    if(mes == 'DEZEMBRO' || mes == 'JANEIRO' || mes == 'FEVEREIRO'){
        alert("A estação é VERÃO")
    }
    if(mes == 'MARÇO' || mes == 'ABRIL' || mes == 'MAIO'){
        alert("A estação é OUTONO")
    }
        
    if(mes == 'JUNHO' || mes == 'JULHO' || mes == 'AGOSTO'){
        alert("A estação é INVERNO")
    }
    if(mes == 'SETEMBRO' || mes == 'OUTUBRO' || mes == 'NOVEMBRO'){
        alert("A estação é PRIMAVERA")
    }

    // O USUÁRIO INFORMA O MẼS POR EXTENSO E O SISTEMA INFORMA A ESTAÇÃO DAQUELE MÊS.
    // BOA SORTE!
}

