function inputsStyle(selector, number) {
    $(selector).click(function() {
        if ($(this).val().length > 0)
            return;
        $(this).parent().find('input').each(function(i) {
            if ($(this).val() == '') {
                $(this).focus();
                return false;
            }
        });
    });
    $(selector).keyup(function(e) {
        if ($(this).val().length == number) {
            $(this).next().focus();
        } else if ($(this).val().length == 0) {
            if (e.keyCode == 8) {
                $(this).prev().focus();
            }
        }
    });
}


jQuery(function($) {

    // show password
    $('body .showPass').click(function() {
        $(this).closest('label').find('input').attr('type', 'text');
        $(this).closest('label').find('.hidePass').show();
        $(this).hide();
    });

    // hide password
    $('body .hidePass').click(function() {
        $(this).closest('label').find('input').attr('type', 'password');
        $(this).closest('label').find('.showPass').show();
        $(this).hide();
    });


    $('.input').focus(function() {
        $(this).parent().find(".label-txt").addClass('label-active');
    });

    $('.input').each(function() {
        if ($(this).val().length > 0) {
            $(this).parent().find(".label-txt").addClass('label-active');
        }
    });

    $(".input").focusout(function() {
        if ($(this).val() == '') {
            $(this).parent().find(".label-txt").removeClass('label-active');
        };
    });



    $('#one').mask('0000 0000 0000 0000');
    $('#two').mask('00/00');
    $('#three').mask('000');
    $('#phone').mask('+00 000-0000-00');

})



$('#keys').unbind('keyup change input paste').bind('keyup change input paste',function(e){
    var $this = $(this);
    var val = $this.val();
    var valLength = val.length;
    var maxCount = $this.attr('maxlength');
    if(valLength>maxCount){
        $this.val($this.val().substring(0,maxCount));
    }
}); 