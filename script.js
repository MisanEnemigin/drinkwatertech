var burger = document.getElementById("burger");
var phoneNav = document.getElementById("phoneNav");
var testSha = document.getElementById("testSha");
var nav = document.getElementById("nav");
var sticky = nav.offsetTop;
var header = document.getElementById("header");
var header_ctn = document.getElementById("header_container");
var qt = document.getElementsByClassName("qt");
var praisal_ran = document.getElementById('praisal_ran');
var mobile = document.getElementById("mobile");
var responsive = document.getElementById("responsive");
var b2t = document.getElementById("b2t");



burger.addEventListener("click", burgerClick);


function burgerClick(){
    phoneNav.classList.toggle("block");
}

// nav.addEventListener("scroll", scrollTop);
window.onscroll = function(){
    qt_div(),scrollTop(),moveUp_diff()
}

// window.scrollBy(0, window.outerHeight);

function scrollTop(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        nav.classList.add("stick");
        header.style.height = "99vh";
        header_ctn.style.paddingTop = "260px";
        b2t.classList.add("b2d_show");
        // nav.classList.add("unstick");
        // document.getElementById("myNav").className= "test";
    } else {
        nav.classList.remove("stick");
        header.style.height = "100vh";
        header_ctn.style.paddingTop = "150px";
        b2t.classList.remove("b2d_show");
        // nav.classList.add("unstick");
        // document.getElementById("myNav").className="";
    }
}

// function scrollTop() {
// 	if (window.pageYOffset > sticky) {
// 		nav.classList.add("stick");
// 	}
// 	else {
// 		nav.classList.remove("stick");
// 	}
// }

function qt_div(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        testSha.classList.add("scrollTest");
        // console.log(document.documentElement.scrollTop);
        for (let i=0 ; i<qt.length; i++) {
            qt[i].classList.add("qt"+i);
        }
    }
    //  else {
    //     testSha.classList.remove("scrollTest");
    //     for (let i=0 ; i<qt.length; i++) {
    //         qt[i].classList.remove("qt"+i);
    //     }
    // }
}

var ranTextBox = ['HTML', 'CSS', 'Java Script', 'Scratch', 'Java', 'Python', 'PHP', 'MySqli'],
urIndex = 0;


function random() {
praisal_ran.innerHTML = ranTextBox[urIndex];
urIndex++;

if (urIndex == ranTextBox.length) {
    urIndex = 0;
}

setTimeout("random()", 2000);
}
random();


function moveUp_diff(){
    if(document.body.scrollTop > 900 || document.documentElement.scrollTop > 900){
        mobile.classList.add("show_mobile");
        responsive.classList.add("show_responsive");
    } 
    // else {
    //     mobile.classList.remove("show_mobile_responsive");
    //     responsive.classList.remove("show_mobile_responsive");
    // }
}
