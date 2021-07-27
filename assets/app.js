// Carousel de nuestros SABORES
window.addEventListener("load", function () {
  new Glider(document.querySelector('.carousel__lista2'), {
      slidesToScroll: 1,
      slidesToShow: 5.5,
      draggable: true,
      dots: '.carousel__indicadores2',
      arrows: {
        prev: '.carousel__anterior2',
        next: '.carousel__siguiente2'
      }
    });
})


// Carousel de nuestros PRODUCTOS
window.addEventListener("load", function () {
    new Glider(document.querySelector('.carousel__lista'), {
        slidesToScroll: 1,
        slidesToShow: 5.5,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
          prev: '.carousel__anterior',
          next: '.carousel__siguiente'
        }
      });
})