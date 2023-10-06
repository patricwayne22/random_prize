document.getElementsByClassName("btn")[0].onclick = refreshFun;

function refreshFun() {
    var items = Array(
        "Kiss",
        "Hug",
        "Kiss and Hug",
        "Bite",
        "Bite, Kiss and Hug"
    );
    var item = items[Math.floor(Math.random() * items.length)];
    document.getElementById("prize").innerHTML = item;
}
