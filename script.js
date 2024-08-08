const arrows = document.querySelectorAll(".arrow");
const carssLists = document.querySelectorAll(".cars-list");

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300);
  console.log(Math.floor(window.innerWidth / 300));
  let clickCounter = 0;
  const imageItem = carssLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - widthRatio) >= 0) {
      carssLists[i].style.transform = `translateX(${
        carssLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      carssLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});


