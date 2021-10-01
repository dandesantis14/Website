
const menuVisibility = document.getElementById('navMenu');
document.addEventListener('mouseenter',function(){
    menuVisibility.style.opacity = "100%";
});

const aboutBoxVisibility = document.getElementById('aboutLink');
const aboutBox = document.getElementById('aboutBox');
aboutBoxVisibility.addEventListener('click',function(){
    aboutBox.style.display = "block";
    aboutBox.style.opacity = "100%";
});
