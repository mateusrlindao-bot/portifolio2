function calcular(){
    let nota1tri = Number(prompt("Digite a nota do primeiro trimestre"));
    let nota2tri = Number(prompt("Digite a nota do segundo trimestre"));

    let resultado = 180-(nota1tri+nota2tri);
    alert("Você precisa de " + resultado + " para ser aprovado");

    if(resultado <= 0){
        alert("Parabéns! Você já está aprovado por nota!!!");
    }else{
        ("Você precisa de " + resultado + " para ser aprovado ");
    }
}