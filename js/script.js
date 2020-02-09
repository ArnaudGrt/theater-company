function animBtnMenuSup(){
    document.querySelector('.btnMenu_Resp').classList.toggle('menuActif');
    document.querySelector('.btnMenu_Resp').classList.toggle('menuNonActif');
    document.querySelector('.barreLaterale').classList.toggle('afficherBarreLaterale');
}

document.querySelector('.btnMenu_Resp').addEventListener('click', animBtnMenuSup);

var imgSlider = document.querySelectorAll('.imgSlider');
var compteur = 0;

function animSlider(obj){
    compteur = compteur + obj;

    if(compteur < 0){
        compteur = imgSlider.length - 1;
    }
    if(compteur > imgSlider.length - 1){
        compteur = 0;
    }

    for(var i = 0; i < imgSlider.length; i++){
        imgSlider[i].style.display = "none";
        imgSlider[i].className = "imgSlider img" + i;
    }

    document.querySelector('.img' + compteur).classList.add('sliderActif');
}

function lazyLoad(){
    document.querySelectorAll("[data-src]").forEach(e =>{
		e.src= e.dataset.src;
		delete e.dataset.src;
	});
}

window.addEventListener("load", lazyLoad);