$("#auto_generate").click(function () {
    //route('admin.ajax.autogenerate')
    $.ajax({
        url: "", success: function (result) {
            if (result != '') {
                var autopromo = $("#generate_promo").val(result);
                if (autopromo != '') {
                    $(':input[type="submit"]').prop('disabled', false);
                }
                $("#auto_generate_status").text("");
            }
        }
    });
});
$(function () {
    $("#generate_promo").keyup(function () {
        var that = this,
            value = $(this).val();

        check_promocode(value);

    });
});

init("<?php if(isset($to)){echo date('m/d/Y g:i A', strtotime($to));} else ''; ?>");
// function init() {
//   // Clear forms here
//   //	document.getElementById("start_date").value = "<?php if(isset($start_date)){echo date('m/d/Y g:i A', strtotime($start_date));} else ''; ?>";
//   document.getElementById("to").value = "<?php if(isset($to)){echo date('m/d/Y g:i A', strtotime($to));} else ''; ?>";
// }
window.onload = init;

$(function () {
    $("#generate_promo").keyup(function () {
        var that = this,
            value = $(this).val();

        check_promocode(value);

    });
});
$(document).ready(function () {
    var promo = $("#generate_promo").val();
    if (promo != '') {
        check_promocode(promo);
    }
});
$("#all_cities").click(function () {
    var allCitiesIsChecked = $('#all_cities:checkbox:checked').length > 0;
    if (allCitiesIsChecked == true) {
        $('.small_anchor').attr('checked', false);
    }
});

$(".small_anchor").click(function () {
    var allCitiesIsChecked = $('#all_cities:checkbox:checked').length > 0;
    if (allCitiesIsChecked == true) {
        $('#all_cities').attr('checked', false);
    }
});

$("#all_products").click(function () {
    var allProductsIsChecked = $('#all_products:checkbox:checked').length > 0;
    if (allProductsIsChecked == true) {
        $('.small_anchor2').attr('checked', false);
    }
});

$(".small_anchor2").click(function () {
    var allProductsIsChecked = $('#all_products:checkbox:checked').length > 0;
    if (allProductsIsChecked == true) {
        $('#all_products').attr('checked', false);
    }
});

function check_promocode(value) {

    if (value.length > 2) {
        //route('admin.ajax.promocode.check')
        $.ajax({
            type: "POST",
            url: "",
            data: {
                'promo_input': value,
                '_token': '{{csrf_token()}}'
            },
            dataType: "text",
            success: function (msg) {
                if (msg == 'invalid') {
                    $("#auto_generate_status").text("Invalid characteres are not allowerd");
                    $(':input[type="submit"]').prop('disabled', true);
                }

                else if (msg == 'false') {
                    $("#auto_generate_status").text("This promocode has been taken");
                    $(':input[type="submit"]').prop('disabled', true);
                }
                else {
                    $("#auto_generate_status").text("");
                    $(':input[type="submit"]').prop('disabled', false);
                }
            }

        });
    }
    else {
        $(':input[type="submit"]').prop('disabled', true);
    }
}

//json_encode(\App\Model\Role::where('status', 1)->get()->toArray());
roles = "";

function displayRole() {
    var defaultPageDropDownHtml = '<option value="">-- Select One --</option>';
    $('#extra_roles input:checkbox').removeAttr('checked');

    groupType = document.getElementById("groupType");

    if (groupType != null) {
        strUser = document.getElementById("groupType").value;
        //json_encode(\App\Model\Group::where('status', 1)->get()->toArray());
        id = "";
        for (var i = 0; i < id.length; i++) {
            if (strUser == id[i].group_id) {
                var check = JSON.parse(id[i].role_id);
                break;
            }
        }

        console.log(check);

        var options = [];
        var values = [];
        var deselectRoles = [];
        var count = 0, count1 = 0;

        for (var x = 0; x < roles.length; x++) {

            if (jQuery.inArray(parseInt(roles[x].role_id), check) != -1 || check.length == 0) {
                options[count] = { label: roles[x].role_name, value: roles[x].role_id, selected: true };

                values[count] = '' + roles[x].role_id;

                $('#extra_roles input:checkbox[value=' + roles[x].role_id + ']').prop('checked', true);
                count++;

                if (roles[x].class) {
                    defaultPageDropDownHtml += '<option value="' + roles[x].url + '" >' + roles[x].role_name + '</option>';
                }

            }
            else {
                deselectRoles[count1] = '' + roles[x].role_id;
                count1++;
            }
        }
    }

    $('#default_page').html(defaultPageDropDownHtml);

    // $('#public-methods').multiSelect('deselect', deselectRoles);
    // $('#public-methods').multiSelect('select', values);
}



function displayRoleEdit(currentRole, currentUrl = 0) {
    strUser = document.getElementById("groupType").value;

    var check = [];
    // json_encode(\App\Model\Group::where('status', 1)->get()->toArray());
    id = "";
    for (var i = 0; i < id.length; i++) {
        if (strUser == id[i].group_id) {
            check = JSON.parse(id[i].role_id);
            break;
        }
    }

    if (currentRole != 0) {
        for (var i = 0; i < currentRole.length; i++) {
            console.log(currentRole);
            check.push(currentRole[i]);
        }
    }

    if (currentRole.length == 0) {
        for (var i = 0; i < roles.length; i++) {
            check.push(roles[i].role_id);
        }
    }

    var options = [];
    var values = [];
    var deselectRoles = [];
    var count = 0, count1 = 0;
    var defaultPageDropDownHtml = '<option value="">-- Select One --</option>';

    for (var x = 0; x < roles.length; x++) {
        if (jQuery.inArray(parseInt(roles[x].role_id), check) != -1) {
            options[count] = { label: roles[x].role_name, value: roles[x].role_id, selected: true };
            values[count] = '' + roles[x].role_id;
            $('#extra_roles input:checkbox[value=' + roles[x].role_id + ']').prop('checked', true);
            count++;
            if (roles[x].class) {
                defaultPageDropDownHtml += '<option value="' + roles[x].url + '"';
                if (currentUrl == roles[x].url) {
                    defaultPageDropDownHtml += ' selected="selected" ';
                }
                defaultPageDropDownHtml += ' >' + roles[x].role_name + '</option>';
            }
        }
        else {
            deselectRoles[count1] = '' + roles[x].role_id;
            count1++;
        }
    }

    //console.log(defaultPageDropDownHtml);
    $('#default_page').html(defaultPageDropDownHtml);

    $('#public-methods').multiSelect('deselect', deselectRoles);
    $('#public-methods').multiSelect('select', values);
}



function onExtraRolesChanged(e) {
    var selected_role_ids = [];//$('#public-methods').val();
    //console.log(selected_role_ids);

    selected = document.getElementById("selected_id").value;

    if (selected == "") {
        $('#extra_roles input:checkbox:checked').each(function () {
            selected_role_ids.push($(this).val());
        });

    }
    else if (selected == "callcenter") {
        $('#extra_roles_callcenter input:checkbox:checked').each(function () {
            selected_role_ids.push($(this).val());
        });
    }
    else if (selected == "lastmile") {
        $('#extra_roles_lastmile input:checkbox:checked').each(function () {
            selected_role_ids.push($(this).val());
        });
    }






    var currentUrl = "<?php echo (isset($currentUser)? $currentUser['url']: ''); ?>";
    var html = '<option value="">--Select One--</option>';
    for (var x = 0; x < roles.length; x++) {
        //console.log(jQuery.inArray(roles[x].role_id.toString(), selected_role_ids));
        if (jQuery.inArray(roles[x].role_id.toString(), selected_role_ids) != -1) {
            //console.log(roles[x].class);
            if (roles[x].class) {
                html += '<option value="' + roles[x].url + '"';
                if (roles[x].url == currentUrl) {
                    html += ' selected="selected" ';
                }

                html += '>' + roles[x].role_name + '</option>';
            }
        }
    }

    //console.log(html);
    $('#default_page').html(html);
}

function doNoUncheckGroupRoles(e) {
    //get selected user group roles.

    var role_id = e.value;

    groupType = document.getElementById("groupType");

    if (groupType != null) {
        strUser = document.getElementById("groupType").value;

        // json_encode(\App\Model\Group::where('status', 1)->get()->toArray());
        id = "";
        for (var i = 0; i < id.length; i++) {
            if (strUser == id[i].group_id) {
                var check = JSON.parse(id[i].role_id);
                break;
            }
        }

        if (jQuery.inArray(parseInt(role_id), check) != -1 || check.length == 0) {
            e.checked = true;
        }
    }
}

$('#select_all').click(function () {
    $('#extra_roles input:checkbox').prop('checked', true);
    $('#channels input:checkbox').prop('checked', true);

    var currentUrl = "<?php echo (isset($currentUser)? $currentUser['url']: '')?>";
    var html = '<option value="">--Select One--</option>';
    for (var x = 0; x < roles.length; x++) {
        if (roles[x].class) {
            html += '<option value="' + roles[x].url + '"';
            if (roles[x].url == currentUrl) {
                html += ' selected="selected" ';
            }

            html += '>' + roles[x].role_name + '</option>';
        }
    }

    $('#default_page').html(html);
});



$('#deselect_all').click(function () {
    $('#extra_roles input:checkbox').removeAttr('checked');
    $('#channels input:checkbox').removeAttr('checked');

    //get selected value of user group.
    displayRole();
    //$('#default_page').html('<option value="">--Select One--</option>');
});


$('#select_all_lastmile').click(function () {
    $('#extra_roles_lastmile input:checkbox').prop('checked', true);

    var currentUrl = "<?php echo (isset($currentUser)? $currentUser['url']: '')?>";
    var html = '<option value="">--Select One--</option>';
    for (var x = 0; x < roles.length; x++) {
        if (roles[x].class) {
            html += '<option value="' + roles[x].url + '"';
            if (roles[x].url == currentUrl) {
                html += ' selected="selected" ';
            }

            html += '>' + roles[x].role_name + '</option>';
        }
    }

    $('#default_page').html(html);
});

$('#deselect_all_lastmile').click(function () {
    $('#extra_roles_lastmile input:checkbox').removeAttr('checked');

    //get selected value of user group.
    displayRole();
    //$('#default_page').html('<option value="">--Select One--</option>');
});


$('#select_all_callcenter').click(function () {
    $('#extra_roles_callcenter input:checkbox').prop('checked', true);

    var currentUrl = "<?php echo (isset($currentUser)? $currentUser['url']: '')?>";
    var html = '<option value="">--Select One--</option>';
    for (var x = 0; x < roles.length; x++) {
        if (roles[x].class) {
            html += '<option value="' + roles[x].url + '"';
            if (roles[x].url == currentUrl) {
                html += ' selected="selected" ';
            }

            html += '>' + roles[x].role_name + '</option>';
        }
    }

    $('#default_page').html(html);
});

$('#deselect_all_callcenter').click(function () {
    $('#extra_roles_callcenter input:checkbox').removeAttr('checked');

    //get selected value of user group.
    displayRole();
    //$('#default_page').html('<option value="">--Select One--</option>');
});



function insertKeywordInArabicTemplate(e) {
    selected_keyword = e.target.value;

    console.log(selected_keyword);

    var val = $('#arabicTemplate').val();
    val += selected_keyword;
    $('#arabicTemplate').val(val);

    var elements = document.getElementById("arabic_keyword").options;

    for (var i = 0; i < elements.length; i++) {
        elements[i].selected = false;
    }
}

function insertKeywordInEnglishTemplate(e) {
    selected_keyword = e.target.value;
    console.log(selected_keyword);

    var val = $('#englishTemplate').val();
    val += selected_keyword;
    $('#englishTemplate').val(val);

    var elements = document.getElementById("english_keyword").options;

    for (var i = 0; i < elements.length; i++) {
        elements[i].selected = false;
    }
}

function onTemplateForChanged(e) {
    var val = $('#template_for').val();

    if (val == "SMS") {
        //hide subject div
        $('#subject_div').hide();
    } else {
        $('#subject_div').show();
    }
}

function onDisplayInMenuChanged() {
    var isDisplay = $('#display_in_menu_chk').prop("checked");

    if (isDisplay) {
        $('#display_icon_div').show();
    } else {
        $('#display_icon_div').hide();
        var val = $('#display_icon_div select').val();

        $('#display_icon_div select option[value="' + val + '"]').prop('selected', false);
    }
}

// $('#my-select').multiSelect()
$('#public-methods').multiSelect();
$('#select-all').click(function () {
    $('#public-methods').multiSelect('select_all');
    return false;
});
$('#deselect-all').click(function () {
    $('#public-methods').multiSelect('deselect_all');
    return false;
});



var table = $('#datatable-responsive').DataTable(
    {
        bAutoWidth: false,
        'order': [],
        "language": {
            "url": "{{ __('dt_url') }}"
        },
    }
);

new $.fn.dataTable.Buttons(table, {

    buttons: [

        {
            "extend": "copy",
            "text": "<i class='fa fa-copy bigger-110 pink'></i> <span class='hidden'>Copy to clipboard</span>",
            "className": "btn btn-white btn-primary btn-bold"
        },
        {
            "extend": "csv",
            "text": "<i class='fa fa-database bigger-110 orange'></i> <span class='hidden'>Export to CSV</span>",
            "className": "btn btn-white btn-primary btn-bold",
            // action: function ( e, dt, node, config ) {
            //     var win = window.open("https://ojen.com.sa/admin_staging/index.php/client/export_to_csv", '_blank');
            //     win.focus();
            //     <!-- window.location.href = ; -->
            // }
        },
        {
            "extend": "pdf",
            "text": "<i class='fa fa-file-pdf-o bigger-110 red'></i> <span class='hidden'>Export to PDF</span>",
            "className": "btn btn-white btn-primary btn-bold"
        },
    ]
});
table.buttons().container().appendTo($('.tableTools-container2'));

var table = $('#datatable-responsive-address').DataTable(
    {
        bAutoWidth: false,
        'order': [],
        "language": {
            "url": "{{ __('dt_url') }}"
        },
    }
);

new $.fn.dataTable.Buttons(table, {

    buttons: [

        {
            "extend": "copy",
            "text": "<i class='fa fa-copy bigger-110 pink'></i> <span class='hidden'>Copy to clipboard</span>",
            "className": "btn btn-white btn-primary btn-bold"
        },
        {
            "extend": "csv",
            "text": "<i class='fa fa-database bigger-110 orange'></i> <span class='hidden'>Export to CSV</span>",
            "className": "btn btn-white btn-primary btn-bold",
            // action: function ( e, dt, node, config ) {
            //     var win = window.open("https://ojen.com.sa/admin_staging/index.php/client/export_to_csv", '_blank');
            //     win.focus();
            //     <!-- window.location.href = ; -->
            // }
        },
        {
            "extend": "pdf",
            "text": "<i class='fa fa-file-pdf-o bigger-110 red'></i> <span class='hidden'>Export to PDF</span>",
            "className": "btn btn-white btn-primary btn-bold"
        },
    ]
});
table.buttons().container().appendTo($('.tableTools-container3'));

function clickButton(val) {

    var channelid = val.dataset.id;
    //route('admin.channel.product')
    // AJAX request
    $.ajax({
        url: "",
        type: 'post',
        dataType: "text",
        data: {
            'channelid': channelid,
            '_token': '{{csrf_token()}}'
        },
        success: function (result) {

            // Add response in Modal body
            $('.tableBody').html(result);
            // Display Modal
            $('#myModal').modal('show');
        }
    });
};
function displaySubChannel() {

    console.log("sub channel");
    var e = document.getElementById("sub_channel");
    var sub_channel_id = e.options[e.selectedIndex].value;
    //route('admin.customer.sub.channel.product')
    $.ajax({
        url: "",
        type: 'post',
        dataType: "text",
        data: {
            'sub_channel_id': sub_channel_id,
            '_token': '{{csrf_token()}}'
        },
        success: function (data) {
            // Add response in Modal body
            $('.sub-channel-price').html(data);
            // Display Modal
            // $('#myModal').modal('show');
        }
    });
    //route('admin.customer.product')
    $.ajax({
        url: "",
        type: 'post',
        dataType: "text",
        data: {
            'channelid': sub_channel_id,
            '_token': '{{csrf_token()}}'
        },
        success: function (data) {

            // Add response in Modal body
            data = JSON.parse(data);
            console.log(data);
            // $('.products').html(data.result);

            $('.customer-product').val(66);
            $('.customer-price').html(data.product);
            $('.customer-price-edit').html(data.edit_product);
            $('#add_sub_channel_price_edit').html(data.sub_channel_edit_product);
            $('#add_sub_channel_price_edit').show();
            $('#add_channel').hide();
            $('#add_channel').html('');

            console.log("sub channel " + sub_channel_id);
            if (sub_channel_id == '') {
                $('#add_channel').html(data.sub_channel_edit_product);
                $('#add_channel').show();
                $('#add_sub_channel_price_edit').html('');
                $('#add_sub_channel_price_edit').hide();
            }
            // $('.sub-channel-price').html(data.sub_channel_product);
            // Display Modal
            // $('#myModal').modal('show');
        }
    });
};

$(document).ready(function () {

    hide_area();
    hide_group()
    function hide_area() {
        if ($('#city_id1').val() == '') {
            $('#area_id1').prop('disabled', true);
        }
        else {
            $('#area_id1').prop('disabled', false); //enable
        }
    }

    function hide_group() {
        if ($('#channel').val() == '') {
            $('#group_id').prop('disabled', true);
        }
        else {
            $('#group_id').prop('disabled', false); //enable
        }
    }


    setInterval(hide_area, 2000);

});

$("#city_id1").on('change', function () {

    $('#area_id1>option').remove();
    $('#area_id1').append("<option value=''>{{ __('Select Area') }}</option>");
    // $('#loading').show();
    var city_id = $("#city_id1").val();
    //   var lang = '';
    var all_area = "<? php echo (isset($allAreas) ? $allAreas : '[]'); ?>";
    // console.log(all_area);
    var filtered_area = $.grep(all_area, function (element, index) {
        if (city_id == element.parent_id) {
            if (lang == 'ar') {
                $("#area_id1").append("<option value='" + element.location_id + "'>" + element.location_name.ar + "</option>");
            } else {
                $("#area_id1").append("<option value='" + element.location_id + "'>" + element.location_name.en + "</option>");
            }
            $('#area_id1').prop('disabled', false);
        }
    });

});

// for edit
function showArea(value) {
    // $("#city_id1").on('change',function() {
    $('#area_id1>option').remove();
    $('#area_id1').append("<option value=''>{{ __('Select Area') }}</option>");
    // $('#loading').show();
    // var city_id = $("#city_id1").val();
    var city_id = value;
    //   var lang = '';
    var all_area = "<? php echo (isset($allAreas) ? $allAreas : '[]') ?>";
    var current_area = "<? php echo (isset($current_area) ? $current_area : 0) ?>";
    var select = '';
    // console.log(all_area);
    var filtered_area = $.grep(all_area, function (element, index) {
        if (city_id == element.parent_id) {
            if (current_area == element.location_id) {
                select = 'selected';
            }
            else {
                select = '';
            }
            if (lang == 'ar') {
                $("#area_id1").append("<option value='" + element.location_id + "'" + select + ">" + element.location_name.ar + "</option>");

            } else {
                $("#area_id1").append("<option value='" + element.location_id + "'" + select + ">" + element.location_name.en + "</option>");

            }
            $('#area_id1').prop('disabled', false);
        }
    });
    // });
};
function displayGroup() {
    // $("#channel").on('change',function() {
    // $('#group_id>option').remove();
    // $('#group_id').append("<option value=''>{{ __('Select Group') }}</option>");
    $('#sub_channel>option').remove();
    $('#sub_channel').append("<option value=''>{{ __('Select Sub Channel') }}</option>");
    // $('#loading').show();
    var e = document.getElementById("channel");
    var channelid = e.options[e.selectedIndex].value;
    // var city_id = $("#city_id1").val();
    //   var lang = '';
    var select = '';
    var groupFlag = 0;
    var customer_groups = "<? php echo (isset($customer_groups) ? $customer_groups : '[]'); ?>";
    var sub_channels = "<? php echo (isset($sub_channels) ? $sub_channels : '[]'); ?>";

    var currentChannel = "<? php echo (isset($currentCustomer) ? json_encode($currentCustomer) : '[]'); ?>";
    var filtered_sub_channels = $.grep(sub_channels, function (element, index) {
        if (channelid == element.parent_id) {
            if (currentChannel.sub_channel_id == element.channel_id) {
                select = "selected";
                // groupFlag = 1;
            }
            else {
                select = '';
            }

            if (lang == 'ar') {
                $("#sub_channel").append("<option value='" + element.channel_id + "'" + select + ">" + element.channel_name.ar + "</option>");
            } else {
                $("#sub_channel").append("<option value='" + element.channel_id + "'" + select + ">" + element.channel_name.en + "</option>");
            }
            $('#sub_channel').prop('disabled', false);
        }
    });
    // var filtered_groups = $.grep(customer_groups, function (element, index) {
    //   if(channelid == element.channel_id){
    //     if(currentChannel.group_id == element.group_id){
    //       select = "selected";
    //       groupFlag = 1;
    //     }
    //     else{
    //       select = '';
    //     }
    //     if(groupFlag == 0){
    //       if(element.is_default == 1){
    //         select = "selected";
    //       }
    //       else{
    //         select = '';
    //       }
    //     }
    //     if (lang == 'ar') {
    //       $("#group_id").append("<option value='"+element.group_id+"'"+select+">"+element.group_name.ar+"</option>");
    //     }else{
    //       $("#group_id").append("<option value='"+element.group_id+"'"+select+">"+element.group_name.en+"</option>");
    //     }
    //     $('#group_id').prop('disabled', false);
    //   }
    // });

    // });
};

$('#channelTable').on('hidden.bs.collapse', function () {
    var spanTag1 = document.getElementById("channel_span");
    spanTag1.className = "glyphicon glyphicon-circle-arrow-down";
})
$('#channelTable').on('show.bs.collapse', function () {
    var spanTag1 = document.getElementById("channel_span");
    spanTag1.className = "glyphicon glyphicon-circle-arrow-up";
})

$('#addressTable').on('hidden.bs.collapse', function () {
    var spanTag1 = document.getElementById("address_span");
    spanTag1.className = "glyphicon glyphicon-circle-arrow-down";
})
$('#addressTable').on('show.bs.collapse', function () {
    var spanTag1 = document.getElementById("address_span");
    spanTag1.className = "glyphicon glyphicon-circle-arrow-up";
})

$('#productTable').on('hidden.bs.collapse', function () {
    var spanTag1 = document.getElementById("product_span");
    spanTag1.className = "glyphicon glyphicon-circle-arrow-down";
})
$('#productTable').on('show.bs.collapse', function () {
    var spanTag1 = document.getElementById("product_span");
    spanTag1.className = "glyphicon glyphicon-circle-arrow-up";
});

window.count = 0;
window.customerAddress = [];
window.customerDetail = [];
window.deliverySlot = [];
window.check = 0;
function addCustomerAddress() {

    var all_channel = $('#city_id1>option');
    for (var i = 0; i < all_channel.length; i++) {
        if (all_channel[i].selected) {
            if (all_channel[i].value < 0 || all_channel[i].value == 0) {
                alert('Select City');
                return;
            }
        }
    }
    var all_channel = $('#area_id1>option');
    for (var i = 0; i < all_channel.length; i++) {
        if (all_channel[i].selected) {
            if (all_channel[i].value < 0 || all_channel[i].value == 0) {
                alert('Select Area');
                return;
            }
        }
    }
    if (!document.getElementById('address_title').value) {
        alert('address title missing');
        return;
    }
    if (!document.getElementById('address_detail').value) {
        alert('address detail missing');
        return;
    }

    if (document.getElementById('address_user_name').value) {
        if (!document.getElementById('address_number').value) {
            alert('Branch Login Number Missing');
            return;
        }
    }

    if (document.getElementById('address_number').value.length > 12 || (document.getElementById('address_number').value.length > 0 && document.getElementById('address_number').value.length < 12)) {
        alert('incorrect branch number');
        return;
    }
    if (document.getElementById('address_number').value.length == 12) {

        check = checkCustomer();

        if (check.responseText == 'true') {
            alert('branch login exists');
            return;
        }

        if (!document.getElementById('address_user_name').value) {
            alert('branch user name missing');
            return;
        }
        else {
            //route('admin.customer.branch.check.user_name')
            $.ajax({
                url: "",
                type: 'post',
                dataType: "text",
                data: {
                    'user_name': document.getElementById('address_user_name').value,
                    '_token': '{{csrf_token()}}'
                },
                success: function (result) {
                    if (result == 'true') {
                        alert('user name already exists');
                        return;
                    }
                    else {
                        if (!document.getElementById('address_password').value) {
                            alert('branch login password missing');
                            return;
                        }
                        alert('branch added');
                        var areaId = $("#area_id1").val();
                        var cityName = $("#city_id1 option:selected").text();
                        var areaName = $("#area_id1 option:selected").text();
                        var address = $("#address_detail").val();
                        var address_title = $("#address_title").val();
                        var latitude = $("#latitude").val();
                        var longitude = $("#longitude").val();
                        var mobile = $("#address_number").val();
                        var erp_id = $("#erp_id").val();
                        var user_name = $("#address_user_name").val();
                        var password = $("#address_password").val();
                        window.customerAddress[window.count] = {
                            'city_name': cityName, 'area_name': areaName,
                            'location_id': areaId, 'address': address,
                            'latitude': latitude, 'longitude': longitude,
                            'title': address_title, 'mobile': mobile,
                            'user_name': user_name, 'password': password
                        };
                        window.count++;

                        text = '';
                        window.customerAddress.forEach(myFunction);
                        // text += "</tr>";
                        document.getElementById("addressCustomer").innerHTML = text;
                        if (window.check == 0) {
                            $('#address_button').click();
                            window.check = 1;
                        }
                        Object.keys(window.customerAddress).forEach((key, index) => {
                            myFunction(window.customerAddress[key], index);
                        })
                    }
                }
            });
        }
    }
    else {
        alert('branch added');
        var areaId = $("#area_id1").val();
        var cityName = $("#city_id1 option:selected").text();
        var areaName = $("#area_id1 option:selected").text();
        var address = $("#address_detail").val();
        var address_title = $("#address_title").val();
        var latitude = $("#latitude").val();
        var longitude = $("#longitude").val();
        var mobile = $("#address_number").val();
        var erp_id = $("#erp_id").val();
        var user_name = $("#address_user_name").val();
        var password = $("#address_password").val();
        window.customerAddress[window.count] = {
            'city_name': cityName, 'area_name': areaName,
            'location_id': areaId, 'address': address,
            'latitude': latitude, 'longitude': longitude,
            'title': address_title, 'mobile': mobile,
            'user_name': user_name, 'password': password
        };
        window.count++;

        text = '';
        window.customerAddress.forEach(myFunction);
        // text += "</tr>";
        document.getElementById("addressCustomer").innerHTML = text;
        if (window.check == 0) {
            $('#address_button').click();
            window.check = 1;
        }
        Object.keys(window.customerAddress).forEach((key, index) => {
            myFunction(window.customerAddress[key], index);
        })
    }
}


function myFunction(value, index) {
    text += "<tr> <td>" + value.city_name + "</td> <td>" + value.area_name + "</td> <td>" + value.address +
        "</td> <td>" + value.mobile + "</td> <td>" + value.latitude + "/" + value.longitude + "</td> <td> <button class='btn btn-info btn-sm' data-id='" + index + "' onclick='removeAddress(this)' ><i class='glyphicon glyphicon-remove' ></i> </button> </td> </tr>";
}


function submitForm(event) {
    window.productDetail = [];
    window.productVariant = [];
    window.detailVariant = [];
    window.productIds = [];
    var check_type = '';
    if (!document.getElementById('customer_name').value) {
        alert('name missing');
        return;
    }
    if (!document.getElementById('mobile_number').value) {
        alert('number missing');
        return;
    }
    if (document.getElementById('mobile_number').value.length > 12 || document.getElementById('mobile_number').value.length < 12) {
        alert('incorrect number');
        return;
    }
    if (!document.getElementById('erp_id_customer').value) {
        alert('customer erp id missing');
        return;
    }
    if (document.getElementById('creditInput').value.length > 10) {
        alert('maximum credit limit 9999999999');
        return;
    }
    if (!document.getElementById('creditInput').value) {
        alert('credit limit missing');
        return;
    }
    if (!document.getElementById('branch_address').value) {
        alert('main branch address missing');
        return;
    }
    if (!document.getElementById('customer_user_name').value) {
        alert('user name missing');
        return;
    }
    if (!document.getElementById('customer_password').value) {
        alert('customer password missing');
        return;
    }
    if (!document.getElementById('tax_id_customer').value) {
        alert('customer tax id missing');
        return;
    }

    var all_channel = $('#channel>option');
    for (var i = 0; i < all_channel.length; i++) {
        if (all_channel[i].selected) {
            if (all_channel[i].value < 0 || all_channel[i].value == 0) {
                alert('Select Channel');
                return;
            }
        }
    }
    var all_channel = $('#sub_channel>option');
    for (var i = 0; i < all_channel.length; i++) {
        if (all_channel[i].selected) {
            if (all_channel[i].value < 0 || all_channel[i].value == 0) {
                alert('Select Sub Channel');
                return;
            }
        }
    }
    var all_channel = $('#group_id>option');
    for (var i = 0; i < all_channel.length; i++) {
        if (all_channel[i].selected) {
            if (all_channel[i].value < 0 || all_channel[i].value == 0) {
                alert('Select Group');
                return;
            }
        }
    }
    if (window.customerAddress.length == 0) {
        alert('add address');
        return;
    }

    if (document.getElementById('address_number').value.length > 12 || (document.getElementById('address_number').value.length > 0 && document.getElementById('address_number').value.length < 12)) {
        alert('incorrect branch number');
        return;
    }
    var name = document.getElementsByClassName("customer");
    for (var i = 0; i < name.length; i++) {
        window.customerDetail[i] = { 'name': name[i].name, 'value': name[i].value };
    }
    if (document.getElementsByClassName('delivery_slot').selectedIndex != '') {
        var name_delivery_slot = document.getElementsByClassName("delivery_slot");
        for (var i = 0; i < name_delivery_slot.length; i++) {
            window.deliverySlot[i] = { 'name': name_delivery_slot[i].name, 'value': name_delivery_slot[i].value };
        }
    }
    if (document.getElementById("pricing_checkbox").checked) {
        var product = document.getElementsByClassName("customer-product");
        check_type = 'customer';
        for (var i = 0; i < product.length; i++) {
            if (product[i].name == 'product_ids[]') {
                if (product[i].checked) {
                    // console.log(product[i].checked);
                    window.productIds[i] = { 'value': product[i].value };
                }
            }
            else {
                window.productDetail[i] = { 'name': product[i].name, 'value': product[i].value };
            }
        }

        var variant = document.getElementsByClassName("customer-variant");
        for (var i = 0; i < variant.length; i++) {
            if (variant[i].name == 'variant[]') {
                if (variant[i].checked) {
                    window.productVariant[i] = { 'value': variant[i].value };
                }
            }
            else {
                window.detailVariant[i] = { 'name': variant[i].name, 'value': variant[i].value };
            }
        }

        if (window.productVariant.length == 0) {
            alert('add Variants');
            return;
        }

    }

    if (document.getElementById("sub_channel_pricing_checkbox").checked) {
        // var product = document.getElementsByClassName("sub-channel-product");
        check_type = 'subchannel';
    }
    // console.log(product[0].checked);
    // console.log(name.length);
    // console.log(name[1].value);
    // console.log(name[1].name);
    //route('admin.customer.add')
    $.ajax({
        url: "",
        type: 'post',
        dataType: "text",
        data: {
            'customer': window.customerDetail,
            'product': window.productDetail,
            'variant_id': window.productVariant,
            'variant': window.detailVariant,
            'delivery_slot': window.deliverySlot,
            'product_ids': window.productIds,
            'address': window.customerAddress,
            'check_type': check_type,
            '_token': '{{csrf_token()}}'
        },
        success: function (result) {

            if (result == 'true') {
                //route("admin.customer")
                window.location.replace('');
            }
            else if (result == 'exists') {
                alert('customer already exists');
            }
            else if (result == 'user_name') {
                alert('user name already exists');
            }
        }
    });


    // alert('okay')
    //   var values = new Array();

    // $.each($("#Table1 input[type=checkbox]:checked").closest("td").siblings("td"),
    //        function () {
    //             values.push($(this).text());
    //        });

    //    alert(values);
    //   //  alert(values.join(", "));
}

$('#pricing_checkbox').change(function () {
    var product = document.getElementsByClassName("customer-product");
    if ($(this).is(":checked")) {

        // document.getElementById('sub_channel_pricing_checkbox').checked = false;
        // var channel_product = document.getElementsByClassName("sub-channel-product");

        // for (var i = 0; i < product.length; i++) {
        //   channel_product[i].checked = false;
        // }
        $('.channel-prod').hide();
        $('.sub-channel-pricing').hide();
        // $('#subChannelTable').hide();
        for (var i = 0; i < product.length; i++) {
            product[i].checked = false;
        }
        $('#product_span').click();
    }
    else {
        $('.channel-prod').show();
        $('.sub-channel-pricing').show();
        // $('#subChannelTable').show();
        $('#product_span').click();
        for (var i = 0; i < product.length; i++) {
            product[i].checked = false;
        }
        if (document.getElementById('customer_pricing_edit').checked) {
            // $('.customer-pricing').show();
            $('.channel-prod').hide();
            $('.sub-channel-pricing').hide();
        }
    }
});
$('#sub_channel_pricing_checkbox').change(function () {
    // var product = document.getElementsByClassName("sub-channel-product");
    if ($(this).is(":checked")) {
        document.getElementById('pricing_checkbox').checked = false;
        var customer_product = document.getElementsByClassName("customer-product");
        for (var i = 0; i < customer_product.length; i++) {
            customer_product[i].checked = false;
        }
        $('.channel-prod').hide();
        $('.customer-pricing').hide();
        // $('#productTable').hide();
        // for (var i = 0; i < product.length; i++) {
        //   product[i].checked = true;
        // }
        $('#sub_channel_span').click();
    }
    else {
        $('.channel-prod').show();
        $('.customer-pricing').show();
        // $('#productTable').show();
        $('#sub_channel_span').click();
        // $('#product_span').click();
        // for (var i = 0; i < product.length; i++) {
        //   product[i].checked = false;
        // }
    }
});

$("#mobile_number").keyup(function () {
    this.value = this.value.replace(/[^0-9]/, '');
    if (this.value.length > 12) {
        alert('incorrect number');
    }
});
$("#address_number").keyup(function () {
    this.value = this.value.replace(/[^0-9]/, '');
    if (this.value.length > 12) {
        alert('incorrect number');
    }
});
$("#creditInput").keyup(function () {
    this.value = this.value.replace(/[^0-9]/, '');
    if (this.value.length > 10) {
        alert('maximum credit limit 9999999999');
    }
});

function customerEdit(event) {
    if (document.getElementById('channel_id').checked) {
        // $('.customer-pricing').hide();
        // $('.channel-prod').show();
        // $('.sub-channel-pricing').show();
        var all_channel = $('#channel>option');
        for (var i = 0; i < all_channel.length; i++) {
            if (all_channel[i].selected) {
                if (all_channel[i].value < 0 || all_channel[i].value == 0) {
                    event.preventDefault();
                    alert('Select Channel');
                }
            }
        }
        if (document.getElementsByClassName('delivery_slot').selectedIndex != '') {
            var name_delivery_slot = document.getElementsByClassName("delivery_slot");
            for (var i = 0; i < name_delivery_slot.length; i++) {

                window.deliverySlot[i] = { 'name': name_delivery_slot[i].name, 'value': name_delivery_slot[i].value };
            }
        }
        if (document.getElementById("pricing_checkbox")) {
            document.getElementById("pricing_checkbox").checked = false;
            var product = document.getElementsByClassName("customer-product");
            // $('.channel-prod').show();
            // $('.sub-channel-pricing').show();
            // $('.customer-pricing').show();
            // $('#product_span').click();
            for (var i = 0; i < product.length; i++) {
                product[i].checked = false;
            }
        }
    }
    if (document.getElementById('sub_channel_id').checked) {
        // $('.customer-pricing').hide();
        // $('.channel-prod').show();
        // $('.sub-channel-pricing').show();
        var all_channel = $('#sub_channel>option');
        for (var i = 0; i < all_channel.length; i++) {
            if (all_channel[i].selected) {
                if (all_channel[i].value < 0 || all_channel[i].value == 0) {
                    event.preventDefault();
                    alert('Select Sub Channel');
                }
            }
        }
        if (document.getElementById("pricing_checkbox")) {
            document.getElementById("pricing_checkbox").checked = false;
            var product = document.getElementsByClassName("customer-product");
            // $('.channel-prod').show();
            // $('.sub-channel-pricing').show();
            // $('.customer-pricing').show();
            // $('#product_span').click();
            for (var i = 0; i < product.length; i++) {
                product[i].checked = false;
            }
        }
    }

    if (document.getElementById('customer_pricing_edit').checked) {

        var tr = 0;
        var products = document.getElementsByClassName("customer-product");

        for (var i = 0; i < products.length; i++) {


            console.log(products[i].name);
            if (products[i].name == 'product_ids[]') {
                if (products[i].checked) {
                    tr++;
                }
            }
        }
        if (tr == 0) {
            // alert('Select Customer Products');
            // event.preventDefault();
        }
    }
}

function check_account_type() {
    if (document.getElementById('customer_pricing_edit').checked) {
        $('.customer-pricing').show();
        $('.channel-prod').hide();
        $('.sub-channel-pricing').hide();
    }
    if (document.getElementById('sub_channel_id').checked) {
        $('.customer-pricing').hide();
        $('.channel-prod').hide();
        $('.sub-channel-pricing').show();
    }
    if (document.getElementById('channel_id').checked) {
        $('.customer-pricing').hide();
        $('.channel-prod').show();
        $('.sub-channel-pricing').hide();
    }
}




var xhr;
var select_city, $select_city;
var select_area, $select_area;

$select_city = $('#city_id1').selectize({
    onChange: function (value) {
        if (!value.length) return;
        var element = jQuery('#area_id1');
        if (element[0].selectize) {
            element[0].selectize.destroy();
        }
        select_area.load(function (callback) {
            xhr && xhr.abort();
            showArea(value);
            $select_area = $('#area_id1').selectize({
                sortField: 'text'
            });
        });
    }
});

$select_area = $('#area_id1').selectize({
    sortField: 'text'
});

$('#area_id_index').selectize({
    sortField: 'text'
});

select_area = $select_area[0].selectize;
select_city = $select_city[0].selectize;

select_area.disable();


function showAreaEdit(value) {
    var xhr;
    var select_area, $select_area;
    var element = jQuery('#area_id1');
    if (element[0].selectize) {
        element[0].selectize.destroy();
    }
    showArea(value);
    $select_area = $('#area_id1').selectize({
        sortField: 'text'
    });
}

function customerAddAddress(event) {
    if (document.getElementById('address_number').value.length > 12 || (document.getElementById('address_number').value.length > 0 && document.getElementById('address_number').value.length < 12)) {
        alert('incorrect branch number');
        event.preventDefault();
    }
    if (document.getElementById('address_number').value.length == 12) {

        check = checkCustomer();
        if (check.responseText != 'true') {
            if (!document.getElementById('address_user_name').value) {
                alert('branch user name missing');
                event.preventDefault();
            }
            if (!document.getElementById('address_password').value) {
                alert('branch password missing');
                event.preventDefault();
            }
        }
    }
}

function checkCustomer() {
    //route('admin.customer.branch.check.number')
    return $.ajax({
        url: "",
        type: 'post',
        dataType: "text",
        async: false,
        data: {
            'number': document.getElementById('address_number').value,
            '_token': '{{csrf_token()}}'
        }
    });
}

function customerEditAddress(event) {
    if (document.getElementById('address_number').value.length > 12 || (document.getElementById('address_number').value.length > 0 && document.getElementById('address_number').value.length < 12)) {
        alert('incorrect branch number');
        return;
    }
    if (document.getElementById('address_number').value.length == 12) {
        if (!document.getElementById('address_user_name').value) {
            alert('branch user name missing');
            event.preventDefault();
        }
    }
}


function removeAddress(val) {

    var id = val.dataset.id;
    var row_id = id;
    row_id++;
    document.getElementById("tableID").deleteRow(row_id);
    window.customerAddress.splice(id, 1);
    $("#addressCustomer").html('');
    text = '';
    Object.keys(window.customerAddress).forEach((key, index) => {
        myFunction(window.customerAddress[key], index);
    });
    document.getElementById("addressCustomer").innerHTML = text;
    window.count = window.customerAddress.length;
    alert('branch removed');
}

$('.x_title').on('click', function () {
    console.log($('.collapse-link i', $(this)));
    console.log($(this).next());
    if ($('.collapse-link i', $(this)).hasClass('fa-chevron-down')) {
        $('.collapse-link i', $(this)).removeClass('fa-chevron-down');
        $('.collapse-link i', $(this)).addClass('fa-chevron-up');

        $(this).next().show();
    } else {
        $('.collapse-link i', $(this)).removeClass('fa-chevron-up');
        $('.collapse-link i', $(this)).addClass('fa-chevron-down');

        $(this).next().hide();
    }
});

function addProductVariant() {
    var quantity = $('#variant_quantity').val();
    if (quantity == undefined || quantity == '' || quantity == 0) {
        alert('Please Enter Product Variant Quantity');
        return;
    }

    var price = $('#variant_price').val();
    console.log(price);
    if (price == undefined || price == '' || price == 0) {
        alert('Please Enter Product Variant Price');
        return;
    }

    var price_vat = $('#variant_price_vat').val();
    console.log(price_vat);
    if (price_vat == undefined || price_vat == '' || price_vat == 0) {
        alert('Please Enter Product Variant Price Vat');
        return;
    }

    is_defult = 0;
    if (document.getElementById("variant_id_default").checked) {
        is_defult = 1;
    }

    var sort = $('#variant_sort').val();
    var channels = "<? php echo isset($all_channels) ? json_encode($all_channels) : '\'\'' ?>";
    //\App\Language::getCurrentLanguage()
    // var lang = '';
    var channel_ids = [];
    $('#channels input:checkbox').each(function () {

        if (this.checked) {
            channel_ids.push(this.value);
        }
    });

    console.log();
    var html = '';
    for (var i = 0; i < channel_ids.length; i++) {
        html += '<tr><td><input type="hidden" name="variant[quantity][]" value="' + quantity + '">' + quantity + '</td>';
        html += '<td><input type="hidden" name="variant[price][]" value="' + price + '">' + price + '</td>';
        html += '<td><input type="hidden" name="variant[price_vat][]" value="' + price_vat + '">' + price_vat + '</td>';
        html += '<td><input type="hidden" name="variant[is_default][]" value="' + is_defult + '">' + is_defult + '</td>';
        html += '<td><input type="hidden" name="variant[channel_id][]" value="' + channel_ids[i] + '">';


        if (document.getElementById("variant_id_default").checked) {

            // $('#channel_price_'+channel_ids[i]).val(price)
            // price_vat =  $('#vat_value').val();
            // price_vat = Number(price_vat);
            // price = Number(price);
            // $('#channel_price_vat_'+channel_ids[i]).val(price+(price*(price_vat/100)))
            // $('#channel_quantity_'+channel_ids[i]).val(quantity)


        }

        for (var j = 0; j < channels.length; j++) {
            if (channels[j].channel_id == channel_ids[i]) {
                channel_name = JSON.parse(channels[j].channel_name);
                if (lang == 'en') {
                    html += channel_name.en;
                } else {
                    html += channel_name.ar;
                }
                break;
            }
        }
        html += '</td>';
        html += '<td><button type="button" class="btn btn-info btn-sm" id="DeleteButton" ><i class="glyphicon glyphicon-remove" ></i> </button> </td></tr>';
    }

    // if (channels.length == channel_ids.length) {
    //   html += '{{ __("All Channels") }} </td>';
    // } else {
    //   html += channelStr + ' </td>';
    // }



    $('#productVariants').append(html);
    // var x = $('#productVariants').val();
    // console.log(x);

    $('#tableID').show();



    // if(is_defult == 1 ){
    //   x = document.getElementById("variant_id_default");
    //   y = document.getElementById("default");
    //   x.style.display = "none";
    //   y.style.display = "none";
    //   // is_defult = 1;
    // }
    // window.alert(x);
    // window.alert(document.getElementById("product_quantity").value);

    if (is_defult == 1) {
        //  document.getElementById("product_quantity").value = $('#variant_quantity').val();
        // document.getElementById("product_price").value = $('#variant_price').val();

        $('#product_quantity').val(quantity);
        $('#product_price').val(price);
        $("#variant_id_default").prop("checked", false);

        // $('#product_price').val() = $('#variant_price').val();
    }
    // alert("Text: " + $("#productVariants").text());

}

function removeVariant(val) {
    console.log(val.closest("tr"));
    $('#productVariants').remove(val.closest("tr"));




}

$('#productVariants').find('tr').click(function () {
    // alert('You clicked row '+ ($(this).index()+1) );
});

$("#tableID").on("click", "#DeleteButton", function () {
    var index = $(this).parent().parent().index();
    var table = document.getElementById("productVariants");
    is_default = table.rows[index].cells[2].innerText;
    if (is_default == 1) {
        x = document.getElementById("variant_id_default");
        y = document.getElementById("default");
        x.style.display = "block";
        y.style.display = "block";
    }

    var col = table.cellIndex,
        row = table.parentNode.rowIndex;

    $(this).closest("tr").remove();

    var rowCount = $('#productVariants tr').length;
    // console.log(rowCount);
    if (rowCount == 0) {
        $('#tableID').hide();
    }

});
