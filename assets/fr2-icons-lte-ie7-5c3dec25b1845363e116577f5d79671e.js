function get_entity(e){var o=e.match(/icon-fr2-[^\s'"]+/);return fr_icons[o[0]]}function addIconViaJS(e,o){$(e).prepend("<span style=\"font-family: 'fr2_icons'\">"+get_entity(o)+"</span>")}function addIcon(e,o){var n=e.innerHTML;e.innerHTML="<span style=\"font-family: 'fr2_icons'\">"+o+"</span>"+n}function scan_for_icons_and_add(){var e,o,n,r,c,i=document.getElementsByTagName("*");for(e=0;c=i[e],c;e+=1)if(o=c.getAttribute("data-icon"),o&&addIcon(c,o),r=c.className,n=r.match(/icon-fr2-[^\s'"]+/),n&&fr_icons[n[0]]){var f=get_entity(r);addIcon(c,f)}}var fr_icons={"icon-fr2-Search":"&#xe625;","icon-fr2-twitter":"&#xe60e;","icon-fr2-Eye":"&#xe60d;","icon-fr2-quotes":"&#xe60b;","icon-fr2-Network-alt":"&#xe60a;","icon-fr2-Chat":"&#xe609;","icon-fr2-Refresh-7":"&#xe608;","icon-fr2-Molecular":"&#xe607;","icon-fr2-Temperature":"&#xe606;","icon-fr2-Medicine":"&#xe605;","icon-fr2-Lab":"&#xe604;","icon-fr2-Factory":"&#xe603;","icon-fr2-Globe":"&#xe602;","icon-fr2-Eco":"&#xe601;","icon-fr2-Coins-dollaralt":"&#xe600;","icon-fr2-flag":"&#xe000;","icon-fr2-folder":"&#xe001;","icon-fr2-download":"&#xe002;","icon-fr2-open_folder":"&#xe005;","icon-fr2-correction":"&#xe007;","icon-fr2-notice":"&#xe008;","icon-fr2-presidential_document":"&#xe009;","icon-fr2-proposed_rule":"&#xe00a;","icon-fr2-rule":"&#xe00b;","icon-fr2-uncategorized":"&#xe00c;","icon-fr2-menu_arrow":"&#xe00d;","icon-fr2-trash_can":"&#xe006;","icon-fr2-nav_male_female_user":"&#xe00e;","icon-fr2-badge_check_mark":"&#xe00f;","icon-fr2-badge_forward_arrow":"&#xe010;","icon-fr2-badge_plus":"&#xe011;","icon-fr2-badge_x":"&#xe012;","icon-fr2-alert":"&#xe013;","icon-fr2-alert_alt":"&#xe014;","icon-fr2-pi_subscription":"&#xe003;","icon-fr2-message_open":"&#xe004;","icon-fr2-message":"&#xe015;","icon-fr2-rss":"&#xe017;","icon-fr2-pc":"&#xe019;","icon-fr2-document_open":"&#xe018;","icon-fr2-stop-hand":"&#xe624;","icon-fr2-facebook":"&#xe623;","icon-fr2-link":"&#xe622;","icon-fr2-NARA1985Seal":"&#xe613;","icon-fr2-pen":"&#xe61a;","icon-fr2-molecular":"&#xe61d;","icon-fr2-megaphone":"&#xe61e;","icon-fr2-legal":"&#xe61f;","icon-fr2-books":"&#xe620;","icon-fr2-map-alt":"&#xe621;","icon-fr2-book":"&#xe61c;","icon-fr2-book-alt-2":"&#xe61b;","icon-fr2-stars":"&#xe619;","icon-fr2-doc-xml":"&#xe618;","icon-fr2-doc-pi-pdf":"&#xe617;","icon-fr2-doc-pdf":"&#xe616;","icon-fr2-sharing":"&#xe60f;","icon-fr2-conversation-alt":"&#xe610;","icon-fr2-print":"&#xe611;","icon-fr2-map":"&#xe612;","icon-fr2-bulleted-list":"&#xe614;","icon-fr2-bookmark":"&#xe615;","icon-fr2-document_subscription":"&#xe016;","icon-fr2-calendar-alt":"&#xe626;","icon-fr2-clipboard":"&#xe60c;","icon-fr2-quote":"&#xe627;","icon-fr2-help":"&#xe628;",0:0};window.onload=function(){$("body").addClass("fonts_ie7_lte"),scan_for_icons_and_add()};