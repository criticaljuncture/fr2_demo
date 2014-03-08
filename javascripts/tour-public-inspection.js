function init(){
  tour = new Tour({
    steps: [
    {
      element: "#tour-1",
      content: "Header tagline has changed to now read \"Public Inspection - Tomorrow's Documents Today\" to reinforce the nature of Public Inspection documents",
      placement: "left"
    },
    {
      element: "#tour-2",
      content: "Official watermark seal has been removed because the page does not contain official Federal Register content.",
      placement: "left"
    },
    {
      element: "#tour-3",
      content: "Blue bar has now become red helping to visually remind the user that they are no longer on a page that contains official Federal Register content",
      placement: "bottom"
    },
    {
      element: "#tour-4",
      content: "The document meta-data line now contains a reminder that the document is on Public Inspection and does not present a date to the user.",
      placement: "top"
    },
    {
      element: "#tour-5",
      content: "The document is presented with a header reinforcing the document is a Public Inspection document.  This also contains a hover with additional details, in a similar fashion to other boxes with this visual design.",
      placement: "top"
    },
    {
      element: "#tour-6",
      content: "Document metadata is published in a separate area in a similar pattern to how official documents are now presented but with colors reinforcing this document's status.  This header also includes a hover that gives more detail on the content contained.",
      placement: "left"
    },
    {
      element: "#tour-7",
      content: "Publication date is now presented as a 'Scheduled Publication Date' to better represent the nature of the date included.",
      placement: "left"
    },
    {
      element: "#tour-8",
      content: "Contains a permanent link to this page.  This allows us to automatically replace this page with the Official Version after its publication, ensuring that all publicly shared links to this document prior to publication bring the user to the published legal document.",
      placement: "left"
    },
    {
      element: "#tour-9",
      content: "The presentation of the document contains a light pink background between the header and footer 'Public Inspection Document' blocks.  Additionally this section is watermarked with a 'warning hand' symbol to reinforce that caution should be taken when using Public Inspection documents.",
      placement: "left"
    },
    {
      element: "#tour-10",
      content: "A large section of text explaining the legal significance and appropriate usage of Public Inspection documents is now present.  Additionally there is a link to a page where the user can learn in greater depth.",
      placement: "left"
    },
    {
      element: "#tour-11",
      content: "A reminder of the legal definition of this content is presented in bold to remind the user of the legal status of what they are viewing",
      placement: "left"
    },
    {
      element: "#tour-12",
      content: "A footer is present on the document to visually reaffirm what type of content is being viewed",
      placement: "top"
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

