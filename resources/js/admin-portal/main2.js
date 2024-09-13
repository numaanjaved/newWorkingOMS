
$("#delivery_channels").on('change', function () {

    // var data = document.getElementById("channels");
    var channel_id = this.value;
    //route('admin.delivery.slot')
    window.location.replace("" + '/' + channel_id);
});

jQuery(function () {
    // moment.tz.setDefault("Asia/Riyadh");
    $("#autogenerate").on('click', function () {
        var autopromo = autogenerate();
        $("#promoaccess").val(autopromo);
    });

    var today = new Date();
    var yy = today.getFullYear();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    $('.date-picker').datetimepicker({
        // autoclose: true,
        //todayHighlight: true,
        //minDate: new Date(),
        minDate: new Date(yy, mm - 1, dd),
        format: 'YYYY-MM-DD HH:mm:ss'
    }).on('dp.change', function (e) {
        // alert('first');

        var from = $("#from").val();
        var result = from.split(' ');
        var result_date = result[0].split('-');
        // console.log(result_date);
        var toy = result_date[0] - yy;
        var tom = result_date[1] - mm;
        var tod = result_date[2] - dd;
        // console.log(toy);
        //console.log(result[2]);
        $('.date-picker1').datetimepicker({
            // alert('jiji');
            //autoclose: true,
            //todayHighlight: true,
            minDate: new Date(yy + toy, (mm - 1) + tom, dd + tod),
            //minDate: new Date(yy-result[0], mm-result[1], dd-result[2]),
            //maxDate: new Date(yy, mm - 1, dd),
            format: 'YYYY-MM-DD HH:mm:ss'
        });
    });

    $('.date-picker-customer').datetimepicker({
        format: 'YYYY-MM-DD'
    }).on('dp.change', function (e) {
        var from = $("#from_date").val();
        var result = from.split(' ');
        var result_date = result[0].split('-');
        // console.log(result_date);
        var toy = result_date[0] - yy;
        var tom = result_date[1] - mm;
        var tod = result_date[2] - dd;
        $('.date-picker-customer1').datetimepicker({
            minDate: new Date(yy + toy, (mm - 1) + tom, dd + tod),
            format: 'YYYY-MM-DD'
        });
    });
});


