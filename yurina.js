"use strict";
{
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });
}

//topスクロール
const pagetop_btn = document.querySelector(".pagetop");
pagetop_btn.addEventListener("click", scroll_top);
function scroll_top() {
  window.scroll({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", scroll_event);
function scroll_event() {
  if (window.pageYOffset > 100) {
    pagetop_btn.style.opacity = "1";
  } else if (window.pageYOffset < 100) {
    pagetop_btn.style.opacity = "0";
  }
}



// 製品カードをクリックしたら反転させる
document.querySelectorAll('.profile-card').forEach(function(card) {
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped');
    });
});


