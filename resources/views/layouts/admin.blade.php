<!DOCTYPE html>
<html lang="en">



{{-- @include('admin::sections.head') --}}
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <!-- Meta, title, CSS, favicons, etc. -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{__('YaaFood | Adminstrator Dashboard')}} </title>
        <link rel="icon" href="{{ asset('images/YaaLogo.svg') }}">

        @yield('stylesheetAndScripts')

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <script>var productid;</script>
    </head>

    <body class="nav-md">
        @yield('content')
        <!-- jQuery -->
        <!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> -->
        @yield('scriptsBottom')
    </body>
</html>
