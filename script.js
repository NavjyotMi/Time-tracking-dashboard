const button = document.querySelectorAll(".button");
const daily = document.querySelector(".daily--col");
const weekly = document.querySelector(".weekly--col");
const monthly = document.querySelector(".monthly--col");

button.forEach((curr, i) =>
  curr.addEventListener("click", function (e) {
    e.preventDefault();
    if (i + 1 == 1) {
      daily.classList.remove("hide");
      monthly.classList.add("hide");
      weekly.classList.add("hide");
    } else if (i + 1 == 2) {
      daily.classList.add("hide");
      monthly.classList.add("hide");
      weekly.classList.remove("hide");
    } else if (i + 1 == 3) {
      daily.classList.add("hide");
      monthly.classList.remove("hide");
      weekly.classList.add("hide");
    }
  })
);
