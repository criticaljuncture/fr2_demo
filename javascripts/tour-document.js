function init(){
  tour = new Tour({
    steps: [
    {
      element: "#tour-1",
      content: 'Header with with tagline "The Daily Journal of the United States" only used on pages containing official content.',
      placement: "left"
    },
    {
      element: "#tour-2",
      content: "Watermark seal is used only on pages containing official content.",
      placement: "left",
    },
    {
      element: "#tour-3",
      content: "Link to comment on this document is clearly labeled and prominently placed.",
      placement: "bottom"
    },
    {
      element: "#tour-4",
      content: "Blue 'Official Document' header added to denote content is an official FR document.  This header will reveal more details about officialness when the user hovers over this area.",
      placement: "top",
    },
    {
      element: "#tour-5",
      content: "Light blue background reinforces that the document is official and provides a container for the official document as the user scrolls down the page.",
      placement: "top"
    },
    {
      element: "#tour-6",
      content: "Meta-data about a document that was present in the official document is preseted in a box with a similar blue color and encompassed in 'Document Detail' blocks at the top and bottom of the box",
      placement: "top"
    },
    {
      element: "#tour-7",
      content: "Official NARA seal is present as a water mark on the light blue background.  While light enough that it doesnt interfere with reading the document, it follows the content as the page is scrolled providing constant reinforcement that the text in the light blue area is official.",
      placement: "top"
    },
    {
      element: "#tour-8",
      content: "Items that are not part of the published document, such as programatically generated table of contents and the regulatory timeline have been moved to a utility bar outside of the blue official document area.  This utility bar also contains tools to aid the reader in sharing with others, commenting, printing, etc.",
      placement: "right"
    },
    {
      element: "#tour-9",
      content: "While denoting the type of content contained in a box, enhanced content headers will also reveal details about the source and purpose of the content in the box when a user hovers over the header",
      placement: "top"
    },
    {
      element: "#tour-10",
      content: "Content from other sources that provide context or provide additional details about a documenta re present in a green box rather than tblue to make the distinction clear to the reader.",
      placement: "left"
    },
    {
      element: "#tour-11",
      content: "Official Documents are enclosed with blue 'Official Document' blocks at top and bottom to clearly delineate where an official document begins and ends",
      placement: "bottom"
    }
  ]});
};

$(document).ready(function() {
  $('#start-tour-button').on('click', function() { 
    init();
    tour.init().start(true);
    $(this).fadeOut();
    $('#restart-tour-button').delay(500).fadeIn();
  });
  $('#restart-tour-button').on('click', function() { tour.goTo(0); });
});

