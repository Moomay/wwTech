const scrollcheck = () => {
  let scrollY = $(window).scrollTop();
  var scrollBottom = $(window).scrollTop() + $(window).height();
  console.log(scrollY)
  if (scrollY > $("#s3").outerHeight() + $(".hero").outerHeight() + $("#s1").outerHeight() + $("#s2").outerHeight()) {
    next(85);
    
  }
  else if ($("#s2").outerHeight() + $(".hero").outerHeight() + $("#s1").outerHeight()+$(window).height()  > $("#s3").outerHeight() + $(".hero").outerHeight() + $("#s1").outerHeight() + $("#s2").outerHeight() 
  && scrollY >= $("#s2").outerHeight() + $(".hero").outerHeight() + $("#s1").outerHeight()+200){
    next(85);
  }
  else if (scrollY >= $("#s2").outerHeight() + $(".hero").outerHeight() + $("#s1").outerHeight()) {
    next(60);
    console.log("s3 is" + $("#s3").outerHeight() + $(".hero").outerHeight() + $("#s1"))
  }

  else if (scrollY >= $("#s1").outerHeight() + $(".hero").outerHeight()) {
    next(35);
    console.log("s2 is" + $("#s1").outerHeight() + $(".hero").outerHeight())
  }
  else if (scrollY >= $(".hero").outerHeight()) {
    next(10);
    console.log("s1 is" + $(".hero").outerHeight())
  }
 
}
const nextz = (x) => {
  if (x == 1) {
    $(window).scrollTop($(".hero").outerHeight());
  }
  else if (x == 2) {
    $(window).scrollTop($("#s1").outerHeight() + $(".hero").outerHeight());
  }
  else if (x == 3) {
    $(window).scrollTop($("#s2").outerHeight() + $(".hero").outerHeight() + $("#s1").outerHeight());
  }
  else if (x == 4) {
    $(window).scrollTop($("#s3").outerHeight() + $(".hero").outerHeight() + $("#s1").outerHeight() + $("#s2").outerHeight());
  }

}
