var count = 1;

function addFunction() {
    var btn = document.createElement("button");
    btn.innerHTML = `CLICK ME (${count})`;
    btn.setAttribute("id", "btn_" + count);
    btn.setAttribute("class", "btn btn-outline-danger m-2");
    document.getElementById("buttonContainer").appendChild(btn);
    count++;
}

function delFunction() {
    if (count > 1) {
        count--;
        var btn = document.getElementById("btn_" + count);
        if (btn) {
            document.getElementById("buttonContainer").removeChild(btn);
        }
    }
}
