
const toggleIcon = document.querySelector(".toggle-icon");
const sideNav = document.querySelector(".sidenav");

const toggleNav = () => {
    if (sideNav.style.width === "200px") {
        sideNav.style.width = "0px";
        toggleIcon.style.marginLeft = "0px";
    } else {
        sideNav.style.width = "200px";
        toggleIcon.style.marginLeft = "200px";
    }
}

toggleIcon.onclick = () => {
    toggleNav();
}

window.onresize = () => {
    if (window.innerWidth < 900) {
        sideNav.style.width = "0px";
        toggleIcon.style.marginLeft = "0px";
        toggleIcon.style.display = "block";
    } else {
        sideNav.style.width = "200px";
        toggleIcon.style.marginLeft = "200px";
        toggleIcon.style.display = "none";
    }
}
