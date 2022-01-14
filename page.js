let timer;
let timer1;
let x = 0;
let y = 0;
countdown();
function countdown() {
    document.getElementById("rocket").innerHTML = "Вы находитесь на странице: " + y + ":" + x;
    x++;
    if (x == 60) {
        y++;
        x = 0;
        timer = setTimeout(countdown, 1000);
        if (y == 2 || x == 60) {
            document.getElementById("rocket").innerHTML = "Страница устарела!";
            clearTimeout(timer);
            clearTimeout(timer1);
        }
    } else {
        timer = setTimeout(countdown, 1000);
    }
}