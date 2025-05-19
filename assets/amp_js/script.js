// jquery Start
$(document).ready(function () {
  // Slider
  $(".slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Popup
  $("#fade").popup({
    transition: "all 0.3s",
    closebutton: true,
  });
});
//   jquery End

// FAQ Start
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    faqItems.forEach((i) => {
      if (i !== item) i.classList.remove("active");
    });
    item.classList.toggle("active");
  });
});
// FAQ End

// mobile flowting btn js start
const mainBtn = document.getElementById("mainBtn");
const btnContainer = document.querySelector(".floating-btn-container");

mainBtn.addEventListener("click", () => {
  btnContainer.classList.toggle("show");
});
// mobile flowting btn js End
