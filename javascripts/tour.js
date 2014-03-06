$(document).ready(function() {
var tour = new Tour({
  steps: [
  {
    element: ".fr-head-meta-bar-official",
    title: "fr link stats",
    content: "fr link stats"
  },
  {
    element: ".nav-home-carousel",
    title: "icon fr2 globe",
    content: "icon fr2 globe"
  }
]});

/*
var tour = new Tour({
  steps: [
  {
    element: "#h1",
    title: "fr link stats",
    content: "fr link stats"
  },
  {
    element: "#h2",
    title: "icon fr2 globe",
    content: "icon fr2 globe"
  }
]});
*/
tour.init();
tour.start();
});
