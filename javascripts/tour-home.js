function init(){
  tour = new Tour({
    steps: [
    {
      element: "#tour-1",
      content: "When a user places their mouse cursor over this link, it turns red and the preview area reveals itself.  This prevents confusion by only displaying documents on Public Inspection when a user interacts with this link.",
      placement: "left",
      onNext: function(){
        $(".public-inspection-toggle").click();
      },
    },
    {
      element: "#tour-2",
      content: "Consistent with treatment of Public Inspection elsewhere this preview area features a light pink background watermarked with the 'warning hand' icon as well as some description of Public Inspection.",
      placement: "top",
    },
    {
      element: "#tour-3",
      content: "Consistent with treatment of Reader Aids elsewhere this preview area features the magenta block header and lighter magenta background to visually demarcate the content in this area from other content on the homepage that is derived from official documents. Additionally the description text works to make the purpose and non-legal nature of the content in this area clear.",
      placement: "top",
    },
    {
      element: "#tour-4",
      content: "By placing the OFR blog in the 'Reader Aids' area with its prominent color pallette, the blog is now segregated from other content on the homepage that is based on official documents.",
      placement: "top",
    }
  ]});
}

$(document).ready(function() {
  $('#start-tour-button').on('click', function() { 
    init();
    tour.init().start(true);
    $(this).fadeOut();
    $('#restart-tour-button').delay(500).fadeIn();
  });
  $('#restart-tour-button').on('click', function() { tour.goTo(0); });
});
