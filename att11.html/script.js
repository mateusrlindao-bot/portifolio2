function horas(){
 let agora = new Date;
 let hora = agora.getHours();
 let min = agora.getMinutes();
 let seg = agora.getSeconds();

 let mostrar = document.getElementById('resultado');

 mostrar.innerHTML = `<p> Agora são ${hora} ${min} ${seg} minutos.</p>`;

    if(min >= 0 && min <= 10){
    mostrar.innerHTML = `<p> Agora são ${hora} ${min} ${seg} minutos.</p>;
                        <img src="https://i.pinimg.com/736x/6d/83/c4/6d83c47fd145e71fb9ff8259b67dc5f1.jpg" alt="">`
    }


    if(min >= 11 && min <= 20){
    mostrar.innerHTML = `<p> Agora são ${hora} ${min} ${seg} minutos.</p>;
                        <img src="https://play-lh.googleusercontent.com/WWYQtgbHVjVKkazBWqNqKXG-BdAoKfMH-63lVFeb71cHkKeHYwi07PfB6uo4hy-agBeNkywT99-h4AbapBCr=w240-h480-rw" alt="">`
    }


    if(min >= 21 && min <= 30){
    mostrar.innerHTML = `<p> Agora são ${hora} ${min} ${seg} minutos.</p>;
                        <img src="https://static1.purepeople.com.br/articles/7/20/86/47/@/2400972-pabllo-vittar-brincou-ao-falar-da-busca-580x0-2.jpg" alt="">`
    }


    if(min >= 31 && min <= 40){
    mostrar.innerHTML = `<p> Agora são ${hora} ${min} ${seg} minutos.</p>;
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv8lKBErmEilAD-1WoWZITMz82mNO5V2CbKOmy8aWxsboDahbykDJV4b9P&s=10" alt="">`
    }


    if(min >= 41 && min <= 50){
    mostrar.innerHTML = `<p> Agora são ${hora} ${min} ${seg} minutos.</p>;
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBM3mRGjBBZSzTHQZfeT47ACOPhOkdArRJABNO1bE1Lw&s=10" alt="">`
    }

    if(min >= 51 && min <= 60){
    mostrar.innerHTML = `<p> Agora são ${hora} ${min} ${seg} minutos.</p>;
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqEZcJyd5hAdyw6CJe93tbcyOoV5rpQG1VEPKe33lwGFUyeSngidW_p0&s=10" alt="">`
    }
}