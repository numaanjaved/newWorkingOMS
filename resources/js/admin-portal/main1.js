
jQuery("a.action").on('click', function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    var proceed = confirm("Are you sure you want to " + jQuery(this).attr('rel') + " this record?");

    if (proceed) {
        window.location.replace(jQuery(this).attr("href"));
    }
    else {
        return false;
    }
});

jQuery("a.status").on('click', function (event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    var proceed = confirm("{{ __('Are you sure you want to change status?') }}");
    if (proceed) {
        window.location.replace(jQuery(this).attr("href"));
    }
    else {
        return false;
    }
});
var test = ''
var gallery_product_id;
gallery_product_id = jQuery("input[name=product_id]").val()
if (typeof gallery_product_id == 'undefined') {
    gallery_product_id = Math.floor(100000 + Math.random() * 900000);
}
jQuery(function () {

    jQuery('input#product-image').change(function () {
        // $('#loading').show();
        // alert('change')
        var file_data = jQuery(this).prop('files')[0];
        var form_data = new FormData();
        var product = jQuery("input[name=product_id]");
        // alert(product.val())
        form_data.append('file', file_data);
        // alert(window.product_id)

        if (product.val()) {
            gallery_product_id = product.val();
            form_data.append('product_id', product.val());
            // alert('append')

        } else if (window.product_id) {
            form_data.append('product_id', gallery_product_id);
        }
        //route("admin.product.image.ajax-upload")
        window.process_url = '' + '/' + gallery_product_id;

        // console.log(form_data.product_id);
        form_data.append('_token', "{{ csrf_token() }}");
        //route('admin.product.image.ajax-upload')
        jQuery.ajax({
            url: "",//'upload.php', // point to server-side PHP script
            dataType: 'json',  // what to expect back from the PHP script, if anything
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post'
        }).done(function (json) {
            if (json.code == 200) {
                window.product_id = json.product_id; //if temp id is created then it will be resend to make upload another image for product.
                getProductGallery(json.product_id);
                $('#temp_product_id').val(json.product_id);
            }
            else {
            }
        });
    });

    if (jQuery("input[name=product_id]").length > 0) {
        getProductGallery(jQuery("input[name=product_id]").val());
    }

});

function getProductGallery(gallery_product_id) {
    window.product_id = gallery_product_id;
    var baseUrl = "{{ url('/') }}";
    var product = jQuery("input[name=product_id]");
    //route('admin.product.ajax.get-gallery')
    jQuery.ajax({
        url: "",
        type: "get",
        data: { "product_id": gallery_product_id },
        datatype: "json"
    }).done(function (json) {
        // alert(json.gallery.length)
        //console.log(json);
        if (json.code == 200) {
            var data = '';
            var makeDefault;
            // alert(json.gallery.length)

            for (var i = 0; i < json.gallery.length; i++) {
                data += '<div class="item gallery-item" productGalleryId="' + json.gallery[i].product_gallery_id + '"><div class="image">';
                data += '<img src="' + baseUrl + json.gallery[i].web_path + '" width="200" /></div>';
                if (json.gallery[i].is_default == 0) {
                    makeDefault = '<a href="#" class="action action-makedefault">Make Default</a>';
                }
                else {
                    makeDefault = '<strong>Default</strong>';
                }

                //  makeDefault += json.gallery[i].is_default

                data += '<div class="actions">' + makeDefault + ' | ';
                data += '<a href="#" class="action action-delete">Delete</a></div></div>';
            }
            jQuery('.product-gallery').html(data);


            jQuery(".action-makedefault").on('click', function (event) {
                event.stopPropagation();
                console.log("making default...!");
                product_gallery_id = jQuery(this).closest('.item').attr('productGalleryId');
                //route('admin.product.ajax.make-image-default')
                jQuery.ajax({
                    url: "",
                    type: "post",
                    data: { "product_gallery_id": product_gallery_id, "product_id": gallery_product_id, "_token": "{{csrf_token()}}" },
                    datatype: "json"
                }).done(function (json) {
                    getProductGallery(gallery_product_id);
                });
                return false;
            });

            jQuery(".action-delete").on('click', function (event) {
                //console.log(jQuery(this).closest('.item'));
                event.stopPropagation();
                product_gallery_id = jQuery(this).closest('.item').attr('productGalleryId');
                //route('admin.product.ajax.delete-image')}}
                jQuery.ajax({
                    url: "",
                    type: "post",
                    data: { "product_gallery_id": product_gallery_id, "product_id": gallery_product_id, "_token": "{{csrf_token()}}" },
                    datatype: "json"
                }).done(function (json) {
                    getProductGallery(gallery_product_id);
                });
                return false;
            });
        }
        else {
            alert(json.message);
        }
    });
}

