"use strict";
// Select all elements with the "needs-validation" class
const validatorForms = document.querySelectorAll(".needs-validation");

validatorForms.forEach((validatorForm) => {
    document.addEventListener("DOMContentLoaded", function (e) {
        // Initialize FormValidation
        if (validatorForm) {
            const fields = validatorForm.querySelectorAll('input, select, textarea');
            const fieldValidations = {};

            fields.forEach((field) => {
                const fieldName = field.getAttribute('name');
                if (!fieldName) {
                    return;
                }

                const fieldValid = {};

                // Check if the field should have an 'notEmpty' validation
                if (field.dataset.fvNotempty === 'true') {
                    fieldValid.notEmpty = {
                        message: field.dataset.fvNotemptyMessage || "Field is required"
                    };
                }

                // Check if the field should have an 'stringLength' validation
                if (field.dataset.fvStringlength === 'true') {
                    fieldValid.stringLength = {
                        min: parseInt(field.dataset.fvStringlengthMin, 10),
                        message: field.dataset.fvStringlengthMessage
                    };

                    // Check if the data-fvStringlengthMax attribute is defined
                    if (field.dataset.fvStringlengthMax) {
                        fieldValid.stringLength.max = parseInt(field.dataset.fvStringlengthMax, 10);
                    }
                }

                // Check if the field should have an 'emailAddress' validation
                if (field.dataset.fvEmailaddress === 'true') {
                    fieldValid.emailAddress = {
                        message: field.dataset.fvEmailaddressMessage || "The value is not a valid email address"
                    };
                }

                // Check if the field should have an 'identical' validation
                if (field.dataset.fvIdentical === 'true') {
                    const compareField = validatorForm.querySelector('[name="'+field.dataset.fvComparefieldName+'"]');
                    if (compareField) {
                        fieldValid.identical = {
                            compare: function () {
                                return compareField.value;
                            },
                            message: field.dataset.fvIdenticalMessage || "The password and its confirm are not the same"
                        };
                    }
                }

                // Check if the field should have a 'regexp' validation
                if (field.dataset.fvRegexp === 'true') {
                    fieldValid.regexp = {
                        regexp: new RegExp(field.dataset.fvRegexpPattern), // You can specify the pattern in your HTML
                        message: field.dataset.fvRegexpMessage || "The input can only consist of alphabetical, number and space"
                    };
                }

                // Check if the field should have a 'date' validation
                if (field.dataset.fvDate === 'true') {
                    fieldValid.date = {
                        format: field.dataset.fvDateFormat || "YYYY/MM/DD", // You can specify the format in your HTML
                        message: field.dataset.fvDateMessage || "The value is not a valid date"
                    };
                }

                if (Object.keys(fieldValid).length > 0) {
                    fieldValidations[fieldName] = {
                        validators: fieldValid
                    };
                }
            });
            FormValidation.formValidation(validatorForm, {
                fields: fieldValidations,
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap5: new FormValidation.plugins.Bootstrap5({
                        eleValidClass: "",
                        rowSelector: ".mb-3"
                    }),
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    // defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                    autoFocus: new FormValidation.plugins.AutoFocus()
                },
                init: (e) => {
                    e.on("plugins.message.placed", function (e) {
                        if (e.element.parentElement.classList.contains("input-group")) {
                            e.element.parentElement.insertAdjacentElement("afterend", e.messageElement);
                        }
                    });
                }
            }).on('core.form.valid', function(e) {

                const validForm = e.formValidation.form;

                if (e.formValidation.form.classList.contains('no-ajax')) {
                    validForm.submit();
                }
                else{
                    form_submit(validForm);
                }
            });
        }

        // Other initialization code
        const numeralFields = document.querySelectorAll(".numeral-mask");
        numeralFields.forEach(function (field) {
            new Cleave(field, {
                numeral: true,
            });
        });
    });
});