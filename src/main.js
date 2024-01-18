// Header 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  if (scroll > headerHeight) {
    header.classList.add('header_dark');
  } else {
    header.classList.remove('header_dark');
  }
});
