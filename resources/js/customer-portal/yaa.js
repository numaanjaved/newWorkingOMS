
function makeFav(data) {
    $('#frm_order_favourite_' + data.dataset.id).submit();
}
function makeUnFav(data) {
    $('#frm_order_unfavourite_' + data.dataset.id).submit();
}
function reOrder() {
    $('#frm-order-reorder').submit();
}
function waitForElement(id, callback) {
    var poops = setInterval(function () {
        if (document.getElementsByClassName(id)) {
            clearInterval(poops);
            callback();
        }
    }, 100);
}
function BrowserDetection() {
    if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
        $('#APPLE_PAY').hide();
        $('#APPLE_PAY_image').hide();
        $('#APPLE_PAY_name').hide();
    }
    else if (navigator.userAgent.indexOf("Chrome") != -1) {
        $('#APPLE_PAY').hide();
        $('#APPLE_PAY_image').hide();
        $('#APPLE_PAY_name').hide();
    }
    else if (navigator.userAgent.indexOf("Safari") != -1) {
    }
    else if (navigator.userAgent.indexOf("Firefox") != -1) {
        $('#APPLE_PAY').hide();
        $('#APPLE_PAY_image').hide();
        $('#APPLE_PAY_name').hide();
    }
    else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
    {
        $('#APPLE_PAY').hide();
        $('#APPLE_PAY_image').hide();
        $('#APPLE_PAY_name').hide();
    }
    else {
        $('#APPLE_PAY').hide();
        $('#APPLE_PAY_image').hide();
        $('#APPLE_PAY_name').hide();
    }
}
$(document).ready(function () {
    $("#signin_btn").on('click', function () {
        var phone = $("#mobile_number").val();
        var area_code = phone.substring(0, 3);
        if (phone.match(/^\d+$/)) {
            if (phone.length == 9) {
                $('#signin_form_normal').submit();
            }
            else {
                alert("Enter Correct Phone Number");
            }
        } else {
            alert("Please Enter Number only");
        }
    });
    $("#mobile_number").on('keyup', function () {
        var phone = $(this).val();
        var area_code = phone.substring(0, 3);
        if (phone.match(/^\d+$/)) {
            if (phone.length == 9) {
                $('#signin_btn').removeAttr('disabled');
                $('#signin_btn').removeProp('disabled');
            }
            else {
                $('#signin_btn').attr('disabled', 'disabled');
                $('#signin_btn').prop('disabled', 'disabled');
            }
        } else {
            var num = $(this).val();
            var corr_num = num.substring(0, num.length - 1);
            $(this).val(corr_num);
        }
    });
    $("#signin_btn_corporate").on('click', function () {
        if (!document.getElementById('user_name').value) {
            alert("Enter User Name");
        }
        if (!document.getElementById('password').value) {
            alert("Enter Password");
        }
        else {
            $('#signin_form_corporate').submit();
        }
    });
    $("#signin_otp_btn").on('click', function () {
        var phone = $("#send_otp_number").val();
        console.clear();
        console.log('phone', phone, phone.length);
        // return false;
        var area_code = phone.substring(0, 3);
        if (phone.match(/^\d+$/)) {
            //if (area_code == "966") {
            if (phone.length == 9) {
                $('#send_otp_form').submit();
            }
            else {
                alert("Enter Correct Phone Number");
            }
            /*}else{
                alert("Enter Valid Saudi Arabia Phone Number");
            }*/
        } else {
            if (phone == '') {
                alert("Please Enter Number");
            } else {
                alert("Please Enter Number instead of alphabets");
            }
        }
    });
    $("#signin_corporate_btn").on('click', function () {
        if (!document.getElementById('user_name_signin').value) {
            alert("Enter User Name");
        }
        if (!document.getElementById('password_signin').value) {
            alert("Enter Password");
        }
        else {
            $('#checkflag').val(2);
            $('#send_corporate_form').submit();
        }
    });
    $('.add_to_cart_btn').click(function () {
        var ele = this;
        // jQuery(this).val(order_now_text.adding_to_cart);
        jQuery(this).attr('disabled', 'disabled');
        var product_id = jQuery(this).closest('.product-item').data('product');

        var quantity = jQuery('input[name=qty]', jQuery(this).closest('.product-item')).val();
        if (isNaN(quantity)) {
            alert("Quantity is not numeric");
            console.log('cart adding complete');
            jQuery(ele).val(order_now_text.add_to_cart);
            jQuery(ele).removeAttr('disabled');
            return false;
        }
        quantity = parseInt(quantity);
        if (quantity < 1) {
            alert("Quantity should be at least one");
            console.log('cart adding complete');
            jQuery(ele).val(order_now_text.add_to_cart);
            jQuery(ele).removeAttr('disabled');
            return false;
        }

        variant_id = window.variants[product_id];

        add_to_cart_ajax(product_id, quantity, ele, variant_id);
    });
});
