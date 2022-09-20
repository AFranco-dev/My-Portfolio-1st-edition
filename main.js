const level01 = document.querySelectorAll(".level01");
const level02 = document.querySelectorAll(".level02");
const level03 = document.querySelectorAll(".level03");
const level04 = document.querySelectorAll(".level04");
const level05 = document.querySelectorAll(".level05");

document.addEventListener("scroll", () => {
    level01[0].style.bottom = -0.5 * scrollY + "px";
    level01[1].style.bottom = -0.5 * scrollY + "px";
    level01[2].style.bottom = -0.5 * scrollY + "px";
    level02[0].style.bottom = -0.7 * scrollY + "px";
    level02[1].style.bottom = -0.7 * scrollY + "px";
    level02[2].style.bottom = -0.7 * scrollY + "px";
    level03[0].style.bottom = -0.75 * scrollY + "px";
    level03[1].style.bottom = -0.75 * scrollY + "px";
    level03[2].style.bottom = -0.75 * scrollY + "px";
    level04[0].style.bottom = -0.8 * scrollY + "px";
    level04[1].style.bottom = -0.8 * scrollY + "px";
    level04[2].style.bottom = -0.8 * scrollY + "px";
    level05[0].style.bottom = -0.01 * scrollY + "px";
    level05[1].style.bottom = -0.01 * scrollY + "px";
    level05[2].style.bottom = -0.01 * scrollY + "px";
})