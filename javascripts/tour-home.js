var steps = {
  home: [
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
  ],
  document: [
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
  ],
  public_inspection: [
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
  ]
};


function tourInit(page){
  var tour = new Tour({
    steps: steps[page]
  });

  return tour;
}

$(document).ready(function() {
  var tour;

  $('.btn-wrapper a.btn.current').on('click', function(e) {
    e.preventDefault();
  });

  $('#start-tour-button').on('click', function() {
    tour = tourInit( $(this).data('steps') );
    tour.init().start(true).goTo(0);
    $(this).fadeOut();
    $('#restart-tour-button').delay(500).fadeIn();
  });

  $('#restart-tour-button').on('click', function() {
    tour.start(true).goTo(0);
  });
});
