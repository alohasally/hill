const section = document.getElementsByTagName("section");
const bgColorArr = ["#85FFBD", "#FFFB7D", "#E0C3FC", "#00DBDE", "#fcc3e7"];
const upBtn = document.getElementsByClassName("up-btn");
const downBtn = document.getElementsByClassName("down-btn");
const footer = document.querySelector("footer");

// for (let i = 0; i < section.length; i++) {
//   section[i].style.backgroundColor = bgColorArr[i];
// }

let currentSection = 0;
const totalSections = section.length;

upBtn[0].addEventListener("click", function () {
  if (currentSection >= 0) {
    currentSection--;
  }
  handleScroll();
});

downBtn[0].addEventListener("click", function () {
  if (currentSection < totalSections) {
    currentSection++;
  }
  handleScroll();
});

const handleScroll = () => {
  if (currentSection < 0) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else if (currentSection === totalSections) {
    window.scrollTo({
      top: footer.offsetTop,
      behavior: "smooth",
    });
  } else {
    window.scrollTo({
      top: section[currentSection].offsetTop,
      behavior: "smooth",
    });
  }
};

let isScrolling = false; // 스크롤 중인지 여부를 확인하는 플래그

// 스크롤 이벤트 핸들러
function handleScrollWheel(event) {
  if (isScrolling) return; // 이미 스크롤 중이면 중복 실행 방지

  const direction = event.deltaY > 0 ? 1 : -1; // 스크롤 방향 확인
  const nextSection = currentSection + direction; // 다음 섹션 계산

  // 다음 섹션이 유효한 범위인지 확인
  if (nextSection >= 0 && nextSection < totalSections) {
    currentSection = nextSection;
    isScrolling = true;

    // 부드러운 스크롤을 이용해 섹션으로 이동
    window.scrollTo({
      top: section[currentSection].offsetTop,
      behavior: "smooth",
    });

    // 스크롤 완료 후 플래그 재설정
    setTimeout(() => {
      isScrolling = false;
    }, 800); // 스크롤 애니메이션의 지속 시간에 따라 조정
  }
}

// 마우스 휠 이벤트를 감지하여 스크롤을 처리
window.addEventListener("wheel", handleScrollWheel);
