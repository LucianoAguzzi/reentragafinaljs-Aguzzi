//Swiper
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//api
const contenedorDos = document.querySelector(".container");
const cards = (array) => {
  const cards = array.reduce((acc, element) => {
    return (
      acc +
      `
    <img src="https://fakestoreapi.com/img${element.image}" alt=${element.title}>
    `
    );
  }, "");
  contenedorDos.innerHTML = cards;
};

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    cardsHtml(data);
  })
  .catch((error) => "malio sal");

const cont = document.querySelector(".container");
const cardsHtml = (array) => {
  const cards = array.reduce((acc, element) => {
    return (
      acc +
      `
    <img src=${element.image} alt=${element.title} >
    `
    );
  }, "")(cards);
  contenedor.innerHTML = cards;
};
