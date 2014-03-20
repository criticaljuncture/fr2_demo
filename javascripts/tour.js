var steps = {
  home: [
    {
      element: "#tour-1",
      content: "When a user hovers over this link, it turns red indicating content is available. When a user clicks, the public inspection preview area reveals itself.  This prevents confusion by only displaying documents on Public Inspection when a user interacts with this link.",
      placement: "left",
      onShown: function(){
        $("#pi-metadata-bar").children().mouseenter();
      },
      onPrev: function(){ this.mouseOff() },
      onNext: function(){ this.mouseOff() },
      mouseOff: function(){
        $("#pi-metadata-bar").children().mouseleave();
      }
    },
    {
      element: "#tour-2",
      content: "Consistent with treatment of Public Inspection elsewhere this preview area features a light pink background watermarked with the 'warning hand' icon as well as some description of Public Inspection.",
      placement: "bottom",
      onShown: function(){
        $("#pi-metadata-bar").show();
      },
      hideBar: function(){
        $("#pi-metadata-bar").hide();
      },
      onPrev: function(){ this.hideBar() },
      onNext: function(){ this.hideBar() }
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
      content: 'Header with with tagline "The Daily Journal of the United States Government" only used on pages containing official content.',
      placement: "bottom"
    },
    {
      element: "#tour-2",
      content: "Watermark seal is used only on pages containing official content.",
      placement: "bottom",
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
      content: "When a user places their mouse (hovers) over the blue Official Document header it will expand with a more detailed explanation of Official Document helping to further delineate what is an official document.",
      placement: "top",
      onShown: function() {
        $(this.element).siblings('.fr-seal-block.fr-seal-block-header').first().find('.fr-seal-content').addClass('hover');
      },
      onNext: function() {
        $(this.element).siblings('.fr-seal-block.fr-seal-block-header').first().find('.fr-seal-content').removeClass('hover');
      },
      onPrev: function() {
        $(this.element).siblings('.fr-seal-block.fr-seal-block-header').first().find('.fr-seal-content').removeClass('hover');
      }
    },
    {
      element: "#tour-6",
      content: "Light blue background reinforces that the document is official and provides a container for the official document as the user scrolls down the page.",
      placement: "top"
    },
    {
      element: "#tour-7",
      content: "Meta-data about this document is presented in a box with a similar blue color and encompassed in 'Document Detail' blocks at the top and bottom of the box.",
      placement: "top"
    },
    {
      element: "#tour-8",
      content: "Official NARA seal is present as a water mark on the light blue background.  While light enough that it doesnt interfere with reading the document, it follows the content as the page is scrolled providing constant reinforcement that the text in the light blue area is official.",
      placement: "top"
    },
    {
      element: "#tour-9",
      content: "Items that are not part of the published document have been moved to a utility bar outside of the blue official document area.  This utility bar also contains tools to aid the reader in sharing with others, commenting, printing, etc.",
      placement: "top",
      onShown: function(){
        $("#utility-nav-sharing").addClass("open").find('.fr-box').show();
        $('#' + this.id).css('top', $('#' + this.id).position().top - 20 + 'px' );
      },
      closeBox: function(){
        $("#utility-nav-sharing").removeClass("open").find(".fr-box").hide();
      },
      onNext: function(){this.closeBox()},
      onPrev: function(){this.closeBox()}
    },
    {
      element: "#tour-10",
      content: "The utility bar item on the left provides access to the document as printed by GPO. This box features the same design treatment as other official documents.",
      placement: "top",
      onShown: function(){
        $("#utility-nav-official").addClass("open").find('.fr-box').show();
        $('#' + this.id).css('top', $('#' + this.id).position().top - 20 + 'px' );
      },
      closeBox: function(){
        $("#utility-nav-official").removeClass("open").find(".fr-box").hide();
      },
      onNext: function(){this.closeBox()},
      onPrev: function(){this.closeBox()}
    },
    {
      element: "#tour-11",
      content: "The utility bar item on the left provides access to the document as it appeared on Public Inspection. This box features the same design treatment as other Public Inspection documents.",
      placement: "top",
      onShown: function(){
        $("#utility-nav-pi").addClass("open").find('.fr-box').show();
        $('#' + this.id).css('top', $('#' + this.id).position().top - 20 + 'px' );
      },
      closeBox: function(){
        $("#utility-nav-pi").removeClass("open").find(".fr-box").hide();
      },
      onNext: function(){this.closeBox()},
      onPrev: function(){this.closeBox()}
    },
    {
      element: "#tour-12",
      content: "While denoting the type of content contained in a box, enhanced content headers will also reveal details about the source and purpose of the content in the box when a user hovers over the header.",
      placement: "top"
    },
    {
      element: "#tour-13",
      content: "Content from other sources that provide context or provide additional details about a document are present in a green box rather than blue to make the distinction clear to the reader.",
      placement: "left"
    },
    {
      element: "#tour-14",
      content: "Official Documents are enclosed with blue 'Official Document' blocks at top and bottom to clearly delineate where an official document begins and ends.",
      placement: "bottom"
    }
  ],
  public_inspection: [
    {
      element: "#tour-1",
      content: "Header tagline has changed to now read \"Public Inspection - Tomorrow's Documents Today\" to reinforce the nature of Public Inspection documents",
      placement: "bottom"
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
      content: "The document meta-data line now contains a reminder that the document is on Public Inspection and not yet published. Additionaly the date is specified as the scheduled publication date.",
      placement: "top"
    },
    {
      element: "#tour-5",
      content: "The document is presented with a header reinforcing the document is a Public Inspection document.  This also contains a hover with additional details, in a similar fashion to other boxes with this visual design.",
      placement: "top"
    },
    {
      element: "#tour-6",
      content: "The utility navigation contains a shortened permanent link to this page useful for sharing.  This allows us to automatically replace this page with the Official Version after its publication, ensuring that all publicly shared links to this document prior to publication bring the user to the published legal document. This is also true if the user shares the longer url present in the browser url for this page.",
      placement: "top",
      onShown: function(){
        $("#utility-nav-sharing").addClass("open").find('.fr-box').show();
        $('#' + this.id).css('top', $('#' + this.id).position().top - 20 + 'px' );
      },
      closeBox: function(){
        $("#utility-nav-sharing").removeClass("open").find(".fr-box").hide();
      },
      onNext: function(){this.closeBox()},
      onPrev: function(){this.closeBox()}
    },
    {
      element: "#tour-7",
      content: "Document metadata is published in a separate area in a similar pattern to how official documents are now presented but with colors reinforcing this document's status.  This header also includes a hover that gives more detail on the content contained.",
      placement: "top"
    },
    {
      element: "#tour-8",
      content: "Publication date is now presented as a 'Scheduled Publication Date' to better represent the nature of the date included.",
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
      placement: "top"
    },
    {
      element: "#tour-11",
      content: "A reminder of the legal definition of this content is presented in bold to remind the user of the legal status of what they are viewing",
      placement: "top"
    },
    {
      element: "#tour-12",
      content: "A footer is present on the document to visually reaffirm what type of content is being viewed",
      placement: "bottom"
    }
  ],
  public_inspection_toc: [
  {
    element: "#tour-1",
    content: 'Header tagline has changed to now read "Public Inspection :: Tomorrrow\'s Documents Today" to reinforce the nature of Public Inspection documents.',
    placement: "bottom"
  },
  {
    element: "#tour-2",
    content: "Official watermark seal has been removed because the page does not contain official Federal Register content.",
    placement: "bottom"
  },
  {
    element: "#tour-3",
    content: 'Blue bar has now become red helping to visually remind the user that they are no longer on a page that contains official Federal Register content.',
    placement: "bottom"
  },
  {
    element: "#tour-4",
    content: "The documents currently on Public Inspection page summary has a pink background to further remind the user of what they are viewing and to prevent any confusion with the page summary used for officially published documents.",
    placement: "bottom"
  },
  {
    element: "#tour-5",
    content: "Using the same color as is used for all unofficial learn content we present the user with a brief introduction to Public Inspection with a link to learn more.",
    placement: "top"
  },
  {
    element: "#tour-6",
    content: "A reminder of the legal definition of this content is presented in bold to remind the user of the legal status of what they are viewing.",
    placement: "bottom"
  },
  {
    element: "#tour-7",
    content: "Clarification of calculated dates is also now present providing more clarity as to the nature of the documents on this page.",
    placement: "top"
  },
  {
    element: "#tour-8",
    content: 'The presentation of the document contains a light pink background between the header and footer "Public Inspection Documents" blocks.  This also features the same header and footer with hover states as described on the Public Inspection document page comp.',
    placement: "top"
  },
  {
    element: "#tour-9",
    content: "The table of contents for the documents on Public Inspection for this date is presented in red/pink to reinforce its relation to the content on this page and the status of the content it links to.",
    placement: "top"
  },
  {
    element: "#tour-10",
    content: "The date is specifically labeled as the scheduled publication date, reinforcing the unpublished nature of these documents."
    placement: "bottom"
  }],
  reader_aids: [
    {
      element: "#tour-1",
      content: 'Header tagline has changed to now read "Reader Aids :: Insight into the FR Ecosystem" to aid in differentiating the unofficial content created to help users understand and use the Federal Register.',
      placement: "bottom"
    },
    {
      element: "#tour-2",
      content: "Official watermark seal is not used on pages that do not contain official Federal Register content.",
      placement: "bottom"
    },
    {
      element: "#tour-3",
      content: "The blue bar present on pages containing official content has now become a magenta bar denoting the change in legal status of the content on this page (and others like it).",
      placement: "bottom"
    },
    {
      element: "#tour-4",
      content: "In addition to a header denoting the type of search, the background is also colored to reinforce the type of content that will be searched and returned as matches to that search.  This helps to eliminate any confusion as to the nature of any matching documents.",
      placement: "bottom"
    },
    {
      element: "#tour-5",
      content: "Consistent with the treatment of other content types, reader aid content will be wrapped in a block denoting its type, reinforced by the appropriate color and a light magenta background behind the content itself.  This also features a hover with more details.",
      placement: "top"
    },
    {
      element: "#tour-6",
      content: 'The legal status of the content being presented on the page is clearly marked as "unofficial".',
      placement: "top"
    },
    {
      element: "#tour-7",
      content: "Headers clearly denote the grouping of each set of reader aid content subtly reinforcing that the content is not official",
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
    localStorage["tour_current_step"] = 0;
    tour = tourInit( $(this).data('steps') );
    tour.init().start(true).goTo(0);
    $(this).fadeOut();
    $('#restart-tour-button').delay(500).fadeIn();
  });

  $('#restart-tour-button').on('click', function() {
    localStorage["tour_current_step"] = 0;
    tour.start(true).goTo(0);
  });

  $("#tender").hide();
});

$(document).on('click', 'a:not(.toggle)', function(event) {
    event.preventDefault()
    alert("Links have been disabled for this demonstration.")
});
