const bigcont = document.querySelector("#bigcont");


for (let i = 0; i < 256; i++) {
    var gridsq = document.createElement('gridsq');
    gridsq.setAttribute("style", "height: 5.75%; display: flex ; opacity: 100%; flex: 1 0 5.75%; border: 0.5%; border-style: solid ;");
    gridsq.style.backgroundColor = "grey";
    gridsq.style.borderColor = 'blue';
    bigcont.appendChild(gridsq);
}
