let countDownn = function() {
    let timer = document.getElementById("timer");
    timer.textContent--;
    if (timer.textContent <= 0) {
      clearTimeout(timer);
      alert("Вы победили в конкурсе!");
    } 
}

setInterval(countDownn, 1000);

