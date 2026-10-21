function estacao(){
    let mes = prompt("Digite o mês por extenso (ex: Setembro):")
    let mostrar = document.getElementById('resultado');

    mes = mes.toUpperCase();

    console.log(mes);

    if(mes == 'DEZEMBRO' || mes == 'JANEIRO' || mes == 'FEVEREIRO'){
        mostrar.innerHTML =`<p>A estação é VERÃO</p>`
    }
    if(mes == 'MARÇO' || mes == 'ABRIL' || mes == 'MAIO'){
        mostrar.innerHTML =`<p>A estação é OUTONO</p>`
    }
    if(mes == 'JUNHO' || mes == 'JULHO' || mes == 'AGOSTO'){
        mostrar.innerHTML =`<p>A estação é INVERNO</p>`
    }
    if(mes == 'SETEMBRO' || mes == 'OUTUBRO' || mes == 'NOVEMBRO'){
        mostrar.innerHTML =`<p>A estação é PRIMAVERA</p>`
    }

    // O USUÁRIO INFORMA O MẼS POR EXTENSO E O SISTEMA INFORMA A ESTAÇÃO DAQUELE MÊS.
    // BOA SORTE!
}

