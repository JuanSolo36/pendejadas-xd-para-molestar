const si = document.querySelector('#si');

si.addEventListener('click',function (){
    alert('jsjajja ya sabia que eras puto XD y joto')
} );
const no= document.querySelector('#no');
no.addEventListener('mouseover',function(){
const randomX = parseInt(Math.random()*100);
const randomY = parseInt(Math.random()*100);
 no.style.setProperty('top',randomY +'%');
 no.style.setProperty('left',randomX +'%');
 no.style.setProperty ( 'transformar' , `traducir(- ${ randomX } %,- ${ randomY } %)` ) ;
})