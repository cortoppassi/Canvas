const canvas = document.getElementById('desenho1');
const ctx = canvas.getContext('2d');

function desenhaImagem() {
    let imagem = new Image()
    imagem.src = "graveyardtilesetnew/png/BG.png"
    imagem.onload = function() {
        ctx.drawImage(imagem,0,0,700,500)
    }
};

desenhaImagem()
let imagemDoNinja = new Image();
let ninjaImagem = 0;

imagemDoNinja.src = 'ninjaadventurenew/png/Run__000.png';

let width = canvas.width;
let height = canvas.height;

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 39:
            andarFrente++
            movimento()
        break;
        case 38:
            pular++
            movimentoDePulo()
        break;
    }
   
};

function movimentoDePulo() {
    console.log('pulou')
    ctx.clearRect(0, 0, width, height);
    if(ninjaImagem == 0){
        imagemDoNinja.src = 'ninjaadventurenew/png/Jump__000.png';
        ninjaImagem = 1;
        pular
    }
    else if (ninjaImagem == 1){
        imagemDoNinja.src = 'ninjaadventurenew/png/Jump__001.png';
        ninjaImagem = 2;
        pular
    }
    else if (ninjaImagem == 2){
        imagemDoNinja.src = 'ninjaadventurenew/png/Jump__002.png';
        ninjaImagem = 3;
        pular
    }
    else if (ninjaImagem == 3){
        imagemDoNinja.src = 'ninjaadventurenew/png/Jump__003.png';
        ninjaImagem = 4;
        pular
    }
    else if (ninjaImagem == 4){
        imagemDoNinja.src = 'ninjaadventurenew/png/Jump__004.png';
        ninjaImagem = 5;
        pular
    }
    else if (ninjaImagem == 5){
        imagemDoNinja.src = 'ninjaadventurenew/png/Jump__005.png';
        ninjaImagem = 6;
        pular
    }
    else if (ninjaImagem == 6){
        imagemDoNinja.src = 'ninjaadventurenew/png/Jump__006.png';
        ninjaImagem = 7;
        pular
    }
    else if (ninjaImagem == 7){
        imagemDoNinja.src = 'ninjaadventurenew/png/Jump__007.png';
        ninjaImagem = 8;
        pular
    }
    else if (ninjaImagem == 8){
        imagemDoNinja.src = 'ninjaadventurenew/png/Jump__008.png';
        ninjaImagem = 9;
        pular
    }
    else if (ninjaImagem == 9){
        imagemDoNinja.src = 'ninjaadventurenew/png/Jump__009.png';
        ninjaImagem = 0;
        pular
    }
   


};

function movimento() {
    console.log('correu')
    ctx.clearRect(0, 0, width, height);
         if(ninjaImagem == 0){
            imagemDoNinja.src = 'ninjaadventurenew/png/Run__001.png';
            ninjaImagem = 1;
            andarFrente
        }
        else if (ninjaImagem == 1){
            imagemDoNinja.src = 'ninjaadventurenew/png/Run__002.png';
            ninjaImagem = 2;
            andarFrente
        }
        else if (ninjaImagem == 2){
            imagemDoNinja.src = 'ninjaadventurenew/png/Run__003.png';
            ninjaImagem = 3;
            andarFrente
        }
        else if (ninjaImagem == 3){
            imagemDoNinja.src = 'ninjaadventurenew/png/Run__004.png';
            ninjaImagem = 4;
            andarFrente
        }
        else if (ninjaImagem == 4){
            imagemDoNinja.src = 'ninjaadventurenew/png/Run__005.png';
            ninjaImagem = 5;
            andarFrente
        }
        else if (ninjaImagem == 5){
            imagemDoNinja.src = 'ninjaadventurenew/png/Run__006.png';
            ninjaImagem = 6;
            andarFrente
        }
        else if (ninjaImagem == 6){
            imagemDoNinja.src = 'ninjaadventurenew/png/Run__007.png';
            ninjaImagem = 7;
            andarFrente
        }
        else if (ninjaImagem == 7){
            imagemDoNinja.src = 'ninjaadventurenew/png/Run__008.png';
            ninjaImagem = 8;
            andarFrente
        }
        else if (ninjaImagem == 8){
            imagemDoNinja.src = 'ninjaadventurenew/png/Run__009.png';
            ninjaImagem = 9;
            andarFrente
        }
        else if (ninjaImagem == 9){
            imagemDoNinja.src = 'ninjaadventurenew/png/Run__009.png';
            ninjaImagem = 0;
            andarFrente
        }
};

let numSprite = 10
let Limagem = 1
let larguraSprite = 1
let numSpries = 1

let tamanhoDoSprite = 900
let chao = 350
let larguraNinja = 150
let alturaNinja = 300
let andarFrente = 0
let pular = 1
imagemDoNinja.addEventListener('load', ()=>{
    
    Limagem = imagemDoNinja.width
    larguraSprite = Limagem / numSpries

     ctx.drawImage
        (
            imagemDoNinja,
             numSprite,
            pular,
            larguraSprite,
            tamanhoDoSprite,
            andarFrente,
            chao,
            larguraNinja,
            alturaNinja
        )
})

    
