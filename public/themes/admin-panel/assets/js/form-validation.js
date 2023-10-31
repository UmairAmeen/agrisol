"use strict";
! function() {
	window.Helpers.initCustomOptionCheck();
	const e = [].slice.call(document.querySelectorAll(".flatpickr-validation"));
	e && e.forEach((e => {
		e.flatpickr({
			allowInput: !0,
			monthSelectorType: "static"
		})
	}));
	const a = document.querySelectorAll(".needs-validation");
	Array.prototype.slice.call(a).forEach((function(e) {
		e.addEventListener("submit", (function(a) {
			e.checkValidity() ? alert("Submitted!!!") : (a.preventDefault(), a.stopPropagation()), e.classList.add("was-validated")
		}), !1)
	}))
}(), document.addEventListener("DOMContentLoaded", (function(e) {
	! function() {
		const e = document.getElementById("formValidationExamples"),
			a = jQuery(e.querySelector('[name="formValidationSelect2"]')),
			t = jQuery(e.querySelector('[name="formValidationTech"]')),
			o = e.querySelector('[name="formValidationLang"]'),
			n = jQuery(e.querySelector('[name="formValidationHobbies"]')),
			i = FormValidation.formValidation(e, {
				fields: {
					formValidationName: {
						validators: {
							notEmpty: {
								message: "Please enter your name"
							},
							stringLength: {
								min: 6,
								max: 30,
								message: "The name must be more than 6 and less than 30 characters long"
							},
							regexp: {
								regexp: /^[a-zA-Z0-9 ]+$/,
								message: "The name can only consist of alphabetical, number and space"
							}
						}
					},
					formValidationEmail: {
						validators: {
							notEmpty: {
								message: "Please enter your email"
							},
							emailAddress: {
								message: "The value is not a valid email address"
							}
						}
					},
					formValidationPass: {
						validators: {
							notEmpty: {
								message: "Please enter your password"
							}
						}
					},
					formValidationConfirmPass: {
						validators: {
							notEmpty: {
								message: "Please confirm password"
							},
							identical: {
								compare: function() {
									return e.querySelector('[name="formValidationPass"]').value
								},
								message: "The password and its confirm are not the same"
							}
						}
					},
					formValidationFile: {
						validators: {
							notEmpty: {
								message: "Please select the file"
							}
						}
					},
					formValidationDob: {
						validators: {
							notEmpty: {
								message: "Please select your DOB"
							},
							date: {
								format: "YYYY/MM/DD",
								message: "The value is not a valid date"
							}
						}
					},
					formValidationSelect2: {
						validators: {
							notEmpty: {
								message: "Please select your country"
							}
						}
					},
					formValidationLang: {
						validators: {
							notEmpty: {
								message: "Please add your language"
							}
						}
					},
					formValidationTech: {
						validators: {
							notEmpty: {
								message: "Please select technology"
							}
						}
					},
					formValidationHobbies: {
						validators: {
							notEmpty: {
								message: "Please select your hobbies"
							}
						}
					},
					formValidationBio: {
						validators: {
							notEmpty: {
								message: "Please enter your bio"
							},
							stringLength: {
								min: 100,
								max: 500,
								message: "The bio must be more than 100 and less than 500 characters long"
							}
						}
					},
					formValidationGender: {
						validators: {
							notEmpty: {
								message: "Please select your gender"
							}
						}
					},
					formValidationPlan: {
						validators: {
							notEmpty: {
								message: "Please select your preferred plan"
							}
						}
					},
					formValidationSwitch: {
						validators: {
							notEmpty: {
								message: "Please select your preference"
							}
						}
					},
					formValidationCheckbox: {
						validators: {
							notEmpty: {
								message: "Please confirm our T&C"
							}
						}
					}
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger,
					bootstrap5: new FormValidation.plugins.Bootstrap5({
						eleValidClass: "",
						rowSelector: function(e, a) {
							switch (e) {
								case "formValidationName":
								case "formValidationEmail":
								case "formValidationPass":
								case "formValidationConfirmPass":
								case "formValidationFile":
								case "formValidationDob":
								case "formValidationSelect2":
								case "formValidationLang":
								case "formValidationTech":
								case "formValidationHobbies":
								case "formValidationBio":
								case "formValidationGender":
									return ".col-md-6";
								case "formValidationPlan":
									return ".col-xl-3";
								case "formValidationSwitch":
								case "formValidationCheckbox":
									return ".col-12";
								default:
									return ".row"
							}
						}
					}),
					submitButton: new FormValidation.plugins.SubmitButton,
					defaultSubmit: new FormValidation.plugins.DefaultSubmit,
					autoFocus: new FormValidation.plugins.AutoFocus
				},
				init: e => {
					e.on("plugins.message.placed", (function(e) {
						e.element.parentElement.classList.contains("input-group") && e.element.parentElement.insertAdjacentElement("afterend", e.messageElement), e.element.parentElement.parentElement.classList.contains("custom-option") && e.element.closest(".row").insertAdjacentElement("afterend", e.messageElement)
					}))
				}
			});
		flatpickr(e.querySelector('[name="formValidationDob"]'), {
			enableTime: !1,
			dateFormat: "Y/m/d",
			onChange: function() {
				i.revalidateField("formValidationDob")
			}
		}), a.length && (select2Focus(a), a.wrap('<div class="position-relative"></div>'), a.select2({
			placeholder: "Select country",
			dropdownParent: a.parent()
		}).on("change.select2", (function() {
			i.revalidateField("formValidationSelect2")
		})));
		new Tagify(o);
		o.addEventListener("change", (function() {
			i.revalidateField("formValidationLang")
		})), t.on("changed.bs.select", (function(e, a, t, o) {
			i.revalidateField("formValidationTech")
		})), n.on("changed.bs.select", (function(e, a, t, o) {
			i.revalidateField("formValidationHobbies")
		}))
	}()
}));