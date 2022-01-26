let intervalId;
function start() {
    var e1 = document.getElementById("dif");
    var value = e1.options[e1.selectedIndex].value;
    intervalId = setInterval(() => {
        document.body.style.backgroundImage = `url(${Math.floor((Math.random() * 11) + 1)}.jpg)`;
    }, value);
}


document.body.addEventListener("click", (e) => {
    if (e.target == document.body) {
        const div = document.body;
        const style = window.getComputedStyle(div, false)
        const bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
        var e1 = document.getElementById("hero");
        var value = e1.options[e1.selectedIndex].value;
        var text = e1.options[e1.selectedIndex].textContent;
        console.log(bi);
        if (bi == `http://127.0.0.1:5500/${value}.jpg`) {
            let cur = parseInt(document.querySelector(".score").textContent);
            cur += 5;
            document.querySelector(".score").textContent = cur;
        }
        else {
            let cur = parseInt(document.querySelector(".score").textContent);
            cur -= 1;
            document.querySelector(".score").textContent = cur;
        }
    }
})

document.querySelector("button").addEventListener("click", () => {
    start();
    document.querySelector(".inp1").style.display = "none";
    document.querySelector(".scoreDiv").style.display = "block";
    if (document.body.clientWidth > 700) {
        document.querySelector(".reset").style.display = "inline";
        document.querySelector(".home").style.display = "inline";
    }
    var e1 = document.getElementById("hero");
    var text = e1.options[e1.selectedIndex].textContent;
    document.querySelector(".name").innerHTML = text;
})

document.querySelector(".reset").addEventListener("click", () => {
    document.querySelector(".score").textContent = 0;
})
document.querySelector(".home").addEventListener("click", () => {
    location.reload();
})