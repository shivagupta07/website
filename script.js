function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 80) + "vh";
  elm.style.left = Math.floor(Math.random() * 80) + "vw";
}

const btn = document.querySelector("#move-random");

if (btn) {
  btn.addEventListener("mouseenter", () => {
    moveRandomEl(btn);
  });
}
