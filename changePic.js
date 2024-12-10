const img = document.getElementById("imgShown");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const disableBtn = function (btn) {
  btn.disabled = true;
};

const enableBtn = function (btn) {
  btn.disabled = false;
};

const findImgNum = function () {
  const lastDotIndex = img.src.lastIndexOf(".");
  const imgNum = Number(img.src.slice(lastDotIndex - 1, lastDotIndex));
  return imgNum;
};

function showNextImg() {
  //меняем путь к картинке, чтобы показывалась следующая
  img.src = "./assets/img/dog" + (findImgNum() + 1) + ".jpg";
  //если картинка 2ая включаем кнопку previous
  if (findImgNum() === 2) {
    enableBtn(prevBtn);
  } //если картинка последняя отключаем кнопку next
  else if (findImgNum() === 4) {
    disableBtn(nextBtn);
  }
}

function showPrevImg() {
  //меняем путь к картинке, чтобы показывалась предыдущая
  img.src = "./assets/img/dog" + (findImgNum() - 1) + ".jpg";
  //если картинка предпоследняя то включаем кнопку next
  if (findImgNum() === 3) {
    enableBtn(nextBtn);
  } //если картинка первая то отключаем кнопку previous
  else if (findImgNum() === 1) {
    disableBtn(prevBtn);
  }
}
