let openBtn = document.querySelector('.btn');
let closeBtn = document.querySelector('.close');
let wheel = document.querySelector('.wheel');
let spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);
let popup = document.getElementById("popup");
let resultPopup = document.getElementById("resultPopup");
let spinTimeout;

openBtn.onclick = function () {
  popup.classList.add("open-popup");
  spinOnce();
}

closeBtn.onclick = function () {
  popup.classList.remove("open-popup");
  clearTimeout(spinTimeout);
  resultPopup.classList.remove("open-result-popup");
}

function spinOnce() {
  wheel.style.transition = "transform 3s ease";
  wheel.style.transform = "rotate(" + (360 + value) + "deg)";
  value += Math.ceil(Math.random() * 3600);
  spinTimeout = setTimeout(showResult, 3000);
}

function showResult() {
  let angle = value % 360;
  console.log(angle);
  let resultText = "";

  if (angle >= 0 && angle < 45) {
    resultText = "You won 100!";
  } else if (angle >= 45 && angle < 90) {
    resultText = "You won 1!";
  } else if (angle >= 90 && angle < 135) {
    resultText = "You won 50!";
  } else if (angle >= 135 && angle < 180) {
    resultText = "You won 0!";
  } else if (angle >= 180 && angle < 225) {
    resultText = "You won 1000!";
  } else if (angle >= 225 && angle < 270) {
    resultText = "You won 10!";
  } else if (angle >= 270 && angle < 315) {
    resultText = "You won 5!";
  } else {
    resultText = "You win 20!";
  }


  resultPopup.innerHTML = resultText;
  resultPopup.classList.add("open-result-popup");
}


document.querySelector('#resultPopup .close').onclick = function () {
  resultPopup.classList.remove("open-result-popup");
}
