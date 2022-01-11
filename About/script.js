var burger = document.getElementById("burger");
var phoneNav = document.getElementById("phoneNav");
var nav = document.getElementById("nav");
var sticky = nav.offsetTop;
var b2t = document.getElementById("b2t");
var typewriter = document.getElementById("typewriter");
var m_content = document.getElementById("m_content");

burger.addEventListener("click", burgerClick);


function burgerClick(){
    phoneNav.classList.toggle("block");
}


window.onload = function(){
    typeWriter()
}

window.onscroll = function(){
    scrollTop(), aboutScroll(), countUp()
}

function scrollTop(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        nav.classList.add("stick");
        header.style.height = "100vh";
        // header_ctn.style.paddingTop = "260px";
        b2t.classList.add("b2d_show");
        // nav.classList.add("unstick");
        // document.getElementById("myNav").className= "test";
    } else {
        nav.classList.remove("stick");
        header.style.height = "100vh";
        // header_ctn.style.paddingTop = "150px";
        b2t.classList.remove("b2d_show");
        // nav.classList.add("unstick");
        // document.getElementById("myNav").className="";
    }
}

function aboutScroll(){
    if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300){
        m_content.classList.add("m_content_show");
    }
}


var i = 0;
var txt = 'We are Drink_Water Tech';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        typewriter.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}



// The Count Up
var fwers_num = document.getElementById("fwers_num");
var stnds_num = document.getElementById("stnds_num");
var class_num = document.getElementById("class_num");
var courses_num = document.getElementById("courses_num");
var followers = document.getElementById("followers");

const abt_ctn = document.getElementById("abt_ctn");
const count_up = abt_ctn.offsetTop;



// console.log(document.body.scrollTop);

function countUp(){
    if(window.pageYOffset == count_up){
        var i = 0;
        if (i === 0){
            var interval = setInterval(function(){
                fwers_num.innerHTML = i++;
                if (i > 125) 
                    clearInterval(interval);
            }, 50);
        }
        else if (i !== 0){
            i = 125;
        }
    }
}





// stnds_num.innerHTML = i++;
// class_num.innerHTML = i++;
// courses_num.innerHTML = i++;