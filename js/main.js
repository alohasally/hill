const section = document.getElementsByTagName("section");
const bgColorArr = ["#85FFBD", "#FFFB7D", "#E0C3FC", "#00DBDE", "#fcc3e7"];

for (let i = 0; i < section.length; i++) {
  section[i].style.backgroundColor = bgColorArr[i];
}
