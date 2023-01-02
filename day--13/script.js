// function debounce(func, wait = 20, immediate = true) {
//   var timeout;
//   return function () {
//     var context = this,
//       args = arguments;
//     var later = function () {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

function debounce(func, timeout = 20) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const sliderImgs = document.querySelectorAll(".slide-in");

function checkSlide(event) {
  sliderImgs.forEach((sliderImg) => {
    //визначаємо нижню гориз лінію
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImg.height / 2;
    //визначимо нижню частину картинки
    //offsetTop довжина у пікселях від веру до картинки
    const imgBottom = sliderImg.offsetTop + sliderImg.height;
    //перевіряємо чи нажня лінія більша за верхню точку картинки
    const isHalfShown = slideInAt > sliderImg.offsetTop;
    //перевіряємо чи ми прогорули нижче дна картинки
    const isNotScrolledPast = window.scrollY < imgBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImg.classList.add("active");
    } else {
      sliderImg.classList.remove("active");
    }
  });
  // console.count(event);
}

window.addEventListener("scroll", debounce(checkSlide));
