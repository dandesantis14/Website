
const menuVisibility = document.getElementById('navMenu');
document.addEventListener('mouseenter',function(){
    menuVisibility.style.opacity = "100%";
});
const menuHide = document.getElementById('navMenu');
document.addEventListener('mouseleave',function(){
    menuHide.style.opacity = '0';
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
const resumeBoxVisibility = document.getElementById('resumeLink');
const resumeBox = document.getElementById('resumeBox');
const contactBoxVisibility = document.getElementById('contactLink');
const contactBox = document.getElementById('contactBox');

const aboutStyle = window.getComputedStyle(aboutBox);
const aboutOpacity = aboutStyle.getPropertyValue('opacity');

//const resumeStyle = window.getComputedStyle(resumeBox);
//const resumeOpacity = resumeStyle.getPropertyValue('opacity');

//const contactStyle = window.getComputedStyle(contactBox);
//const contactOpacity = contactStyle.getPropertyValue('opacity');

aboutBoxVisibility.addEventListener('click',function(){

    const resumeStyle = window.getComputedStyle(resumeBox);
    const resumeOpacity = resumeStyle.getPropertyValue('opacity');
    const contactStyle = window.getComputedStyle(contactBox);
    const contactOpacity = contactStyle.getPropertyValue('opacity');

    if(resumeOpacity === '0' && contactOpacity === '0'){
        aboutBox.style.opacity = "100%";
    }
    else{
        resumeBox.style.opacity = 0;
        contactBox.style.opacity = 0;
        setTimeout(function(){aboutBox.style.opacity = "100%";},500);
    }
});

resumeBoxVisibility.addEventListener('click',function(){
    
    const aboutStyle = window.getComputedStyle(aboutBox);
    const aboutOpacity = aboutStyle.getPropertyValue('opacity');
    const contactStyle = window.getComputedStyle(contactBox);
    const contactOpacity = contactStyle.getPropertyValue('opacity');

    if(aboutOpacity === '0' && contactOpacity === '0'){
        resumeBox.style.opacity = "100%";
    }
    else{
        aboutBox.style.opacity = 0;
        contactBox.style.opacity = 0;
        setTimeout(function(){resumeBox.style.opacity = "100%";},500);
    }
});

contactBoxVisibility.addEventListener('click',function(){
    
    const aboutStyle = window.getComputedStyle(aboutBox);
    const aboutOpacity = aboutStyle.getPropertyValue('opacity');
    const resumeStyle = window.getComputedStyle(resumeBox);
    const resumeOpacity = resumeStyle.getPropertyValue('opacity');

    if(aboutOpacity === '0' && resumeOpacity === '0'){
        contactBox.style.opacity = '100%';
    }
    else{    
        aboutBox.style.opacity = 0;
        resumeBox.style.opacity = 0;
        setTimeout(function(){contactBox.style.opacity = "100%";},500);
    }
});
