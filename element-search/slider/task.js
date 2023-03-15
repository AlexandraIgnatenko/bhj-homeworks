const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");

function changeSlide() {
  const items = Array.from(document.getElementsByClassName("slider__item"));
  const activeItem = document.querySelector(".slider__item_active");
  const itemIndex = items.findIndex(item => item === activeItem);
  const navNext = this.className.includes("next") ? 1 : -1;
  let index = itemIndex + navNext;
  
  if (index < 0) {
      index = items.length - 1;
  } else if (index > items.length - 1) {
      index = 0;
  }
  items[index].className += " slider__item_active";
}

prev.onclick = changeSlide;
next.onclick =changeSlide;