window.onscroll = function() {
    headerFun()
};
var header = document.querySelector("#sticky-header");
var sticky = header.offsetTop;
function headerFun() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
;
