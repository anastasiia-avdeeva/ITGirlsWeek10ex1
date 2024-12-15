const imgArray = [
  "./assets/img/dog1.jpg",
  "./assets/img/dog2.jpg",
  "./assets/img/dog3.jpg",
  "./assets/img/dog4.jpg",
];

const img = document.getElementById("imgShown");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function disableBtn(btn) {
  btn.disabled = true;
}

function enableBtn(btn) {
  btn.disabled = false;
}

function controlBtns(imgNum) {
  const humanImgNum = imgNum + 1;
  if (humanImgNum === 2) {
    enableBtn(prevBtn);
  } else if (humanImgNum === 1) {
    disableBtn(prevBtn);
  } else if (humanImgNum === 3) {
    enableBtn(nextBtn);
  } else if (humanImgNum === 4) {
    disableBtn(nextBtn);
  }
}

function findImgNum() {
  const lastSlashIndex = img.src.lastIndexOf("/");
  const imgName = img.src.slice(lastSlashIndex);
  const imgNum = imgArray.indexOf("./assets/img" + imgName);
  return imgNum;
}

function showNextImg() {
  const imgNum = findImgNum();
  img.src = imgArray[imgNum + 1];

  controlBtns(imgNum + 1);
}

function showPrevImg() {
  const imgNum = findImgNum();
  img.src = imgArray[imgNum - 1];

  controlBtns(imgNum - 1);
}
