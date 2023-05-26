var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
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

const btnPlay = document.querySelector('.btn-play');
const btnStop = document.querySelector('.btn-stop');
const play = document.querySelector('.play');
const wrapperVideo = document.getElementById('fon');

btnPlay.addEventListener('click',function(){
  wrapperVideo.play();
  btnPlay.style='display:none;';
});

btnStop.addEventListener('click',function(){
  wrapperVideo.pause();
  btnPlay.style='display:block;';
});


