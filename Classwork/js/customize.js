const rootElement = document.documentElement;
const customizeMenu = document.getElementById("customize-menu");
const customizeMenuOpener = document.getElementById("customize-opener");
const customizeSave = document.getElementById("customize-save");


customizeMenu.style.display = "none";

customizeMenuOpener.addEventListener("click", () => {
    if (customizeMenu.style.display == "none"){
        customizeMenu.style.display = "block";
    }else{
        customizeMenu.style.display = "none";
    }
});



customizeSave.onclick = () => {
    var textColorVar = document.getElementById("customize-input1").value;
var borderColorVar = document.getElementById("customize-input2").value;
var backgroundColorVar = document.getElementById("customize-input3").value;
    rootElement.style.setProperty('--font-color', textColorVar);
    rootElement.style.setProperty('--border-color', borderColorVar);
    rootElement.style.setProperty('--background-color', backgroundColorVar);
}
