window.addEventListener('DOMContentLoaded', function() {
	var essapi_4_1;

	function esginit_4_1() {
	  jQuery(document).ready(function() {
		var lightboxOptions = {
		  margin: [0, 0, 0, 0],
		  buttons: ["share", "thumbs", "close"],
		  infobar: true,
		  loop: true,
		  slideShow: {
			"autoStart": false,
			"speed": 3000
		  },
		  videoAutoPlay: true,
		  animationEffect: "fade",
		  animationDuration: 500,
		  beforeShow: function(a, c) {
			var i = 0,
			  multiple = false;
			a = a.slides;
			for (var b in a) {
			  i++;
			  if (i > 1) {
				multiple = true;
				break;
			  }
			}
			if (!multiple) jQuery("body").addClass("esgbox-single");
			if (c.type === "image") jQuery(".esgbox-button--zoom").show();
			if (c.contentType === "html") c.$slide.addClass("esgbox-slide--overflow-" + c.opts.overflow);
		  },
		  beforeLoad: function(a, b) {
			jQuery("body").removeClass("esg-four-by-three");
			if (b.opts.$orig.data("ratio") === "4:3") jQuery("body").addClass("esg-four-by-three");
		  },
		  afterLoad: function() {
			jQuery(window).trigger("resize.esglb");
		  },
		  afterClose: function() {
			jQuery("body").removeClass("esgbox-hidearrows esgbox-single");
		  },
		  transitionEffect: "fade",
		  transitionDuration: 500,
		  hash: "group",
		  arrows: true,
		  wheel: false,
		  baseClass: "esgbox-container-4",
		  captionPosition: "bottom",
		  overflow: "auto",
		};
		jQuery("#esg-grid-4-1").data("lightboxsettings", lightboxOptions);
		essapi_4_1 = jQuery("#esg-grid-4-1").tpessential({
		  gridID: 4,
		  layout: "masonry",
		  lazyLoad: "on",
		  lazyLoadColor: "#FFFFFF",
		  row: 1,
		  apiName: "essapi_4_1",
		  loadMoreAjaxToken: "2f47cb255b",
		  loadMoreAjaxUrl: "https://demos.qreativethemes.com/thelandscaper/wp-admin/admin-ajax.php",
		  loadMoreAjaxAction: "Essential_Grid_Front_request_ajax",
		  ajaxContentTarget: "ess-grid-ajax-container-",
		  ajaxScrollToOffset: "0",
		  ajaxCloseButton: "off",
		  ajaxContentSliding: "on",
		  ajaxScrollToOnLoad: "on",
		  ajaxCallbackArgument: "off",
		  ajaxNavButton: "off",
		  ajaxCloseType: "type1",
		  ajaxCloseInner: "false",
		  ajaxCloseStyle: "light",
		  ajaxClosePosition: "tr",
		  space: 30,
		  pageAnimation: "fade",
		  videoPlaybackInGrid: "on",
		  videoLoopInGrid: "on",
		  videoPlaybackOnHover: "off",
		  videoInlineMute: "on",
		  videoInlineControls: "off",
		  keepLayersInline: "off",
		  startAnimation: "none",
		  startAnimationSpeed: 2000,
		  startAnimationDelay: 100,
		  startAnimationType: "item",
		  animationType: "item",
		  paginationScrollToTop: "off",
		  paginationAutoplay: "off",
		  spinner: "spinner0",
		  minVisibleItems: 4,
		  lightBoxMode: "single",
		  lightboxHash: "group",
		  lightboxPostMinWid: "75%",
		  lightboxPostMaxWid: "75%",
		  lightboxSpinner: "off",
		  lightBoxFeaturedImg: "off",
		  lightBoxPostTitle: "off",
		  lightBoxPostTitleTag: "h2",
		  lightboxMargin: "0|0|0|0",
		  lbContentPadding: "0|0|0|0",
		  lbContentOverflow: "auto",
		  animSpeed: 100,
		  delayBasic: 1,
		  mainhoverdelay: 1,
		  filterType: "single",
		  showDropFilter: "hover",
		  filterGroupClass: "esg-fgc-4",
		  filterNoMatch: "No Items for the Selected Filter",
		  filterDeepLink: "off",
		  hideMarkups: "on",
		  inViewport: true,
		  viewportBuffer: 20,
		  youtubeNoCookie: "false",
		  convertFilterMobile: false,
		  convertFilterMobileWidth: 768,
		  paginationSwipe: "off",
		  paginationDragVer: "on",
		  pageSwipeThrottle: 30,
		  hideBlankItemsAt: "1",
		  responsiveEntries: [{
			width: 1900,
			amount: 4,
			mmheight: 0
		  }, {
			width: 1400,
			amount: 4,
			mmheight: 0
		  }, {
			width: 1170,
			amount: 4,
			mmheight: 0
		  }, {
			width: 1024,
			amount: 4,
			mmheight: 0
		  }, {
			width: 960,
			amount: 4,
			mmheight: 0
		  }, {
			width: 778,
			amount: 2,
			mmheight: 0
		  }, {
			width: 640,
			amount: 2,
			mmheight: 0
		  }, {
			width: 480,
			amount: 1,
			mmheight: 0
		  }, ]
		});
	  });
	} // End of EsgInitScript
	var once_4_1 = false;
	if (document.readyState === "loading") document.addEventListener('readystatechange', function() {
	  if ((document.readyState === "interactive" || document.readyState === "complete") && !once_4_1) {
		once_4_1 = true;
		esginit_4_1();
	  }
	});
	else {
	  once_4_1 = true;
	  esginit_4_1();
	}
  });