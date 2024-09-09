<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>
            @yield('title')
        </title>
        <link rel="icon" href="{{asset('images/YaaLogo.svg')}}">
        <!-- Metas -->
        @yield('meta')
        <!-- Fonts -->
        <!-- Styles -->

        @yield('stylesheetAndScripts')


        @yield('style')


    </head>
    <body>
        <div id="loading" class="loader">
            <div class="loading">Loading&#8230;</div>
        </div>


        <div class="wrrapper">
            <header style="position: sticky;top: 0;z-index: 9;">
                @include('layouts.master.navbar')
            </header>

            <main>
                @yield('content')
            </main>
            <footer class="footer">
                @include('layouts.master.footer')
            </footer>
        </div>


    </body>
</html>
