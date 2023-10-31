addEventListener("click", ev => {
    if(ev.target.textContent=="junior"){
        location.replace("./corse/jun.html")
    }
    else if (ev.target.textContent=="middle"){
        location.replace("./corse/mid.html")
    }
    else if (ev.target.textContent=="senior"){
        location.replace("./corse/sen.html")
    }
    else if (ev.target.textContent=="fullstack"){
        location.replace("./corse/ful.html")
    }
})
function reloud(objButton){
    location.replace("../index.html")
}
function reloud1(objButton){
    location.replace("./index.html")
}
function inf(objButton){
    location.replace("../information.html")
}
function inf1(objButton){
    location.replace("./information.html")
}
function log(objButton){
    location.replace("./log.html")
}
function log2(objButton){
    location.replace("../log.html")
}
const menuBtn = document.querySelector('.menu-btn');
const sideMenu = document.querySelector('.side-menu');

menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !menuBtn.contains(event.target)) {
        sideMenu.classList.remove('active');
    }
});