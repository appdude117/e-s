const bigcont = document.querySelector("#bigcont");


for (let i = 0; i < 256; i++) {
    var gridsq = document.createElement('gridsq');
    gridsq.setAttribute("style", "height: 5.75%; display: flex ; opacity: 100%; flex: 1 0 5.75%; gap: 0.5%; row-gap: 0.5% ; width 5.75%");
    gridsq.style.backgroundColor = "black";
    bigcont.appendChild(gridsq);
}
