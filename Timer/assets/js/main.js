function criaHoraDosSegundos(segundos){
    const data = new Date (segundos*1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12 : false,
        timeZone :'UTC'
    });

}

console.log(criaHoraDosSegundos(10));

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function iniciarRelogio (){
     timer = setInterval(function(){
        segundos++;
        relogio.innerHTML=criaHoraDosSegundos(segundos);
    }, 1000)
}

// document.addEventListener('click', function(e) {
//     const relo = e.target;

//     if(relo.classlist.contains('zerar')){
//         clearInterval(timer);
//         relogio.innerHTML='00:00:00';
//         segundos = 0;
//     }

//     if(relo.classlist.contains('iniciar')){
//         relogio.classList.remove('pausado');
//         clearInterval(timer);
//         iniciarRelogio();
//      }

//     if(relo.classlist.contains('pausar')){
//         relogio.classList.add('pausado');
//         clearInterval(timer);
//      }


// });

iniciar.addEventListener('click',function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer);
    iniciarRelogio();
});
pausar.addEventListener('click',function(event){
    relogio.classList.add('pausado')
    clearInterval(timer);
});
zerar.addEventListener('click',function(event){
    clearInterval(timer);
    relogio.innerHTML='00:00:00';
    segundos = 0;
});