let cont_azar = 0;
let cont_sorte = 0;

function sorte(){
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);

    if(num > 50){
        cont_sorte++;
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>Sorte: ${cont_sorte}</p>
                             <p>Azar: ${cont_azar}</p>
                             <img src="https://img.magnific.com/psd-premium/lucky-em-portugues-clover-com-a-palavra-sorte-em-renderizacao-3d_363450-7386.jpg?semt=ais_hybrid&w=740&q=80">`;
    
    }else{
        cont_azar++;
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>Sorte: ${cont_sorte}</p>
                             <p>Azar: ${cont_azar}</p>
                             <img src="https://cdn.mensagenscomamor.com/content/images/m000147977.jpg?v=1&w=1080&h=1080">`;
    
    }

}