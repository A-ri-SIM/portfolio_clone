// Header 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  if (scroll > headerHeight) {
    header.classList.add('header_dark');
  } else {
    header.classList.remove('header_dark');
  }
});

// scroll시 home 섹션 투명 스타일링
const home = document.querySelector('.home_container');
const homeHeight=home.offsetHeight;
document.addEventListener('scroll',()=>{
    home.style.opacity=1-window.scrollY/homeHeight;
})