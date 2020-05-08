const toggle = document.getElementById('toggle');
const header = document.getElementById('header');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const overview = document.getElementsByClassName('overview__list');
const body = document.body;

toggle.addEventListener('input', e =>{
    const isChecked = e.target.checked;
    if(isChecked){
        body.classList.add('dark-theme');
        header.classList.add('dark-theme');
        one.classList.add('dark-theme');
        two.classList.add('dark-theme');
        three.classList.add('dark-theme');
        four.classList.add('dark-theme');

        for(var i =0; i < overview.length; i++){
            overview[i].classList.add('dark-theme');
        }
    }else{
        body.classList.remove('dark-theme');
        header.classList.remove('dark-theme');
        one.classList.remove('dark-theme');
        two.classList.remove('dark-theme');
        three.classList.remove('dark-theme');
        four.classList.remove('dark-theme');

        for(var i =0; i < overview.length; i++){
            overview[i].classList.remove('dark-theme');
        }
    }
});