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