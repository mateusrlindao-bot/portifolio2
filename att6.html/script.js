function site (){
    let nome;
    let result;
    let agora = new Date

    nome = prompt ("Qual é seu nome?");
    result = window.document.getElementById('resultado');

    result.innerHTML = `<p>Olá, ${nome}! é um prazer te conhecer! <br> O sistema me enviou a seguinte informação:</br> <mark>${agora}</mark> </p>`;
}