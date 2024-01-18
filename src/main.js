// Header 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header_dark');
  } else {
    header.classList.remove('header_dark');
  }
});

// scroll시 home 섹션 투명 스타일링
const home = document.querySelector('.home_container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// arrow up 버튼 나타내기
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY>homeHeight/2){
        arrowUp.style.opacity=1;
    }else{
        arrowUp.style.opacity=0;
    }
});
