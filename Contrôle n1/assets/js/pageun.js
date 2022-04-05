let btnUn = document.getElementById('btnUn');
console.log(btnUn);

let btnDeux = document.getElementById('btnDeux');
console.log(btnDeux);

let btnTrois = document.getElementById('btnTrois');
console.log(btnTrois);

let btnFour = document.getElementById('btnFour');
console.log(btnFour);

let nbrArticlePanier = document.getElementById('header-panier-count');

let nbrIcone = 0;

btnUn.addEventListener('click', function (e) {

    e.preventDefault();

    nbrArticlePanier.innerText = nbrIcone++;
});

btnDeux.addEventListener('click', function (e) {

    e.preventDefault();

    nbrArticlePanier.innerText = nbrIcone++;
});

btnTrois.addEventListener('click', function (e) {

    e.preventDefault();

    nbrArticlePanier.innerText = nbrIcone++;
});

btnFour.addEventListener('click', function (e) {

    e.preventDefault();

    nbrArticlePanier.innerText = nbrIcone++;
});



