const sidebarBtn1 = document.getElementById("sidebar-button-1");
const sidebarBtn2 = document.getElementById("sidebar-button-2");
const sidebarBtn3 = document.getElementById("sidebar-button-3");
const sidebarBtn4 = document.getElementById("sidebar-button-4");
const sidebarBtn5 = document.getElementById("sidebar-button-5");
const sidebarBtn6 = document.getElementById("sidebar-button-6");



// Panic Button
    sidebarBtn1.onclick = () => {
    window.open("https://classroom.google.com");
}

// YTMP4
sidebarBtn2.onclick = () => {
    iframeSrcInput.value = "https://ytmp4.is";
    iframeScreen.setAttribute("src", "https://ytmp4.is");
}

// Classroom 20x Game Site
sidebarBtn3.onclick = () => {
    iframeSrcInput.value = "https://classroom-20x.pages.dev/";
    iframeScreen.setAttribute("src", "https://classroom-20x.pages.dev/");
}

// Rammerhead
sidebarBtn4.onclick = () => {
    iframeSrcInput.value = "https://quizlet.gq";
    iframeScreen.setAttribute("src", "https://quizlet.gq");
}

// Doge Unblocker
sidebarBtn5.onclick = () => {
    iframeSrcInput.value = "https://l.jk.al/";
    iframeScreen.setAttribute("src", "https://l.jk.al/");
}

// Interstellar
sidebarBtn6.onclick = () => {
    iframeSrcInput.value = "https://gointerstellar.app";
    iframeScreen.setAttribute("src", "https://gointerstellar.app");
}




