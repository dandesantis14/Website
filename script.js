
const menuVisibility = document.getElementById('navMenu');
document.addEventListener('mouseenter',function(){
    menuVisibility.style.opacity = "100%";
});

/*
const boxGrab = document.getElementsByClassName('box');
function visibilityReset(){
    for(const i = 0; i<boxGrab.length;i++){
        boxGrab[i].style.opacity = "0";
    }
}
*/
const aboutBoxVisibility = document.getElementById('aboutLink');
const aboutBox = document.getElementById('aboutBox');
aboutBoxVisibility.addEventListener('click',function(){
    aboutBox.style.opacity = "100%";
});

const resumeBoxVisibility = document.getElementById('resumeLink');
const resumeBox = document.getElementById('resumeBox');
resumeBoxVisibility.addEventListener('click',function(){
    resumeBox.style.opacity = "100%";
});

const contactBoxVisibility = document.getElementById('contactLink');
const contactBox = document.getElementById('contactBox');
contactBoxVisibility.addEventListener('click',function(){
    contactBox.style.opacity = "100%";
});