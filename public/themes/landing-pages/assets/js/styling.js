jQuery((function(e) {
	"undefined" == typeof parallaxStyles || "undefined" == typeof simpleParallax || parallaxStyles["disable-parallax-mobile"] && window.matchMedia("(max-width: " + parallaxStyles["mobile-breakpoint"] + ")").matches || new simpleParallax(document.querySelectorAll("[data-siteorigin-parallax], .sow-slider-image-parallax .sow-slider-background-image"), {
		delay: parallaxStyles.delay,
		scale: parallaxStyles.scale < 1.1 ? 1.1 : parallaxStyles.scale
	}), e(window).on("resize load", (function() {
		! function() {
			if (panelsStyles.stretchRows) {
				var a = e(panelsStyles.fullContainer);
				0 === a.length && (a = e("body"));
				var l = e(".siteorigin-panels-stretch.panel-row-style");
				l.each((function() {
					var l = e(this),
						t = l.data("stretch-type"),
						r = "full-stretched-padded" === t ? "" : 0;
					l.css({
						"margin-left": 0,
						"margin-right": 0
					}), "full-stretched-padded" !== t && l.css({
						"padding-left": r,
						"padding-right": r
					});
					var i = l.offset().left - a.offset().left,
						s = a.outerWidth() - i - l.parent().outerWidth();
					l.css({
						"margin-left": -i + "px",
						"margin-right": -s + "px"
					}), "full" === t && l.css({
						"padding-left": i + "px",
						"padding-right": s + "px"
					});
					var d = l.find("> .panel-grid-cell");
					"full-stretched" === t && 1 === d.length && d.css({
						"padding-left": 0,
						"padding-right": 0
					}), l.css({
						"border-left": r,
						"border-right": r
					})
				})), l.length && e(window).trigger("panelsStretchRows")
			}
		}()
	})).trigger("resize"), e("body").removeClass("siteorigin-panels-before-js")
}));