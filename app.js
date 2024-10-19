document.addEventListener("DOMContentLoaded", () => {
  const containerLamsi = document.querySelector(".container-lamsi");
  const contentLamsi = document.querySelector(".content-lamsi");
  const pictureLamsi = document.querySelector(".picture-lamsi");
  const judulLamsi = document.querySelector(".judul-lamsi");
  const styleTembakauLamsi = document.querySelector(".Tembakau-lamsi");
  const styleLamsiLamsi = document.querySelector(".lamsi-lamsi");
  const gambarLamsi1 = document.querySelector(".gambar-1-lamsi");
  const gambarLamsi2 = document.querySelector(".gambar-2-lamsi");
  const textLamsi = document.querySelector(".text-lamsi");
  const isiLamsi = document.querySelector(".isi-lamsi");
  const buttonLamsi = document.querySelector(".click-button-lamsi-button");

  const getStyle = window.getComputedStyle(containerLamsi);
  const containerWidth = parseFloat(getStyle.width);
  const containerHeight = parseFloat(getStyle.height);

  if (containerHeight > containerWidth) {
    containerLamsi.style.backgroundImage = "url('src/768x1365.png')";
    contentLamsi.style.width = "100% ";
    pictureLamsi.style.gap = 0;
    pictureLamsi.style.width = 0;
    judulLamsi.style.gap = 0;
    judulLamsi.style.justifyContent = "center";
    styleTembakauLamsi.style.paddingLeft = "5vw";
    styleTembakauLamsi.style.fontSize = "13vw";
    styleTembakauLamsi.style.letterSpacig = "-4px";
    styleLamsiLamsi.style.paddingLeft = "5vw";
    styleLamsiLamsi.style.fontSize = "13vw";
    styleLamsiLamsi.style.letterSpacig = "-4px";
    gambarLamsi1.style.width = "55vw";
    gambarLamsi1.style.height = "40vh";
    gambarLamsi1.style.position = "absolute";
    gambarLamsi1.style.top = "20%";
    gambarLamsi1.style.right = "20%";

    gambarLamsi2.style.display = "none";
    isiLamsi.style.paddingTop = "50vh";
    textLamsi.style.paddingLeft = " 2vw";
    textLamsi.style.fontSize = "3.4vw";
    buttonLamsi.style.width = "18vw";
    buttonLamsi.style.height = "6vh";
    buttonLamsi.style.fontSize = "3vw";
  }
});
document.addEventListener("resize", () => {
  const containerLamsi = document.querySelector(".container-lamsi");
  const contentLamsi = document.querySelector(".content-lamsi");
  const pictureLamsi = document.querySelector(".picture-lamsi");
  const judulLamsi = document.querySelector(".judul-lamsi");
  const styleTembakauLamsi = document.querySelector(".Tembakau-lamsi");
  const styleLamsiLamsi = document.querySelector(".lamsi-lamsi");
  const gambarLamsi1 = document.querySelector(".gambar-1-lamsi");
  const gambarLamsi2 = document.querySelector(".gambar-2-lamsi");
  const textLamsi = document.querySelector(".text-lamsi");
  const isiLamsi = document.querySelector(".isi-lamsi");
  const buttonLamsi = document.querySelector(".click-button-lamsi-button");

  const getStyle = window.getComputedStyle(containerLamsi);
  const containerWidth = parseFloat(getStyle.width);
  const containerHeight = parseFloat(getStyle.height);

  if (containerHeight > containerWidth) {
    containerLamsi.style.backgroundImage = "url('src/768x1365.png')";
    contentLamsi.style.width = "100% ";
    pictureLamsi.style.gap = 0;
    pictureLamsi.style.width = 0;
    judulLamsi.style.gap = 0;
    judulLamsi.style.justifyContent = "center";
    styleTembakauLamsi.style.paddingLeft = "5vw";
    styleTembakauLamsi.style.fontSize = "13vw";
    styleTembakauLamsi.style.letterSpacig = "-4px";
    styleLamsiLamsi.style.paddingLeft = "5vw";
    styleLamsiLamsi.style.fontSize = "13vw";
    styleLamsiLamsi.style.letterSpacig = "-4px";
    gambarLamsi1.style.width = "55vw";
    gambarLamsi1.style.height = "40vh";
    gambarLamsi1.style.position = "absolute";
    gambarLamsi1.style.top = "20%";
    gambarLamsi1.style.right = "20%";
    gambarLamsi1.style.maxWidth = "100%";
    gambarLamsi1.style.maxHeight = "100%";

    gambarLamsi2.style.display = "none";
    isiLamsi.style.paddingTop = "50vh";
    textLamsi.style.paddingLeft = " 2vw";
    textLamsi.style.fontSize = "3.4vw";
    buttonLamsi.style.width = "18vw";
    buttonLamsi.style.height = "6vh";
    buttonLamsi.style.fontSize = "3vw";
  }
});
