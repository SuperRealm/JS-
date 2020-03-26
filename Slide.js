// 手动播放
var slideIndex = 1;
// // 直接使用会报错：文件加载执行时，获取不到style
// showSlides(slideIndex);
// document对象是window对象的一个属性，window对象触发onload事件时，document对象已经存在
window.onload=funload;
function funload(){
  showSlides(slideIndex);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // Uncaught TypeError: Cannot read property 'style' of undefined
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


// // 自动播放----去掉prev和next
// var slideIndex =0;
// window.onload=funload;
// function funload(){
//   showSlides(slideIndex);
// }
// function showSlides(){
//   var i;
//   var slides=document.getElementsByClassName("mySlide");
//   var dots=document.getElementsByClassName("dot");
//   for(i=0;i<slides.length;i++){
//     slides[i].style.display="none";
//   }
//   slideIndex++;
//   if(slideIndex>slides.length){slideIndex=1}
//   for(i=0;i<dots.length;i++){
//     dots[i].className=dots[i].className.replace("active","");
//   }
//   slides[slideIndex-1].style.display="block";
//   dots[slideIndex-1].className +="active"
//   setTimeout(showSlides,2000);
// }