const tokenomicsSection = document.querySelector(".categories-collections");
const pg1 = document.querySelector(".pg1")
const pg2 = document.querySelector(".pg2")
const pg3 = document.querySelector(".pg3")
const pg4 = document.querySelector(".pg4")
const pg5 = document.querySelector(".pg5")
const pg6 = document.querySelector(".pg6")
const pg7 = document.querySelector(".pg7")
const pg8 = document.querySelector(".pg8")


document.addEventListener("scroll", function () {
  const clientHeight = document.documentElement.clientHeight;
  if (clientHeight > pg1.getBoundingClientRect().y + (pg1.getBoundingClientRect().height * 2) / 3) {
    pg1.style.width =
      "100%";
  }
  if (clientHeight > pg2.getBoundingClientRect().y + (pg2.getBoundingClientRect().height * 2) / 3) {
    pg2.style.width =
      "10%";
  }
  if (clientHeight > pg3.getBoundingClientRect().y + (pg3.getBoundingClientRect().height * 2) / 3) {
    pg3.style.width =
      "12%";
  }
  if (clientHeight > pg4.getBoundingClientRect().y + (pg4.getBoundingClientRect().height * 2) / 3) {
    pg4.style.width =
      "2%";
  }
  if (clientHeight > pg5.getBoundingClientRect().y + (pg5.getBoundingClientRect().height * 2) / 3) {
    pg5.style.width =
      "8%";
  }
  if (clientHeight > pg6.getBoundingClientRect().y + (pg6.getBoundingClientRect().height * 2) / 3) {
    pg6.style.width =
      "2%";
  }
  if (clientHeight > pg7.getBoundingClientRect().y + (pg7.getBoundingClientRect().height * 2) / 3) {
    pg7.style.width =
      "2%";
  }
  if (clientHeight > pg8.getBoundingClientRect().y + (pg8.getBoundingClientRect().height * 2) / 3) {
    pg8.style.width =
      "2%";
  }
})