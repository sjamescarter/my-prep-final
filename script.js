const wrapper = document.getElementById('wrapper');
const content = document.getElementById('content');

function autoHeight() {
    wrapper.style.height = content.clientHeight + "px";
}

autoHeight();
window.addEventListener('resize', autoHeight);

const menu1 = document.getElementById('menu1');
const menu2 = document.getElementById("menu2");
const menu3 = document.getElementById("menu3");
const menu4 = document.getElementById("menu4");
const me = document.getElementById("me");
const music = document.getElementById("music");
const ministry = document.getElementById("ministry");
const coding = document.getElementById("coding");

function makeMeVisible() {
    me.style.display = "block";
    music.style.display = "none";
    ministry.style.display = "none";
    coding.style.display = "none";
    autoHeight('wrapper');
}

function makeMusicVisible() {
    me.style.display = "none";
    music.style.display = "block";
    ministry.style.display = "none";
    coding.style.display = "none";
    autoHeight('wrapper');

}

function makeMinistryVisible() {
    me.style.display = "none";
    music.style.display = "none";
    ministry.style.display = "block";
    coding.style.display = "none";
    autoHeight('wrapper');
}

function makeCodingVisible() {
    me.style.display = "none";
    music.style.display = "none";
    ministry.style.display = "none";
    coding.style.display = "block";
    autoHeight('wrapper');
}

menu1.addEventListener("click", makeMeVisible);
menu2.addEventListener("click", makeMusicVisible);
menu3.addEventListener("click", makeMinistryVisible);
menu4.addEventListener("click", makeCodingVisible);

window.addEventListener('resize', autoHeight);