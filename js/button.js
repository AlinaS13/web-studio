const myRefs = {
  cardsetItemList: document.querySelectorAll(".product__item"),
  cardsetListEl: document.querySelector(".product"),
  filterNavBtn: document.querySelectorAll(".filter__button"),
};

const copycardset = [];

myRefs.cardsetItemList.forEach((card) => {
  copycardset.push(card);
});

myRefs.filterNavBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value) {
      myRefs.cardsetListEl.innerHTML = "";
      copycardset.filter(function (item) {
        return item !== btn.value;
      });
    }
    if (btn.value === "Все") {
      copycardset.filter(function (item) {
        return (myRefs.cardsetListEl.innerHTML +=
          '<li class="product__item">' + `${item.innerHTML}` + "</li>");
      });
    }
    copycardset.forEach((card) => {
      if (card.textContent.split(/\s+|\./).includes(`${btn.value}`)) {
        myRefs.cardsetListEl.innerHTML +=
          '<li class="product__item">' + `${card.innerHTML}` + "</li>";
      }
    });
  });
});

// const buttonList = document.getElementsByClassName("filter");
// const filterElement = document.getElementsByClassName("filter__element");
// const filterButton = document.getElementsByClassName("filter__button");

// buttonList.addEventListener("click", onClick);

// function onClick(event) {
//   console.log(onButtonClick);
// }
