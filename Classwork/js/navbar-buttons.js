const zoomOutBtn = document.getElementById("zoom-out");
const zoomInBtn = document.getElementById("zoom-in");
const refreshBtn = document.getElementById("refresh");
const closeBtn = document.getElementById("close");

zoomInBtn.onclick = () => {
    let currentZoom = parseFloat(iframeScreen.style.zoom) || 100;
    iframeScreen.style.zoom = (currentZoom + 10) + '%';
}

zoomOutBtn.onclick = () => {
    let currentZoom = parseFloat(iframeScreen.style.zoom) || 100;
    iframeScreen.style.zoom = (currentZoom - 10) + '%';
}

refreshBtn.onclick = () => {
    iframeScreen.src = iframeScreen.src;
}

closeBtn.onclick = () => {
    iframeScreen.src = "";
    iframeSrcInput.value = "";
}


