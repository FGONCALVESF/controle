let saisie = document.getElementById('inputForm');
console.log(saisie);


let erreur = document.getElementById('erreur');

let quantity = document.getElementsByClassName('quantity')[0];

let priceTab = document.getElementsByClassName('priceTab')[0];

const suppr = document.getElementById('suppr');




saisie.addEventListener('keyup', function(e){

    console.log(this.valueAsNumber);

    // if (isNaN(saisie.valueAsNumber)) {

    //     erreur.style.display = 'inline'; 
    //     erreur.className = "alert alert-danger" 
    //     saisie.style.borderColor = 'red'; 

    // } else {

    //     erreur.style.display = 'none'; 
    //     saisie.style.borderColor = '#0097A7'; 
    // }

});




