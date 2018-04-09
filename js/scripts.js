// scripts.js
$(function(){
	var carouselList = $("#carousel ul");
	var interval = setInterval(changeSlide, 3000);
	function changeSlide() {
    carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
	}
	function moveFirstSlide() {
  		var firstItem = carouselList.find("li:first");
  		var lastItem = carouselList.find("li:last");
    	lastItem.after(firstItem);
    	carouselList.css({marginLeft:0});
}
});
$(".control_next").click(function () {
  $(this).show("#carousel ul", { direction: "right" }, 1000)});
$(".control_prev").click(function () {
  $(this).show("#carousel ul", { direction: "left" }, 1000)});
