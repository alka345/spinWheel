let openBtn = document.querySelector('.btn');
let closeBtn = document.querySelector('.close')
let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.floor(Math.random() * 3600);
let popup = document.getElementById("popup");


openBtn.onclick= function(){
    popup.classList.add("open-popup")
}

closeBtn.onclick = function(){
    popup.classList.remove("open-popup")  
}


spinBtn.onclick = function(){
wheel.style.transform = "rotate(" + value + "deg)";
value += Math.ceil(Math.random() * 3600);

}