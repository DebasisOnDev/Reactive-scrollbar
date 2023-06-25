const navel = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  const offset = navel.offsetHeight + 100;
  console.log(navel.offsetHeight);
  if (navel.offsetHeight > offset) {
    console.log(navel.offsetHeight);
    navel.classList.add("active");
  } else {
    navel.classList.remove("active");
  }
});
