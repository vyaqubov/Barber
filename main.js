let menuBtn  = document.getElementsByClassName("menu-btn")[0];
let sideNav = document.getElementsByClassName("side-nav-bar-menu")[0];
let menu = document.getElementById("menu"),boolean =true;
menuBtn.addEventListener("click",myfnc);

function myfnc(){
        if(boolean == true) {                   
                sideNav.style.right = "0";
                sideNav.style.transition = "all 0.5s";
                menu.src="img/close.png";
                boolean = false;
        }else {
                sideNav.style.right = "-250px";
                menu.src="img/menu.png";
                boolean = true;
        }
}