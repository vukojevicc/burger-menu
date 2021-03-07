const meni = document.querySelector('.menu-btn');
var meniOtvoren = false;

meni.addEventListener('click', function(){
    if(!meniOtvoren){
        meni.classList.add('open');
        meniOtvoren = true;
    }else{
        meni.classList.remove('open');
        meniOtvoren = false;
    }
});