//! ++++++++++++++++++++++++++++++++++++++
! function(jQuery, undefined) {
	"use strict";
	//! ANIMATION MATRIX
	var _E, esgAnimmatrix, esgItemAnimations, supressFocus, startAnimations, mergedTransitions, vhandlers = {};

	function tpGSReady() {
		esgAnimmatrix = {
			"esg-none": [0, {
				autoAlpha: 1,
				rotationZ: 0,
				x: 0,
				y: 0,
				scale: 1,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0
			}, {
				autoAlpha: 1,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, 0, {
				autoAlpha: 1,
				overwrite: "all"
			}],
			"esg-fade": [.3, {
				autoAlpha: 0,
				rotationZ: 0,
				x: 0,
				y: 0,
				scale: 1,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0
			}, {
				autoAlpha: 1,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-fadeblur": [.3, {
				autoAlpha: 1,
				rotationZ: 0,
				x: 0,
				y: 0,
				scale: 1,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0
			}, {
				autoAlpha: .5,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 1,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-fadeout": [.3, {
				autoAlpha: 1,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, {
				autoAlpha: 0,
				rotationZ: 0,
				x: 0,
				y: 0,
				scale: 1,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0
			}, .3, {
				autoAlpha: 1,
				rotationZ: 0,
				x: 0,
				y: 0,
				scale: 1,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-covergrowup": [.3, {
				autoAlpha: 1,
				top: "100%",
				marginTop: "-10px",
				rotationZ: 0,
				x: 0,
				y: 0,
				scale: 1,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0
			}, {
				autoAlpha: 1,
				top: "0%",
				marginTop: "0px",
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 1,
				top: "100%",
				marginTop: "-10px",
				bottom: 0,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, !0],
			"esg-flipvertical": [.5, {
				x: 0,
				y: 0,
				scale: .99,
				rotationZ: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				rotationX: 180,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, {
				rotationX: 0,
				autoAlpha: 1,
				scale: 1,
				z: .001,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}, .5, {
				rotationX: 180,
				autoAlpha: 0,
				scale: 1,
				z: -.001,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}, !0],
			"esg-flipverticalout": [.5, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				rotationX: 0,
				autoAlpha: 1,
				z: .001,
				transformOrigin: "50% 50%"
			}, {
				rotationX: -180,
				scale: 1,
				autoAlpha: 0,
				z: -150,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}, .5, {
				rotationX: 0,
				autoAlpha: 1,
				scale: 1,
				z: 0,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}],
			"esg-fliphorizontal": [.5, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				skewX: 0,
				skewY: 0,
				rotationY: 180,
				autoAlpha: 0,
				z: -.001,
				transformOrigin: "50% 50%"
			}, {
				rotationY: 0,
				autoAlpha: 1,
				scale: 1,
				z: .001,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}, .5, {
				rotationY: 180,
				autoAlpha: 0,
				scale: 1,
				z: -.001,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}, !0],
			"esg-fliphorizontalout": [.5, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				z: .001,
				transformOrigin: "50% 50%"
			}, {
				rotationY: -180,
				scale: 1,
				autoAlpha: 0,
				z: -150,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}, .5, {
				rotationY: 0,
				autoAlpha: 1,
				scale: 1,
				z: .001,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}],
			"esg-flipup": [.5, {
				x: 0,
				y: 0,
				scale: .8,
				rotationZ: 0,
				rotationX: 90,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				z: .001,
				transformOrigin: "50% 100%"
			}, {
				scale: 1,
				rotationX: 0,
				autoAlpha: 1,
				z: .001,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, .3, {
				scale: .8,
				rotationX: 90,
				autoAlpha: 0,
				z: .001,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, !0],
			"esg-flipupout": [.5, {
				rotationX: 0,
				autoAlpha: 1,
				y: 0,
				ease: tpGS.Bounce.easeOut,
				overwrite: "all"
			}, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: -90,
				rotationY: 0,
				autoAlpha: 0,
				z: .001,
				transformOrigin: "50% 0%"
			}, .3, {
				rotationX: 0,
				autoAlpha: 1,
				y: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-flipdown": [.5, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: -90,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				z: .001,
				transformOrigin: "50% 0%"
			}, {
				rotationX: 0,
				autoAlpha: 1,
				y: 0,
				ease: tpGS.Bounce.easeOut,
				overwrite: "all"
			}, .3, {
				rotationX: -90,
				z: 0,
				ease: tpGS.Power2.easeOut,
				autoAlpha: 0,
				overwrite: "all"
			}, !0],
			"esg-flipdownout": [.5, {
				scale: 1,
				rotationX: 0,
				autoAlpha: 1,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, {
				x: 0,
				y: 0,
				scale: .8,
				rotationZ: 0,
				rotationX: 90,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				z: .001,
				transformOrigin: "50% 100%"
			}, .3, {
				scale: 1,
				rotationX: 0,
				autoAlpha: 1,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-flipright": [.5, {
				x: 0,
				y: 0,
				scale: .8,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 90,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "0% 50%"
			}, {
				scale: 1,
				rotationY: 0,
				autoAlpha: 1,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				scale: .8,
				rotationY: 90,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, !0],
			"esg-fliprightout": [.5, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				skewX: 0,
				skewY: 0,
				rotationY: 0,
				autoAlpha: 1,
				transformOrigin: "100% 50%"
			}, {
				scale: 1,
				rotationY: -90,
				autoAlpha: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, .3, {
				scale: 1,
				z: 0,
				rotationY: 0,
				autoAlpha: 1,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			"esg-flipleft": [.5, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: -90,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "100% 50%"
			}, {
				rotationY: 0,
				autoAlpha: 1,
				z: .001,
				scale: 1,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				rotationY: -90,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, !0],
			"esg-flipleftout": [.5, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				skewX: 0,
				skewY: 0,
				rotationY: 0,
				autoAlpha: 1,
				transformOrigin: "0% 50%"
			}, {
				scale: 1,
				rotationY: 90,
				autoAlpha: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, .3, {
				scale: 1,
				z: 0,
				rotationY: 0,
				autoAlpha: 1,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			"esg-turn": [.5, {
				x: 50,
				y: 0,
				scale: 0,
				rotationZ: 0,
				rotationX: 0,
				rotationY: -40,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "50% 50%"
			}, {
				scale: 1,
				x: 0,
				rotationY: 0,
				autoAlpha: 1,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}, .3, {
				scale: 0,
				rotationY: -40,
				autoAlpha: 1,
				z: 0,
				x: 50,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}, !0],
			"esg-turnout": [.5, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "50% 50%"
			}, {
				rotationY: 40,
				scale: .6,
				autoAlpha: 0,
				x: -50,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}, .3, {
				scale: 1,
				rotationY: 0,
				z: 0,
				autoAlpha: 1,
				x: 0,
				rotationX: 0,
				rotationZ: 0,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}],
			"esg-slide": [.5, {
				x: -1e4,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				x: 0,
				y: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 1,
				x: -1e4,
				y: 0,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-slideout": [.5, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				x: 0,
				y: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 1,
				x: 0,
				y: 0,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-slideright": [.5, {
				xPercent: -50,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				xPercent: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				xPercent: -50,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-sliderightout": [.5, {
				autoAlpha: 1,
				xPercent: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, {
				xPercent: 50,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, .3, {
				autoAlpha: 1,
				xPercent: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			"esg-scaleleft": [.5, {
				x: 0,
				y: 0,
				scaleX: 0,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "100% 50%"
			}, {
				autoAlpha: 1,
				x: 0,
				scaleX: 1,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 1,
				x: 0,
				z: 0,
				scaleX: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-scaleright": [.5, {
				x: 0,
				y: 0,
				scaleX: 0,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "0% 50%"
			}, {
				autoAlpha: 1,
				x: 0,
				scaleX: 1,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 1,
				x: 0,
				z: 0,
				scaleX: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-slideleft": [.5, {
				xPercent: 50,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				xPercent: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				xPercent: 50,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-slideleftout": [.5, {
				autoAlpha: 1,
				xPercent: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, {
				xPercent: -50,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, .3, {
				autoAlpha: 1,
				xPercent: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			"esg-slideup": [.5, {
				x: 0,
				yPercent: 50,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				yPercent: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				yPercent: 50,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-slideupout": [.5, {
				autoAlpha: 1,
				yPercent: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, {
				x: 0,
				yPercent: -50,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, .3, {
				autoAlpha: 1,
				yPercent: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			"esg-slidedown": [.5, {
				x: 0,
				yPercent: -50,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				yPercent: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				yPercent: -50,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-slidedownout": [.5, {
				autoAlpha: 1,
				yPercent: 0,
				z: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, {
				x: 0,
				yPercent: 50,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				z: 10,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, .3, {
				autoAlpha: 1,
				yPercent: 0,
				z: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			"esg-slideshortright": [.5, {
				x: -30,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				x: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				x: -30,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-slideshortrightout": [.5, {
				autoAlpha: 1,
				x: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, {
				x: 30,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, .3, {
				autoAlpha: 1,
				x: 30,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			"esg-slideshortleft": [.5, {
				x: 30,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				x: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				x: 30,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-slideshortleftout": [.5, {
				autoAlpha: 1,
				x: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, {
				x: -30,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, .3, {
				autoAlpha: 1,
				x: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			"esg-slideshortup": [.5, {
				x: 0,
				y: 30,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				y: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				y: 30,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-slideshortupout": [.5, {
				autoAlpha: 1,
				y: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, {
				x: 0,
				y: -30,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, .3, {
				autoAlpha: 1,
				y: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			".esg-slideshortdown": [.5, {
				x: 0,
				y: -30,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				y: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				y: -30,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-slideshortdownout": [.5, {
				autoAlpha: 1,
				y: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, {
				x: 0,
				y: 30,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, .3, {
				autoAlpha: 1,
				y: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			"esg-skewright": [.5, {
				xPercent: -100,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 60,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				xPercent: 0,
				skewX: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				skewX: -60,
				xPercent: -100,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-skewrightout": [.5, {
				autoAlpha: 1,
				xPercent: 0,
				skewX: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, {
				xPercent: 100,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: -60,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, .3, {
				autoAlpha: 1,
				xPercent: 0,
				skewX: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			"esg-skewleft": [.5, {
				xPercent: 100,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: -60,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				xPercent: 0,
				skewX: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				xPercent: 100,
				z: 0,
				skewX: 60,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-skewleftout": [.5, {
				autoAlpha: 1,
				xPercent: 0,
				skewX: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, {
				xPercent: -100,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 60,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, .3, {
				autoAlpha: 1,
				xPercent: 0,
				skewX: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			"esg-shifttotop": [.5, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				y: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 1,
				y: 0,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-rollleft": [.5, {
				xPercent: 50,
				y: 0,
				scale: 1,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				rotationZ: 90,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				xPercent: 0,
				rotationZ: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				xPercent: 50,
				z: 0,
				rotationZ: 90,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-rollleftout": [.5, {
				autoAlpha: 1,
				xPercent: 0,
				rotationZ: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, {
				xPercent: 50,
				y: 0,
				scale: 1,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				rotationZ: 90,
				transformOrigin: "50% 50%"
			}, .3, {
				autoAlpha: 1,
				xPercent: 0,
				rotationZ: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			"esg-rollright": [.5, {
				xPercent: -50,
				y: 0,
				scale: 1,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				rotationZ: -90,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				xPercent: 0,
				rotationZ: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				xPercent: -50,
				rotationZ: -90,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-rollrightout": [.5, {
				autoAlpha: 1,
				xPercent: 0,
				rotationZ: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, {
				xPercent: -50,
				y: 0,
				scale: 1,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				rotationZ: -90,
				transformOrigin: "50% 50%"
			}, .3, {
				autoAlpha: 1,
				xPercent: 0,
				rotationZ: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			"esg-falldown": [.4, {
				x: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				yPercent: -100
			}, {
				autoAlpha: 1,
				yPercent: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .4, {
				yPercent: -100,
				autoAlpha: 0,
				z: 0,
				ease: tpGS.Power2.easeOut,
				delay: .2,
				overwrite: "all"
			}],
			"esg-falldownout": [.4, {
				autoAlpha: 1,
				yPercent: 0,
				ease: tpGS.Back.easeOut,
				overwrite: "all"
			}, {
				x: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				yPercent: 100
			}, .4, {
				autoAlpha: 1,
				yPercent: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}],
			"esg-zoomin": [.3, {
				x: 0,
				y: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				rotationZ: 80,
				scale: .6,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				scale: 1,
				rotationZ: 0,
				ease: tpGS.Back.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 0,
				scale: .6,
				z: 0,
				rotationZ: 80,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-rotatescaleout": [.3, {
				autoAlpha: 1,
				scale: 1,
				rotationZ: 0,
				ease: tpGS.Back.easeOut,
				overwrite: "all"
			}, {
				x: 0,
				y: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				rotationZ: 80,
				scale: .6,
				transformOrigin: "50% 50%"
			}, .3, {
				autoAlpha: 1,
				scale: 1,
				rotationZ: 0,
				ease: tpGS.Back.easeOut,
				overwrite: "all"
			}],
			"esg-zoomintocorner": [.5, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "20% 50%"
			}, {
				autoAlpha: 1,
				scale: 1.2,
				x: 0,
				y: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .5, {
				x: 0,
				y: 0,
				scale: 1,
				autoAlpha: 1,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-zoomouttocorner": [.5, {
				x: 0,
				y: 0,
				scale: 1.2,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "80% 50%"
			}, {
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .5, {
				x: 0,
				y: 0,
				scale: 1.2,
				autoAlpha: 1,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-zoomtodefault": [.5, {
				x: 0,
				y: 0,
				scale: 1.2,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .5, {
				x: 0,
				y: 0,
				scale: 1.2,
				autoAlpha: 1,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-zoomdefaultblur": [.5, {
				x: 0,
				y: 0,
				scale: 1.2,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .5, {
				x: 0,
				y: 0,
				scale: 1.2,
				autoAlpha: 1,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-zoomback": [.5, {
				x: 0,
				y: 0,
				scale: .2,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				ease: tpGS.Back.easeOut,
				overwrite: "all"
			}, .5, {
				x: 0,
				y: 0,
				scale: .2,
				autoAlpha: 0,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-zoombackout": [.5, {
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				ease: tpGS.Back.easeOut,
				overwrite: "all"
			}, {
				x: 0,
				y: 0,
				scale: .2,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, .5, {
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				ease: tpGS.Back.easeOut,
				overwrite: "all"
			}],
			"esg-zoomfront": [.5, {
				x: 0,
				y: 0,
				scale: 1.5,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .5, {
				autoAlpha: 0,
				x: 0,
				y: 0,
				scale: 1.5,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-zoomfrontout": [.5, {
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				ease: tpGS.Back.easeOut,
				overwrite: "all"
			}, {
				x: 0,
				y: 0,
				scale: 1.5,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				transformOrigin: "50% 50%"
			}, .5, {
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				ease: tpGS.Back.easeOut,
				overwrite: "all"
			}],
			"esg-flyleft": [.8, {
				x: -80,
				y: 0,
				z: 0,
				scale: .3,
				rotationZ: 0,
				rotationY: 75,
				rotationX: 10,
				skewX: 0,
				skewY: 0,
				autoAlpha: .01,
				transformOrigin: "30% 10%"
			}, {
				rotationY: 0,
				rotationX: 0,
				rotationZ: 0,
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				z: 0,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}, .8, {
				autoAlpha: .01,
				x: -40,
				y: 0,
				z: 300,
				rotationY: 60,
				rotationX: 20,
				overwrite: "all"
			}],
			"esg-flyleftout": [.8, {
				rotationY: 0,
				rotationX: 0,
				rotationZ: 0,
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				z: 0,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}, {
				x: -80,
				y: 0,
				z: 0,
				scale: .3,
				rotationZ: 0,
				rotationY: 75,
				rotationX: 10,
				skewX: 0,
				skewY: 0,
				autoAlpha: .01,
				transformOrigin: "30% 10%"
			}, .8, {
				rotationY: 0,
				rotationX: 0,
				rotationZ: 0,
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				z: 0,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}],
			"esg-flyright": [.8, {
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				x: 80,
				y: 0,
				z: 0,
				scale: .3,
				rotationZ: 0,
				rotationY: -75,
				rotationX: 10,
				transformOrigin: "70% 20%"
			}, {
				rotationY: 0,
				rotationX: 0,
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				z: 0,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}, .8, {
				autoAlpha: 0,
				x: 40,
				y: -40,
				z: 300,
				rotationY: -60,
				rotationX: -40,
				overwrite: "all"
			}],
			"esg-flyrightout": [.8, {
				rotationY: 0,
				rotationX: 0,
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				z: 0,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}, {
				skewX: 0,
				skewY: 0,
				autoAlpha: 0,
				x: 80,
				y: 0,
				z: 0,
				scale: .3,
				rotationZ: 0,
				rotationY: -75,
				rotationX: 10,
				transformOrigin: "70% 20%"
			}, .8, {
				rotationY: 0,
				rotationX: 0,
				autoAlpha: 1,
				scale: 1,
				x: 0,
				y: 0,
				z: 0,
				ease: tpGS.Power3.easeInOut,
				overwrite: "all"
			}],
			"esg-mediazoom": [.3, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				scale: 1.4,
				x: 0,
				y: 0,
				ease: tpGS.Back.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 1,
				x: 0,
				y: 0,
				scale: 1,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-zoomblur": [.3, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				scale: 1.4,
				x: 0,
				y: 0,
				ease: tpGS.Back.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 1,
				x: 0,
				y: 0,
				scale: 1,
				z: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-blur": [.3, {
				autoAlpha: 1
			}, {
				autoAlpha: 1,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 1,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-grayscalein": [.3, {
				autoAlpha: 1
			}, {
				autoAlpha: 1,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 1,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-grayscaleout": [.3, {
				autoAlpha: 1,
				filter: "grayscale(100%)"
			}, {
				autoAlpha: 1,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				autoAlpha: 1,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-zoomandrotate": [.6, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "50% 50%"
			}, {
				autoAlpha: 1,
				scale: 1.4,
				x: 0,
				y: 0,
				rotationZ: 30,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, .4, {
				x: 0,
				y: 0,
				scale: 1,
				z: 0,
				rotationZ: 0,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-pressback": [.5, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "50% 50%"
			}, {
				rotationY: 0,
				autoAlpha: 1,
				scale: .8,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				rotationY: 0,
				autoAlpha: 1,
				z: 0,
				scale: 1,
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}],
			"esg-3dturnright": [.5, {
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformPerspective: 600
			}, {
				x: -40,
				y: 0,
				scale: .8,
				rotationZ: 2,
				rotationX: 5,
				rotationY: -28,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				transformOrigin: "100% 50% 40%",
				transformPerspective: 600,
				ease: tpGS.Power3.easeOut,
				overwrite: "all"
			}, .3, {
				z: 0,
				x: 0,
				y: 0,
				scale: 1,
				rotationZ: 0,
				rotationX: 0,
				rotationY: 0,
				skewX: 0,
				skewY: 0,
				autoAlpha: 1,
				force3D: "auto",
				ease: tpGS.Power2.easeOut,
				overwrite: "all"
			}, !0]
		}, esgItemAnimations = {
			"esg-item-zoomin": {
				enter: {
					time: .3,
					obj: {
						transformOrigin: "50% 50%",
						overwrite: "all",
						force3D: "auto",
						ease: tpGS.Power3.easeOut
					}
				},
				leave: {
					time: .3,
					obj: {
						transformOrigin: "50% 50%",
						scale: 1,
						overwrite: "all",
						force3D: "auto",
						ease: tpGS.Power3.easeOut
					}
				}
			},
			"esg-item-zoomout": {
				enter: {
					time: .3,
					obj: {
						transformOrigin: "50% 50%",
						overwrite: "all",
						force3D: "auto",
						ease: tpGS.Sine.easeOut
					}
				},
				leave: {
					time: .3,
					obj: {
						transformOrigin: "50% 50%",
						scale: 1,
						overwrite: "all",
						force3D: "auto",
						ease: tpGS.Sine.easeOut
					}
				}
			},
			"esg-item-fade": {
				enter: {
					time: .3,
					obj: {
						overwrite: "all",
						force3D: "auto",
						ease: tpGS.Sine.easeOut
					}
				},
				leave: {
					time: .3,
					obj: {
						opacity: 1,
						overwrite: "all",
						force3D: "auto",
						ease: tpGS.Sine.easeOut
					}
				}
			},
			"esg-item-blur": {
				enter: {
					time: .3,
					obj: {
						overwrite: "all",
						force3D: "auto",
						ease: tpGS.Power2.easeOut
					}
				},
				leave: {
					time: .3,
					obj: {
						blur: 0,
						overwrite: "all",
						force3D: "auto",
						ease: tpGS.Power2.easeOut
					}
				}
			},
			"esg-item-shift": {
				enter: {
					time: .3,
					obj: {
						overwrite: "all",
						force3D: "auto",
						ease: tpGS.Sine.easeOut
					}
				},
				leave: {
					time: .3,
					obj: {
						x: 0,
						y: 0,
						overwrite: "all",
						force3D: "auto",
						ease: tpGS.Sine.easeOut
					}
				}
			},
			"esg-item-rotate": {
				enter: {
					time: .3,
					obj: {
						transformOrigin: "50% 50%",
						overwrite: "all",
						force3D: "auto",
						ease: tpGS.Sine.easeOut
					}
				},
				leave: {
					time: .3,
					obj: {
						transformOrigin: "50% 50%",
						rotation: 0,
						overwrite: "all",
						force3D: "auto",
						ease: tpGS.Sine.easeOut
					}
				}
			}
		}, startAnimations = jQuery.extend(!0, {}, esgAnimmatrix), mergedTransitions = ["slideup", "covergrowup", "slideleft", "slidedown", "flipvertical", "fliphorizontal", "flipup", "flipdown", "flipright", "flipleft", "skewleft", "flipleft", "zoomin", "flyleft", "flyright"]
	}
	if ("undefined" != typeof tpGS) tpGSReady();
	else var tpGSTimer = setInterval(function() {
		"undefined" != typeof tpGS && (clearInterval(tpGSTimer), tpGSReady())
	}, 100);

	function updateFilterVisibility(e, t, a, i, o) {
		if (i && a.length) {
			for (var s = i.split(","), r = t.find(".esg-filterbutton.selected").toArray().map(function(e) {
					return e.dataset.filter.toString().replace("filter-", "")
				}), n = !0, l = s.length, d = 0; d < l; d++)
				if (-1 === r.indexOf(s[d])) {
					n = !1;
					break
				}(o ? t : a)[n ? "show" : "hide"]()
		}
	}

	function getFullscreenHeight(e) {
		var t = _E.winH;
		if (_E[e].minFullScreenHeight = _E[e].minFullScreenHeight === undefined ? 0 : _E[e].minFullScreenHeight, _E[e].fullScreenOffsetContainer != undefined) try {
			var a = _E[e].fullScreenOffsetContainer.split(",");
			a && jQuery.each(a, function(a, i) {
				i !== undefined && null !== i && i.length > 0 && (t -= jQuery(i).outerHeight(!0)), _E[e].minFullScreenHeight !== undefined && t < _E[e].minFullScreenHeight && (t = _E[e].minFullScreenHeight)
			})
		} catch (e) {}
		return t
	}

	function checkBottomPos(e, t) {
		var a = _E[e].c.offset().top + _E[e].c.height() + (_E[e].contPadTop + _E[e].contPadBottom) - _E.doc.scrollTop(),
			i = _E.winH,
			o = _E.doc.height();
		(_E[e].lastBottomCompare != a && i >= a || t && i >= a || o === i && i > a || _E[e].justfiltered) && (_E[e].justfiltered = !1, _E[e].lastBottomCompare = a, _E[e].lmbut && 1 != _E[e].loading && (_E[e].loading = 1, loadMoreItems(e, 3)))
	}

	function createCookie(e, t, a) {
		var i;
		if (a) {
			var o = new Date;
			o.setTime(o.getTime() + 24 * a * 60 * 60 * 1e3), i = "; expires=" + o.toGMTString()
		} else i = "";
		document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + i + "; path=/"
	}

	function readCookie(e) {
		for (var t = encodeURIComponent(e) + "=", a = document.cookie.split(";"), i = 0; i < a.length; i++) {
			for (var o = a[i];
				" " === o.charAt(0);) o = o.substring(1, o.length);
			if (0 === o.indexOf(t)) return decodeURIComponent(o.substring(t.length, o.length))
		}
		return null
	}

	function checkMoreToLoad(e) {
		var t = [],
			a = [],
			i = jQuery(_E[e].filterGroupClass + ".esg-filter-wrapper.eg-search-wrapper .eg-forcefilter").length;
		jQuery(_E[e].filterGroupClass + ".esg-filter-wrapper .esg-filterbutton.selected, " + _E[e].filterGroupClass + " .esg-filter-wrapper .esg-filterbutton.selected").each(function() {
			var e = jQuery(this).data("fid");
			void 0 === e && "cat-searchresult" === jQuery(this).data("filter") && (e = -1), -1 == jQuery.inArray(e, a) && (t.push(e), a.push(e))
		}), 0 == jQuery(_E[e].filterGroupClass + ".esg-filter-wrapper .esg-filterbutton.selected, " + _E[e].filterGroupClass + " .esg-filter-wrapper .esg-filterbutton.selected").length && t.push(-1);
		for (var o = [], s = 0; s < _E[e].loadMoreItems.length; s++) jQuery.each(_E[e].loadMoreItems[s][1], function(a, r) {
			jQuery.each(t, function(t, a) {
				a == r && -1 != _E[e].loadMoreItems[s][0] && (0 == i || 1 == i && "cat-searchresult" === _E[e].loadMoreItems[s][2]) && o.push(_E[e].loadMoreItems[s])
			})
		});
		return addCountSuffix(e), o
	}

	function getFilterAmount(e, t, a) {
		var i, o = t.data("fid"),
			s = t.data("filter");
		a > 0 && (s += ".cat-searchresult"), i = _E[e].c.find("." + s).not(".eg-addnewitem-wrapper").length;
		for (var r = 0; r < _E[e].loadMoreItems.length; r++) 0 == a ? jQuery.each(_E[e].loadMoreItems[r][1], function(t, a) {
			a === o && -1 != _E[e].loadMoreItems[r][0] && i++
		}) : -1 != jQuery.inArray(o, _E[e].loadMoreItems[r][1]) && "cat-searchresult" === _E[e].loadMoreItems[r][2] && i++;
		return i
	}

	function addCountSuffix(e) {
		var t = jQuery(_E[e].filterGroupClass + ".esg-filter-wrapper.eg-search-wrapper .eg-justfilteredtosearch, " + _E[e].filterGroupClass + " .esg-filter-wrapper.eg-search-wrapper .eg-justfilteredtosearch").length,
			a = jQuery(_E[e].filterGroupClass + ".esg-filter-wrapper.eg-search-wrapper .eg-forcefilter, " + _E[e].filterGroupClass + " .esg-filter-wrapper.eg-search-wrapper .eg-forcefilter").length,
			i = jQuery(_E[e].filterGroupClass + ".esg-filter-wrapper.eg-show-amount, " + _E[e].filterGroupClass + " .esg-filter-wrapper.eg-show-amount");
		if (jQuery(".esg-filterbutton", i).each(function() {
				var i = jQuery(this);
				if (0 == i.find(".eg-el-amount").length || t > 0) {
					var o = getFilterAmount(e, i, a);
					0 == i.find(".eg-el-amount").length && i.append('<span class="eg-el-amount">0</span>'), countToTop(e, i, o)
				}
			}), i.hasClass("dropdownstyle")) {
			var o = jQuery(".esg-selected-filterbutton", i);
			if (!jQuery(".eg-el-amount", o).length) {
				o.data({
					fid: "-1",
					filter: "filterall"
				});
				var s = getFilterAmount(e, o, a);
				o.find("span").append('<span class="eg-el-amount">0</span>'), countToTop(e, o, s)
			}
		}
		jQuery(_E[e].filterGroupClass + ".esg-filter-wrapper.eg-search-wrapper .eg-justfilteredtosearch").removeClass("eg-justfilteredtosearch")
	}

	function countToTop(e, t, a) {
		var i = t.find(".eg-el-amount"),
			o = {
				value: parseInt(i.text(), 0)
			};
		tpGS.gsap.to(o, 2, {
			value: a,
			ease: tpGS.Power3.easeInOut,
			onUpdate: function() {
				i.html(Math.round(this._targets[0].value))
			},
			onComplete: function() {
				if (!t.hasClass("selected")) return;
				var a = t.closest(".esg-filter-wrapper");
				"single" == _E[e].filterType && a.hasClass("dropdownstyle") && a.find(".esg-selected-filterbutton span").html(t.html())
			}
		})
	}

	function buildLoader(e, t, a, i) {
		let o;
		if (_E[t].esgloader != undefined && _E[t].esgloader.length > 0) return !1;
		var s = a === undefined ? _E[t].spinner : a.spinner,
			r = a === undefined ? _E[t].spinnerColor : a.spinnerColor;
		return e.append('<div class="esg-loader ' + s + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), o = e.find(".esg-loader"), "spinner1" != s && "spinner2" != s || o.css("background", r), "spinner3" != s && "spinner4" != s || e.find(".bounce1, .bounce2, .bounce3, .dot1, .dot2").css("background", r), i || tpGS.gsap.to(e, .3, {
			minHeight: "100px",
			zIndex: 0
		}), o
	}

	function setKeyToNull(e, t) {
		jQuery.each(_E[e].loadMoreItems, function(a, i) {
			i[0] == t && (_E[e].loadMoreItems[a][0] = -1, _E[e].loadMoreItems[a][2] = "already loaded")
		})
	}

	function loadMoreEmpty(e) {
		for (var t = !0, a = 0; a < _E[e].loadMoreItems.length; a++) - 1 != _E[e].loadMoreItems[a][0] && (t = !1);
		return t
	}

	function checkAnyItemVisible(e) {
		1 != _E[e].loading && _E[e].c && _E[e].c.length && (_E[e].c.find(".tp-esg-item").length === _E[e].c.find(".tp-esg-item.itemishidden").length ? _E[e].lmbut != undefined && _E[e].lmbut.length > 0 && jQuery(_E[e].lmbut).is(":visible") || (_E[e].c.append('<span class="no-filter-message">' + _E[e].filterNoMatch + "</span>"), _E[e].c.addClass("show-message")) : _E[e].c.removeClass("show-message"))
	}

	function loadMoreItems(e, t) {
		var a = checkMoreToLoad(e),
			i = [];
		for (var o in _E[e].items) _E[e].items.hasOwnProperty(o) && _E[e].items[o].c.className.indexOf("itemtoshow") >= 0 && 0;
		_E[e].tryToLoad = _E[e].tryToLoad === undefined ? 0 : _E[e].tryToLoad, jQuery.each(a, function(t, a) {
			i.length < parseInt(_E[e].tryToLoad, 0) + parseInt(_E[e].loadMoreAmount, 0) && (i.push(a[0]), setKeyToNull(e, a[0]))
		}), _E[e].tryToLoad = 0;
		var s = checkMoreToLoad(e).length;
		if ("scroll" === _E[e].loadMoreType && (_E[e].esgloader.addClass("infinityscollavailable"), "add" != _E[e].esgloaderprocess && (_E[e].esgloaderprocess = "add", tpGS.gsap.to(_E[e].esgloader, .5, {
				autoAlpha: 1,
				overwrite: "all"
			}))), i.length > 0) {
			_E[e].lmbut.length > 0 && (tpGS.gsap.to(_E[e].lmbut, .4, {
				autoAlpha: .2
			}), _E[e].loading = 1);
			var r = {
				action: _E[e].loadMoreAjaxAction,
				client_action: "load_more_items",
				token: _E[e].loadMoreAjaxToken,
				data: i,
				gridid: _E[e].gridID
			};
			_E[e].customGallery && (r.customgallery = !0), jQuery.ajax({
				type: "post",
				url: _E[e].loadMoreAjaxUrl,
				dataType: "json",
				data: r,
				success: function(t, a, i) {
					if (t.success) {
						var o = jQuery(t.data).filter(function(e) {
							if (1 === this.nodeType) return jQuery(this).data("eg-load-more-new", e), !0
						});
						_E[e].customGallery && o.addClass("eg-newli"), jQuery(_E[e].filterGroupClass + ".esg-filter-wrapper.eg-search-wrapper .eg-forcefilter").length > 0 && o.addClass("cat-searchresult"), _E[e].c.find("ul").first().append(o), prepareItemsInGrid(e, !0), stopAllVideos(!0);
						var r = jQuery(_E[e].filterGroupClass + ".esg-sortbutton-wrapper ," + _E[e].filterGroupClass + " .esg-sortbutton-wrapper");
						if (r.length) {
							var n = r.find(".esg-sortbutton-order").data("dir"),
								l = r.find(".esg-sorting-select").val();
							_E[e].c.find(".tp-esg-item").tsort({
								data: l,
								forceStrings: "false",
								order: n
							})
						}
						setTimeout(function() {
							organiseGrid(e, "Ajax Loaded"), prepareSortingAndOrders(e), loadMoreEmpty(e) ? _E[e].lmbut.remove() : (_E[e].lmtxt = _E[e].loadMoreTxt + " (" + s + ")", "off" == _E[e].loadMoreNr && (_E[e].lmtxt = _E[e].loadMoreTxt), 0 == s ? _E[e].lmbut.html(_E[e].loadMoreEndTxt) : _E[e].lmbut.html(_E[e].lmtxt), _E[e].lmbut.length > 0 && (tpGS.gsap.to(_E[e].lmbut, .4, {
								autoAlpha: 1,
								overwrite: "all"
							}), _E[e].loading = 0)), checkAnyItemVisible(e), setTimeout(function() {
								_E[e].animDelay = "on"
							}, 500)
						}, _E[e].animSpeed + 1)
					}
				},
				error: function(t, a, i) {
					var o = _E[e].loadMoreErrorMessage;
					console.log("error"), console.log(_E[e]), o || (o = "FAILURE: " + a), _E[e].lmbut.html(o)
				}
			})
		} else _E[e].loadMoreTriggerCache = -1, loadMoreEmpty(e) ? (_E[e].lmbut.remove(), "scroll" === _E[e].loadMoreType && _E[e].esgloader.remove()) : (_E[e].loading = 0, _E[e].lmbut.html(_E[e].loadMoreEndTxt))
	}

	function killOldCustomAjaxContent(e) {
		var t = e.data("lastposttype"),
			a = e.data("oldajaxsource"),
			i = e.data("oldajaxtype"),
			o = e.data("oldajaxvideoaspect"),
			s = e.data("oldselector");
		if (t != undefined && "" != t) try {
			jQuery.each(jQuery.fn.tpessential.defaults.ajaxTypes, function(r, n) {
				n != undefined && n.type != undefined && n.type == t && n.killfunc != undefined && setTimeout(function() {
					n.killfunc.call(this, {
						id: a,
						type: i,
						aspectratio: o,
						selector: s
					}) && e.empty()
				}, 250)
			})
		} catch (e) {
			console.log(e)
		}
		e.data("lastposttype", "")
	}

	function addAjaxNavigagtion(e, t) {
		var a = " eg-acp-" + _E[e].ajaxClosePosition;
		a = (a = a + " eg-acp-" + _E[e].ajaxCloseStyle) + " eg-acp-" + _E[e].ajaxCloseType;
		var i = "eg-icon-left-open-1",
			o = "eg-icon-right-open-1",
			s = '<i class="eg-icon-cancel"></i>';
		"type1" == _E[e].ajaxCloseType && (i = "eg-icon-left-open-big", o = "eg-icon-right-open-big", _E[e].ajaxCloseTxt = "", s = "X"), "true" != _E[e].ajaxCloseInner && 1 != _E[e].ajaxCloseInner || (a += " eg-acp-inner");
		var r = '<div class="eg-ajax-closer-wrapper' + a + '">';
		switch ("tr" == _E[e].ajaxClosePosition || "br" == _E[e].ajaxClosePosition ? ("on" == _E[e].ajaxNavButton && (r = r + '<div class="eg-ajax-left eg-ajax-navbt"><i class="' + i + '"></i></div><div class="eg-ajax-right eg-ajax-navbt"><i class="' + o + '"></i></div>'), "on" == _E[e].ajaxCloseButton && (r = r + '<div class="eg-ajax-closer eg-ajax-navbt">' + s + _E[e].ajaxCloseTxt + "</div>")) : ("on" == _E[e].ajaxCloseButton && (r = r + '<div class="eg-ajax-closer eg-ajax-navbt">' + s + _E[e].ajaxCloseTxt + "</div>"), "on" == _E[e].ajaxNavButton && (r = r + '<div class="eg-ajax-left eg-ajax-navbt"><i class="' + i + '"></i></div><div class="eg-ajax-right eg-ajax-navbt"><i class="' + o + '"></i></div>')), r += "</div>", _E[e].ajaxClosePosition) {
			case "tl":
			case "tr":
			case "t":
				t.prepend(r);
				break;
			case "bl":
			case "br":
			case "b":
				t.append(r)
		}

		function n(e) {
			var t = [];
			return jQuery.each(e, function(e, a) {
				jQuery(a).closest(".itemtoshow.isvisiblenow").length > 0 && t.push(a)
			}), t
		}
		t.find(".eg-ajax-closer").on("click", function() {
			showHideAjaxContainer(t, e, !1, null, null, .25, !0)
		}), t.find(".eg-ajax-right").on("click", function() {
			var t = _E[e].c.find(".lastclickedajax").closest("li"),
				a = t.nextAll().find(".eg-ajax-a-button"),
				i = t.prevAll().find(".eg-ajax-a-button");
			a = n(a), i = n(i), a.length > 0 ? a[0].trigger("click") : i[0].trigger("click")
		}), t.find(".eg-ajax-left").on("click", function() {
			var t = _E[e].c.find.find(".lastclickedajax").closest("li"),
				a = t.nextAll().find(".eg-ajax-a-button"),
				i = t.prevAll().find(".eg-ajax-a-button");
			a = n(a), (i = n(i)).length > 0 ? i[i.length - 1].trigger("click") : a[a.length - 1].trigger("click")
		})
	}

	function showHideAjaxContainer(e, t, a, i, o, s, r) {
		s = s == undefined ? .25 : s;
		var n = e.data("lastheight") != undefined ? e.data("lastheight") : "100px";
		a ? (s += 1.2, addAjaxNavigagtion(t, e), tpGS.gsap.set(e, {
			height: "auto"
		}), tpGS.gsap.set(e.parent(), {
			minHeight: 0,
			maxHeight: "none",
			height: "auto",
			overwrite: "all"
		}), tpGS.gsap.from(e, s, {
			height: n,
			ease: tpGS.Power3.easeInOut,
			onStart: function() {
				tpGS.gsap.to(e, s, {
					autoAlpha: 1,
					ease: tpGS.Power3.easeOut
				})
			},
			onComplete: function() {
				e.data("lastheight", e.height()), _E.win.trigger("resize.essg" + t), 0 == e.find(".eg-ajax-closer-wrapper").length && addAjaxNavigagtion(t, e)
			}
		}), "off" != _E[t].ajaxScrollToOnLoad && jQuery("html, body").animate({
			scrollTop: e.offset().top - o
		}, {
			queue: !1,
			speed: .5
		})) : (r && (killOldCustomAjaxContent(e), n = "0px"), tpGS.gsap.to(e.parent(), s, {
			height: n,
			ease: tpGS.Power2.easeInOut,
			onStart: function() {
				tpGS.gsap.to(e, s, {
					autoAlpha: 0,
					ease: tpGS.Power3.easeOut
				})
			},
			onComplete: function() {
				setTimeout(function() {
					r && e.html("")
				}, 300)
			}
		}))
	}

	function removeLoader(e) {
		e.closest(".eg-ajaxanimwrapper").find(".esg-loader").remove()
	}

	function ajaxCallBack(id, a) {
		if (_E[id].ajaxCallback == undefined || "" == _E[id].ajaxCallback || _E[id].ajaxCallback.length < 3) return !1;
		var splitter = _E[id].ajaxCallback.split(")");
		splitter = splitter[0].split("(");
		var callback = splitter[0],
			args = splitter.length > 1 && "" != splitter[1] ? splitter[1] + "," : "",
			obj = {};
		try {
			obj.containerid = "#" + _E[id].ajaxContentTarget, obj.postsource = a.data("ajaxsource"), obj.posttype = a.data("ajaxtype"), "on" == _E[id].ajaxCallbackArgument ? eval(callback + "(" + args + "obj)") : eval(callback + "(" + args + ")")
		} catch (e) {
			console.log("Callback Error"), console.log(e)
		}
	}

	function loadMoreContent(e, t) {
		_E[e].c.find(".lastclickedajax").removeClass("lastclickedajax"), t.addClass("lastclickedajax");
		var a = jQuery("#" + _E[e].ajaxContentTarget).find(".eg-ajax-target").eq(0),
			i = t.data("ajaxsource"),
			o = t.data("ajaxtype"),
			s = t.data("ajaxvideoaspect");
		if (s = "16:9" == s ? "widevideo" : "normalvideo", showHideAjaxContainer(a, e, !1), a.length > 0) switch (_E[e].ajaxJsUrl != undefined && "" != _E[e].ajaxJsUrl && _E[e].ajaxJsUrl.length > 3 && jQuery.getScript(_E[e].ajaxJsUrl).done(function(t, a) {
				_E[e].ajaxJsUrl = ""
			}).fail(function(t, a, i) {
				console.log("Loading Error on Ajax jQuery File. Please doublecheck if JS File and Path exist:" + _E[e].ajaxJSUrl), _E[e].ajaxJsUrl = ""
			}), _E[e].ajaxCssUrl != undefined && "" != _E[e].ajaxCssUrl && _E[e].ajaxCssUrl.length > 3 && (jQuery("<link>").appendTo("head").attr({
				type: "text/css",
				rel: "stylesheet"
			}).attr("href", _E[e].ajaxCssUrl), _E[e].ajaxCssUrl = ""), buildLoader(a.closest(".eg-ajaxanimwrapper"), e), a.data("ajaxload") != undefined && a.data("ajaxload").abort(), killOldCustomAjaxContent(a), o) {
			case "postid":
				var r = {
					action: _E[e].loadMoreAjaxAction,
					client_action: "load_more_content",
					token: _E[e].loadMoreAjaxToken,
					postid: i
				};
				setTimeout(function() {
					a.data("ajaxload", jQuery.ajax({
						type: "post",
						url: _E[e].loadMoreAjaxUrl,
						dataType: "json",
						data: r,
						success: function(i, o, s) {
							i.success && (jQuery(a).html(i.data), showHideAjaxContainer(a, e, !0, _E[e].ajaxScrollToOnLoad, _E[e].ajaxScrollToOffset), removeLoader(a), ajaxCallBack(e, t))
						},
						error: function(t, i, o) {
							if ("abort" != i) {
								console.log("abort"), console.log(_E[e]);
								var s = _E[e].loadMoreErrorMessage;
								s || (s = "FAILURE: <strong>" + i + "</strong>"), _E[e].loadMoreErrorMessage || (jQuery(a).append("<p>" + s + "</p>"), removeLoader(a))
							}
						}
					}))
				}, 300);
				break;
			case "youtubeid":
				setTimeout(function() {
					"false" != _E[e].youtubeNoCookie ? a.html('<div class="eg-ajax-video-container ' + s + '"><iframe width="560" height="315" src="//www.youtube-nocookie.com/embed/' + i + '?autoplay=1&vq=hd1080&fs=1&mute=1&playsinline=1" frameborder="0" allow="autoplay; fullscreen"></iframe></div>') : a.html('<div class="eg-ajax-video-container ' + s + '"><iframe width="560" height="315" src="//www.youtube.com/embed/' + i + '?autoplay=1&vq=hd1080&fs=1&mute=1&playsinline=1" frameborder="0" allow="autoplay; fullscreen"></iframe></div>'), removeLoader(a), showHideAjaxContainer(a, e, !0, _E[e].ajaxScrollToOnLoad, _E[e].ajaxScrollToOffset), ajaxCallBack(e, t)
				}, 300);
				break;
			case "vimeoid":
				setTimeout(function() {
					a.html('<div class="eg-ajax-video-container ' + s + '"><iframe src="https://player.vimeo.com/video/' + i + '?portrait=0&autoplay=1&muted=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allow="autoplay; fullscreen"></iframe></div>'), removeLoader(a), showHideAjaxContainer(a, e, !0, _E[e].ajaxScrollToOnLoad, _E[e].ajaxScrollToOffset), ajaxCallBack(e, t)
				}, 300);
				break;
			case "wistiaid":
				setTimeout(function() {
					a.html('<div class="eg-ajax-video-container ' + s + '"><iframe src="//fast.wistia.net/embed/iframe/' + i + '"allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="388" allow="autoplay; fullscreen"></iframe></div>'), removeLoader(a), showHideAjaxContainer(a, e, !0, _E[e].ajaxScrollToOnLoad, _E[e].ajaxScrollToOffset), ajaxCallBack(e, t)
				}, 300);
				break;
			case "html5vid":
				i = i.split("|"), setTimeout(function() {
					var o = -1 !== i[0].search("mp4") ? "video/mp4" : "audio/mpeg";
					a.html('<video autoplay="true" autoplay playsinline muted loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="' + i[0] + '" type="' + o + '"><source src="' + i[1] + '" type="video/webm"><source src="' + i[2] + '" type="video/ogg"></video>'), removeLoader(a), showHideAjaxContainer(a, e, !0, _E[e].ajaxScrollToOnLoad, _E[e].ajaxScrollToOffset), ajaxCallBack(e, t)
				}, 300);
				break;
			case "soundcloud":
			case "soundcloudid":
				setTimeout(function() {
					a.html('<iframe width="100%" height="250" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/' + i + '&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'), removeLoader(a), showHideAjaxContainer(a, e, !0, _E[e].ajaxScrollToOnLoad, _E[e].ajaxScrollToOffset), ajaxCallBack(e, t)
				}, 300);
				break;
			case "imageurl":
				setTimeout(function() {
					var o = new Image;
					o.onload = function() {
						var i = jQuery(this);
						a.html(""), i.css({
							width: "100%",
							height: "auto"
						}), a.append(jQuery(this)), removeLoader(a), showHideAjaxContainer(a, e, !0, _E[e].ajaxScrollToOnLoad, _E[e].ajaxScrollToOffset), ajaxCallBack(e, t)
					}, o.onerror = function(t) {
						a.html("Error"), removeLoader(a), showHideAjaxContainer(a, e, !0, _E[e].ajaxScrollToOnLoad, _E[e].ajaxScrollToOffset)
					}, o.src = i
				}, 300);
				break;
			default:
				jQuery.each(jQuery.fn.tpessential.defaults.ajaxTypes, function(t, r) {
					r.openAnimationSpeed == undefined && (r.openAnimationSpeed = 0), r != undefined && r.type != undefined && r.type == o && setTimeout(function() {
						a.data("lastposttype", o), a.data("oldajaxsource", i), a.data("oldajaxtype", o), a.data("oldajaxvideoaspect", s), a.data("oldselector", "#" + _E[e].ajaxContentTarget + " .eg-ajax-target"), showHideAjaxContainer(a, e, !0, _E[e].ajaxScrollToOnLoad, _E[e].ajaxScrollToOffset, 0), a.html(r.func.call(this, {
							id: i,
							type: o,
							aspectratio: s
						})), removeLoader(a)
					}, 300)
				})
		}
	}
	jQuery.fn.extend({
			esgObserver: function() {
				_E.generalObserver = !0, _E.win = jQuery(window), _E.doc = jQuery(document), _E.winW = _E.win.width(), _E.winH = _E.win.height(), _E.notIE = document.documentMode === undefined, _E.isChromium = window.chrome, _E.win.on("resize", function() {
					_E.winW = _E.win.width(), _E.winH = _E.win.height()
				}), document.hasFocus() && (_E.windowInFocus = !0), _E.notIE && !_E.isChromium ? _E.win.on("focusin", function() {
					supressFocus || jQuery.fn.redrawAllESG(150)
				}).on("focusout", function() {
					jQuery.fn.redrawAllESG("kill")
				}) : window.addEventListener ? (window.addEventListener("focus", function(e) {
					supressFocus || jQuery.fn.redrawAllESG(150)
				}, !1), window.addEventListener("blur", function() {
					jQuery.fn.redrawAllESG("kill")
				})) : (window.attachEvent("focus", function(e) {
					supressFocus || jQuery.fn.redrawAllESG(150)
				}), window.attachEvent("blur", function() {
					jQuery.fn.redrawAllESG("kill")
				})), "onpageshow" in window && (window.onpageshow = function(e) {
					e.persisted && jQuery(".esg-hovered").trigger("mouseleave")
				}), jQuery(window).on("elementor-pro/motion-fx/recalc", function(e) {
					jQuery(".elementor-tab-content.elementor-active").find(".esg-grid.esg-container").each(function() {
						jQuery(this).esquickdraw()
					})
				})
			},
			redrawAllESG: function(e) {
				clearTimeout(_E.redrawAllTimer), "kill" != e ? !0 !== _E.windowInFocus && (_E.windowInFocus = !0, _E.redrawAllTimer = setTimeout(function() {
					window.requestAnimationFrame(function() {
						jQuery("body").find(".esg-grid.esg-container").each(function() {
							jQuery(this).esquickdraw()
						})
					})
				}, e)) : _E.windowInFocus = !1
			},
			tpessential: function(e) {
				function t() {
					var t = this.id;
					//! GOOGLE FONTS LOADING
					function a(e) {
						mainPreparing(e), _E[e].initialised = "ready", jQuery("body").trigger("essentialready", e)
					}

					function i(e) {
						var t = !0;
						if (jQuery("head").find("*").each(function() {
								jQuery(this).attr("src") != undefined && jQuery(this).attr("src").indexOf("webfont.html") > 0 && (t = !1)
							}), window.WebFontConfig.active == undefined && t) {
							window.WebFontConfig = {
								google: {
									families: _E[e].googleFonts
								},
								active: function() {
									window.consentApi === undefined && window.requestAnimationFrame(function() {
										a(e)
									})
								},
								inactive: function() {
									window.consentApi === undefined && window.requestAnimationFrame(function() {
										a(e)
									})
								},
								timeout: 250
							};
							var i = document.createElement("script");
							i.src = ("https:" == document.location.protocol ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js", i.type = "text/javascript", i.async = "true";
							var o = document.getElementsByTagName("script")[0];
							o.parentNode.insertBefore(i, o)
						} else window.consentApi === undefined && window.requestAnimationFrame(function() {
							a(e)
						})
					}
					if (_E[t] = e, _E[t].c = jQuery(this), _E[t].contPadTop = parseInt(_E[t].c.css("paddingTop"), 0), _E[t].contPadBottom = parseInt(_E[t].c.css("paddingBottom"), 0), _E[t].viewportBuffer = _E[t].hasOwnProperty("viewportBuffer") ? .01 * _E[t].viewportBuffer : 0, _E[t].hasOwnProperty("inViewport") || (_E[t].inViewport = !0), _E[t].c.parent().css("position", "relative"), "cobbles" == _E[t].layout ? (_E[t].layout = "even", _E[t].evenCobbles = "on") : _E[t].evenCobbles = "off", "true" != _E[t].get && 1 != _E[t].get) {
						if (_E[t].get = !0, _E[t].filterGroupClass == undefined || 0 == _E[t].filterGroupClass.length ? _E[t].filterGroupClass = "#" + t : _E[t].filterGroupClass = "." + _E[t].filterGroupClass, tpGS.gsap == undefined) {
							if (1 == window.tplogs) try {
								console.error("GreenSock Engine Does not Exist!")
							} catch (e) {}
							return !1
						}
						if (1 == window.tplogs) try {
							console.info("GreenSock Engine Version in Essential Grid:" + tpGS.gsap.version)
						} catch (e) {}
						if (tpGS.force3D = "auto", 1 == window.tplogs) try {
							console.groupEnd(), console.groupEnd()
						} catch (e) {}
						_E.fullScreenMode = !1, _E.win.on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function() {
							_E.fullScreenMode = !_E.fullScreenMode
						}), _E[t].cpar = _E[t].c.parent(), _E[t].mypc = _E[t].cpar.hasClass("myportfolio-container") ? _E[t].cpar : _E[t].c.closest(".myportfolio-container"), _E[t].esgloader = buildLoader(_E[t].cpar, t), _E[t].firstshowever == undefined && jQuery(_E[t].filterGroupClass + ".esg-navigationbutton," + _E[t].filterGroupClass + " .esg-navigationbutton").css({
							visibility: "hidden"
						}), _E[t].ESGRPH = jQuery('<div class="esg-relative-placeholder esg-w100-hauto"></div>'), _E[t].cpar.append(_E[t].ESGRPH), _E[t].c.wrap('<div class="' + t + '-fullscreen-forcer esg-fullscreen-forcer"></div>'), _E[t].ESGCFF = _E[t].c.closest("." + t + "-fullscreen-forcer");
						var o = _E[t].ESGRPH.offset().left;
						"on" != _E[t].forceFullWidth && "on" != _E[t].forceFullScreen || tpGS.gsap.set(_E[t].ESGCFF, {
								left: 0 - o,
								width: _E.winW
							}), _E[t].animDelay = 0 == _E[t].delayBasic ? "off" : "on", _E[t].UL = _E[t].c.find("ul").first(), _E[t].UL.addClass("mainul").wrap('<div class="esg-overflowtrick"></div>'), _E[t].ESGOT = _E[t].c.find(".esg-overflowtrick"), _E[t].navLeft = jQuery(_E[t].filterGroupClass + ".esg-navbutton-solo-left," + _E[t].filterGroupClass + " .esg-navbutton-solo-left"), _E[t].navRight = jQuery(_E[t].filterGroupClass + ".esg-navbutton-solo-right," + _E[t].filterGroupClass + " .esg-navbutton-solo-right"), _E[t].navLeft_scode = _E[t].navLeft.hasClass("esg-nav-by-shortcode"), _E[t].navRight_scode = _E[t].navLeft.hasClass("esg-nav-by-shortcode"), _E[t].navLeft.length > 0 && !_E[t].navLeft_scode && (_E[t].navLeft.css({
								marginTop: 0 - _E[t].navLeft.height() / 2 + "px"
							}), _E[t].navLeft.appendTo(_E[t].ESGOT)), _E[t].navRight.length > 0 && !_E[t].navRight_scode && (_E[t].navRight.css({
								marginTop: 0 - _E[t].navRight.height() / 2 + "px"
							}), _E[t].navRight.appendTo(_E[t].ESGOT)), tpGS.CSSPlugin.defaultTransformPerspective = 1200, _E[t].animSpeed = _E[t].animSpeed / 1e3, _E[t].delayBasic = _E[t].delayBasic / 100, _E[t].filter = _E[t].statfilter, _E[t].origcolumn = _E[t].column, _E[t].currentpage = 0, _E[t].c.addClass("esg-layout-" + _E[t].layout), window._T = _E[t], loadVideoApis(t), "even" == _E[t].layout && "on" == _E[t].forceFullScreen && (tpGS.gsap.set([_E[t].ESGOT, _E[t].UL], {
								display: "block",
								height: getFullscreenHeight(t) + "px"
							}), _E[t].mypc[0].style.height = "auto", _E[t].mypc[0].classList.remove("eg-startheight")), 0 != _E[t].googleFonts.length ? "Promise" in window ? ((window.consentApi && window.consentApi.unblock("../../ajax.googleapis.com/ajax/libs/webfont/1/webfont.js") || Promise.resolve()).then(function() {
								i(t)
							}), window.consentApi && window.requestAnimationFrame(function() {
								a(t)
							})) : i(t) : window.requestAnimationFrame(function() {
								a(t)
							}),
							//! LOAD MORE ITEMS
							"button" == _E[t].loadMoreType ? (_E[t].c.append('<div class="esg-loadmore-wrapper esg-text-center"><div class="esg-navigationbutton esg-loadmore">LOAD MORE</div></div>'), _E[t].lmbut = _E[t].c.find(".esg-loadmore"), _E[t].lmtxt = _E[t].loadMoreTxt + " (" + checkMoreToLoad(t).length + ")", "off" == _E[t].loadMoreNr && (_E[t].lmtxt = _E[t].loadMoreTxt), _E[t].lmbut.html(_E[t].lmtxt), _E[t].lmbut.on("click", function() {
								1 != _E[t].loading && loadMoreItems(t, 2)
							}), 0 == checkMoreToLoad(t).length && _E[t].lmbut.remove()) : "scroll" == _E[t].loadMoreType && (_E[t].c.append('<div class="esg-navigationbutton esg-loadmore esg-display-inline-block">LOAD MORE</div>'), _E[t].lmbut = _E[t].c.find(".esg-loadmore"), _E[t].lmtxt = _E[t].loadMoreTxt + " (" + checkMoreToLoad(t).length + ")", "off" == _E[t].loadMoreNr && (_E[t].lmtxt = _E[t].loadMoreTxt), _E[t].lmbut.html(_E[t].lmtxt), jQuery(document, window).scroll(function() {
								checkBottomPos(t, !0)
							}), 0 == checkMoreToLoad(t).length && _E[t].lmbut.remove())
					}
					if (_E.doc.on("click." + t, ".esg-filterbutton", function() {
							checkAnyItemVisible(t)
						}).on("mouseover", ".tp-esg-item", function() {
							jQuery(".eg-item-in-focus").removeClass("eg-item-in-focus"), jQuery(this).addClass("eg-item-in-focus")
						}).on("mouseenter." + t + " mouseover." + t, function() {
							jQuery(".esgbox-container").addClass("esgbox-show-toolbar esgbox-show-nav")
						}).on("click." + t, ".esgbox", function() {
							stopAllVideos(!0)
						}).on("click." + t, ".esgbox-clone", function() {
							return jQuery(this).closest(".tp-esg-item").find(".esgbox").eq(0).trigger("click"), !1
						}).on("mouseenter." + t + " mouseleave." + t, ".esg-anime-item", function(e) {
							if (_E[t].items[this.id] !== undefined) {
								var a = this.id,
									i = _E[t].items[this.id].mediacw,
									o = _E[t].items[this.id];
								if (i !== undefined && null !== i && i.length) {
									var s, r, n, l = e.type.replace("mouse", "");
									if (o.anime.other) {
										var d = esgItemAnimations[o.anime.other][l],
											u = jQuery.extend({}, d.obj);
										if ("enter" === l) switch (o.anime.other) {
											case "esg-item-zoomin":
												u.scale = o.anime.other_zoomin;
												break;
											case "esg-item-zoomout":
												u.scale = o.anime.other_zoomout;
												break;
											case "esg-item-fade":
												u.opacity = o.anime.other_fade;
												break;
											case "esg-item-blur":
												for (var c in n = o.anime.other_blur, isNaN(n) && (n = "5"), n = parseInt(n, 10), n = Math.max(Math.min(n, 30), 0), u.blur = Math.max(Math.min(n, 30), 0), _E[t].items) _E[t].items.hasOwnProperty(c) && -1 !== _E[t].items[c].c.className.indexOf("isvisiblenow") && _E[t].items[c].anime !== undefined && c !== a && (_E[t].items[c].twAnime ? _E[t].items[c].twAnime.kill() : tpGS.gsap.set(_E[t].items[c].media, {
													webkitFilter: "blur(0px)",
													filter: "blur(0px)"
												}), r = jQuery.extend({}, u), _E[t].items[c].twAnime = tpGS.gsap.to(_E[t].items[c].media, d.time, {
													webkitFilter: "blur(" + r.blur + "px)",
													filter: "blur(" + r.blur + "px)"
												}));
												break;
											case "esg-item-shift":
												s = o.anime.other_shift, n = o.anime.shift_other_amount, isNaN(n) && (n = "10"), n = parseInt(n, 10), "up" !== s && "right" !== s || (n *= -1), u[s = "up" === s || "down" === s ? "y" : "x"] = Math.max(Math.min(n, 200), -200);
												break;
											case "esg-item-rotate":
												n = o.anime.other_rotate, isNaN(n) && (n = "100"), n = parseInt(n, 10), u.rotation = Math.max(Math.min(n, 359), -359)
										}
										if (u.hasOwnProperty("blur")) {
											if ("leave" === l)
												for (var c in _E[t].items) _E[t].items.hasOwnProperty(c) && -1 !== _E[t].items[c].c.className.indexOf("isvisiblenow") && _E[t].items[c].anime !== undefined && (_E[t].items[c].twAnime ? _E[t].items[c].twAnime.kill() : tpGS.gsap.set(_E[t].items[c].media, {
													webkitFilter: "blur(0px)",
													filter: "blur(0px)"
												}), r = jQuery.extend({}, u), _E[t].items[c].twAnime = tpGS.gsap.to(_E[t].items[c].media, d.time, {
													webkitFilter: "blur(" + r.blur + "px)",
													filter: "blur(" + r.blur + "px)"
												}))
										} else
											for (var c in _E[t].items) _E[t].items.hasOwnProperty(c) && -1 !== _E[t].items[c].c.className.indexOf("isvisiblenow") && _E[t].items[c].anime !== undefined && c !== a && tpGS.gsap.to(_E[t].items[c].mediacw[0], d.time, u)
									}
									if (o.anime.itm) {
										var p = esgItemAnimations[o.anime.itm][l],
											f = jQuery.extend({}, p.obj);
										if ("enter" === l) switch (o.anime.itm) {
											case "esg-item-zoomin":
												f.scale = o.anime.zoomin;
												break;
											case "esg-item-zoomout":
												f.scale = o.anime.zoomout;
												break;
											case "esg-item-fade":
												f.opacity = o.anime.fade;
												break;
											case "esg-item-blur":
												n = o.anime.blur, isNaN(n) && (n = "5"), n = parseInt(n, 10), n = Math.max(Math.min(n, 30), 0), f.blur = Math.max(Math.min(n, 30), 0), o.twAnime ? o.twAnime.kill() : tpGS.gsap.set(o.media, {
													webkitFilter: "blur(0px)",
													filter: "blur(0px)"
												}), o.twAnime = tpGS.gsap.to(o.media, p.time, {
													webkitFilter: "blur(" + f.blur + "px)",
													filter: "blur(" + f.blur + "px)"
												});
												break;
											case "esg-item-shift":
												s = o.anime.shift, n = o.anime.shift_amount, isNaN(n) && (n = "10"), n = parseInt(n, 10), "up" !== s && "right" !== s || (n *= -1), f[s = "up" === s || "down" === s ? "y" : "x"] = Math.max(Math.min(n, 200), -200);
												break;
											case "esg-item-rotate":
												n = o.anime.rotate, isNaN(n) && (n = "30"), n = parseInt(n, 10), f.rotation = Math.max(Math.min(n, 359), -359)
										}
										f.hasOwnProperty("blur") ? (o.twAnime ? o.twAnime.kill() : tpGS.gsap.set(o.media, {
											webkitFilter: "blur(0px)",
											filter: "blur(0px)"
										}), o.twAnime = tpGS.gsap.to(o.media, p.time, {
											webkitFilter: "blur(" + f.blur + "px)",
											filter: "blur(" + f.blur + "px)"
										})) : tpGS.gsap.to(i, p.time, f)
									}
								}
							}
						}), "on" === _E[t].paginationSwipe) {
						var s, r = !1;
						_E[t].ESGOT.on("touchstart", function(e) {
							if ((e = e.originalEvent).touches && (e = e.touches[0]), s = e.pageX, "off" === _E[t].paginationDragVer) return !1
						}).on("touchmove", function(e) {
							(e = e.originalEvent).touches && (e = e.touches[0]), r = e.pageX
						}).on("touchend", function() {
							!1 !== r && Math.abs(s - r) > _E[t].pageSwipeThrottle && (s > r ? onRightNavClick(t) : onLeftNavClick(t)), r = !1
						})
					}
					if ("on" === _E[t].paginationAutoplay) {
						var n, l, d;

						function u(e) {
							n = !1, l && l.kill && l.kill(), d && (l = tpGS.gsap.to({}, {
								duration: parseFloat(_E[e].paginationAutoplayDelay) / 1e3,
								repeat: -1,
								onRepeat: function() {
									! function(e) {
										onRightNavClick(e)
									}(e)
								}
							}))
						}
						_E[t].c.on("mouseenter.esgpagination", function() {
							n = !0, l && l.kill && l.kill()
						}).on("mouseleave.esgpagination", function() {
							u(t)
						}), _E[t].c.on("essential_grid_ready_to_use", function() {
							_E[t].c.find(".esg-pagination").length || _E[t].c.find(".esg-navbutton-solo-right").length ? (d = !0, n || u(t)) : _E[t].c.off(".esgpagination")
						})
					}
					if ("on" == _E[t].filterDeepLink && !_E.filterDeepLinkInit) {
						jQuery(".esg-filterbutton").on("click", function() {
							_E[t].loadMoreTriggerCache = !1;
							var e = window.location.href.split("#");
							e = e[0];
							var a = jQuery(this).data("filter");
							if (0 != a.indexOf("filter-") || jQuery(this).hasClass("selected")) history.pushState({}, null, e);
							else {
								var i = a.replace("filter-", "#");
								history.pushState({}, null, e + i)
							}
						});
						var c = jQuery(".esg-grid"),
							p = window.location.href;
						if (c.length && -1 !== p.search("#")) {
							var f = p.split("#");
							if (f = f[f.length - 1]) {
								f = f.toLowerCase().split(" ").join("").split("https://demos.qreativethemes.com/").join("");
								var g = setInterval(function() {
									c.length == c.filter(":visible").length && (clearInterval(g), jQuery('div[data-filter="filter-' + f + '"]').trigger("click"))
								}, 500)
							}
						}
						_E.filterDeepLinkInit = !0
					}

					function h() {
						var e = _E[t].c[0].getBoundingClientRect(),
							a = _E.winH * _E[t].viewportBuffer;
						e.top < _E.winH - a && e.bottom > a && (_E.win.off("scroll.esgviewport resize.esgviewport", h), _E[t].inViewport = !0, _E[t].c.find(".tp-esg-item").each(function() {
							var e = jQuery(this),
								t = e.data("viewportanime");
							t && tpGS.gsap.to(e, t[0], t[1])
						}))
					}
					_E[t].inViewport || (_E.win.on("scroll.esgviewport resize.esgviewport", h), h());
					var m = _E[t].c.find(".esg-filter-wrapper");
					m.each(function(e) {
						if (e > 0 && this.dataset.rule) {
							var t = jQuery(this),
								a = m.eq(e - 1);
							updateFilterVisibility(m, t, a, this.dataset.rule, !0)
						}
					})
				}
				if (
					//! DEFAULT OPTIONS
					jQuery.fn.tpessential.defaults = {
						forceFullWidth: "off",
						forceFullScreen: "off",
						fullScreenOffsetContainer: "",
						row: 3,
						column: 4,
						space: 10,
						pageAnimation: "fade",
						animSpeed: 600,
						delayBasic: .08,
						smartPagination: "on",
						paginationScrollToTop: "off",
						paginationScrollToTopOffset: 200,
						layout: "even",
						rtl: "off",
						aspectratio: "auto",
						bgPosition: "center center",
						bgSize: "cover",
						videoJsPath: "",
						overflowoffset: 0,
						mainhoverdelay: 0,
						rowItemMultiplier: [],
						filterGroupClass: "",
						filterType: "",
						filterLogic: "or",
						filterDeepLink: "off",
						showDropFilter: "hover",
						filterNoMatch: "No Items for the Selected Filter",
						evenGridMasonrySkinPusher: "on",
						loadMoreType: "none",
						loadMoreItems: [],
						loadMoreAmount: 5,
						loadMoreTxt: "Load More",
						loadMoreNr: "on",
						loadMoreEndTxt: "No More Items for the Selected Filter",
						loadMoreAjaxUrl: "",
						loadMoreAjaxToken: "",
						loadMoreAjaxAction: "",
						videoPlaybackInGrid: "on",
						videoLoopInGrid: "on",
						videoInlineControls: "on",
						videoInlineMute: "on",
						videoPlaybackOnHover: "off",
						keepLayersInline: "off",
						lazyLoad: "off",
						lazyLoadColor: "#ff0000",
						gridID: 0,
						mediaFilter: "",
						spinner: "",
						spinnerColor: "",
						lightBoxMode: "single",
						cobblesPattern: "",
						searchInput: ".faqsearch",
						googleFonts: "",
						googleFontJS: "//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",
						ajaxContentTarget: "",
						ajaxScrollToOnLoad: "off",
						ajaxScrollToOffset: 100,
						ajaxCallback: "",
						ajaxCallbackArgument: "on",
						ajaxCssUrl: "",
						ajaxJsUrl: "",
						ajaxCloseButton: "on",
						ajaxNavButton: "on",
						ajaxCloseTxt: "Close",
						ajaxCloseType: "type1",
						ajaxClosePosition: "tr",
						ajaxCloseInner: "true",
						ajaxCloseStyle: "light",
						ajaxTypes: [],
						youtubeNoCookie: "false",
						cookies: {
							search: "off",
							filter: "off",
							pagination: "off",
							loadmore: "off",
							timetosave: "30"
						}
					}, !0 !== (_E = jQuery.fn.tpessential).generalObserver && jQuery.fn.esgObserver(), e = jQuery.extend({}, jQuery.fn.tpessential.defaults, e), void 0 === window.WebFontConfig && (window.WebFontConfig = {}), esgAnimmatrix) return this.each(t);
				var a = this,
					i = setInterval(function() {
						esgAnimmatrix && (clearInterval(i), a.each(t))
					}, 100);
				return this
			},
			//! METHODS
			esappend: function(e) {
				if (this !== undefined) var t = this.id === undefined && this[0] !== undefined ? this[0].id : this.id;
				return prepareItemsInGrid(t, !0), organiseGrid(t, "esappend"), prepareSortingAndOrders(t), _E[t].lastslide
			},
			esskill: function() {
				if (this !== undefined) var e = this.id === undefined && this[0] !== undefined ? this[0].id : this.id;
				jQuery("body").off("." + e), _E.win.off(".resize.essg" + e + " resize.esglb" + e), _E[e].c.find("*").each(function() {
					jQuery(this).off(), jQuery(this).remove()
				}), _E[e].c.remove(), _E[e].c.html(), _E[e].c = null
			},
			esreadsettings: function(e) {
				if (this !== undefined) var t = this.id === undefined && this[0] !== undefined ? this[0].id : this.id;
				return _E[t]
			},
			esredraw: function(e) {
				if (this !== undefined && 0 !== this.length) {
					var t = this.id === undefined && this[0] !== undefined ? this[0].id : this.id;
					if (t !== undefined) {
						if (e != undefined) {
							if (e.space != undefined && (_E[t].space = parseInt(e.space, 0)), e.row != undefined && (_E[t].row = parseInt(e.row, 0)), e.rtl != undefined && (_E[t].rtl = e.rtl), e.aspectratio != undefined && (_E[t].aspectratio = e.aspectratio), e.forceFullWidth != undefined)
								if (_E[t].forceFullWidth = e.forceFullWidth, "on" == _E[t].forceFullWidth) {
									var a = _E[t].ESGRPH.offset().left;
									_E[t].ESGCFF.css({
										left: 0 - a,
										width: _E.winW
									})
								} else _E[t].ESGCFF.css({
									left: 0,
									width: "auto"
								});
							if (e.rowItemMultiplier != undefined && (_E[t].rowItemMultiplier = e.rowItemMultiplier), e.responsiveEntries != undefined && (_E[t].responsiveEntries = e.responsiveEntries), e.hideBlankItemsAt != undefined && (_E[t].hideBlankItemsAt = e.hideBlankItemsAt), e.column != undefined) {
								if (e.column <= 0 || e.column >= 20) {
									var i = getBestFitColumn(t);
									_E[t].column = i.column, _E[t].columnindex = i.index, _E[t].mmHeight = i.mmHeight
								} else _E[t].column = parseInt(e.column, 0);
								_E[t].origcolumn = _E[t].column
							}
							e.animSpeed != undefined && (_E[t].animSpeed = e.animSpeed / 1e3), e.delayBasic != undefined && (_E[t].delayBasic = e.delayBasic / 100), e.pageAnimation != undefined && (_E[t].pageAnimation = e.pageAnimation), e.changedAnim != undefined && (_E[t].changedAnim = e.changedAnim), 1 == e.silent && (_E[t].silent = !0)
						}
						_E[t].started = !0, setItemsOnPages(t), organiseGrid(t, "esredraw")
					}
				}
			},
			esquickdraw: function(e) {
				if (this !== undefined) var t = this.id === undefined && this[0] !== undefined ? this[0].id : this.id;
				_E[t].silent = !0, setItemsOnPages(t), organiseGrid(t, "esquickdraw"), stopAllVideos(!0)
			},
			updateManuelOrder: function(e) {
				if (this !== undefined) var t = this.id === undefined && this[0] !== undefined ? this[0].id : this.id;
				if (_E[t].itemsOrder = _E[t].itemsOrder === undefined ? [] : _E[t].itemsOrder, "liupdate" == e) {
					_E[t].manuelsorting = !0, _E[t].itemsOrder = [];
					var a = _E[t].UL[0].getElementsByClassName("tp-esg-item");
					for (var i in a) a[i] !== undefined && null !== a[i] && a[i].id !== undefined && "" !== a[i].id && _E[t].itemsOrder.push(a[i].id);
					setItemsOnPages(t), organiseGrid(t, "esredraw")
				} else if (e == undefined)
					for (var o in _E[t].items) _E[t].items.hasOwnProperty(o) && _E[t].itemsOrder.push(o)
			},
			esreinit: function(e) {
				if (this !== undefined) var t = this.id === undefined && this[0] !== undefined ? this[0].id : this.id;
				return prepareItemsInGrid(t, !0), organiseGrid(t, "esreinit"), prepareSortingAndOrders(t), _E[t].lastslide
			}
		}),
		function() {
			var e, t, a = {
				hidden: "visibilitychange",
				webkitHidden: "webkitvisibilitychange",
				mozHidden: "mozvisibilitychange",
				msHidden: "msvisibilitychange"
			};
			for (e in a)
				if (e in document) {
					t = a[e];
					break
				}
		}();
	var is_mobile = function() {
		var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos", "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
			t = !1;
		for (var a in e) navigator.userAgent.split(e[a]).length > 1 && (t = !0);
		return t
	};

	function resetFiltersFromCookies(e, t, a) {
		if ("on" == _E[e].cookies.filter) {
			var i = a !== undefined ? a : readCookie("grid_" + _E[e].gridID + "_filters");
			if (i !== undefined && null !== i && i.length > 0) {
				var o = 0;
				jQuery.each(i.split(","), function(a, i) {
					i !== undefined && -1 !== i && "-1" !== i && jQuery(_E[e].filterGroupClass + ".esg-filterbutton," + _E[e].filterGroupClass + " .esg-filterbutton").each(function() {
						jQuery(this).data("fid") != i && parseInt(jQuery(this).data("fid"), 0) !== parseInt(i, 0) || jQuery(this).hasClass("esg-pagination-button") || (t ? jQuery(this).trigger("click") : jQuery(this).addClass("selected"), o++)
					})
				}), o > 0 && jQuery(_E[e].filterGroupClass + ".esg-filterbutton.esg-allfilter," + _E[e].filterGroupClass + " .esg-filterbutton.esg-allfilter").removeClass("selected")
			}
		}
	}

	function resetPaginationFromCookies(e, t) {
		if ("on" === _E[e].cookies.pagination) {
			var a = t !== undefined ? t : readCookie("grid_" + _E[e].gridID + "_pagination");
			a !== undefined && null !== a && a.length > 0 && jQuery(_E[e].filterGroupClass + ".esg-filterbutton.esg-pagination-button," + _E[e].filterGroupClass + " .esg-filterbutton.esg-pagination-button").each(function() {
				parseInt(jQuery(this).data("page"), 0) !== parseInt(a, 0) || jQuery(this).hasClass("selected") || jQuery(this).trigger("click")
			})
		}
	}

	function resetSearchFromCookies(e) {
		if ("on" === _E[e].cookies.search) {
			var t = readCookie("grid_" + _E[e].gridID + "_search");
			t !== undefined && null != t && t.length > 0 && (jQuery(_E[e].filterGroupClass + ".eg-search-wrapper .eg-search-input").val(t).trigger("change"), _E[e].cookies.searchjusttriggered = !0)
		}
	}

	function onRightNavClick(e) {
		_E[e].oldpage = _E[e].currentpage, _E[e].currentpage++, _E[e].currentpage >= _E[e].realmaxpage && (_E[e].currentpage = 0);
		var t = getBestFitColumn(e);
		_E[e].column = t.column, _E[e].columnindex = t.index, _E[e].mmHeight = t.mmHeight, setItemsOnPages(e), organiseGrid(e, "RightNavigation"), stopAllVideos(!0)
	}

	function onLeftNavClick(e) {
		_E[e].oldpage = _E[e].currentpage, _E[e].currentpage--, _E[e].currentpage < 0 && (_E[e].currentpage = _E[e].realmaxpage - 1);
		var t = getBestFitColumn(e);
		_E[e].column = t.column, _E[e].columnindex = t.index, _E[e].mmHeight = t.mmHeight, setItemsOnPages(e), organiseGrid(e, "LeftNavigation"), stopAllVideos(!0)
	}

	function updateMasonryLook(e) {
		"masonry" === _E[e].layout && (clearTimeout(_E[e].updateGirdTimer), _E[e].updateGirdTimer = setTimeout(function() {
			window.requestAnimationFrame(function() {
				setItemsOnPages(e), organiseGrid(e, "filtergroup")
			})
		}, 100))
	}
	//! MAIN PREPARING
	function mainPreparing(e) {
		resetFiltersFromCookies(e), _E[e].NAVC = _E[e].c.find(".eg-leftright-container");
		var t, a = getBestFitColumn(e);
		if (_E[e].column = a.column, _E[e].columnindex = a.index, _E[e].mmHeight = a.mmHeight, prepareItemsInGrid(e), organiseGrid(e, "MainPreparing"), jQuery(_E[e].filterGroupClass + ".eg-search-wrapper").length > 0) {
			var i = _E[e].filterGroupClass.replace(".", ""),
				o = jQuery(_E[e].filterGroupClass + ".eg-search-wrapper .eg-search-submit"),
				s = jQuery(_E[e].filterGroupClass + ".eg-search-wrapper .eg-search-clean");

			function r() {
				if (1 == _E[e].lastsearchtimer) return !1;
				_E[e].lastsearchtimer = 1, buildLoader(jQuery(_E[e].filterGroupClass + ".eg-search-wrapper"), e, {
					spinner: "spinner3",
					spinnerColor: "#fff"
				}, !0), tpGS.gsap.fromTo(jQuery(_E[e].filterGroupClass + ".eg-search-wrapper").find(".esg-loader"), .3, {
					autoAlpha: 0
				}, {
					autoAlpha: 1,
					ease: tpGS.Power3.easeInOut
				});
				var t, a = this,
					i = jQuery(_E[e].filterGroupClass + ".eg-search-wrapper .eg-search-input"),
					o = i.val();
				if (i.prop("disabled", "true"), o.length > 0) {
					i.trigger("searchstarting");
					var s = {
							search: o,
							id: _E[e].gridID
						},
						r = {
							action: _E[e].loadMoreAjaxAction,
							client_action: "get_grid_search_ids",
							token: _E[e].loadMoreAjaxToken,
							data: s
						};
					jQuery.ajax({
						type: "post",
						url: _E[e].loadMoreAjaxUrl,
						dataType: "json",
						data: r,
						success: function(i, s, r) {
							if ("on" === _E[e].cookies.search && createCookie("grid_" + _E[e].gridID + "_search", o, _E[e].cookies.timetosave * (1 / 60 / 60)), !0 === _E[e].cookies.searchjusttriggered) {
								var l = readCookie("grid_" + _E[e].gridID + "_pagination"),
									d = readCookie("grid_" + _E[e].gridID + "_filters");
								setTimeout(function() {
									resetFiltersFromCookies(e, !0, d), resetPaginationFromCookies(e, l)
								}, 200), _E[e].cookies.searchjusttriggered = !1
							}
							setTimeout(function() {
								_E[e].lastsearchtimer = 0, jQuery(_E[e].filterGroupClass + ".eg-search-wrapper .eg-search-input").prop("disabled", !1), tpGS.gsap.to(jQuery(_E[e].filterGroupClass + ".eg-search-wrapper").find(".esg-loader"), .5, {
									autoAlpha: 1,
									ease: tpGS.Power3.easeInOut,
									onComplete: function() {
										jQuery(_E[e].filterGroupClass + ".eg-search-wrapper").find(".esg-loader").remove()
									}
								}), jQuery(_E[e].filterGroupClass + ".eg-search-wrapper .eg-search-input").trigger("searchended")
							}, 1e3);
							var u = [];
							i && jQuery.each(i, function(e, t) {
								t != undefined && jQuery.isNumeric(t) && u.push(t)
							}), _E[e].cpar.find(".cat-searchresult").removeClass("cat-searchresult");
							jQuery.each(_E[e].loadMoreItems, function(e, t) {
								t[2] = "notsearched", jQuery.each(u, function(e, a) {
									if (parseInt(t[0], 0) === parseInt(a, 0) && -1 != parseInt(t[0], 0)) return t[2] = "cat-searchresult", 0, !1
								})
							}), jQuery.each(u, function(t, a) {
								_E[e].cpar.find(".eg-post-id-" + a).addClass("cat-searchresult")
							}), _E[e].hiddenSearchField && _E[e].hiddenSearchField.addClass("eg-forcefilter").addClass("eg-justfilteredtosearch"), (t = jQuery(_E[e].filterGroupClass + ".esg-filter-wrapper .esg-allfilter")).length ? t.trigger("click", !0) : n.call(a)
						},
						error: function(t, a, i) {
							console.log("FAILURE: " + a), setTimeout(function() {
								_E[e].lastsearchtimer = 0, jQuery(_E[e].filterGroupClass + ".eg-search-wrapper .eg-search-input").prop("disabled", !1), tpGS.gsap.to(jQuery(_E[e].filterGroupClass + ".eg-search-wrapper").find(".esg-loader"), .5, {
									autoAlpha: 1,
									ease: tpGS.Power3.easeInOut,
									onComplete: function() {
										jQuery(_E[e].filterGroupClass + ".eg-search-wrapper").find(".esg-loader").remove()
									}
								}), jQuery(_E[e].filterGroupClass + ".eg-search-wrapper .eg-search-input").trigger("searchended")
							}, 1e3)
						}
					})
				} else jQuery.each(_E[e].loadMoreItems, function(e, t) {
					t[2] = "notsearched"
				}), _E[e].cpar.find(".cat-searchresult").removeClass("cat-searchresult"), _E[e].hiddenSearchField && _E[e].hiddenSearchField.removeClass("eg-forcefilter").addClass("eg-justfilteredtosearch"), "on" === _E[e].cookies.search && createCookie("grid_" + _E[e].gridID + "_search", "", -1), (t = jQuery(_E[e].filterGroupClass + ".esg-filter-wrapper .esg-allfilter")).length ? t.trigger("click", !0) : n.call(a), setTimeout(function() {
					_E[e].lastsearchtimer = 0, jQuery(_E[e].filterGroupClass + ".eg-search-wrapper .eg-search-input").prop("disabled", !1), tpGS.gsap.to(jQuery(_E[e].filterGroupClass + ".eg-search-wrapper").find(".esg-loader"), .5, {
						autoAlpha: 1,
						ease: tpGS.Power3.easeInOut,
						onComplete: function() {
							jQuery(_E[e].filterGroupClass + ".eg-search-wrapper").find(".esg-loader").remove()
						}
					}), jQuery(_E[e].filterGroupClass + ".eg-search-wrapper .eg-search-input").trigger("searchended")
				}, 1e3)
			}
			_E[e].hiddenSearchField = jQuery('<div class="esg-display-none-i esg-filterbutton hiddensearchfield ' + i + '" data-filter="cat-searchresult"><span>Search Result</span></div>'), jQuery(_E[e].filterGroupClass + ".esg-filter-wrapper.eg-search-wrapper").append(_E[e].hiddenSearchField), _E[e].lastsearchtimer = 0, o.on("click", r), jQuery(_E[e].filterGroupClass + ".eg-search-wrapper .eg-search-input").on("change", r), s.on("click", function() {
				"on" === _E[e].cookies.search && createCookie("grid_" + _E[e].gridID + "_search", "", -1), jQuery.each(_E[e].loadMoreItems, function(e, t) {
					t[2] = "notsearched"
				}), _E[e].cpar.find(".cat-searchresult").removeClass("cat-searchresult"), jQuery(_E[e].filterGroupClass + ".eg-search-wrapper .eg-search-input").val(""), _E[e].hiddenSearchField && _E[e].hiddenSearchField.removeClass("eg-forcefilter").addClass("eg-justfilteredtosearch");
				var t = jQuery(_E[e].filterGroupClass + ".esg-filter-wrapper .esg-allfilter");
				t.length ? t.trigger("click", !0) : n.call(this), setTimeout(function() {
					_E[e].lastsearchtimer = 0, jQuery(_E[e].filterGroupClass + ".eg-search-wrapper .eg-search-input").prop("disabled", !1), tpGS.gsap.to(jQuery(_E[e].filterGroupClass + ".eg-search-wrapper").find(".esg-loader"), .5, {
						autoAlpha: 1,
						ease: tpGS.Power3.easeInOut,
						onComplete: function() {
							jQuery(_E[e].filterGroupClass + ".eg-search-wrapper").find(".esg-loader").remove()
						}
					}), jQuery(_E[e].filterGroupClass + ".eg-search-wrapper .eg-search-input").trigger("searchended")
				}, 1e3)
			})
		}

		function n() {
			var t = jQuery(this),
				a = t.closest(".esg-filter-wrapper");
			"single" == _E[e].filterType && a.find(".esg-selected-filterbutton span").html(t.html()), _E[e].loadMoreTriggerCache = !1, stopAllVideos(!0);
			var i = t;
			if (i.hasClass("esg-pagination-button") || (jQuery(_E[e].filterGroupClass + ".esg-allfilter, " + _E[e].filterGroupClass + " .esg-allfilter").removeClass("selected"), i.hasClass("esg-allfilter") && jQuery(_E[e].filterGroupClass + ".esg-filterbutton, " + _E[e].filterGroupClass + " .esg-filterbutton").each(function() {
					jQuery(this).removeClass("selected")
				})), i.closest(".esg-filters").hasClass("esg-singlefilters") || "single" == _E[e].filterType) {
				var o = jQuery(_E[e].filterGroupClass + ".esg-filterbutton, " + _E[e].filterGroupClass + " .esg-filterbutton");
				1 == o.filter(".selected").length && i.hasClass("selected") || o.removeClass("selected")
			}
			i.hasClass("selected") ? i.removeClass("selected") : i.addClass("selected"), this.classList.remove("hovered"), _E[e].hiddenSearchField && _E[e].hiddenSearchField.hasClass("eg-forcefilter") && _E[e].hiddenSearchField.addClass("selected");
			var s = 0,
				r = "";
			if (jQuery(_E[e].filterGroupClass + ".esg-filterbutton.selected," + _E[e].filterGroupClass + " .esg-filterbutton.selected").each(function() {
					-1 === this.className.indexOf("esg-pagination-button") && (r = 0 === ++s ? t.data("fid") : r + "," + t.data("fid"))
				}), "on" === _E[e].cookies.filter && !0 !== _E[e].cookies.searchjusttriggered && createCookie("grid_" + _E[e].gridID + "_filters", r, _E[e].cookies.timetosave * (1 / 60 / 60)), 0 == s && jQuery(_E[e].filterGroupClass + ".esg-allfilter," + _E[e].filterGroupClass + " .esg-allfilter").addClass("selected"), _E[e].filterchanged = !0, _E[e].currentpage = 0, 1 == _E[e].maxpage ? (jQuery(_E[e].filterGroupClass + ".navigationbuttons," + _E[e].filterGroupClass + " .navigationbuttons").css({
					display: "none"
				}), jQuery(_E[e].filterGroupClass + ".esg-pagination," + _E[e].filterGroupClass + " .esg-pagination").css({
					display: "none"
				})) : (jQuery(_E[e].filterGroupClass + ".navigationbuttons," + _E[e].filterGroupClass + " .navigationbuttons").css({
					display: "inline-block"
				}), jQuery(_E[e].filterGroupClass + ".esg-pagination," + _E[e].filterGroupClass + " .esg-pagination").css({
					display: "inline-block"
				})), _E[e].lmbut != undefined && _E[e].lmbut.length > 0) {
				var n = checkMoreToLoad(e).length;
				n > 0 ? "off" == _E[e].loadMoreNr ? _E[e].lmbut.html(_E[e].loadMoreTxt) : _E[e].lmbut.html(_E[e].loadMoreTxt + " (" + n + ")") : (_E[e].loading = 0, _E[e].lmbut.html(_E[e].loadMoreEndTxt))
			}
			_E[e].justfiltered = !0, setItemsOnPages(e), organiseGrid(e, "filtergroup"), updateMasonryLook(e);
			for (var l = _E[e].c.find(".esg-filter-wrapper"), d = l.toArray(), u = d.length, c = !1, p = 0; p < u; p++)
				if (d[p] === a[0]) {
					c = p;
					break
				} if (!1 !== c && c < u - 1) {
				var f = l.eq(c + 1),
					g = f.attr("data-rule");
				g && updateFilterVisibility(l, a, f, g)
			}
		}
		addCountSuffix(e), _E.doc.on("mouseenter", ".esg-navigationbutton, .esg-filterbutton, .esg-sortbutton, .esg-sortbutton-order, .eg-search-submit, .eg-search-clean, .eg-search-input, .esg-sorting-select, .esg-selected-filterbutton, .esg-cartbutton", function() {
			this.classList.add("hovered")
		}), _E.doc.on("mouseleave", ".esg-navigationbutton, .esg-filterbutton, .esg-sortbutton, .esg-sortbutton-order, .eg-search-submit, .eg-search-clean, .eg-search-input, .esg-sorting-select, .esg-selected-filterbutton,  .esg-cartbutton", function() {
			this.classList.remove("hovered")
		}), jQuery(_E[e].filterGroupClass + ".esg-filter-wrapper," + _E[e].filterGroupClass + " .esg-filter-wrapper").each(function(t) {
			var a = jQuery(this);
			if (a.hasClass("dropdownstyle")) {
				a.find(".esg-filter-checked").each(function() {
					jQuery(this).prependTo(jQuery(this).parent())
				});
				var i = function(e, t = !0) {
						var a = jQuery(e).closest(".esg-nav-by-shortcode");
						a.length && jQuery(a.parent()).find(".esg-nav-by-shortcode").each(function(e) {
							jQuery(this).find(".hoveredfilter").length || (t ? jQuery(this).css("z-index", parseInt(jQuery(this).css("z-index")) + 1) : jQuery(this).css("z-index", parseInt(jQuery(this).css("z-index")) - 1))
						})
					},
					o = function(e, t) {
						if (!t) {
							var a = jQuery(this).closest(".esg-filter-wrapper");
							a.find(".esg-selected-filterbutton").addClass("hoveredfilter"), a.find(".esg-dropdown-wrapper").stop().show(), i(this, !1)
						}
					},
					s = function() {
						var e = jQuery(this).closest(".esg-filter-wrapper");
						e.find(".esg-selected-filterbutton").removeClass("hoveredfilter"), e.find(".esg-dropdown-wrapper").stop().hide(), i(this)
					};
				is_mobile() ? a.find(".esg-selected-filterbutton").on("click", function() {
					var e = a.find(".esg-selected-filterbutton");
					e.hasClass("hoveredfilter") ? (e.removeClass("hoveredfilter"), a.find(".esg-dropdown-wrapper").stop().hide()) : (e.addClass("hoveredfilter"), a.find(".esg-dropdown-wrapper").stop().show())
				}) : "click" == _E[e].showDropFilter ? (a.on("click", o), a.on("mouseleave", s)) : (a.on("mouseenter", o), a.on("mouseleave", s))
			}
		}), is_mobile() && _E.doc.on("click touchstart", function(t) {
			0 == jQuery(t.target).closest(".esg-filter-wrapper").length && (_E[e].c.find(".hoveredfilter").removeClass("hoveredfilter"), _E[e].c.find(".esg-dropdown-wrapper").stop().hide())
		}), _E[e].c.find(".esg-filters").each(function(e) {
			this.className.indexOf("esg-navbutton-solo-") >= 0 ? tpGS.gsap.set(this, {
				zIndex: 1270 - e
			}) : tpGS.gsap.set(this, {
				zIndex: 70 - e
			})
		}), _E[e].c.find(".esg-filter-wrapper.dropdownstyle").each(function(e) {
			tpGS.gsap.set(this, {
				zIndex: 1570 - e
			})
		}), jQuery("body").on("click." + e, "#" + e + " " + _E[e].filterGroupClass + ".esg-left," + _E[e].filterGroupClass + " .esg-left", function() {
			onLeftNavClick(e)
		}), jQuery("body").on("click." + e, "#" + e + " " + _E[e].filterGroupClass + ".esg-right," + _E[e].filterGroupClass + " .esg-right", function() {
			onRightNavClick(e)
		}), jQuery(_E[e].filterGroupClass + ".esg-filterbutton, " + _E[e].filterGroupClass + " .esg-filterbutton").each(function() {
			jQuery(this).hasClass("esg-pagination-button") || jQuery(this).on("click", n)
		}), _E.win.on("resize.essg" + e, function(a) {
			if (clearTimeout(t), "on" == _E[e].forceFullWidth || "on" == _E[e].forceFullScreen) {
				var i = _E[e].ESGRPH.offset().left;
				_E[e].ESGCFF.css({
					left: 0 - i,
					width: _E.winW
				})
			} else _E[e].ESGCFF.css({
				left: 0,
				width: "auto"
			});
			if (_E[e].NAVC.length > 0) {
				var o = _E[e].NAVC.outerWidth(!0);
				tpGS.gsap.set(_E[e].ESGOT, {
					width: _E[e].width() - o,
					overwrite: "all"
				})
			}
			var s = getBestFitColumn(e);
			_E[e].column = s.column, _E[e].columnindex = s.index, _E[e].mmHeight = s.mmHeight, t = setTimeout(function() {
				_E[e].fromResize = !0, setItemsOnPages(e), organiseGrid(e, "resize"), stopAllVideos(!0, !1, !1, !0)
			}, 200)
		}).on("resize.esglb" + e, function() {
			var t = jQuery(".esgbox-slide--video .esgbox-iframe");
			if (t.length) {
				var a, i, o, s, r = jQuery("body").hasClass("esg-four-by-three"),
					n = _E[e].c.data("lightboxsettings").videoScale,
					l = _E.win.width(),
					d = _E.win.height();
				n && _E[e].c.data("lightboxsettings").videoScaleBuffer && (d -= 2 * buffer), r ? (o = 800, s = 600) : (o = 1280, s = 720), t.each(function() {
					if (o < l && s < d && !n) i = o, a = s;
					else {
						var e = (i = l / o) > (a = d / s) ? a : i;
						i = o * e, a = s * e, l > d ? a > d && (i = o * ((a = d) / s)) : i > a ? i > l && (a = s * ((i = l) / o)) : a > d && (i = o * ((a = d) / s))
					}
					jQuery(this).width(i).height(a)
				})
			}
		}), _E[e].c.on("itemsinposition", function(e, t) {
			var a = this.id;
			clearTimeout(_E[a].iteminspositiontimer), _E[a].iteminspositiontimer = setTimeout(function() {
				! function(e) {
					null !== _E[e].c && clearTimeout(_E[e].c.data("callednow"));
					var t = _E[e].firstLoadFinnished ? _E[e].animSpeed : .001 * _E[e].startAnimationSpeed;
					if (_E[e].maxheight > 0 && _E[e].maxheight < 9999999999) {
						_E[e].inanimation = !1;
						var a = parseInt(_E[e].ESGOT.css("paddingTop"), 0),
							i = parseInt(_E[e].ESGOT.css("paddingBottom"), 0);
						a = a == undefined ? 0 : null == a ? 0 : a, i = i == undefined ? 0 : null == i ? 0 : i, _E[e].UL_height = "on" == _E[e].forceFullScreen ? getFullscreenHeight(e) : _E[e].maxheight + _E[e].overflowoffset + a + i, tpGS.gsap.to([_E[e].ESGOT, _E[e].UL], t, {
							force3D: "auto",
							height: _E[e].UL_height,
							ease: tpGS.Power3.easeInOut,
							clearProps: "transform",
							onComplete: function() {
								_E[e].mypc[0].style.height = "auto", _E[e].mypc[0].classList.remove("eg-startheight"), _E[e].mypc[0].classList.add("esg-revealed"), _E[e].releaseHovers = !0, _E.win.trigger("scroll.esgviewport")
							}
						}), _E[e].NAVC.length > 0 && tpGS.gsap.to(_E[e].NAVC, t, {
							minHeight: _E[e].UL_height,
							ease: tpGS.Power3.easeInOut
						}), _E[e].navLeft.length > 0 && !_E[e].navLeft_scode && _E[e].navLeft.css({
							marginTop: 0 - _E[e].navLeft.height() / 2 + "px"
						}), _E[e].navRight.length > 0 && !_E[e].navRight_scode && _E[e].navRight.css({
							marginTop: 0 - _E[e].navRight.height() / 2 + "px"
						})
					} else 0 == _E[e].maxheight && tpGS.gsap.to([_E[e].ESGOT, _E[e].UL], t, {
						force3D: "auto",
						height: 0,
						ease: tpGS.Power3.easeInOut,
						clearProps: "transform"
					});
					null !== _E[e].c && _E[e].c.data("callednow", setTimeout(function() {
						_E[e].c !== undefined && null !== _E[e].c && _E[e].c.find(".itemtoshow.isvisiblenow").each(function() {
							hideUnderElems(jQuery(this))
						})
					}, 250)), _E[e].firstLoadFinnished === undefined && (_E[e].c.trigger("essential_grid_ready_to_use"), resetSearchFromCookies(e), resetPaginationFromCookies(e), _E[e].firstLoadFinnished = !0), "masonry" === _E[e].layout && !0 !== _E[e].masonryFirstUpdate && (_E[e].masonryFirstUpdate = !0, window.requestAnimationFrame(function() {
						_E[e].silent = !0, setItemsOnPages(e), organiseGrid(e, "esquickdraw")
					}))
				}(a)
			}, 50)
		}), prepareSortingAndOrders(e), prepareSortingClicks(e);
		var l = _E[e].convertFilterMobile && "single" == _E[e].filterType,
			d = parseInt(_E[e].convertFilterMobileWidth);
		if (isNaN(d) && (d = 768), l) {
			prepareMobileDropdowns(_E[e].c);
			var u = null;
			_E.win.on("resize", function() {
				clearTimeout(u), u = setTimeout(function() {
					convertNavHandler(_E[e].c.find(".esg-filter-wrapper"), _E.win.width(), d)
				}, 200)
			})
		}
		if (convertNavHandler(_E[e].c.find(".esg-filter-wrapper"), _E.win.width(), d, l, _E[e].filterType), -1 !== e.search("esg-grid-")) {
			var c = e.split("esg-grid-")[1];
			if (-1 === c.search("-")) return;
			c = e.split("-")[0];
			var p = jQuery(".esg-filter-wrapper.esg-fgc-" + c);
			if (!p.length) return;
			if (l) {
				prepareMobileDropdowns(p, !0);
				var f = null;
				_E.win.on("resize", function() {
					clearTimeout(f), f = setTimeout(function() {
						convertNavHandler(p, _E.win.width(), d)
					}, 200)
				})
			}
			convertNavHandler(p, _E.win.width(), d, l, _E[e].filterType)
		}
	}

	function convertNavHandler(e, t, a, i = !0, o = "single") {
		e.css("visibility", "visible"), i && t <= a ? (e.find(".esg-mobile-filter-button").show(), e.addClass("esg-mobile-filter-wrap"), e.find(".esg-sorting-select").show(), e.find(".esg-filterbutton").hide()) : ("single" != o || e.hasClass("dropdownstyle") || e.find(".esg-mobile-filter-button").hide(), e.removeClass("esg-mobile-filter-wrap"), e.find(".esg-sorting-select").hide(), e.find(".esg-filterbutton").show())
	}

	function prepareMobileDropdowns(e, t) {
		var a;

		function i() {
			var e = jQuery(this).hide();
			a += '<option value="' + e.attr("data-filter") + '">' + e.children("span").not(".esg-filter-checked").eq(0).text() + "</option>"
		}
		e.find(".esg-mobile-filter-button").addClass("esg-selected-filterbutton").show(), t || (e = e.find(".esg-filter-wrapper")), e.addClass("esg-mobile-filter-wrap").each(function() {
			if (-1 === this.className.indexOf("eg-search-wrapper")) {
				var e = jQuery(this).css("position", "relative");
				a = '<select class="esg-sorting-select">', e.find(".esg-filterbutton").each(i), jQuery(a += "</select>").on("change", function() {
					e.find('.esg-filterbutton[data-filter="' + this.value + '"]').trigger("click"), e.find(".esg-selected-filterbutton span").eq(0).text(jQuery(this.options[this.selectedIndex]).text())
				}).appendTo(e)
			}
		})
	}

	function prepareSortingAndOrders(e) {
		jQuery(_E[e].filterGroupClass + ".esg-sortbutton-order," + _E[e].filterGroupClass + " .esg-sortbutton-order").each(function() {
			var e = jQuery(this);
			e.data("dir") || (e.removeClass("tp-desc").addClass("tp-asc"), e.data("dir", "asc"))
		})
	}

	function prepareSortingClicks(e) {
		var t;
		jQuery(_E[e].filterGroupClass + ".esg-sortbutton-wrapper .esg-sortbutton-order," + _E[e].filterGroupClass + " .esg-sortbutton-wrapper .esg-sortbutton-order").on("click", function() {
			var a = jQuery(this);
			this.classList.remove("hovered"), a.hasClass("tp-desc") ? (a.removeClass("tp-desc").addClass("tp-asc"), a.data("dir", "asc")) : (a.removeClass("tp-asc").addClass("tp-desc"), a.data("dir", "desc"));
			var i = a.data("dir");
			stopAllVideos(!0, !0), jQuery(_E[e].filterGroupClass + ".esg-sorting-select," + _E[e].filterGroupClass + " .esg-sorting-select").each(function() {
				var a = jQuery(this).val();
				clearTimeout(t), _E[e].c.find(".tp-esg-item").tsort({
					data: a,
					forceStrings: "false",
					order: i
				}), t = setTimeout(function() {
					setItemsOnPages(e), organiseGrid(e, "prepareSorting")
				}, 200)
			})
		}), jQuery(_E[e].filterGroupClass + ".esg-sorting-select," + _E[e].filterGroupClass + " .esg-sorting-select").each(function() {
			var a = jQuery(this),
				i = a.data("start");
			a.change(function() {
				var i = jQuery(this).closest(".esg-sortbutton-wrapper").find(".esg-sortbutton-order"),
					o = a.val(),
					s = a.find("option:selected").text(),
					r = i.data("dir");
				stopAllVideos(!0, !0), clearTimeout(t), a.parent().parent().find(".sortby_data").text(s), _E[e].c.find(".tp-esg-item").tsort({
					data: o,
					forceStrings: "false",
					order: r
				}) !== undefined && (setItemsOnPages(e), organiseGrid(e, "OnSorting"))
			}), a.find('option[value="' + i + '"]').length || a.val("")
		})
	}

	function fixCenteredCoverElement(e, t, a) {
		if (t == undefined && (t = e.find(".esg-entry-cover")), a == undefined && (a = e.find(".esg-entry-media")), t && a) {
			var i = a.outerHeight();
			tpGS.gsap.set(t, {
				height: i
			});
			var o = e.find(".esg-cc");
			tpGS.gsap.set(o, {
				top: (i - o.height()) / 2
			})
		}
	}

	function getBestFitColumn(e) {
		var t = _E.winW,
			a = 0,
			i = 9999,
			o = 0,
			s = _E[e].column,
			r = _E[e].column,
			n = 0,
			l = 0;
		_E[e].responsiveEntries != undefined && _E[e].responsiveEntries.length > 0 && jQuery.each(_E[e].responsiveEntries, function(e, d) {
			var u = parseInt(d.width != undefined ? d.width : 0),
				c = parseInt(d.amount != undefined ? d.amount : 0);
			i > u && (i = u, s = c, l = e), o < u && (o = u, r = c), u > a && u <= t && (a = u, r = c, n = e)
		}), i > _E.winW && (r = s, n = l);
		var d = {};
		if (d.index = n, d.column = r, d.mmHeight = _E[e].responsiveEntries[d.index].mmheight, "none" !== _E[e].hideBlankItemsAt) {
			var u = document.querySelectorAll(".eg-esgblankskin-wrapper");
			for (var c in _E[e].items = _E[e].items === undefined ? {} : _E[e].items, u) u.hasOwnProperty(c) && (_E[e].items[u[c].id] = _E[e].items[u[c].id] === undefined ? {} : _E[e].items[u[c].id], _E[e].items[u[c].id].skipBlank = n >= parseInt(_E[e].hideBlankItemsAt, 10))
		}
		return (!0 === _E[e].itWasCobbles || "even" === _E[e].layout && "on" == _E[e].evenCobbles && _E[e].cobblesToEven !== undefined && _E[e].cobblesToEven > 0) && (_E[e].itWasCobbles = !0, d.index >= _E[e].cobblesToEven ? _E[e].evenCobbles = "off" : _E[e].evenCobbles = "on"), d
	}

	function checkMediaListeners(e) {
		e.find("iframe").each(function(e) {
			var t = jQuery(this);
			t.attr("src").toLowerCase().indexOf("youtube") > 0 ? prepareYT(t) : t.attr("src").toLowerCase().indexOf("vimeo") > 0 ? prepareVimeo(t) : t.attr("src").toLowerCase().indexOf("wistia") > 0 ? prepareWs(t) : t.attr("src").toLowerCase().indexOf("soundcloud") > 0 && prepareSoundCloud(t)
		}), e.find("video").each(function(e) {
			prepareVideo(jQuery(this))
		})
	}

	function waitMediaListeners(e, t) {
		var a = e.find("iframe").first(),
			i = e.find("video").first(),
			o = a.length > 0 && a.attr("src").toLowerCase().indexOf("youtube") > 0 ? "y" : a.length > 0 && a.attr("src").toLowerCase().indexOf("vimeo") > 0 ? "v" : a.length > 0 && a.attr("src").toLowerCase().indexOf("wistia") > 0 ? "w" : a.length > 0 && a.attr("src").toLowerCase().indexOf("soundcloud") > 0 ? "s" : i.length > 0 && i.length >= 1 ? "h" : "",
			s = setInterval(function() {
				e.find("iframe, video").each(function(r) {
					("" === o || "y" === o && prepareYT(a) || "v" === o && prepareVimeo(a) || "w" === o && prepareWs(a) || "s" === o && prepareSoundCloud(a) || "h" === o && prepareVideo(i)) && (clearInterval(s), 1 === _E[t].items[e[0].id].simplevideo && videoClickEvent(e, t, !0))
				})
			}, 50)
	}

	function directionPrepare(e, t, a, i, o) {
		var s = {
			x: 0,
			y: 0
		};
		switch (e) {
			case 0:
				s.y = "in" == t ? 0 - i : 10 + i, s.y = o && "in" == t ? s.y - 5 : s.y;
				break;
			case 1:
				s.x = "in" == t ? a : -10 - a, s.x = o && "in" == t ? s.x + 5 : s.x;
				break;
			case 2:
				s.y = "in" == t ? i : -10 - i, s.y = o && "in" == t ? s.y + 5 : s.y;
				break;
			case 3:
				s.x = "in" == t ? 0 - a : 10 + a, s.x = o && "in" == t ? s.x - 5 : s.x
		}
		return s
	}

	function getDir(e, t) {
		var a = e.width(),
			i = e.height(),
			o = (t.x - e.offset().left - a / 2) * (a > i ? i / a : 1),
			s = (t.y - e.offset().top - i / 2) * (i > a ? a / i : 1);
		return Math.round((Math.atan2(s, o) * (180 / Math.PI) + 180) / 90 + 3) % 4
	}

	function hideUnderElems(e) {
		e.find(".eg-handlehideunder").each(function() {
			var t = jQuery(this),
				a = t.data("hideunder"),
				i = t.data("hideunderheight"),
				o = t.data("hidetype");
			t.data("knowndisplay") == undefined && t.data("knowndisplay", t.css("display")), e.width() < a && a != undefined || e.height() < i && i != undefined ? "visibility" == o ? t.addClass("forcenotvisible") : "display" == o && t.addClass("forcenotdisplay") : "visibility" == o ? t.removeClass("forcenotvisible") : "display" == o && t.removeClass("forcenotdisplay")
		})
	}

	function offsetParrents(e, t, a) {
		if (_E[a].UL_height) {
			var i = t.height();
			if (t.position().top + i > _E[a].UL_height + 40 || 0 == e || 0 != _E[a].ULBH && _E[a].ULBH != undefined && t.position().top + i > parseInt(_E[a].ULBH, 0) + 40) {
				_E[a].ULBH != undefined && 0 != _E[a].ULBH || (_E[a].ULBH = _E[a].UL_height);
				var o = _E[a].c.find(".esg-navbutton-solo-left"),
					s = _E[a].c.find(".esg-navbutton-solo-right");
				if (o.length || (o = !1), s.length || (s = !1), !_E[a].fheightcalc) {
					var r = 0,
						n = _E[a].c.find(".esg-filters").each(function() {
							var e = jQuery(this);
							"relative" === e.css("position") && e.index() > _E[a].ESGOT.index() && -1 === this.className.search(/solo-left|solo-right/) && (r += e.outerHeight(!0))
						});
					_E[a].fmargincalc = r ? (parseInt(_E[a].c.css("padding-top"), 10) + parseInt(_E[a].c.css("padding-bottom"), 10)) / 2 : 0, _E[a].fheightcalc = r || !0, _E[a].fstartval = Math.ceil(r / 2) + Math.ceil(_E[a].fmargincalc / 2)
				}
				if (0 != e) {
					clearTimeout(_E[a].UL_offtimer), _E[a].navArrowTrick || (o && o.appendTo(_E[a].c), s && s.appendTo(_E[a].c), _E[a].navArrowTrick = !0), _E[a].UL_alreadInOff = !1, tpGS.gsap.to([_E[a].UL, _E[a].ESGOT], .2, {
						height: _E[a].ULBH + e
					});
					n = _E[a].fheightcalc;
					var l = _E[a].fmargincalc || 0;
					!0 === n && (n = 0), (o || s) && tpGS.gsap.set([o, s], {
						top: otb / 2 + n / 2,
						y: l
					})
				} else !0 !== _E[a].UL_alreadInOff && (_E[a].UL_offtimer = setTimeout(function() {
					_E[a].UL_alreadInOff = !0, tpGS.gsap.to([_E[a].ESGOT, _E[a].UL], .3, {
						height: _E[a].ULBH,
						ease: tpGS.Power3.easeIn,
						onComplete: function() {
							_E[a].ULBH = 0, _E[a].UL_alreadInOff = !1, o && o.appendTo(ot), s && s.appendTo(ot);
							var e = {
								top: "50%"
							};
							_E[a].fstartval && (e.y = _E[a].fstartval), (o || s) && tpGS.gsap.set([o, s], e), delete _E[a].navArrowTrick
						}
					})
				}, 100))
			}
		}
	}

	function itemHoverAnim(e, t, a, i) {
		var o = _E[a].items[e].jc;
		if (1 != _E[a].items[e].simplevideo && checkMediaListeners(o), !o.hasClass("esg-video-active")) {
			_E[a].items[e].animstarted = 1, tpGS.gsap.set(o, {
				z: .01,
				x: 0,
				y: 0,
				rotationX: 0,
				rotationY: 0,
				rotationZ: 0
			}), o.addClass("esg-hovered");
			var s = o.find(".esg-entry-cover");
			if (tpGS.gsap.set(s, {
					transformStyle: "flat"
				}), fixCenteredCoverElement(o, s), _E[a].items[e].outHeight = o.outerHeight(), _E[a].items[e].outWidth = o.outerWidth(), _E.win.width() > _E[a].c.width() && tpGS.gsap.set(_E[a].ESGOT, {
					overflow: "visible"
				}), _E[a].items[e].entryc.length > 0 && "even" == _E[a].layout) {
				if (tpGS.gsap.set(_E[a].items[e].entryc, {
						display: "block"
					}), o.hasClass("esg-split-content") && tpGS.gsap.set(_E[a].items[e].mediaw, {
						height: _E[a].items[e].outHeight
					}), tpGS.gsap.set(o, {
						z: .1,
						zIndex: 50,
						x: 0 - (_E[a].items[e].padding.l + _E[a].items[e].padding.r + _E[a].items[e].border.r + _E[a].items[e].border.l) / 2,
						y: 0 - (_E[a].items[e].padding.t + _E[a].items[e].padding.b + _E[a].items[e].border.t + _E[a].items[e].border.b) / 2,
						height: "auto",
						width: _E[a].items[e].outWidth + _E[a].items[e].padding.l + _E[a].items[e].padding.r + _E[a].items[e].border.l + _E[a].items[e].border.r
					}), "on" == _E[a].evenGridMasonrySkinPusher) offsetParrents(o.height() - _E[a].items[e].outHeight, o, a);
				o.css({
					paddingTop: _E[a].items[e].padding.t + "px",
					paddingLeft: _E[a].items[e].padding.l + "px",
					paddingRight: _E[a].items[e].padding.r + "px",
					paddingBottom: _E[a].items[e].padding.b + "px",
					borderTopWidth: _E[a].items[e].border.t + "px",
					borderBottomWidth: _E[a].items[e].border.b + "px",
					borderLeftWidth: _E[a].items[e].border.l + "px",
					borderRightWidth: _E[a].items[e].border.r + "px"
				})
			}
			o.find(".esg-transition").each(function() {
				if (esgAnimmatrix.hasOwnProperty(this.dataset.transition)) {
					var t = this.dataset.transition,
						o = this.dataset.duration,
						s = esgAnimmatrix[t];
					o = o && "default" !== o ? .001 * parseInt(o, 10) : s[0];
					var r, n, l = jQuery.extend({}, s[1]),
						d = jQuery.extend({}, s[2]),
						u = this.className.indexOf("esg-entry-media");
					if (d.delay = this.dataset.delay != undefined ? this.dataset.delay / 10 : 0, d.overwrite = "all", l.overwrite = "all", d.transformStyle = "flat", d.force3D = !0, (t.indexOf("out") > -1 || u) && (d.clearProps = "transform"), l.transformPerspective == undefined && (l.transformPerspective = 1e3), u && this.getElementsByClassName("esg-media-video").length > 0) return !0;
					switch (tpGS.gsap.killTweensOf(this, !1), this.tw !== undefined && this.tw.pause(), t) {
						case "esg-shifttotop":
							n = jQuery(this).closest("li.tp-esg-item").find(".esg-bc.eec"), this.tw = tpGS.gsap.fromTo(this, .5, {
								y: 0
							}, {
								y: 0 - n[0].offsetHeight
							});
							break;
						case "esg-slide":
							this.tw = tpGS.gsap.fromTo(this, o, jQuery.extend(!0, l, directionPrepare(i, "in", _E[a].items[e].outWidth, _E[a].items[e].outHeight)), jQuery.extend(!0, {}, d));
							break;
						case "esg-slideout":
							(r = jQuery.extend(!0, d, directionPrepare(i, "out", _E[a].items[e].outWidth, _E[a].items[e].outHeight))).clearProps = "", this.tw = tpGS.gsap.fromTo(this, o, jQuery.extend(!0, void 0, l), r);
							break;
						case "esg-blur":
						case "esg-fadeblur":
						case "esg-zoomblur":
						case "esg-zoomdefaultblur":
							r = jQuery.extend(!0, d, {
								filter: "blur(" + parseInt(this.dataset.bluramount, 10) + "px)"
							}), delete l.z, delete r.z, this.tw = tpGS.gsap.fromTo(this, o, l, jQuery.extend(!0, r, d));
							break;
						case "esg-grayscalein":
						case "esg-grayscaleout":
							var c = -1 !== t.search("in");
							this.tw = tpGS.gsap.fromTo(this, o, l, jQuery.extend(!0, {
								filter: "grayscale(" + (c ? 100 : 0) + "%)"
							}, d));
							break;
						default:
							this.tw = tpGS.gsap.fromTo(this, o, l, d)
					}
				}
			})
		}
	}

	function videoClickEvent(e, t, a) {
		supressFocus = !0, e.css({
			transform: "none",
			"-moz-transform": "none",
			"-webkit-transform": "none"
		}), _E[t].ESGOT.css({
			transform: "none",
			"-moz-transform": "none",
			"-webkit-transform": "none"
		}), e.closest("ul").css({
			transform: "none",
			"-moz-transform": "none",
			"-webkit-transform": "none"
		}), e.addClass("esg-video-active"), a || e.find(".esg-media-video").each(function() {
			var a = jQuery(this),
				i = e.find(".esg-entry-media");
			if (a.data("youtube") != undefined && 0 == e.find(".esg-youtube-frame").length) {
				if ("false" != _E[t].youtubeNoCookie) var o = "https://www.youtube-nocookie.com/embed/" + a.data("youtube") + "?version=3&enablejsapi=1&html5=1&" + ("on" !== _E[t].videoInlineControls ? "controls=0" : "controls=1") + "&autohide=1&rel=0&showinfo=0&fs=1" + ("on" !== _E[t].videoInlineMute ? "&mute=0" : "&mute=1") + "&playsinline=1";
				else o = "https://www.youtube.com/embed/" + a.data("youtube") + "?version=3&enablejsapi=1&html5=1&" + ("on" !== _E[t].videoInlineControls ? "controls=0" : "controls=1") + "&autohide=1&rel=0&showinfo=0&fs=1" + ("on" !== _E[t].videoInlineMute ? "&mute=0" : "&mute=1") + "&playsinline=1";
				i.append('<iframe class="esg-iframe esg-youtube-frame" wmode="Opaque" width="' + a.attr("width") + '" height="' + a.attr("height") + '" data-src="' + o + '" src="about:blank" mozallowfullscreen allow="autoplay; fullscreen"></iframe>')
			}
			if (a.data("vimeo") != undefined && 0 == e.find(".esg-vimeo-frame").length) {
				var s = "https://player.vimeo.com/video/" + a.data("vimeo") + "?" + ("on" !== _E[t].videoInlineMute ? "muted=0" : "muted=1") + "&title=0&byline=0&html5=1&" + ("on" !== _E[t].videoInlineControls ? "controls=0" : "controls=1") + "&portrait=0&playsinline=1";
				i.append('<iframe class="esg-iframe esg-vimeo-frame" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allow="autoplay; fullscreen" width="' + a.attr("width") + '" height="' + a.attr("height") + '" data-src="' + s + '" src="about:blank"></iframe>')
			}
			if (a.data("wistia") != undefined && 0 == e.find(".esg-wistia-frame").length) {
				var r = "https://fast.wistia.net/embed/iframe/" + a.data("wistia") + "?version=3&enablejsapi=1&html5=1&" + ("on" !== _E[t].videoInlineControls ? "controls=0" : "controls=1") + "&autohide=1&rel=0&showinfo=0";
				i.append('<iframe class="esg-iframe esg-wistia-frame" wmode="Opaque" width="' + a.attr("width") + '" height="' + a.attr("height") + '" data-src="' + r + '" src="about:blank"></iframe>')
			}
			if (a.data("soundcloud") != undefined && 0 == e.find(".esg-soundcloud-frame").length) {
				var n = "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + a.data("soundcloud") + "&amp;auto_play=false&amp;hide_related=false&amp;visual=true&amp;show_artwork=true";
				i.append('<iframe class="esg-iframe esg-soundcloud-frame" allowfullscreen="false" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allow="autoplay; fullscreen" width="' + a.attr("width") + '" height="' + a.attr("height") + '" scrolling="no" frameborder="no" data-src="' + n + '" src="about:blank"></iframe>')
			}
			a.data("mp4") == undefined && a.data("webm") == undefined && a.data("ogv") == undefined || 0 != e.find(".esg-video-frame").length || (i.append('<video class="esg-iframe esg-video-frame" ' + ("on" == _E[t].videoPlaybackOnHover ? "" : " autoplay ") + " playsinline " + ("on" !== _E[t].videoInlineControls ? "controls" : "") + " " + ("on" !== _E[t].videoInlineMute ? "" : "muted") + ' width="' + a.attr("width") + '" height="' + a.attr("height") + '" data-origw="' + a.attr("width") + '" data-origh="' + a.attr("height") + '" ></video'), a.data("mp4") != undefined && i.find("video").append('<source src="' + a.data("mp4") + '" type="' + (-1 !== a.data("mp4").search("mp4") ? "video/mp4" : "audio/mpeg") + '" />'), a.data("webm") != undefined && i.find("video").append('<source src="' + a.data("webm") + '" type="video/webm" />'), a.data("ogv") != undefined && i.find("video").append('<source src="' + a.data("ogv") + '" type="video/ogg" />'))
		}), adjustMediaSize(e, !0, null, t);
		var i, o = e.find(".esg-youtube-frame"),
			s = e.find(".esg-entry-cover"),
			r = e.find(".esg-media-poster"),
			n = "y",
			l = !1;

		function d() {
			(l || "y" == n && prepareYT(o) || "v" == n && prepareVimeo(o) || "w" == n && prepareWs(o) || "s" == n && prepareSoundCloud(o) || "h" == n && prepareVideo(o)) && (clearInterval(i), a || (is_mobile() ? (tpGS.gsap.set(o, {
				autoAlpha: 1
			}), tpGS.gsap.set(r, {
				autoAlpha: 0
			}), "on" !== _E[t].keepLayersInline && tpGS.gsap.set(s, {
				autoAlpha: 0
			})) : (tpGS.gsap.to(o, .5, {
				autoAlpha: 1
			}), tpGS.gsap.to(r, .5, {
				autoAlpha: 0
			}), "on" !== _E[t].keepLayersInline && tpGS.gsap.to(s, .5, {
				autoAlpha: 0
			})), "y" === n && playYT(o, a), "v" === n && ("on" !== _E[t].videoInlineControls && (o.controls = 0), playVimeo(o, a)), "s" === n && playSC(o, a), "h" === n && playVideo(o, a), "w" === n && playWs(o, a))), supressFocus = !1
		}
		o.length || (o = e.find(".esg-vimeo-frame"), n = "v"), o.length || (o = e.find(".esg-wistia-frame"), n = "w"), o.length || (o = e.find(".esg-soundcloud-frame"), n = "s"), o.length || (o = e.find(".esg-video-frame"), n = "h"), "about:blank" == o.attr("src") ? o.attr("src", o.data("src")) : o.hasClass("esg-video-frame") ? tpGS.gsap.set(o, {
			opacity: 0,
			display: "block"
		}) : l = !0, loadVideoApis(t), a || tpGS.gsap.set(o, {
			opacity: 1,
			display: "block"
		}), i = setInterval(d, 100), d()
	}

	function setMediaEntryAspectRatio(e) {
		var t = e.img !== undefined ? e.img.attr("width") : 1,
			a = e.img !== undefined ? e.img.attr("height") : 1;
		(e.ar === undefined || "auto" == e.ar || isNaN(e.ar)) && (e.imgw = e.imgw === undefined ? e.img != undefined ? e.img.width() : 1 : e.imgw, e.imgh = e.imgh === undefined ? e.img != undefined ? e.img.height() : 1 : e.imgh, e.imgw = null === e.imgw || isNaN(e.imgw) || e.imgw === undefined || !1 === e.imgw ? 1 : e.imgw, e.imgh = null === e.imgh || isNaN(e.imgh) || e.imgh === undefined || !1 === e.imgh ? 1 : e.imgh, e.imgw = e.img != undefined ? t !== undefined && !1 !== t ? t : e.imgw : 1, e.imgh = e.img != undefined ? a !== undefined && !1 !== a ? a : e.imgh : 1, e.ar = e.img !== undefined && e.img.length >= 1 ? e.imgh / e.imgw * 100 : 0), 1 !== e.ip.data("keepAspectRatio") && (e.ip.css({
			paddingBottom: e.ar + "%"
		}), e.ip.data("bottompadding", e.ar)), e.keepAspectRatio && e.ip.data("keepAspectRatio", 1)
	}

	function fixValue(e, t) {
		return isNaN(e) && (e = "100"), e = .01 * parseInt(e, 10), Math.max(Math.min(e, t), 0)
	}

	function fixURI(e) {
		return e === undefined ? e : e = (e = (e = e.split("(").join("%28")).split(")").join("%29")).split(" ").join("%20")
	}

	function prepareItemsInGrid(e, t) {
		_E[e].c.addClass("esg-container"), _E[e].allids = _E[e].allids === undefined ? {} : _E[e].allids, _E[e].items = _E[e].items === undefined ? {} : _E[e].items, _E[e].c.find(t ? ".eg-newli" : ".mainul>li").each(function() {
			this.dataset.piig === undefined && (this.id !== undefined && _E[e].allids[this.id] === undefined || (this.id = this.id === undefined ? "eg-item-id-" + Math.round(1e4 * Math.random()) : "" === this.id ? Math.round(1e4 * Math.random()) : this.id + "-" + Math.round(1e4 * Math.random())), _E[e].allids[this.id] = !0, _E[e].items[this.id] === undefined ? _E[e].items[this.id] = {
				c: this,
				jc: jQuery(this)
			} : (_E[e].items[this.id].c = this, _E[e].items[this.id].jc = jQuery(this)), _E[e].items[this.id].c.classList.remove("eg-newli"), this.dataset.piig = !0)
		});
		var a, i = _E[e].aspectratio,
			o = _E[e].c.width(),
			s = 1,
			r = 1;
		for (var n in (i = i.split(":")).length > 1 ? (s = parseInt(i[0], 0) / parseInt(i[1], 0), r = parseInt(i[1], 0) / parseInt(i[0], 0), o / _E[e].column / s, a = !0, r *= 100) : (s = "auto", r = "auto", a = !1), _E[e].items)
			if (_E[e].items.hasOwnProperty(n) && _E[e].items[n].prepared === undefined) {
				_E[e].items[n].prepared = !0, _E[e].items[n].jc === undefined && (_E[e].items[n].jc = jQuery("#" + n), _E[e].items[n].jc !== undefined && _E[e].items[n].jc.length > 0 && (_E[e].items[n].c = _E[e].items[n].jc[0])), _E[e].items[n].media = _E[e].items[n].jc.find(".esg-entry-media"), _E[e].items[n].img = _E[e].items[n].media.find("img"), _E[e].items[n].mediacw = _E[e].items[n].jc.find(".esg-media-cover-wrapper"), _E[e].items[n].entryc = _E[e].items[n].jc.find(".esg-entry-content");
				var l = _E[e].items[n].img != undefined && _E[e].items[n].img.length > 0 ? _E[e].items[n].img.attr("src") : undefined,
					d = _E[e].items[n].img != undefined && _E[e].items[n].img.length > 0 ? _E[e].items[n].img.data("lazysrc") : l;
				if ((window.devicePixelRatio || 1) > 1) l = (_E[e].items[n].img != undefined && _E[e].items[n].img.length > 0 ? _E[e].items[n].img.data("retina") : undefined) || l;
				d === undefined && (d = l), _E[e].items[n].media.addClass(_E[e].mediaFilter), tpGS.gsap.set(_E[e].items[n].c, {
					force3D: "auto",
					autoAlpha: 0,
					opacity: 0
				}), _E[e].items[n].c.classList.add("tp-esg-item"), _E[e].items[n].c.dataset.anime === undefined && _E[e].items[n].c.dataset.animeOther === undefined || (!0 !== _E[e].itmAnime && (_E[e].c[0].classList.add("esg-itm-anime"), _E[e].itmAnime = !0), _E[e].items[n].c.classList.add("esg-anime-item"), _E[e].items[n].anime = {
					itm: _E[e].items[n].c.dataset.anime,
					other: _E[e].items[n].c.dataset.animeOther,
					zoomin: fixValue(_E[e].items[n].c.dataset.animeZoomin, 2),
					other_zoomin: fixValue(_E[e].items[n].c.dataset.animeOtherZoomin, 2),
					zoomout: fixValue(_E[e].items[n].c.dataset.animeZoomout, 2),
					other_zoomout: fixValue(_E[e].items[n].c.dataset.animeOtherZoomout, 2),
					fade: fixValue(_E[e].items[n].c.dataset.animeFade, 1),
					other_fade: fixValue(_E[e].items[n].c.dataset.animeOtherFade, 1),
					shift: _E[e].items[n].c.dataset.animeShift,
					other_shift: _E[e].items[n].c.dataset.animeOtherShift,
					shift_amount: _E[e].items[n].c.dataset.animeShiftAmount,
					shift_other_amount: _E[e].items[n].c.dataset.animeOtherShiftAmount,
					rotate: _E[e].items[n].c.dataset.animeRotate,
					other_rotate: _E[e].items[n].c.dataset.animeOtherRotate,
					blur: _E[e].items[n].c.dataset.animeBlur,
					other_blur: _E[e].items[n].c.dataset.animeOtherBlur
				}, _E[e].items[n].anime.blur === undefined && _E[e].items[n].anime.other_blur === undefined || _E[e].items[n].c.classList.add("esg-anime-blur"), _E[e].items[n].mediacw.find(".esg-entry-media.grayscale").removeClass("grayscale").parent().addClass("grayscale"));
				var u = {
					bgpos: _E[e].items[n].img.length >= 1 && _E[e].items[n].img != undefined ? _E[e].items[n].img.data("bgposition") : undefined,
					bgsize: _E[e].items[n].img.length >= 1 && _E[e].items[n].img != undefined ? _E[e].items[n].img.data("bgsize") : undefined,
					bgrepeat: _E[e].items[n].img.length >= 1 && _E[e].items[n].img != undefined ? _E[e].items[n].img.data("bgrepeat") : undefined
				};
				u.bgpos = u.bgpos === undefined ? "" : "background-position:" + u.bgpos + ";", u.bgsize = u.bgsize === undefined ? "" : "background-size:" + u.bgsize + ";", u.bgrepeat = u.bgrepeat === undefined ? "" : "background-repeat:" + u.bgrepeat + ";";
				var c = d || "";
				_E[e].items[n].lazythumb = _E[e].items[n].img.data("lazythumb"), c = fixURI(c), _E[e].items[n].lazythumb = fixURI(_E[e].items[n].lazythumb), _E[e].items[n].media.append('<div class="esg-media-poster" src="' + d + '" data-src="' + d + '" data-lazythumb="' + _E[e].items[n].lazythumb + '" style="' + u.bgsize + u.bgrepeat + u.bgpos + "background-image:url(" + c + ')"></div>'), "even" == _E[e].layout ? _E[e].items[n].media.wrap('<div class="esg-entry-media-wrapper esg-entry-media-wrapper-even"></div>') : _E[e].items[n].media.wrap('<div class="esg-entry-media-wrapper esg-entry-media-wrapper-not-even"></div>'), _E[e].items[n].mediaw = _E[e].items[n].jc.find(".esg-entry-media-wrapper"), setMediaEntryAspectRatio({
					ip: _E[e].items[n].media,
					img: _E[e].items[n].img,
					ar: r,
					keepAspectRatio: a
				}), _E[e].items[n].img != undefined && _E[e].items[n].img.length > 0 && _E[e].items[n].img.css({
					display: "none"
				}), _E[e].items[n].jc.find(".esg-media-video").each(function() {
					_E[e].items[n].hasVideo = !0;
					var t = jQuery(this),
						a = "display:none;",
						i = r;
					if (t.data("poster") != undefined && t.data("poster").length > 3 ? _E[e].items[n].media.find(".esg-media-poster").css({
							opacity: 1,
							backgroundImage: "url(" + t.data("poster") + ")"
						}).attr("src", t.data("poster")).data("src", t.data("poster")) : ("off" === _E[e].keepLayersInline && (_E[e].items[n].jc.hasClass("esg-split-content") || _E[e].items[n].jc.find(".esg-entry-cover").remove(), _E[e].items[n].jc.find(".esg-media-poster").remove()), a = "display:block;", i = parseInt(t.attr("height"), 0) / parseInt(t.attr("width"), 0) * 100, setMediaEntryAspectRatio({
							ip: _E[e].items[n].media,
							ar: i,
							keepAspectRatio: !0
						}), _E[e].items[n].simplevideo = 1), "on" === _E[e].videoPlaybackInGrid) {
						if (0 == _E[e].items[n].jc.find(".esg-click-to-play-video").length && (_E[e].items[n].jc.find(".esg-entry-cover").find("*").each(function() {
								0 == jQuery(this).closest("a").length && 0 == jQuery(this).find("a").length && jQuery(this).addClass("esg-click-to-play-video")
							}), _E[e].items[n].jc.find(".esg-overlay").addClass("esg-click-to-play-video")), t.data("youtube") != undefined) {
							if (_E[e].items[n].videoType = "youtube", "false" != _E[e].youtubeNoCookie) var o = "https://www.youtube-nocookie.com/embed/" + t.data("youtube") + "?version=3&enablejsapi=1&html5=1&" + ("on" !== _E[e].videoInlineControls ? "controls=0" : "controls=1") + "&autohide=1&rel=0&showinfo=0&fs=1&playsinline=1" + ("on" !== _E[e].videoInlineMute ? "&mute=0" : "&mute=1") + ("on" === _E[e].videoLoopInGrid ? "&mute=1&autoplay=1&loop=1&playlist=" + t.data("youtube") : "");
							else o = "https://www.youtube.com/embed/" + t.data("youtube") + "?version=3&enablejsapi=1&html5=1&" + ("on" !== _E[e].videoInlineControls ? "controls=0" : "controls=1") + "&autohide=1&rel=0&showinfo=0&fs=1&playsinline=1" + ("on" !== _E[e].videoInlineMute ? "&mute=0" : "&mute=1") + ("on" === _E[e].videoLoopInGrid ? "&mute=1&autoplay=1&loop=1&playlist=" + t.data("youtube") : "");
							_E[e].items[n].media.append('<iframe class="esg-youtube-frame" wmode="Opaque" style="position:absolute;top:0px;left:0px;' + a + '" width="' + t.attr("width") + '" height="' + t.attr("height") + '" data-src="' + o + '"src="about:blank" data-esg-id="' + e + '" webkitallowfullscreen mozallowfullscreen allow="autoplay; fullscreen"></iframe>')
						}
						if (t.data("vimeo") != undefined) {
							_E[e].items[n].videoType = "vimeo";
							var s = "https://player.vimeo.com/video/" + t.data("vimeo") + "?" + ("on" !== _E[e].videoInlineMute ? "muted=0" : "muted=1") + "&title=0&byline=0&html5=1&portrait=0&" + ("on" !== _E[e].videoInlineControls ? "controls=0" : "controls=1") + ("on" === _E[e].videoLoopInGrid ? "&muted=1&autoplay=1&loop=1&autopause=0" : "");
							_E[e].items[n].media.append('<iframe class="esg-vimeo-frame" style="position:absolute;top:0px;left:0px;' + a + '" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""  allow="autoplay; fullscreen"  width="' + t.attr("width") + '" height="' + t.attr("height") + '" data-src="' + s + '"src="about:blank"></iframe>')
						}
						if (t.data("wistia") != undefined) {
							_E[e].items[n].videoType = "wistia";
							var l = "https://fast.wistia.net/embed/iframe/" + t.data("wistia") + "?version=3&enablejsapi=1&html5=1&" + ("on" !== _E[e].videoInlineControls ? "controls=0" : "controls=1") + "&autohide=1&rel=0&showinfo=0";
							_E[e].items[n].media.append('<iframe class="esg-wistia-frame" wmode="Opaque" style="position:absolute;top:0px;left:0px;' + a + '" width="' + t.attr("width") + '" height="' + t.attr("height") + '" data-src="' + l + '"src="about:blank"></iframe>')
						}
						if (t.data("soundcloud") != undefined) {
							var d = "https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/" + t.data("soundcloud") + "&amp;auto_play=false&amp;hide_related=false&amp;visual=true&amp;show_artwork=true";
							_E[e].items[n].media.append('<iframe class="esg-soundcloud-frame" style="position:absolute;top:0px;left:0px;' + a + '" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" allow="autoplay; fullscreen" width="' + t.attr("width") + '" height="' + t.attr("height") + '" data-src="' + d + '"src="about:blank"></iframe>')
						}
						if (t.data("mp4") != undefined || t.data("webm") != undefined || t.data("ogv") != undefined) {
							_E[e].items[n].videoType = "html";
							var u = t.data("mp4"),
								c = u !== undefined && u.indexOf(".mp3") >= 0;
							_E[e].items[n].media.append('<video class="esg-video-frame" ' + (c || "on" == _E[e].videoPlaybackOnHover ? "" : " autoplay ") + ("on" === _E[e].videoLoopInGrid ? " loop" : "") + " playsinline " + (c ? "" : "on" !== _E[e].videoInlineMute ? "" : "muted") + " " + ("on" !== _E[e].videoInlineControls && !0 !== c ? "" : "controls ") + 'style="position:absolute;top:0px;left:0px;' + a + '" width="' + t.attr("width") + '" height="' + t.attr("height") + '" data-origw="' + t.attr("width") + '" data-origh="' + t.attr("height") + '" playsinline></video');
							var p = _E[e].items[n].media.find("video");
							u != undefined && p.append('<source src="' + t.data("mp4") + '" type="' + (-1 !== t.data("mp4").search("mp4") ? "video/mp4" : "audio/mpeg") + '" />'), t.data("webm") != undefined && p.append('<source src="' + t.data("webm") + '" type="video/webm" />'), t.data("ogv") != undefined && p.append('<source src="' + t.data("ogv") + '" type="video/ogg" />')
						}
					}
					if (_E[e].items[n].jc.find(".esg-click-to-play-video").on("click", function() {
							var t = jQuery(this);
							t.hasClass("eg-ajaxclicklistener") || t.closest(".eg-ajaxclicklistener").length || videoClickEvent(t = t.closest(".tp-esg-item"), e)
						}), 1 == _E[e].items[n].simplevideo) {
						var f = _E[e].items[n].jc.find("video");
						f.length ? f.css("opacity", "1") : waitMediaListeners(_E[e].items[n].jc, e)
					}
				}), 0 == _E[e].items[n].jc.find(".esg-media-video").length && _E[e].items[n].jc.find(".esg-click-to-play-video").remove(), adjustMediaSize(_E[e].items[n].jc, !0, null, e), _E[e].items[n].entryc.length > 0 && _E[e].items[n].mediacw.length > 0 && (_E[e].items[n].entryc.index() < _E[e].items[n].mediacw.index() || _E[e].items[n].entryc.addClass("esg-notalone")), _E[e].items[n].jc.find(".esg-entry-cover").each(function(e) {
					var t = jQuery(this),
						a = t.data("clickable");
					t.find(".esg-top").wrapAll('<div class="esg-tc eec"></div>'), t.find(".esg-left").wrapAll('<div class="esg-lc eec"></div>'), t.find(".esg-right").wrapAll('<div class="esg-rc eec"></div>'), t.find(".esg-center").wrapAll('<div class="esg-cc eec"></div>'), t.find(".esg-bottom").wrapAll('<div class="esg-bc eec"></div>'), t.find(".eec").append("<div></div>"), "on" == a && t.find(".esg-overlay").length >= 1 && t.on("click", function(e) {
						jQuery(e.target).closest("a").length || jQuery(this).find(".eg-invisiblebutton")[0].click()
					}).css({
						cursor: "pointer"
					})
				}), _E[e].items[n].padding = {
					t: parseInt(_E[e].items[n].jc.css("paddingTop"), 0),
					b: parseInt(_E[e].items[n].jc.css("paddingBottom"), 0),
					l: parseInt(_E[e].items[n].jc.css("paddingLeft"), 0),
					r: parseInt(_E[e].items[n].jc.css("paddingRight"), 0)
				}, _E[e].items[n].border = {
					t: parseInt(_E[e].items[n].jc.css("borderTopWidth"), 0),
					b: parseInt(_E[e].items[n].jc.css("borderBottomWidth"), 0),
					l: parseInt(_E[e].items[n].jc.css("borderLeftWidth"), 0),
					r: parseInt(_E[e].items[n].jc.css("borderRightWidth"), 0)
				}, _E[e].items[n].entryc.length > 0 && "even" == _E[e].layout && _E[e].items[n].jc.css({
					paddingTop: "0px",
					paddingLeft: "0px",
					paddingRight: "0px",
					paddingBottom: "0px",
					borderTopWidth: "0px",
					borderBottomWidth: "0px",
					borderLeftWidth: "0px",
					borderRightWidth: "0px"
				}), _E[e].ajaxContentTarget != undefined && _E[e].ajaxContentTarget.length > 0 && jQuery("#" + _E[e].ajaxContentTarget).length > 0 && _E[e].items[n].jc.find(".eg-ajaxclicklistener, a").each(function() {
					var t = jQuery(this),
						a = jQuery("#" + _E[e].ajaxContentTarget).find(".eg-ajax-target");
					a.parent().hasClass("eg-ajaxanimwrapper") || a.wrap('<div class="eg-ajaxanimwrapper"></div>'), t.data("ajaxsource") != undefined && t.data("ajaxtype") != undefined && (t.addClass("eg-ajax-a-button"), t.on("click", function() {
						return loadMoreContent(e, t), !(a.length > 0)
					}))
				}), _E[e].items[n].jc.find(".eg-triggerfilter").on("click", function() {
					var t = jQuery(this).data("filter");
					return jQuery(_E[e].filterGroupClass + ".esg-filterbutton," + _E[e].filterGroupClass + " .esg-filterbutton").each(function() {
						jQuery(this).data("filter") == t && jQuery(this).trigger("click")
					}), !1
				}).css({
					cursor: "pointer"
				}), _E[e].items[n].jc.on("mouseenter.hoverdir mouseleave.hoverdir", function(t) {
					var a = this.id,
						i = _E[e].items[a].jc,
						o = getDir(i, {
							x: t.pageX,
							y: t.pageY
						});
					if ("mouseenter" === t.type) itemHoverAnim(a, "nope", e, o), "on" == _E[e].videoPlaybackInGrid && "on" == _E[e].videoPlaybackOnHover && _E[e].items[a].hasVideo && (clearTimeout(_E[e].items[a].stopVideoPlayback), videoClickEvent(i, e));
					else {
						if ("on" == _E[e].videoPlaybackInGrid && "on" == _E[e].videoPlaybackOnHover && _E[e].items[a].hasVideo && (clearTimeout(_E[e].items[a].stopVideoPlayback), _E[e].items[a].stopVideoPlayback = setTimeout(function() {
								stopVideo(i, e)
							}, 150)), 1 == _E[e].items[a].animstarted) {
							if (_E[e].items[a].animstarted = 0, i.removeClass("esg-hovered"), _E[e].items[a].entryc.length > 0 && "even" == _E[e].layout) {
								tpGS.gsap.set(_E[e].items[a].entryc, {
									display: "none"
								});
								var s = {
									zIndex: 5,
									paddingTop: "0px",
									paddingLeft: "0px",
									paddingRight: "0px",
									paddingBottom: "0px",
									borderTopWidth: "0px",
									borderBottomWidth: "0px",
									borderLeftWidth: "0px",
									borderRightWidth: "0px"
								};
								isNaN(_E[e].items[this.id].outHeight) || (s = jQuery.extend(!0, s, {
									z: 0,
									x: 0,
									y: 0,
									height: _E[e].items[this.id].outHeight,
									width: _E[e].items[this.id].outWidth
								})), tpGS.gsap.set(i, s), "on" == _E[e].evenGridMasonrySkinPusher && offsetParrents(0, i, e)
							}
							i.find(".esg-transition").each(function() {
								if (esgAnimmatrix.hasOwnProperty(this.dataset.transition)) {
									var t, i = this.dataset.transition,
										s = esgAnimmatrix[i],
										r = s[4],
										n = i.indexOf("out") > -1;
									switch (this.tw !== undefined && this.tw.pause(), i) {
										case "esg-slide":
											t = directionPrepare(o, "in", _E[e].items[a].outWidth, _E[e].items[a].outHeight, !0), this.tw = tpGS.gsap.to(this, .5, {
												y: t.y,
												x: t.x,
												overwrite: "all",
												onCompleteParams: [this],
												onComplete: function(e) {
													tpGS.gsap.set(e, {
														autoAlpha: 0
													})
												}
											});
											break;
										case "esg-slideout":
											t = directionPrepare(o, "out", _E[e].items[a].outWidth, _E[e].items[a].outHeight), this.tw = tpGS.gsap.fromTo(this, .5, {
												autoAlpha: 1,
												x: t.x,
												y: t.y
											}, {
												x: 0,
												y: 0,
												autoAlpha: 1,
												overwrite: "all"
											});
											break;
										case "esg-blur":
										case "esg-fadeblur":
										case "esg-zoomblur":
										case "esg-zoomdefaultblur":
											this.tw = tpGS.gsap.to(this, s[3], jQuery.extend(!0, r, {
												filter: "blur(0px)"
											}));
											break;
										case "esg-grayscalein":
										case "esg-grayscaleout":
											var l = -1 !== i.search("in");
											this.tw = tpGS.gsap.to(this, s[3], jQuery.extend(!0, r, {
												filter: "grayscale(" + (l ? 0 : 100) + "%)"
											}));
											break;
										default:
											r.force3D = "auto", this.tw = tpGS.gsap.to(this, s[3], r)
									}
									n && this.tw.eventCallback("onComplete", resetTransforms, [this])
								}
							})
						}
						_E.win.width() > _E[e].c.width() && tpGS.gsap.set(_E[e].ESGOT, {
							overflow: "hidden"
						})
					}
				})
			} _E[e].c.find(".esg-transition").each(function() {
			var e = jQuery(this);
			if (!e.data("prepared")) {
				e.data("prepared", !0);
				var t = e.attr("data-transition");
				if (esgAnimmatrix.hasOwnProperty(t)) {
					var a = esgAnimmatrix[t],
						i = jQuery.extend({}, a[1]);
					tpGS.gsap.set(e, i)
				}
			}
		}), loadVideoApis(e), setItemsOnPages(e)
	}

	function resetTransforms(e) {
		tpGS.gsap.set(e, {
			clearProps: "transform"
		})
	}

	function adjustMediaSize(e, t, a, i) {
		var o = e.find("iframe").length > 0 ? "iframe" : e.find(".esg-video-frame").length > 0 ? ".esg-video-frame" : "";
		"" !== o && e.find(o).each(function(o) {
			var s = jQuery(this);
			s.data("origw", s.attr("width")), s.data("origh", s.attr("height"));
			var r, n, l = s.data("origw"),
				d = s.data("origh");
			r = a != undefined ? a.itemw : e.width(), n = Math.round(r / l * d), r = Math.round(r), s.data("neww", r), s.data("newh", n), t && "even" != _E[i].layout ? tpGS.gsap.set(s, {
				width: r,
				height: n
			}) : tpGS.gsap.set(s, {
				width: "100%",
				height: "100%"
			})
		})
	}

	function lightboxPrepareOnEsgBoxes(e, t) {
		if (e !== undefined && t != undefined && t[0] !== undefined && _E[e].items[t[0].id] !== undefined) {
			_E[e].items[t[0].id].esgBoxes = t[0].getElementsByClassName("esgbox");
			var a = [];
			for (var i in _E[e].items[t[0].id].esgBoxes)
				if (_E[e].items[t[0].id].esgBoxes.hasOwnProperty(i)) {
					var o = _E[e].items[t[0].id].esgBoxes[i],
						s = o.dataset.posttitle || o.dataset.caption,
						r = s ? encodeURIComponent(s) : "";
					o.dataset.esgbox = "all" == _E[e].lightBoxMode ? _E[e].lightboxHash : "contentgroup" != _E[e].lightBoxMode ? "" : o.dataset.esgbox, o.dataset.thumb === undefined && _E[e].items[t[0].id].lazythumb !== undefined && (o.dataset.thumb = fixURI(_E[e].items[t[0].id].lazythumb)), "undefined" === o.dataset.thumb ? delete o.dataset.thumb : o.dataset.thumb = fixURI(o.dataset.thumb), o.ajax_settings == undefined && o.className.indexOf("esgbox-post") >= 0 && "javascript:void(0);" === o.href && (o.ajax_settings = {
						featured: o.dataset.featured,
						titl: r,
						lbTitle: _E[e].lightBoxPostTitle,
						lbTag: _E[e].lightBoxPostTitleTag,
						lbImg: _E[e].lightBoxFeaturedImg,
						lbMargin: _E[e].lightBoxFeaturedMargin,
						lbWidth: _E[e].lightBoxFeaturedWidth,
						lbPos: _E[e].lightBoxFeaturedPos,
						lbMin: _E[e].lightboxPostMinWid,
						lbMax: _E[e].lightboxPostMaxWid,
						margin: _E[e].lightboxMargin,
						padding: _E[e].lbContentPadding,
						overflow: _E[e].lbContentOverflow,
						revslider: o.dataset.revslider,
						essgrid: o.dataset.lbesg,
						ispost: o.dataset.ispost,
						gridid: o.dataset.gridid
					}, o.ajax_settings = JSON.stringify(o.ajax_settings), o.dataset.type = "ajax", o.href = _E[e].loadMoreAjaxUrl + "?action=" + _E[e].loadMoreAjaxAction + "&client_action=load_post_content&token=" + _E[e].loadMoreAjaxToken + "&postid=" + o.dataset.post + "&settings=" + o.ajax_settings);
					var n = !0,
						l = 0;
					for (var d in _E[e].items[t[0].id].hreflist) _E[e].items[t[0].id].hreflist.hasOwnProperty(d) && (o.href == _E[e].items[t[0].id].hreflist[d] && (o.dataset.clickreference = l, n = !1), l++);
					o !== undefined && o.href !== undefined && n ? (_E[e].items[t[0].id].hreflist.push(o.href), _E[e].items[t[0].id].hrefClicks = _E[e].items[t[0].id].hrefClicks === undefined ? [] : _E[e].items[t[0].id].hrefClicks, _E[e].items[t[0].id].hrefClicks.push(o), -1 === o.className.indexOf("esgboxffssii") && o.classList.add("esgboxffssii")) : n || -1 !== o.className.indexOf("esgboxffssii") || (o.href = "javascript:;", delete o.dataset.esgbox, delete o.dataset.thumb, a.push(o), o.dataset.pitemid = t[0].id, o.addEventListener("click", function() {
						jQuery(_E[e].items[this.dataset.pitemid].hrefClicks[this.dataset.clickreference]).trigger("click")
					})), _E[e].items[t[0].id].additional === undefined && (_E[e].items[t[0].id].additional = t.find(".esgbox-additional").find(".esgbox"), _E[e].items[t[0].id].additional.length && _E[e].items[t[0].id].additional.each(function() {
						jQuery(o).attr("data-caption", s).find("img").remove()
					})), _E[e].isStream && (o.dataset.ratio = "16:9")
				} for (var u in a) a.hasOwnProperty(u) && a[u].classList.remove("esgbox")
		}
	}

	function filterBasedShowOrHide(e, t, a, i, o, s, r) {
		if (e !== undefined && t != undefined && t[0] !== undefined && _E[e].items[t[0].id] !== undefined) {
			var n = t[0].id;
			if (o >= s && o < r && !a) {
				if (t.addClass("itemtoshow").removeClass("itemishidden").removeClass("itemonotherpage"), "filterpage" == _E[e].lightBoxMode || "filterall" == _E[e].lightBoxMode)
					for (var l in _E[e].items[n].esgBoxes) _E[e].items[n].esgBoxes.hasOwnProperty(l) && (_E[e].items[n].esgBoxes[l].dataset.esgbox = i);
				o++
			} else if (a) t.addClass("itemishidden").removeClass("itemtoshow").removeClass("fitsinfilter");
			else if (o < s || o >= r ? (t.addClass("itemonotherpage").removeClass("itemtoshow"), o++) : (t.addClass("itemtoshow").removeClass("itemishidden").removeClass("itemonotherpage"), o++), t.addClass("fitsinfilter"), "filterall" == _E[e].lightBoxMode)
				for (var l in _E[e].items[n].esgBoxes) _E[e].items[n].esgBoxes.hasOwnProperty(l) && (_E[e].items[n].esgBoxes[l].dataset.esgbox = i);
			return o
		}
	}

	function testFilter(e, t) {
		return new RegExp("(^|\\s)(" + t + ")(\\s|$)", "g").test(e)
	}

	function setItemsOnPages(e) {
		var t, a = _E[e].column * _E[e].row,
			i = _E[e].rowItemMultiplier,
			o = i.length;
		if (o > 0 && "even" == _E[e].layout)
			for (a = 0, t = 0; t < _E[e].row; t++) a += i[t - o * Math.floor(t / o)][_E[e].columnindex];
		if ("on" == _E[e].evenCobbles && _E[e].cobblesPattern != undefined) {
			var s = 0;
			for (var r in a = 0, t = 0, _E[e].items)
				if (_E[e].items.hasOwnProperty(r) && 1 != _E[e].items[r].skipBlank) {
					var n = _E[e].items[r].c.dataset.cobblesw,
						l = _E[e].items[r].c.dataset.cobblesh;
					if (_E[e].cobblesPattern != undefined && _E[e].cobblesPattern.length > 2) {
						var d = getCobblePat(_E[e].cobblesPattern, t);
						n = parseInt(d.w, 0), l = parseInt(d.h, 0)
					}
					n = n == undefined ? 1 : n, l = l == undefined ? 1 : l, _E[e].column < n && (n = _E[e].column), s += n * l, _E[e].column * _E[e].row >= s && a++, t++
				}
		}
		var u = a * _E[e].currentpage,
			c = u + a,
			p = document.querySelectorAll(_E[e].filterGroupClass + ".esg-filterbutton.selected:not(.esg-navigationbutton)," + _E[e].filterGroupClass + " .esg-filterbutton.selected:not(.esg-navigationbutton)"),
			f = 0;
		if (_E[e].isStream = _E[e].isStream == undefined ? _E[e].mypc[0].className.indexOf("source_type_stream") >= 0 : _E[e].isStream, _E[e].c !== undefined && null !== _E[e].c && _E[e].c.find(".esgbox.facebook").each(function() {
				delete this.dataset.width, delete this.dataset.height
			}), jQuery(_E[e].filterGroupClass + ".esg-filter-wrapper, " + _E[e].filterGroupClass + " .esg-filter-wrapper").length > 0) {
			for (var r in _E[e].items)
				if (_E[e].items.hasOwnProperty(r) && _E[e].items[r].jc !== undefined) {
					var g = _E[e].items[r].jc;
					if (1 != _E[e].items[r].skipBlank) {
						_E[e].items[r].hreflist = _E[e].items[r].hreflist === undefined ? [] : _E[e].items[r].hreflist, _E[e].items[g[0].id].hrefClicks = _E[e].items[g[0].id].hrefClicks === undefined ? [] : _E[e].items[g[0].id].hrefClicks, lightboxPrepareOnEsgBoxes(e, g);
						var h = !0;
						for (var m in p)
							if (p.hasOwnProperty(m) && e !== undefined && g != undefined && g[0] !== undefined && _E[e].items[g[0].id] !== undefined)
								if (testFilter(_E[e].items[r].c.className, p[m].dataset.filter)) h = !1;
								else if ("and" == _E[e].filterLogic || _E[e].hiddenSearchField && _E[e].hiddenSearchField.hasClass("eg-forcefilter")) {
							h = !0;
							break
						}
						f = filterBasedShowOrHide(e, g, h, _E[e].filterGroupClass.replace(".", ""), f, u, c)
					} else g.addClass("itemishidden").removeClass("itemtoshow")
				}
		} else if (_E[e].manuelsorting) {
			for (var _ in _E[e].itemsOrder === undefined && jQuery(_E[e].c).updateManuelOrder(), _E[e].itemsOrder)
				if (r = _E[e].itemsOrder[_], _E[e].items.hasOwnProperty(r)) {
					g = _E[e].items[r].jc;
					1 != _E[e].items[r].skipBlank ? (_E[e].items[r].hreflist = _E[e].items[r].hreflist === undefined ? [] : _E[e].items[r].hreflist, lightboxPrepareOnEsgBoxes(e, g), f = filterBasedShowOrHide(e, g, !1, _E[e].lightboxHash, f, u, c)) : g.addClass("itemishidden").removeClass("itemtoshow")
				}
		} else
			for (var r in _E[e].items)
				if (_E[e].items.hasOwnProperty(r)) {
					g = _E[e].items[r].jc;
					1 != _E[e].items[r].skipBlank ? (_E[e].items[r].hreflist = _E[e].items[r].hreflist === undefined ? [] : _E[e].items[r].hreflist, lightboxPrepareOnEsgBoxes(e, g), f = filterBasedShowOrHide(e, g, !1, _E[e].lightboxHash, f, u, c)) : g.addClass("itemishidden").removeClass("itemtoshow")
				} if (_E[e].lightboxSettings = _E[e].lightboxSettings === undefined ? _E[e].c.data("lightboxsettings") : _E[e].lightboxSettings, jQuery.fn.esgbox && null !== _E[e].c && _E[e].c.find(".esgbox.esgboxffssii").esgbox(_E[e].lightboxSettings), null !== _E[e].c && (_E[e].nonefiltereditems = _E[e].c.find(".itemtoshow, .fitsinfilter").length), _E[e].loadMoreTriggerCache = _E[e].loadMoreTriggerCache === undefined || _E[e].loadMoreTriggerCache, "none" != _E[e].loadMoreType) {
			var E = 0;
			for (var w in p) p.hasOwnProperty(w) && p[w].dataset.filter !== undefined && (E += _E[e].c.find("." + p[w].dataset.filter).not(".itemishidden").length);
			!0 !== _E[e].loadMoreTriggerCache && E < _E[e].minVisibleItems && (_E[e].tryToLoad = _E[e].minVisibleItems - E - _E[e].loadMoreAmount, loadMoreItems(e, "1"), _E[e].loadMoreTriggerCache = !0)
		}
		var v, y = jQuery(_E[e].filterGroupClass + ".esg-pagination," + _E[e].filterGroupClass + " .esg-pagination");
		y.find(".esg-pagination").remove(), y.html(""), _E[e].maxpage = 0;
		var b = Math.ceil(_E[e].nonefiltereditems / a);
		if (_E[e].realmaxpage = b, b > 7 && "on" == _E[e].smartPagination)
			if (_E[e].currentpage < 3) {
				for (t = 0; t < 4; t++) v = t == _E[e].currentpage ? "selected" : "", _E[e].maxpage++, y.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + v + '" data-page="' + t + '">' + (t + 1) + "</div>");
				y.append('<div class="esg-navigationbutton">...</div>'), y.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + v + '" data-page="' + (b - 1) + '">' + b + "</div>")
			} else if (b - _E[e].currentpage < 4)
			for (y.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + v + '" data-page="0">1</div>'), y.append('<div class="esg-navigationbutton">...</div>'), t = b - 4; t < b; t++) v = t == _E[e].currentpage ? "selected" : "", _E[e].maxpage++, y.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + v + '" data-page="' + t + '">' + (t + 1) + "</div>");
		else {
			for (y.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + v + '" data-page="0">1</div>'), y.append('<div class="esg-navigationbutton">...</div>'), t = _E[e].currentpage - 1; t < _E[e].currentpage + 2; t++) v = t == _E[e].currentpage ? "selected" : "", _E[e].maxpage++, y.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + v + '" data-page="' + t + '">' + (t + 1) + "</div>");
			y.append('<div class="esg-navigationbutton">...</div>'), y.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + v + '" data-page="' + (b - 1) + '">' + b + "</div>")
		} else
			for (t = 0; t < b; t++) v = t == _E[e].currentpage ? "selected" : "", _E[e].maxpage++, y.append('<div class="esg-navigationbutton esg-filterbutton esg-pagination-button ' + v + '" data-page="' + t + '">' + (t + 1) + "</div>");
		if (1 == _E[e].maxpage ? (jQuery(_E[e].filterGroupClass + ".esg-navigationbutton," + _E[e].filterGroupClass + " .esg-navigationbutton").not(".esg-loadmore").css({
				display: "none"
			}), y.css({
				display: "none"
			})) : (jQuery(_E[e].filterGroupClass + ".esg-navigationbutton," + _E[e].filterGroupClass + " .esg-navigationbutton").css({
				display: "inline-block"
			}), y.css({
				display: "inline-block"
			})), _E[e].currentpage >= Math.ceil(_E[e].nonefiltereditems / a)) {
			_E[e].oldpage = _E[e].currentpage, _E[e].currentpage = 0;
			var x = 0;
			_E[e].c.find(".itemtoshow, .fitsinfilter").each(function() {
				++x < c && jQuery(this).removeClass("itemonotherpage")
			}), y.find(".esg-pagination-button").first().addClass("selected")
		}
		_E[e].currentpage < 0 && (_E[e].currentpage = 0), y.find(".esg-pagination-button").on("click", function() {
			_E[e].loadMoreTriggerCache = !1, stopAllVideos(!0), _E[e].oldpage = _E[e].currentpage, _E[e].currentpage = jQuery(this).data("page");
			var t = getBestFitColumn(e);
			_E[e].column = t.column, _E[e].columnindex = t.index, _E[e].mmHeight = t.mmHeight, "on" === _E[e].cookies.pagination && !0 !== _E[e].cookies.searchjusttriggered && createCookie("grid_" + _E[e].gridID + "_pagination", _E[e].currentpage, _E[e].cookies.timetosave * (1 / 60 / 60)), setItemsOnPages(e), organiseGrid(e, "paginholder"), updateMasonryLook(e), "on" == _E[e].paginationScrollToTop && jQuery("html, body").animate({
				scrollTop: _E[e].c.offset().top - _E[e].paginationScrollToTopOffset
			}, {
				queue: !1,
				speed: .5
			})
		}), _E[e].firstshowever == undefined && jQuery(_E[e].filterGroupClass + ".esg-navigationbutton," + _E[e].filterGroupClass + " .esg-navigationbutton").css({
			visibility: "hidden"
		});
		var k = jQuery(".esg-overlay.esg-transition").filter(function() {
			return this.dataset.transition && -1 !== this.dataset.transition.search(/collapse|line|spiral|circle/)
		});
		if (k.length) {
			_E[e].specialStyle || (_E[e].specialStyle = jQuery('<style type="text/css" />').appendTo(jQuery("head")));
			var C = "",
				j = [];
			k.each(function() {
				var t, a, i = "",
					o = jQuery(this),
					s = j.length,
					r = o.closest(".eec"),
					n = this.dataset.transition,
					l = o.closest(".tp-esg-item").attr("data-skin");
				r.length && (t = r.hasClass("esg-tc") ? "tc" : r.hasClass("esg-cc") ? "cc" : r.hasClass("esg-bc") ? "bc" : "") && (i = " .esg-" + t);
				for (var d = this.dataset.animcolor ? n + t + this.dataset.animcolor : n, u = 0; u < s; u++)
					if (j[u][d] === e + "_" + n + "_" + l) return;
				j[s] = {}, j[s][d] = e + "_" + n + "_" + l;
				var c, p, f, g, h = "background",
					m = -1 !== n.search("line"),
					_ = -1 !== n.search("spiral"),
					E = -1 !== n.search("circle"),
					w = -1 !== n.search("collapse"),
					v = m || _;
				o.data("specialcolorone") ? (f = o.data("specialcolorone"), g = o.data("specialcolortwo")) : (f = o.css("background-image"), p = this.dataset.animcolor || "#FFFFFF", f && "none" !== f || (f = o.css("background-color")), m ? (-1 !== n.search("linediagonal") ? c = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400px" height="300px"><line x1="0" y1="300" x2="400" y2="0" stroke="' + p + '" stroke-width="1"></line></svg>' : (c = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400px" height="300px">', c += '<rect x="0" y="0" width="100%" height="100%" fill="transparent"></rect>', c += '<rect x="' + (a = -1 !== n.search("horizontal") ? ["0", "150", "100%", "1", "400", "0", "100%", "1", "400", "150", "100%", "1"] : ["200", "0", "1", "100%", "0", "300", "1", "100%", "200", "300", "1", "100%"])[0] + '" y="' + a[1] + '" width="' + a[2] + '" height="' + a[3] + '" fill="' + p + '" shape-rendering="crispEdges"></rect>', c += '<rect x="' + a[4] + '" y="' + a[5] + '" width="' + a[6] + '" height="' + a[7] + '" fill="' + p + '" shape-rendering="crispEdges"></rect>', c += '<rect x="' + a[8] + '" y="' + a[9] + '" width="' + a[10] + '" height="' + a[11] + '" fill="' + p + '" shape-rendering="crispEdges"></rect>', c += "</svg>"), g = "url('" + c + "')") : _ ? (c = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="250px" height="234px">', c += '<path fill="' + p + '" d="M201.449,16.732 C229.021,59.363 222.332,125.403 176.384,153.001 C188.917,168.041 211.475,162.194 226.514,153.823 C235.694,147.985 244.060,141.291 249.903,132.928 C240.707,148.816 229.021,163.025 212.306,173.888 C198.097,183.089 183.074,188.105 166.358,189.776 C150.489,190.613 133.774,188.105 119.563,179.743 C116.244,188.105 118.735,196.460 122.917,203.985 C134.620,222.372 154.672,229.896 173.878,233.244 C123.748,235.752 68.620,197.300 67.772,143.800 C56.088,144.628 48.568,156.331 45.214,166.363 C40.201,183.089 41.879,201.477 48.568,217.365 C30.175,187.268 26.010,148.816 41.049,116.209 C48.568,101.169 59.425,89.460 73.633,80.265 C69.451,76.088 64.438,72.741 58.594,71.903 C35.188,70.233 13.477,82.773 0.097,101.169 C22.673,56.024 84.490,28.435 130.437,54.346 C135.450,43.483 129.607,31.781 122.087,23.419 C109.555,10.039 92.839,3.354 76.122,0.015 C103.694,0.015 129.607,8.370 151.319,26.765 C169.695,43.483 180.567,66.056 182.243,90.290 C189.747,89.460 194.760,84.443 198.925,78.597 C211.475,59.363 208.123,36.797 201.449,16.732 L201.449,16.732 Z"/>', g = "url('" + (c += "</svg>") + "')") : g = w ? f : p, o.data({
					specialcolorone: f,
					specialcolortwo: g
				}));
				var y = this.dataset.duration || "default";
				y = "default" === y ? .3 : .001 * y;
				var b = this.dataset.delay || "";
				b && (b = " " + b + "s"), C += "#" + e + ' .tp-esg-item[data-skin="' + l + '"]' + i + ' .esg-transition[data-transition="' + n + '"] {background: transparent !important}', C += "#" + e + ' .tp-esg-item[data-skin="' + l + '"]' + i + ' .esg-transition[data-transition="' + n + '"]:before {', C += "transition: all " + y + "s ease-out;", C += h + ": " + f, C += "}", C += "#" + e + ' .esg-hovered[data-skin="' + l + '"]' + i + ' .esg-transition[data-transition="' + n + '"]:before {', C += "transition-delay: " + b + ";", C += "}", E && (y += .7), v && (h = "background-image"), C += "#" + e + ' .tp-esg-item[data-skin="' + l + '"]' + i + ' .esg-transition[data-transition="' + n + '"]:after {', C += "transition: " + (w ? "all" : "transform") + " " + y + "s " + (_ ? "ease-in" : E ? "ease" : "ease-out") + ";", C += h + ": " + g, C += "}", C += "#" + e + ' .esg-hovered[data-skin="' + l + '"]' + i + ' .esg-transition[data-transition="' + n + '"]:after {', C += "transition-delay: " + b + ";", C += "}"
			}), C && _E[e].specialStyle.html(C)
		}
	}

	function waittorungGrid(e, t, a, i) {
		var o = e.closest(".mainul");
		clearTimeout(o.data("intreorganisier")), o.hasClass("gridorganising") ? o.data("intreorganisier", setTimeout(function() {
			waittorungGrid(e, t, a, i)
		}, 10)) : i.init || runGrid(t, a, i)
	}

	function loadHoverImage(e) {
		var t = e.parent().find(".esg-hover-image");
		t.length && t.css("background-image", 'url("' + t.data("src") + '")').appendTo(e)
	}

	function loadAllPrepared(e, t, a) {
		if (1 == e.data("preloading")) return !1;
		var i = new Image;
		e.data("lazysrc") != e.attr("src") && e.data("lazysrc") != undefined && "undefined" != e.data("lazysrc") && e.data("lazysrc") != undefined && "undefined" != e.data("lazysrc") && e.attr("src", e.data("lazysrc")), e.data("preloading", 1), i.onload = function(o) {
			e.data("lazydone", 1), e.data("ww", i.width), e.data("hh", i.height), e.closest(".showmeonload").addClass("itemtoshow").removeClass("showmeonload").addClass("loadedmedia"), removeLLCover(e, i.width, i.height, t), loadHoverImage(e), "on" == _E[t].lazyLoad && waittorungGrid(e, t, !0, a)
		}, i.onerror = function() {
			e.data("lazydone", 1), e.closest(".showmeonload").addClass("itemtoshow").removeClass("showmeonload").addClass("loadedmedia"), "on" == _E[t].lazyLoad && waittorungGrid(e, t, !0, a)
		}, e.attr("src") != undefined && "undefined" != e.attr("src") ? i.src = e.attr("src") : e.data("src") != undefined && "undefined" != e.data("src") && (i.src = e.data("src")), i.complete && (e.data("lazydone", 1), e.data("ww", i.width), e.data("hh", i.height), e.closest(".showmeonload").addClass("itemtoshow").removeClass("showmeonload").addClass("loadedmedia"), removeLLCover(e, i.width, i.height, t), "on" == _E[t].lazyLoad && waittorungGrid(e, t, !0, a))
	}
	var waitForLoads = function(e, t) {
		"add" !== _E[t].esgloaderprocess && e.each(function() {
			if (!jQuery(this).hasClass("isvisiblenow")) return _E[t].esgloaderprocess = "add", tpGS.gsap.to(_E[t].esgloader, .5, {
				autoAlpha: 1,
				ease: tpGS.Power3.easeInOut
			}), !1
		});
		var a, i, o = {
			init: !1
		};

		function s(e) {
			var a, s = jQuery(this),
				r = (s.attr("src"), s.parent());
			if (1 != s.data("lazydone") && "on" == _E[t].lazyLoad && r.find(".lazyloadcover").length < 1) {
				var n = "",
					l = "";
				(a = s.data("lazythumb")) != undefined && "undefined" !== a && (s.data("lazysrc"), n = ";background-image:url(" + a + ")", l = "esg-lazyblur"), n || (n = _E[t].lazyLoadColor), r.append('<div class="lazyloadcover ' + l + '" style="background:' + n + '"></div>')
			}
			1 != s.data("lazydone") && i < 3 && (i++, loadAllPrepared(jQuery(this), t, o)), "on" !== _E[t].lazyLoad && tpGS.gsap.set(s, {
				autoAlpha: 1
			})
		}
		a = setInterval(function() {
			if (_E[t].bannertimeronpause = !0, _E[t].cd = 0, i = 0, e.find(".esg-media-poster").each(s), 0 == i && _E[t].esgloader.length > 0 && "remove" !== _E[t].esgloaderprocess) {
				_E[t].esgloaderprocess = "remove";
				var r = 0;
				_E[t].esgloader.hasClass("infinityscollavailable") && (r = 1), tpGS.gsap.to(_E[t].esgloader, .5, {
					autoAlpha: 0,
					ease: tpGS.Power3.easeInOut,
					delay: r
				})
			}
			0 != i || _E[t].UL.hasClass("gridorganising") || (clearInterval(a), o.init || runGrid(t, !1, o))
		}, 50)
	};

	function organiseGrid(e, t) {
		null != _E[e].c && waitForLoads(_E[e].c.find(".itemtoshow").not(".skipblank"), e)
	}

	function removeLLCover(e, t, a, i) {
		var o = e.parent();
		setMediaEntryAspectRatio({
			ip: o,
			img: e,
			imgw: t,
			imgh: a
		}), !e.hasClass("coverremoved") && o.find(".lazyloadcover").length > 0 ? (e.addClass("coverremoved"), tpGS.gsap.set(o.find(".lazyloadcover"), {
			zIndex: 0
		}), tpGS.gsap.fromTo(e, .5, {
			autoAlpha: 0,
			zIndex: 1
		}, {
			force3D: !0,
			autoAlpha: 1,
			ease: tpGS.Power1.easeInOut,
			onComplete: function() {
				e.parent().find(".lazyloadcover").remove()
			}
		})) : "off" == _E[i].lazyLoad && tpGS.gsap.set(e, {
			force3D: !0,
			autoAlpha: 1
		})
	}

	function runGrid(e, t, a) {
		a.init = !0, "scroll" == _E[e].loadMoreType && checkBottomPos(e, !0), _E[e].firstshowever == undefined ? (_E[e].c.is(":hidden") && tpGS.gsap.set(_E[e].c, {
			autoAlpha: 1,
			display: "block"
		}), runGridMain(e, t), jQuery(_E[e].filterGroupClass + ".esg-navigationbutton, " + _E[e].filterGroupClass + " .esg-navigationbutton").css({
			visibility: "visible"
		}), _E[e].firstshowever = 1) : (runGridMain(e, t), jQuery(_E[e].filterGroupClass + ".esg-navigationbutton, " + _E[e].filterGroupClass + " .esg-navigationbutton").css({
			visibility: "visible"
		}))
	}

	function getCobblePat(e, t) {
		var a = {
			w: 1,
			h: 1
		};
		return (e = e.split(",")) != undefined && (e = e[t - Math.floor(t / e.length) * e.length].split("x"), a.w = e[0], a.h = e[1]), a
	}

	function runGridMain(e, t) {
		if (null != _E[e].c) {
			var a, i = _E[e].itemstoload ? _E[e].itemstoload : _E[e].c.find(".itemtoshow, .isvisiblenow").not(".ui-sortable-helper"),
				o = {},
				s = _E[e].aspectratio,
				r = 0;
			_E[e].aspectratioOrig = _E[e].aspectratio, i = i.not(".skipblank"), delete _E[e].itemstoload, _E[e].UL.addClass("gridorganising"), s = s.split(":"), a = parseInt(s[0], 0) / parseInt(s[1], 0), o.item = 0, o.pagetoanimate = 0 - _E[e].currentpage, o.col = 0, o.row = 0, o.pagecounter = 0, o.itemcounter = 0, o.fakecol = 0, o.fakerow = 0, o.maxheight = 0, o.allcol = 0, o.allrow = 0, o.ulcurheight = 0, o.ulwidth = _E[e].UL.width(), o.verticalsteps = 1, o.currentcolumnheight = [];
			for (var n = 0; n < _E[e].column; n++) o.currentcolumnheight[n] = 0;
			o.pageitemcounterfake = 0, o.pageitemcounter = 0, _E[e].delayBasic != undefined ? o.delaybasic = _E[e].delayBasic : o.delaybasic = .08, o.anim = _E[e].pageAnimation, o.itemtowait = 0, o.itemouttowait = 0, o.ease = "tpGS.Power1.easeInOut", o.easeout = o.ease, o.row = 0, o.col = 0;
			var l = _E[e].rowItemMultiplier,
				d = l.length;
			o.y = 0, o.fakey = 0, _E[e].ESGOT.css("width", "100%"), 100 == _E[e].ESGOT.width() && _E[e].ESGOT.css({
				width: _E[e].c.width()
			}), o.cwidth = _E[e].ESGOT.width() - 2 * _E[e].overflowoffset, _E[e].inanimation = !0, o.cwidth_n_spaces = o.cwidth - (_E[e].column - 1) * _E[e].space, o.itemw = Math.round(o.cwidth_n_spaces / _E[e].column), o.originalitemw = o.itemw;
			var u = !1;
			"on" == _E[e].forceFullScreen && (r = getFullscreenHeight(e), u = !0), "even" == _E[e].layout ? (o.itemh = 0 == Math.round(r) ? Math.round(o.cwidth_n_spaces / _E[e].column / a) : Math.round(r / _E[e].row), _E[e].aspectratio = 0 == r ? _E[e].aspectratio : o.itemw + ":" + o.itemh, d > 0 ? tpGS.gsap.set(i, {
				display: "block",
				visibility: "visible",
				overwrite: "auto"
			}) : "on" == _E[e].evenCobbles ? tpGS.gsap.set(i, {
				display: "block",
				visibility: "visible",
				overwrite: "auto"
			}) : tpGS.gsap.set(i, {
				display: "block",
				width: o.itemw,
				height: o.itemh,
				visibility: "visible",
				overwrite: "auto"
			})) : tpGS.gsap.set(i, {
				display: "block",
				width: o.itemw,
				height: "auto",
				visibility: "visible",
				overwrite: "auto"
			}), t || tpGS.gsap.killTweensOf(i), o.originalitemh = o.itemh;
			for (var c = [], p = _E[e].row * _E[e].column * 2, f = 0; f < p; f++) {
				for (var g = [], h = 0; h < _E[e].column; h++) g.push(0);
				c.push(g)
			}
			var m = 0;
			0 == i.length && _E[e].c.trigger("itemsinposition"), jQuery.each(i, function(t, i) {
				var s, n, f = i.id,
					g = _E[e].items[f].jc;
				//! COBBLES
				if (o.itemw = o.originalitemw, tpGS.gsap.set(_E[e].items[f].entryc, {
						minHeight: _E[e].mmHeight + "px"
					}), "on" != _E[e].evenCobbles || g.hasClass("itemonotherpage") || g.hasClass("itemishidden")) {
					var h = o.row - d * Math.floor(o.row / d);
					"even" == _E[e].layout && d > 0 && (_E[e].column = l[h][_E[e].columnindex], o.cwidth = _E[e].ESGOT.width() - 2 * _E[e].overflowoffset, o.cwidth_n_spaces = o.cwidth - (_E[e].column - 1) * _E[e].space, o.itemw = Math.round(o.cwidth_n_spaces / _E[e].column), o.itemh = 0 == r ? o.cwidth_n_spaces / _E[e].column / a : r / _E[e].row, _E[e].aspectratio = 0 == r ? _E[e].aspectratio : o.itemw + ":" + o.itemh, tpGS.gsap.set(g, {
						width: o.itemw,
						height: o.itemh,
						overwrite: "auto"
					})), u && (n = g.find(".esg-entry-media"), s = o.itemh / o.itemw * 100)
				} else {
					var _ = g.data("cobblesw"),
						E = g.data("cobblesh");
					if (_E[e].cobblesPattern != undefined && _E[e].cobblesPattern.length > 2) {
						var w = getCobblePat(_E[e].cobblesPattern, m);
						_ = parseInt(w.w, 0), E = parseInt(w.h, 0), m++
					}
					_ = _ == undefined ? 1 : _, E = E == undefined ? 1 : E, _E[e].column < _ && (_ = _E[e].column), o.cobblesorigw = o.originalitemw, o.cobblesorigh = o.originalitemh, o.itemw = o.itemw * _ + (_ - 1) * _E[e].space, o.itemh = o.originalitemh, o.itemh = o.itemh * E + (E - 1) * _E[e].space;
					var v = _ + ":" + E,
						y = !1,
						b = 0,
						x = 0,
						k = v.split(":"),
						C = parseInt(k[0], 0),
						j = parseInt(k[1], 0),
						S = 0;
					do {
						for (var G = 0 == c[b][x], A = b < p - (j - 1), O = x < _E[e].column - (C - 1), P = !0, I = 0; I < j; I++)
							for (var T = 0; T < C; T++) P && c[parseInt(b, 0) + I] !== undefined && c[parseInt(b, 0) + I][parseInt(x, 0) + T] !== undefined && (P = !1 !== P && (P = 0 == c[parseInt(b, 0) + I][parseInt(x, 0) + T]));
						if (G && A && O && P) {
							o.cobblesx = x, o.cobblesy = b;
							for (T = 0; T < C; T++)
								for (I = 0; I < j; I++) c[parseInt(b, 0) + I][parseInt(x, 0) + T] = v;
							y = !0
						}++x == _E[e].column && (x = 0, b++), b >= p && (y = !0), S++
					} while (!y && S < 1500);
					_E[e].aspectratio = o.itemw + ":" + o.itemh, tpGS.gsap.set(g, {
						width: o.itemw,
						height: o.itemh,
						overwrite: "auto"
					}), n = g.find(".esg-entry-media"), s = o.itemh / o.itemw * 100, tpGS.gsap.set(n, {
						paddingBottom: s + "%"
					})
				}
				"even" !== _E[e].layout && (g.hasClass("itemtoshow") && (g.width() != o.itemw || 0 == g.css("opacity") || "hidden" == g.css("visibility")) ? o = prepareItemToMessure(g, o, e) : (adjustMediaSize(g, !0, o, e), o.itemh = g.height())), (o = animateGrid(g, e, o, t)).itemcounter++, _E[e].UL.height() < o.maxheight && _E[e].c.trigger("itemsinposition")
			}), _E[e].aspectratio = _E[e].aspectratioOrig, "off" !== _E[e].hideMarkups && 0 != o.itemtowait || _E[e].UL.removeClass("gridorganising");
			var _ = getBestFitColumn(e);
			if (_E[e].column = _.column, _E[e].columnindex = _.index, _E[e].mmHeight = _.mmHeight, _E[e].maxheight = o.maxheight, _E[e].c.trigger("itemsinposition"), _E[e].inanimation = !0, _E[e].started = !1, _E[e].filterchanged = !1, _E[e].silent = !1, _E[e].silentout = !1, _E[e].changedAnim = "", _E[e].esgloader.length > 0 && "remove" != _E[e].esgloaderprocess) {
				_E[e].esgloaderprocess = "remove";
				var E = 0;
				_E[e].esgloader.hasClass("infinityscollavailable") && (E = 1), tpGS.gsap.to(_E[e].esgloader, 1, {
					autoAlpha: 0,
					ease: tpGS.Power3.easeInOut,
					delay: E
				})
			}
			_E[e].fromResize = !1, _E[e].inViewport || _E.win.trigger("resize.esgviewport")
		}
	}

	function prepareItemToMessure(e, t, a) {
		return adjustMediaSize(e, !0, t, a), t.itemh = e.outerHeight(!0), t
	}

	function animateGrid(e, t, a, i) {
		if (a.skipanim = !1, a.x = Math.round(a.col * a.itemw), "even" == _E[t].layout);
		else {
			a.idealcol = 0, a.backupcol = a.col;
			for (var o = 0; o < _E[t].column; o++) a.currentcolumnheight[a.idealcol] > a.currentcolumnheight[o] && (a.idealcol = o);
			a.y = a.currentcolumnheight[a.idealcol], a.x = Math.round(a.idealcol * a.itemw) + a.idealcol * _E[t].space, a.col = a.idealcol, a.itemh == undefined && (a.itemh = 0)
		}
		if (a.cobblesx != undefined && (a.x = a.cobblesx * a.cobblesorigw, a.y = a.cobblesy * a.cobblesorigh), "rotatefall" !== a.anim) {
			var s = e.data("eg-load-more-new");
			isNaN(s) ? a.waits = "item" === _E[t].animationType ? a.col * a.delaybasic + a.row * (a.delaybasic * _E[t].column) : "col" === _E[t].animationType ? a.col * a.delaybasic : a.row * (a.delaybasic * _E[t].column) : (0 === parseInt(s, 10) && (_E[t].loadStartRow = a.row), a.waits = "item" === _E[t].animationType ? s * a.delaybasic : "col" === _E[t].animationType ? a.col * a.delaybasic : (a.row - _E[t].loadStartRow) * (a.delaybasic * _E[t].column), e.removeData("eg-load-more-new"))
		} else a.waits = a.col * a.delaybasic + a.row * (a.delaybasic * _E[t].column);
		if (a.speed = _E[t].animSpeed, a.inxrot = 0, a.inyrot = 0, a.outxrot = 0, a.outyrot = 0, a.inorigin = "center center", a.outorigin = "center center", a.itemh = Math.round(a.itemh), a.scale = 1, a.outfade = 0, a.infade = 0, e.hasClass("itemonotherpage") || e.hasClass("skipblank")) a.skipanim = !0;
		else if (!_E[t].firstLoadFinnished && _E[t].startAnimation || !_E[t].inViewport) {
			var r = _E[t].startAnimationSpeed ? _E[t].startAnimationSpeed : 0,
				n = _E[t].startAnimationDelay ? _E[t].startAnimationDelay : 0;
			a.anim = _E[t].startAnimation, "none" !== a.anim ? (a.speed = r ? .001 * r : 0, a.waits = n && "reveal" !== a.anim ? n / 100 : 0) : (a.speed = 0, a.waits = 0), a.waits && (a.waits *= "item" === _E[t].startAnimationType ? i : a[_E[t].startAnimationType])
		}
		if ("horizontal-slide" == a.anim ? (a.waits = 0, a.hsoffset = 0 - a.cwidth - parseInt(_E[t].space), a.hsoffsetout = 0 - a.cwidth - parseInt(_E[t].space), _E[t].oldpage != undefined && _E[t].oldpage > _E[t].currentpage && (a.hsoffset = a.cwidth + parseInt(_E[t].space), a.hsoffsetout = a.cwidth + parseInt(_E[t].space))) : "vertical-slide" == a.anim && (a.waits = 0, a.maxcalcheight = _E[t].row * _E[t].space + _E[t].row * a.itemh, a.vsoffset = a.maxcalcheight + parseInt(_E[t].space), a.vsoffsetout = a.maxcalcheight + parseInt(_E[t].space), _E[t].oldpage != undefined && _E[t].oldpage > _E[t].currentpage && (a.vsoffset = 0 - a.maxcalcheight - parseInt(_E[t].space), a.vsoffsetout = 0 - a.maxcalcheight - parseInt(_E[t].space))), _E[t].fromResize && (a.waits = 0), a.outwaits = a.waits, "even" == _E[t].layout && a.cobblesx == undefined && (a.x = a.x + a.col * _E[t].space), a.cobblesx != undefined && (a.x = a.x + a.cobblesx * _E[t].space, a.y = a.y + a.cobblesy * _E[t].space), "vertical-flip" != a.anim && "horizontal-flip" != a.anim && "vertical-flipbook" != a.anim && "horizontal-flipbook" != a.anim || (a = fakePositions(e, a, t)), "vertical-flip" == a.anim ? (a.inxrot = -180, a.outxrot = 180) : "horizontal-flip" == a.anim && (a.inyrot = -180, a.outyrot = 180), a.outspeed = a.speed, "off" == _E[t].animDelay && (a.waits = 0, a.outwaits = 0), "scale" == a.anim ? a.scale = 0 : "vertical-flipbook" == a.anim ? (a.inxrot = -90, a.outxrot = 90, a.inorigin = "center top", a.outorigin = "center bottom", a.waits = a.waits + a.speed / 3, a.outfade = 1, a.infade = 1, a.outspeed = a.speed / 1.2, a.ease = "Sine.easeOut", a.easeout = "Sine.easeIn", "off" == _E[t].animDelay && (a.waits = a.speed / 3, a.outwaits = 0)) : "horizontal-flipbook" == a.anim ? (a.inyrot = -90, a.outyrot = -90, a.inorigin = "left center", a.outorigin = "right center", a.waits = a.waits + a.speed / 2.4, a.outfade = 1, a.infade = 1, a.outspeed = a.speed / 1.2, a.ease = "Sine.easeOut", a.easeout = "Sine.easeIn", "off" == _E[t].animDelay && (a.waits = a.speed / 3, a.outwaits = 0)) : "fall" != a.anim && "rotatefall" != a.anim || (a.outoffsety = 100, (a = fakePositions(e, a, t)).outfade = 0), "rotatefall" == a.anim ? (a.rotatez = 20, a.outorigin = "left top", a.outfade = 1, a.outoffsety = 600) : "rotatescale" == a.anim ? (a.scale = 0, a.inorigin = "left bottom", a.outorigin = "center center", a.faeout = 1, a.outoffsety = 100, a = fakePositions(e, a, t)) : "stack" == a.anim && (a.scale = 0, a.inorigin = "center center", a.faeout = 1, a.ease = "tpGS.Power3.easeOut", (a = fakePositions(e, a, t)).ease = "Back.easeOut"), _E[t].silent && (a.waits = 0, a.outwaits = 0, a.speed = 0, a.outspeed = 0), _E[t].silentout && (a.outwaits = 0, a.outspeed = .4, a.speed = .4, a.ease = "tpGS.Power3.easeOut", a.easeout = a.ease), a.hooffset = _E[t].overflowoffset, a.vooffset = _E[t].overflowoffset, a.itemw + a.x - a.cwidth < 20 && a.itemw + a.x - a.cwidth > -20) {
			var l = a.itemw + a.x - a.cwidth;
			a.itemw = a.itemw - l
		}
		if (!e.hasClass("itemtoshow") && !e.hasClass("fitsinfilter") || a.skipanim) a.itemouttowait++, tpGS.gsap.set(e, {
			zIndex: 5
		}), e.removeClass("isvisiblenow"), 1 === a.scale && (a.scale = .99), e.css("opacity") > 0 ? "stack" == a.anim ? (tpGS.gsap.set(e, {
			zIndex: a.pageitemcounterfake + 100
		}), tpGS.gsap.to(e, a.outspeed / 2, {
			force3D: "auto",
			x: -20 - a.itemw,
			rotationY: 30,
			rotationX: 10,
			ease: Sine.easeInOut,
			delay: a.outwaits
		}), tpGS.gsap.to(e, .01, {
			force3D: "auto",
			zIndex: a.pageitemcounterfake,
			delay: a.outwaits + a.outspeed / 3
		}), tpGS.gsap.to(e, .2 * a.outspeed, {
			force3D: "auto",
			delay: a.outwaits + .9 * a.outspeed,
			autoAlpha: 0,
			ease: Sine.easeInOut
		}), tpGS.gsap.to(e, a.outspeed / 3, {
			zIndex: 2,
			force3D: "auto",
			x: 0,
			scale: .9,
			rotationY: 0,
			rotationX: 0,
			ease: Sine.easeInOut,
			delay: a.outwaits + a.outspeed / 1.4,
			onComplete: function() {
				e.hasClass("itemtoshow") || tpGS.gsap.set(e, {
					autoAlpha: 0,
					overwrite: "all",
					display: "none"
				}), a.itemouttowait--, 0 == a.itemouttowait && _E[t].c.trigger("itemsinposition")
			}
		})) : "horizontal-flipbook" == a.anim || "vertical-flipbook" == a.anim ? tpGS.gsap.to(e, a.outspeed, {
			force3D: "auto",
			zIndex: 2,
			scale: a.scale,
			autoAlpha: a.outfade,
			transformOrigin: a.outorigin,
			rotationX: a.outxrot,
			rotationY: a.outyrot,
			ease: a.easeout,
			delay: a.outwaits,
			onComplete: function() {
				e.hasClass("itemtoshow") || tpGS.gsap.set(e, {
					autoAlpha: 0,
					overwrite: "all",
					display: "none"
				}), a.itemouttowait--, 0 == a.itemouttowait && _E[t].c.trigger("itemsinposition")
			}
		}) : "fall" == a.anim ? tpGS.gsap.to(e, a.outspeed, {
			zIndex: 2,
			force3D: "auto",
			y: a.outoffsety,
			autoAlpha: 0,
			ease: a.easeout,
			delay: a.outwaits,
			onComplete: function() {
				e.hasClass("itemtoshow") || tpGS.gsap.set(e, {
					autoAlpha: 0,
					overwrite: "all",
					display: "none"
				}), a.itemouttowait--, 0 == a.itemouttowait && _E[t].c.trigger("itemsinposition")
			}
		}) : "horizontal-slide" == a.anim ? tpGS.gsap.to(e, a.outspeed, {
			zIndex: 2,
			force3D: "auto",
			autoAlpha: 1,
			left: a.hooffset + e.position().left + a.hsoffsetout,
			top: a.vooffset + e.position().top,
			ease: a.easeout,
			delay: a.outwaits,
			onComplete: function() {
				tpGS.gsap.set(e, {
					autoAlpha: 0,
					overwrite: "all",
					display: "none"
				}), a.itemouttowait--, 0 == a.itemouttowait && _E[t].c.trigger("itemsinposition")
			}
		}) : "vertical-slide" == a.anim ? tpGS.gsap.to(e, a.outspeed, {
			zIndex: 2,
			force3D: "auto",
			autoAlpha: 1,
			left: a.hooffset + e.position().left,
			top: a.vooffset + e.position().top + a.vsoffsetout,
			ease: a.easeout,
			delay: a.outwaits,
			onComplete: function() {
				tpGS.gsap.set(e, {
					autoAlpha: 0,
					overwrite: "all",
					display: "none"
				}), a.itemouttowait--, 0 == a.itemouttowait && _E[t].c.trigger("itemsinposition")
			}
		}) : "rotatefall" == a.anim && e.css("opacity") > 0 ? (tpGS.gsap.set(e, {
			zIndex: 300 - a.item
		}), tpGS.gsap.to(e, a.outspeed / 2, {
			force3D: "auto",
			transformOrigin: a.outorigin,
			ease: "tpGS.Bounce.easeOut",
			rotationZ: a.rotatez,
			delay: a.outwaits
		}), tpGS.gsap.to(e, a.outspeed / 2, {
			zIndex: 2,
			force3D: "auto",
			autoAlpha: 0,
			y: a.outoffsety,
			ease: tpGS.Power3.easeIn,
			delay: a.outwaits + a.outspeed / 3
		})) : tpGS.gsap.to(e, a.outspeed, {
			force3D: "auto",
			zIndex: 2,
			scale: a.scale,
			autoAlpha: a.outfade,
			transformOrigin: a.outorigin,
			rotationX: a.outxrot,
			rotationY: a.outyrot,
			ease: a.easeout,
			delay: a.outwaits,
			onComplete: function() {
				e.hasClass("itemtoshow") || tpGS.gsap.set(e, {
					autoAlpha: 0,
					overwrite: "all",
					display: "none"
				}), a.itemouttowait--, 0 == a.itemouttowait && _E[t].c.trigger("itemsinposition")
			}
		}) : tpGS.gsap.set(e, {
			zIndex: 2,
			scale: a.scale,
			autoAlpha: 0,
			transformOrigin: a.outorigin,
			rotationX: a.outxrot,
			rotationY: a.outyrot,
			onComplete: function() {
				e.hasClass("itemtoshow") || tpGS.gsap.set(e, {
					autoAlpha: 0,
					overwrite: "all",
					display: "none"
				}), a.itemouttowait--, 0 == a.itemouttowait && _E[t].c.trigger("itemsinposition")
			}
		}), a = shiftGridFake(a, t);
		else {
			e.addClass("isvisiblenow"), "even" != _E[t].layout ? (a.currentcolumnheight[a.idealcol] = a.currentcolumnheight[a.idealcol] + a.itemh + parseInt(_E[t].space), a.ulcurheight < a.currentcolumnheight[a.idealcol] && (a.ulcurheight = a.currentcolumnheight[a.idealcol])) : a.ulcurheight = a.y + a.itemh, a.maxheight < a.ulcurheight && (a.maxheight = a.ulcurheight), a.itemtowait++;
			var d, u, c = Math.round(a.hooffset + a.x),
				p = Math.round(a.vooffset + a.y);
			if ("on" == _E[t].rtl && (c = a.ulwidth - c - a.itemw), 0 == e.css("opacity") && "fade" == a.anim ? tpGS.gsap.set(e, {
					opacity: 0,
					autoAlpha: 0,
					width: a.itemw,
					height: a.itemh,
					scale: 1,
					left: c,
					y: 0,
					top: p,
					overwrite: "all"
				}) : 0 == e.css("opacity") && "scale" == a.anim ? tpGS.gsap.set(e, {
					width: a.itemw,
					height: a.itemh,
					scale: 0,
					left: c,
					y: 0,
					top: p,
					overwrite: "all"
				}) : 0 == e.css("opacity") && "rotatescale" == a.anim ? tpGS.gsap.set(e, {
					width: a.itemw,
					height: a.itemh,
					scale: 1,
					left: c,
					top: p,
					xPercent: 150,
					yPercent: 150,
					rotationZ: 20,
					overwrite: "all"
				}) : 0 == e.css("opacity") && "fall" == a.anim ? tpGS.gsap.set(e, {
					width: a.itemw,
					height: a.itemh,
					scale: .5,
					left: c,
					top: p,
					y: 0,
					overwrite: "all"
				}) : 0 == e.css("opacity") && "rotatefall" == a.anim && tpGS.gsap.set(e, {
					autoAlpha: 0,
					width: a.itemw,
					height: a.itemh,
					left: c,
					rotationZ: 0,
					top: p,
					y: 0,
					overwrite: "all"
				}), 0 != e.css("opacity") || "vertical-flip" != a.anim && "horizontal-flip" != a.anim && "vertical-flipbook" != a.anim && "horizontal-flipbook" != a.anim || tpGS.gsap.set(e, {
					autoAlpha: a.infade,
					zIndex: 10,
					scale: .99,
					y: 0,
					transformOrigin: a.inorigin,
					rotationX: a.inxrot,
					rotationY: a.inyrot,
					width: a.itemw,
					height: a.itemh,
					left: c,
					top: p,
					overwrite: "all"
				}), "stack" == a.anim && tpGS.gsap.set(e, {
					zIndex: a.pageitemcounter,
					scale: .5,
					autoAlpha: 1,
					left: c,
					top: p
				}), "horizontal-slide" == a.anim && 0 == e.css("opacity") && tpGS.gsap.set(e, {
					autoAlpha: 1,
					left: Math.round(a.hooffset + (a.x - a.hsoffset)),
					top: p,
					width: a.itemw,
					height: a.itemh
				}), "vertical-slide" == a.anim && 0 == e.css("opacity") && tpGS.gsap.set(e, {
					autoAlpha: 1,
					left: c,
					top: Math.round(a.vooffset + a.y - a.vsoffset),
					width: a.itemw,
					height: a.itemh
				}), "none" !== a.anim && -1 !== mergedTransitions.indexOf(a.anim) && startAnimations.hasOwnProperty("esg-" + a.anim)) {
				u = startAnimations["esg-" + a.anim], d = !0;
				var f = jQuery.extend(!0, {}, u[1]);
				delete f.autoAlpha, tpGS.gsap.set(e, jQuery.extend(!0, {
					left: c,
					top: p,
					width: a.itemw,
					height: a.itemh
				}, f))
			}
			var g, h = e.find(".esg-entry-cover"),
				m = e.find(".esg-entry-media");
			if (h && m) {
				var _ = m.outerHeight(),
					E = e.find(".esg-cc");
				tpGS.gsap.to(h, .01, {
					height: _,
					ease: a.ease,
					delay: a.waits
				}), tpGS.gsap.to(E, .01, {
					top: (_ - E.height()) / 2,
					ease: a.ease,
					delay: a.waits
				})
			}

			function w() {
				e.hasClass("itemtoshow") && tpGS.gsap.set(e, {
					autoAlpha: 1,
					overwrite: "all"
				}), a.itemtowait--, 0 == a.itemtowait && (_E[t].c && _E[t].c.length && _E[t].c.trigger("itemsinposition"), e.closest(".mainul").removeClass("gridorganising"))
			}
			if (_E[t].c.trigger("itemsinposition"), d) {
				var v = jQuery.extend(!0, {}, u[2]);
				v.top = p, v.ease = a.ease, v.delay = a.waits, v.onComplete = w, v.overwrite = "all", e.data("viewportanime", [a.speed, v]), _E[t].inViewport && (g = e.data("viewportanime"), tpGS.gsap.to(e, g[0], g[1]))
			} else e.data("viewportanime", [a.speed, {
				force3D: "auto",
				autoAlpha: 1,
				scale: 1,
				transformOrigin: a.inorigin,
				rotationX: 0,
				rotationY: 0,
				y: 0,
				x: 0,
				xPercent: 0,
				yPercent: 0,
				z: .1,
				rotationZ: 0,
				left: c,
				top: p,
				ease: a.ease,
				delay: a.waits,
				onComplete: w
			}]), _E[t].inViewport && (g = e.data("viewportanime"), tpGS.gsap.to(e, g[0], g[1]));
			"masonry" == _E[t].layout && (a.col = a.backupcol), a = shiftGrid(a, t, e)
		}
		return a
	}

	function fakePositions(e, t, a) {
		if (!e.hasClass("itemtoshow") && !e.hasClass("fitsinfilter") || t.skipanim) {
			var i = e.data("col"),
				o = e.data("row");
			i != undefined && o != undefined || 0 != t.x && 0 != t.y && (t.x = Math.round(t.fakecol * t.itemw), t.y = t.fakey, i = t.fakecol, o = t.fakerow, e.data("col", t.fakecol), e.data("row", t.fakerow)), "rotatefall" !== t.anim ? t.outwaits = "item" === _E[a].animationType ? i * t.delaybasic + o * (t.delaybasic * _E[a].column) : "col" === _E[a].animationType ? i * t.delaybasic : o * (t.delaybasic * _E[a].column) : t.outwaits = (_E[a].column - i) * t.delaybasic + o * (t.delaybasic * _E[a].column)
		} else;
		return t
	}

	function shiftGrid(e, t, a) {
		if (a.data("col", e.col), a.data("row", e.row), e.pageitemcounter++, e.col = e.col + e.verticalsteps, e.allcol++, e.col == _E[t].column && (e.col = 0, e.row++, e.allrow++, e.y = parseFloat(e.y) + parseFloat(e.itemh) + parseFloat(_E[t].space), e.row == _E[t].row && (e.row = 0, e.pageitemcounter >= _E[t].column * _E[t].row && (e.pageitemcounter = 0), e.pagetoanimate = e.pagetoanimate + 1, e.pagecounter++, 0 == e.pageitemcounter)))
			for (var i = 0; i < _E[t].column; i++) e.currentcolumnheight[i] = 0;
		return e
	}

	function shiftGridFake(e, t) {
		return e.fakecol = e.fakecol + 1, e.pageitemcounterfake++, e.fakecol == _E[t].column && (e.fakecol = 0, e.fakerow++, e.fakey = e.fakey + e.itemh + _E[t].space, e.fakerow == _E[t].row && (e.fakerow = 0, e.pageitemcounterfake = 0)), e
	}

	function checkVideoScript(e, t, a) {
		var i, o, s = !0;
		if (vhandlers[e] = !0, jQuery("script[src]").each(function() {
				if (-1 !== jQuery(this).attr("src").search(t)) return s = !1, !1
			}), s) {
			(o = document.createElement("script")).src = a, i = document.getElementsByTagName("script")[0];
			try {
				i.parentNode.insertBefore(o, i)
			} catch (e) {}
		}
	}

	function loadVideoApis(e) {
		_E[e].c.find("iframe").each(function() {
			var e = jQuery(this).attr("src");
			e.indexOf("you") > 0 && !vhandlers.addedyt ? checkVideoScript("addedyt", "www.youtube.com/iframe_api", "https://www.youtube.com/iframe_api") : e.indexOf("ws") > 0 && !vhandlers.addedws ? checkVideoScript("addedws", "fast.wistia.com/assets/external/E-v1.html", ("https:" !== location.protocol ? "http" : "https") + "://fast.wistia.com/assets/external/E-v1.js") : e.indexOf("vim") > 0 && !vhandlers.addedvim ? (jQuery(".esg-vimeo-frame").attr("allow", "autoplay; fullscreen"), checkVideoScript("addedvim", "player.vimeo.com/api/player.html", "../../player.vimeo.com/api/player.js")) : e.indexOf("soundcloud") > 0 && !vhandlers.addedsc && checkVideoScript("addedsc", "w.soundcloud.com/player/api.html", ("https:" !== location.protocol ? "http" : "https") + "://w.soundcloud.com/player/api.js")
		})
	}

	function stopVideo(e, t) {
		var a = _E[t].items[e[0].id],
			i = e.find(".isplaying");
		if (i.length) switch (a.videoType) {
			case "html":
				try {
					i[0].pause()
				} catch (e) {
					console.log(e)
				}
				break;
			case "vimeo":
				try {
					i.data("newvimeoplayer").pause()
				} catch (e) {
					console.log(e)
				}
				break;
			case "youtube":
				try {
					i.data("player").pauseVideo()
				} catch (e) {
					console.log(e)
				}
				break;
			case "wistia":
				try {
					i.data("player").wistiaApi.pause()
				} catch (e) {
					console.log(e)
				}
		}
	}

	function stopAllVideos(e, t, a, i) {
		var o, s = " isplaying";
		e && (s = ""), o = i ? jQuery(".tp-esg-item").not(".isvisiblenow").toArray() : document.getElementsByClassName("tp-esg-item isvisiblenow");
		for (var r = 0; r < o.length; r++) {
			var n, l, d, u, c = o[r].getElementsByClassName("esg-youtubevideo haslistener" + s),
				p = o[r].getElementsByClassName("esg-vimeovideo haslistener" + s),
				f = o[r].getElementsByClassName("esg-wistiavideo haslistener" + s),
				g = o[r].getElementsByClassName("esg-htmlvideo haslistener" + s),
				h = o[r].getElementsByClassName("esg-soundcloud" + s);
			for (u = 0; u < c.length; u++)(n = (l = jQuery(c[u])).data("player")) && a != l.attr("id") && (n.pauseVideo(), e && forceVideoInPause(l, !1, n, "youtube"));
			for (u = 0; u < p.length; u++) d = (l = jQuery(p[u])).attr("id"), (n = l.data("newvimeoplayer")) && a != d && (n.pause(), a === undefined && e && forceVideoInPause(l, !1, n, "vimeo"));
			for (u = 0; u < f.length; u++)(n = (l = jQuery(f[u])).data("player")) && a != l.attr("id") && (l.wistiaApi.pause(), e && forceVideoInPause(l, !1, n, "wistia"));
			for (u = 0; u < g.length; u++) d = (l = jQuery(g[u])).attr("id"), (n = document.getElementById(d)) && a != d && (n.pause(), e && forceVideoInPause(l, !1, n, "html5vid"));
			for (u = 0; u < h.length; u++)(n = (l = jQuery(h[u])).data("player")) && a != l.attr("id") && (n.pause(), e && forceVideoInPause(l, !1, n, "soundcloud"))
		}
	}

	function forceVideoInPause(e, t, a, i) {
		e.removeClass("isplaying");
		var o = e.closest(".tp-esg-item").removeClass("esg-video-active");
		if (o.find(".esg-media-video").length > 0 && !_E.fullScreenMode) {
			var s = o.find(".esg-entry-cover"),
				r = o.find(".esg-media-poster");
			if (r.length > 0)
				if (is_mobile() ? (tpGS.gsap.set(s, {
						autoAlpha: 1
					}), tpGS.gsap.set(r, {
						autoAlpha: 1
					}), tpGS.gsap.set(e, {
						autoAlpha: 0
					})) : (tpGS.gsap.to(s, .5, {
						autoAlpha: 1
					}), tpGS.gsap.to(r, .5, {
						autoAlpha: 1
					}), tpGS.gsap.to(e, .5, {
						autoAlpha: 0
					})), t)
					if ("youtube" == i) try {
						a.destroy()
					} catch (e) {} else if ("vimeo" == i) try {
							a.unload()
						} catch (e) {} else if ("wistia" == i) try {
							a.end()
						} catch (e) {} else "html5vid" != i && (e.removeClass("haslistener"), e.removeClass("readytoplay"));
						else setTimeout(function() {}, 500)
		}
	}

	function onPlayerStateChange(e) {
		var t = e.target.getIframe(),
			a = jQuery(t);
		if (clearTimeout(a.data("esgplayertimer")), e.data == YT.PlayerState.PLAYING && (e.target.setPlaybackQuality("hd1080"), "on" !== _E[a.data("esg-id")].videoPlaybackInGrid && stopAllVideos(!0, !1, t.id), a.addClass("isplaying").removeClass("isinpause")), 2 == e.data) {
			var i = e.target;
			a.data("esgplayertimer", setTimeout(function() {
				2 == i.getPlayerState() && (forceVideoInPause(a), i.pauseVideo())
			}, 100))
		}
		0 == e.data && forceVideoInPause(a)
	}

	function vimeoready_auto(e) {
		var t = e.data("newvimeoplayer");
		t || (t = new Vimeo.Player(e[0]), e.data("newvimeoplayer", t)), e.addClass("readytoplay"), t.on("play", function(t) {
			stopAllVideos(!0, !1, e.attr("id")), e.addClass("isplaying"), e.removeClass("isinpause")
		}), t.on("finish", function(t) {
			forceVideoInPause(e), e.removeClass("isplaying")
		}), t.on("pause", function(t) {
			forceVideoInPause(e), e.removeClass("isplaying")
		}), t.on("error", function() {
			console.log("vimeo error occured")
		})
	}

	function html5vidready(e, t, a) {
		var i, o;

		function s() {
			i ? i = !1 : (forceVideoInPause(t), t.removeClass("isplaying"))
		}
		t.addClass("readytoplay"), t.on("play", function() {
			i || (i = !1, stopAllVideos(!0, !1, a), t.addClass("isplaying"), t.removeClass("isinpause"))
		}), t.on("pause", function() {
			clearTimeout(o), o = setTimeout(s, 100)
		}), t.on("ended", function() {
			forceVideoInPause(t), t.removeClass("isplaying")
		}), t.on("seeking", function() {
			i = !0
		})
	}

	function prepareYT(e) {
		var t, a = "ytiframe" + Math.round(1e5 * Math.random() + 1);
		if (e.hasClass("haslistener") || "undefined" == typeof YT) return (t = e.data("player")) != undefined && "function" == typeof t.playVideo;
		try {
			e.attr("id", a), t = new YT.Player(a, {
				events: {
					onStateChange: onPlayerStateChange
				}
			}), e.data("player", t), e.addClass("haslistener").addClass("esg-youtubevideo")
		} catch (e) {
			return !1
		}
	}

	function playYT(e) {
		var t = e.data("player");
		t != undefined && "function" == typeof t.playVideo && t.playVideo()
	}

	function prepareVimeo(e) {
		if (e.hasClass("haslistener") || "undefined" == typeof Vimeo) return "undefined" != typeof Vimeo && !(!e.data("newvimeoplayer") || !e.hasClass("readytoplay"));
		try {
			var t = "vimeoiframe" + Math.round(1e5 * Math.random() + 1);
			e.attr("id", t);
			for (var a, i = e.attr("src"), o = {}, s = i, r = /([^&=]+)=([^&]*)/g; a = r.exec(s);) o[decodeURIComponent(a[1])] = decodeURIComponent(a[2]);
			i = (i = o.player_id != undefined ? i.replace(o.player_id, t) : i + "&player_id=" + t).replace(/&api=0|&api=1/, ""), e.attr("src", i), vimeoready_auto(e), e.addClass("haslistener").addClass("esg-vimeovideo")
		} catch (e) {
			return !1
		}
	}

	function playVimeo(e) {
		var t = e.data("newvimeoplayer");
		t && t.play()
	}

	function prepareWs(e) {
		var t, a = "wsiframe" + Math.round(1e5 * Math.random() + 1);
		if (e.hasClass("haslistener") || "undefined" == typeof Ws) return (t = e.data("player")) != undefined && "function" == typeof t.playVideo;
		try {
			e.attr("id", a), t = new Ws.Player(a, {
				events: {
					onStateChange: onPlayerStateChange
				}
			}), e.data("player", t), e.addClass("haslistener").addClass("esg-wistiavideo")
		} catch (e) {
			return !1
		}
	}

	function playWs(e) {
		var t = e.data("player");
		t != undefined && "function" == typeof t.playVideo && t.wistiaApi.Plau()
	}

	function prepareSoundCloud(e) {
		var t;
		if (e.data("player") != undefined || "undefined" == typeof SC) return (t = e.data("player")) != undefined && "function" == typeof t.getVolume;
		var a = "sciframe" + Math.round(1e5 * Math.random() + 1);
		try {
			e.attr("id", a), (t = SC.Widget(a)).bind(SC.Widget.Events.PLAY, function() {
				stopAllVideos(!0, !1, e.attr("id")), e.addClass("isplaying"), e.removeClass("isinpause")
			}), t.bind(SC.Widget.Events.PAUSE, function() {
				e.hasClass("isplaying") && (forceVideoInPause(e), e.removeClass("isplaying"))
			}), t.bind(SC.Widget.Events.FINISH, function() {
				forceVideoInPause(e), e.removeClass("isplaying")
			}), e.data("player", t), e.addClass("haslistener").addClass("esg-soundcloud")
		} catch (e) {
			return !1
		}
	}

	function playSC(e) {
		var t = e.data("player");
		t != undefined && "function" == typeof t.getVolume && setTimeout(function() {
			t.play()
		}, 500)
	}

	function prepareVideo(e) {
		var t;
		if (e.hasClass("haslistener")) try {
			var a = e.attr("id");
			return !("function" != typeof(t = document.getElementById(a)).play || !e.hasClass("readytoplay"))
		} catch (e) {
			return !1
		} else {
			var i = "videoid_" + Math.round(1e5 * Math.random() + 1);
			e.attr("id", i), (t = document.getElementById(i)).oncanplay = html5vidready(t, e, i), e.addClass("haslistener").addClass("esg-htmlvideo")
		}
	}

	function playVideo(e) {
		var t = e.attr("id");
		document.getElementById(t).play()
	}
}(jQuery),
function(e, t) {
	"use strict";
	var a, i = !1,
		o = parseFloat,
		s = Math.min,
		r = /(-?\d+\.?\d*)$/g,
		n = /(\d+\.?\d*)$/g,
		l = [],
		d = [],
		u = function(e) {
			return "string" == typeof e
		},
		c = function(e, t) {
			for (var a, i = e.length, o = i; o--;) t(e[a = i - o - 1], a)
		},
		p = Array.prototype.indexOf || function(e) {
			var t = this.length,
				a = Number(arguments[1]) || 0;
			for ((a = a < 0 ? Math.ceil(a) : Math.floor(a)) < 0 && (a += t); a < t; a++)
				if (a in this && this[a] === e) return a;
			return -1
		};

	function f(e, t) {
		for (var a = 0, o = e.length; a < o; a++)
			if (e[a] == t) return !i;
		return i
	}

	function g() {
		jQuery("span.eg-post-like").on("click", function() {
			var e, t;
			return 0, t = (e = jQuery(this).closest("a")).data("post_id"), jQuery.ajax({
				type: "post",
				url: eg_ajax_var.url,
				data: "action=ess_grid_post_like&nonce=" + eg_ajax_var.nonce + "&post_like=&post_id=" + t,
				success: function(t) {
					"already" != t && (e.addClass("eg-post-like-voted"), e.closest("li").find(".eg-post-count").text(t))
				}
			}), !1
		})
	}
	e.tinysort = {
		id: "TinySort",
		version: "1.5.6",
		copyright: "Copyright (c) 2008-2013 Ron Valstar",
		uri: "http://tinysort.sjeiti.com/",
		licensed: {
			MIT: "http://www.opensource.org/licenses/mit-license.php",
			GPL: "http://www.gnu.org/licenses/gpl.html"
		},
		plugin: (a = function(e, t) {
			l.push(e), d.push(t)
		}, a.indexOf = p, a),
		defaults: {
			order: "asc",
			attr: null,
			data: null,
			useVal: i,
			place: "start",
			returns: i,
			cases: i,
			forceStrings: i,
			ignoreDashes: i,
			sortFunction: null
		}
	}, e.fn.extend({
		tinysort: function() {
			var t, a, g, h, m = [],
				_ = [],
				E = [],
				w = [],
				v = 0,
				y = [],
				b = [],
				x = function(e) {
					c(l, function(t) {
						t.call(t, e)
					})
				},
				k = function(e, t) {
					var a;
					return "string" == typeof t && (e.cases || (t = (a = t) && a.toLowerCase ? a.toLowerCase() : a), t = t.replace(/^\s*(.*?)\s*$/i, "$1")), t
				},
				C = function(e, t) {
					var a = 0;
					for (0 !== v && (v = 0); 0 === a && v < h;) {
						var s = w[v],
							l = s.oSettings,
							p = l.ignoreDashes ? n : r;
						if (x(l), l.sortFunction) a = l.sortFunction(e, t);
						else if ("rand" == l.order) a = Math.random() < .5 ? 1 : -1;
						else {
							var f = i,
								g = k(l, e.s[v]),
								m = k(l, t.s[v]);
							if (!l.forceStrings) {
								var _ = u(g) ? g && g.match(p) : i,
									E = u(m) ? m && m.match(p) : i;
								if (_ && E) g.substr(0, g.length - _[0].length) == m.substr(0, m.length - E[0].length) && (f = !i, g = o(_[0]), m = o(E[0]))
							}
							a = s.iAsc * (g < m ? -1 : g > m ? 1 : 0)
						}
						c(d, function(e) {
							a = e.call(e, f, g, m, a)
						}), 0 === a && v++
					}
					return a
				};
			for (t = 0, g = arguments.length; t < g; t++) {
				var j = arguments[t];
				u(j) ? y.push(j) - 1 > b.length && (b.length = y.length - 1) : b.push(j) > y.length && (y.length = b.length)
			}
			for (y.length > b.length && (b.length = y.length), 0 === (h = y.length) && (h = y.length = 1, b.push({})), t = 0, g = h; t < g; t++) {
				var S = y[t],
					G = e.extend({}, e.tinysort.defaults, b[t]),
					A = !(!S || "" === S),
					O = A && ":" === S[0];
				w.push({
					sFind: S,
					oSettings: G,
					bFind: A,
					bAttr: !(null === G.attr || "" === G.attr),
					bData: null !== G.data,
					bFilter: O,
					$Filter: O ? this.filter(S) : this,
					fnSort: G.sortFunction,
					iAsc: "asc" == G.order ? 1 : -1
				})
			}
			return this.each(function(t, i) {
				var o, s = e(i),
					r = s.parent().get(0),
					n = [];
				for (a = 0; a < h; a++) {
					var l = w[a],
						d = l.bFind ? l.bFilter ? l.$Filter.filter(i) : s.find(l.sFind) : s;
					n.push(l.bData ? d.data(l.oSettings.data) : l.bAttr ? d.attr(l.oSettings.attr) : l.oSettings.useVal ? d.val() : d.text()), void 0 === o && (o = d)
				}
				var u = p.call(E, r);
				u < 0 && (u = E.push(r) - 1, _[u] = {
					s: [],
					n: []
				}), o.length > 0 ? _[u].s.push({
					s: n,
					e: s,
					n: t
				}) : _[u].n.push({
					e: s,
					n: t
				})
			}), c(_, function(e) {
				e.s.sort(C)
			}), c(_, function(e) {
				var a = e.s,
					o = e.n,
					r = a.length,
					n = o.length,
					l = r + n,
					d = [],
					u = l,
					p = [0, 0];
				switch (G.place) {
					case "first":
						c(a, function(e) {
							u = s(u, e.n)
						});
						break;
					case "org":
						c(a, function(e) {
							d.push(e.n)
						});
						break;
					case "end":
						u = n;
						break;
					default:
						u = 0
				}
				for (t = 0; t < l; t++) {
					var g = f(d, t) ? !i : t >= u && t < u + r,
						h = g ? 0 : 1,
						_ = (g ? a : o)[p[h]].e;
					_.parent().append(_), !g && G.returns || m.push(_.get(0)), p[h]++
				}
			}), this.length = 0, Array.prototype.push.apply(this, m), this
		}
	}), e.fn.TinySort = e.fn.Tinysort = e.fn.tsort = e.fn.tinysort;
	var h = !1;
	"loading" === document.readyState ? document.addEventListener("readystatechange", function() {
		"interactive" !== document.readyState && "complete" !== document.readyState || h || (h = !0, g())
	}) : (h = !0, g())
}(jQuery);