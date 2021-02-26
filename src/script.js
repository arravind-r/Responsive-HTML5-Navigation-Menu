var mobMenuContainer = document.getElementById("mobMenuCont");
var mobMenuWrap = document.getElementById("mobMenuWrap");

function mobMenuToggle() {    
    mobMenuContainer.classList.add("displayon");
    mobMenuWrap.classList.add("displayon");
}

function closeMobMenuToggle() {
    mobMenuContainer.classList.remove("displayon");
    mobMenuWrap.classList.remove("displayon");
}