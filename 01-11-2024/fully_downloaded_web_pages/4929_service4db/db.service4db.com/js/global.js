$(document).ready(function() {
    function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    function eraseCookie(name) {
        document.cookie = name+'=; Max-Age=-99999999;';
    }

    function getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    var urlData = getUrlVars();

    // Cookie Disclaimer
    var $disclaimer = $(".cookie-disclaimer");
    var $disclaimerClose = $($disclaimer).find(".cookie-button-close");

    if(getCookie("no-disclaimer") == "true") {
        $disclaimer.hide();
    }


    $disclaimerClose.click(function() {
        $disclaimer.hide();
        setCookie("no-disclaimer", true);
    });

    // Phone Number Convert
/*    if(typeof urlData["phone"] !== "undefined") {
        var $phoneInput = $("#lead_form_phone");
        var number = urlData["phone"];
        if(number.length >= 3) {
            if(number[0] == "0") {
                number = "+49 " + number.substr(1);
                $phoneInput.val(number);
            }
        }
    }*/

    // DB Switch Form Type
    $(".db-switch").each(function() {
        var $switch         = $(this).find(".switcher");
        var $knob           = $(this).find(".knob");
        var $input          = $(this).find("input");
        var $optLeft        = $(this).find(".switch-option.left");
        var $optRight       = $(this).find(".switch-option.right");
        var defaultValue    = $(this).data("default");
        var hook            = $(this).data("hook");
        var leftValue       = $(this).data("left");
        var rightValue      = $(this).data("right");

        function setValue(val) {
            $input.val(val);
        }

        function setNeutral() {
            setValue(null);
            $knob.addClass("neutral").removeClass("right");
            $optLeft.removeClass("active");
            $optRight.removeClass("active");
        }

        function setLeft() {
            setValue(leftValue);
            $knob.removeClass("neutral").removeClass("right");
            $optLeft.addClass("active");
            $optRight.removeClass("active");
        }

        function setRight() {
            setValue(rightValue);
            $knob.removeClass("neutral").addClass("right");
            $optRight.addClass("active");
            $optLeft.removeClass("active");
        }

        function toggle() {
            let value = $input.val();

            if(value === leftValue) {
                $input.val(rightValue);
            }else{
                $input.val(leftValue);
            }

            updateKnob();
        }

        function updateKnob() {
            let value = $input.val();
            if(value === leftValue) {
                setLeft();
            } else if(value === rightValue) {
                setRight();
            } else {
                setNeutral();
            }
        }

        if(typeof urlData[hook] !== "undefined") {
            $input.val(urlData[hook]);
        } else {
            $input.val(defaultValue);
        }
        updateKnob();

        $switch.click(toggle);

        $optLeft.click(setLeft);
        $optRight.click(setRight);

    });

    // Floating Label
    $(".floaty").each(function() {
        var $input = $(this).find("input");
        var $label = $(this).find("label");

        function update() {

            if($input.val().length <= 0 && !$input.is(":focus")) {
                $label.removeClass("float-up");
            } else {
                $label.addClass("float-up");
            }
        }

        update();
        $input.keydown(function() { setTimeout(update); }).focus(update).blur(update);
    });

    $("#lead_form_buyPrice").change(function(){

        var $lead_form_buyPrice = $("#lead_form_buyPrice").val();
        var $lead_form_equity   = $("#lead_form_equity").val();
        if(!isNaN($lead_form_buyPrice - $lead_form_equity)){
            $("#lead_form_financingRequest").val($lead_form_buyPrice - $lead_form_equity);
            $("#lead_form_financingRequest").prev().attr('class', 'float-up');
        }

    });

    $("#lead_form_equity").change(function(){

        var $lead_form_buyPrice = $("#lead_form_buyPrice").val();
        var $lead_form_equity   = $("#lead_form_equity").val();
        if(!isNaN($lead_form_buyPrice - $lead_form_equity)){
            $("#lead_form_financingRequest").val($lead_form_buyPrice - $lead_form_equity);
            $("#lead_form_financingRequest").prev().attr('class', 'float-up');
        }
    });

    // DB Checkbox
    $(".pfb-checkbox").each(function() {
        var $input = $(this).find("input");
        var $field = $(this).find(".pfb-checkbox-field");
        var value = false;
        var $this = $(this);

        function update() {
            if(value) {
                $this.addClass("checked");
            } else {
                $this.removeClass("checked");
            }
            $input.val(value);
        }

        $input.click(function() {
            value = !value;
            update();
        });
    });

    var validator = new Validator($(".db-form"));
    validator.addRule("lead_form_foreName", {
        required: true,
        message: "Geben Sie Ihren Vornamen ein."
    });
    validator.addRule("lead_form_lastName", {
        required: true,
        message: "Geben Sie Ihren Nachnamen ein."
    });
    validator.addRule("lead_form_email", {
        required: true,
        message: "Geben Sie Ihre E-Mail-Adresse ein."
    });
    validator.addRule("lead_form_phone", {
        required: true,
        message: "Bitte Telefonnummer angeben."
    });
    validator.addRule("lead_form_postcode", {
        required: true,
        number: true,
        min: 5,
        max: 5,
        message: "Bitte geben Sie Ihre Postleitzahl an."
    });
    validator.addRule("lead_form_gender", {
        required: true,
        inArray: ['MALE', 'FEMALE'],
        message: "Bitte wählen Sie eine Anrede aus."
    });
    validator.addRule("lead_form_terms", {
        required: true,
        switch: true,
        message: "Bitte wählen Sie eine Anrede aus."
    });

    validator.hook();

    window.vali = validator;

    window.adobeDataLayer.push({
        "event": "page_loaded"
    });

});


function Validator($root) {
    this.$root = $root;
    this.rules = {};
    $("form").attr("novalidate", true);
}

Validator.prototype.validate = function() {
    var $val = this;
    var isClean = true;
    this.$root.find(".db-field").each(function() {
        var $input = $(this).find("input");
        var id = $input.attr("id");

        var rule = $val.rules[id];

        if(typeof rule === "undefined") {
            return;
        }

        if($val.checkValue($input.val(), rule)) {
            $val.markClean($(this));
        } else {
            isClean = false;
            $val.markDirty($(this), rule.message || "Fehler");
        }
    });

        if($("#lead_form_terms").val() == 'false') {
            isClean = false;
            $("#error-message-terms").attr('style', 'display:block;');
            $(".pfb-checkbox-field").attr('style', 'box-shadow: inset 0 1px 2px rgb(251, 41, 41)');

        }

    return isClean;
};

Validator.prototype.hook = function() {
    var $submit = this.$root.find("button[type=submit], input[type=submit]");
    var $val = this;
    $submit.click(function (e) {
        var clean = $val.validate();
        let $saveBtn = $('#lead_form_save');
        let $replacementBtn = $('#replacement_btn');

        if (!clean) {
            e.preventDefault();
            $saveBtn.show();
            $replacementBtn.hide();
        } else {
            /**
             * @description call the external tracking logic when user fills the lead form, and then submits it
             *              happens only when form has no errors
             *
             *              this logic was delivered from external, was named `addClickToDataLayer`
             */
            var plzFull = document.getElementById("lead_form_postcode").value;
            var plz = plzFull ? plzFull.substring(0,3) : '';
            var productEquity = document.getElementById("lead_form_equity").value;
            var netIncomeYearly = document.getElementById("lead_form_netIncome").value;
            var productVariation = document.getElementById("lead_form_typeOfUse").value;
            var productLoanAmount = document.getElementById("lead_form_financingRequest").value;
            var productPurchasePrice = document.getElementById("lead_form_buyPrice").value;

            adobeDataLayer.push({
                event: "component_click",
                eventInfo: {
                    label: "Besprechungsanfrage absenden"
                },
                form: {
                    "formname": "Persönliche Information",
                    "plz": plz,
                    "netIncomeYearly": netIncomeYearly,
                },
                product: {
                    "productEquity": productEquity,
                    "productVariation": productVariation,
                    "productLoanAmount": productLoanAmount,
                    "productPurchasePrice": productPurchasePrice
                }
            });

            $saveBtn.hide();
            $replacementBtn.show();
        }
    })
};

Validator.prototype.checkValue = function(value, options) {
    function hasOption(opt) {
        return typeof options[opt] !== "undefined";
    }

    if(hasOption("number")) {
        let num = Number(value);
        if(isNaN(num) || /[^0-9]/.test(value)) {
            return false;
        }
    }

    if(hasOption("float")) {
        let num = Number.parseFloat(value);
        if(isNaN(num) || /[^0-9.]/.test(value)) {
            return false;
        }
    }

    if(hasOption("switch") && options.switch) {
        return (value != "-1" && value.length > 0)
    }

    if(hasOption("required") && options.required) {
        if(value.length <= 0) {
            return false;
        }
    }

    if(hasOption("min")) {
        if(value.length < options.min) {
            return false;
        }
    }

    if(hasOption("max")) {
        if(value.length > options.max) {
            return false;
        }
    }


    return true;
};

Validator.prototype.addRule = function(id, options) {
    this.rules[id] = options;
};

Validator.prototype.markDirty = function(field, message) {
    field.addClass("validation-error");
    field.find(".error-message").text(message);
};

Validator.prototype.markClean = function(field) {
    field.removeClass("validation-error");
};

Validator.prototype.mayProceed = function() {

};
