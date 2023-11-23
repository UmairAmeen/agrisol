<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Smart-AgriSol') }}</title>
    <link rel="shortcut icon" href="{{asset('images/logo/logo.png')}}">
    <!-- Fonts -->
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Roboto%3A400%2C700%7CRoboto%20Slab%3A400%2C700&amp;subset=latin%2Clatin-ext&amp;display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3A400%2C700%7CRoboto%20Slab%3A400%2C700&amp;subset=latin%2Clatin-ext&amp;display=swap" media="print" onload="this.media='all'" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3A400%2C700%7CRoboto%20Slab%3A400%2C700&amp;subset=latin%2Clatin-ext&amp;display=swap" />
     <!-- Plugins -->
    <link type='text/css' href="{{asset('themes/landing-pages/assets/plugins/bootstrap/css/bootstrap.custom.min.css')}}" rel="stylesheet">
    <!-- Styles -->
    <link type='text/css' href="{{asset('themes/landing-pages/assets/css/style.css')}}" rel="stylesheet">
    <link type='text/css' href="{{asset('themes/landing-pages/assets/css/main.css')}}" rel="stylesheet">
    <link type='text/css' href="{{asset('themes/landing-pages/assets/css/flex.css')}}" rel="stylesheet">
    <link type='text/css' href="{{asset('themes/landing-pages/assets/css/settings.css')}}" rel="stylesheet"/>
    <link type='text/css' href="{{asset('themes/landing-pages/assets/css/fontello.css')}}" rel="stylesheet"/>
    <link type='text/css' href="{{asset('themes/landing-pages/assets/css/gallery.css')}}" rel="stylesheet">
    <link type='text/css' href="{{asset('themes/landing-pages/assets/css/fancybox.css')}}" rel="stylesheet">
    <!-- Icons -->
    <link type='text/css' href="{{asset('themes/landing-pages/assets/icon/font-awesome/css/font-awesome.css')}}" rel="stylesheet">
</head>
<body>

    <div>
        @include('includes.header')
        @yield('content')
        @include('includes.footer')
    </div>

    <!-- Scripts -->
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/plugins/jquery/js/jquery.min.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/plugins/jquery/js/jquery-migrate.min.js')}}"></script>
    <script type="text/javascript">
      window.addEventListener('DOMContentLoaded', function() {
        var essapi_5_1;

        function esginit_5_1() {
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
              baseClass: "esgbox-container-5",
              captionPosition: "bottom",
              overflow: "auto",
            };
            jQuery("#esg-grid-5-1").data("lightboxsettings", lightboxOptions);
            essapi_5_1 = jQuery("#esg-grid-5-1").tpessential({
              gridID: 5,
              layout: "even",
              lazyLoad: "off",
              loadMoreType: "button",
              loadMoreAmount: 4,
              loadMoreTxt: "Load More",
              loadMoreNr: "off",
              loadMoreEndTxt: "No More Items for the Selected Filter",
              loadMoreItems: [],
              row: 9999,
              apiName: "essapi_5_1",
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
              startAnimationSpeed: 1000,
              startAnimationDelay: 100,
              startAnimationType: "item",
              animationType: "item",
              paginationScrollToTop: "off",
              paginationAutoplay: "off",
              spinner: "spinner0",
              minVisibleItems: 12,
              evenGridMasonrySkinPusher: "off",
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
              animSpeed: 1000,
              delayBasic: 1,
              mainhoverdelay: 1,
              filterType: "single",
              showDropFilter: "hover",
              filterGroupClass: "esg-fgc-5",
              filterNoMatch: "No Items for the Selected Filter",
              filterDeepLink: "off",
              hideMarkups: "on",
              inViewport: true,
              viewportBuffer: 20,
              youtubeNoCookie: "false",
              convertFilterMobile: false,
              convertFilterMobileWidth: 768,
              paginationSwipe: "off",
              paginationDragVer: "off",
              pageSwipeThrottle: 30,
              aspectratio: "4:3",
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
                amount: 3,
                mmheight: 0
              }, {
                width: 778,
                amount: 3,
                mmheight: 0
              }, {
                width: 640,
                amount: 3,
                mmheight: 0
              }, {
                width: 480,
                amount: 1,
                mmheight: 0
              }, ]
            });
          });
        } // End of EsgInitScript
        var once_5_1 = false;
        if (document.readyState === "loading") document.addEventListener('readystatechange', function() {
          if ((document.readyState === "interactive" || document.readyState === "complete") && !once_5_1) {
            once_5_1 = true;
            esginit_5_1();
          }
        });
        else {
          once_5_1 = true;
          esginit_5_1();
        }
      });
    </script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/plugins/bootstrap/js/bootstrap.custom.min.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/underscore.js')}}"></script>
    <script type='text/javascript'>var TheLandscaper = {};</script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/main.js')}}"></script>
    <script type='text/javascript'>
      var panelsStyles = {
        "fullContainer": "body",
        "stretchRows": "1"
      };
    </script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/styling.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/gallery.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/rbtools.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/esg.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/fancybox.js')}}" defer></script>
    <script type="text/javascript">
      window.addEventListener('DOMContentLoaded', function() {
        var fb_timeout, fb_opts = {
          'overlayShow': true,
          'hideOnOverlayClick': true,
          'showCloseButton': true,
          'margin': 20,
          'enableEscapeButton': true,
          'autoScale': true
        };
        if (typeof easy_fancybox_handler === 'undefined') {
          var easy_fancybox_handler = function() {
            jQuery([".nolightbox", "a.wp-block-fileesc_html__button", "a.pin-it-button", "a[href*='pinterest.com\/pin\/create']", "a[href*='facebook.com\/share']", "a[href*='twitter.com\/share']"].join(',')).addClass('nofancybox');
            jQuery('a.fancybox-close').on('click', function(e) {
              e.preventDefault();
              jQuery.fancybox.close()
            });
            /* IMG */
            var fb_IMG_select = jQuery('a[href*=".jpg" i]:not(.nofancybox,li.nofancybox>a),area[href*=".jpg" i]:not(.nofancybox),a[href*=".jpeg" i]:not(.nofancybox,li.nofancybox>a),area[href*=".jpeg" i]:not(.nofancybox),a[href*=".png" i]:not(.nofancybox,li.nofancybox>a),area[href*=".png" i]:not(.nofancybox)');
            fb_IMG_select.addClass('fancybox image').attr('rel', 'gallery');
            jQuery('a.fancybox,area.fancybox,.fancybox>a').each(function() {
              jQuery(this).fancybox(jQuery.extend(true, {}, fb_opts, {
                'easingIn': 'easeOutBack',
                'easingOut': 'easeInBack',
                'opacity': false,
                'hideOnContentClick': false,
                'titleShow': false,
                'titlePosition': 'outside',
                'titleFromAlt': false,
                'showNavArrows': true,
                'enableKeyboardNav': true,
                'cyclic': false
              }))
            });
          };
        };
        var easy_fancybox_auto = function() {
          setTimeout(function() {
            jQuery('a#fancybox-auto,#fancybox-auto>a').first().trigger('click')
          }, 1000);
        };
        jQuery(easy_fancybox_handler);
        jQuery(document).on('post-load', easy_fancybox_handler);
        jQuery(easy_fancybox_auto);
      });
    </script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/eventmove.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/twentytwenty.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/before-after-slider.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/waypoints.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/countbox.js')}}"></script>
    @yield('script')

</body>
</html>
