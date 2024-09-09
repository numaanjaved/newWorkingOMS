@extends('layouts.admin')

@section('title')
    {{__('YaaFood | Adminstrator Dashboard')}}
@endsection
@section('meta')
    <meta name="format-detection" content="telephone=no" />
@endsection
@section('style')

@endsection
@section('stylesheetAndScripts')
    @vite(['resources/js/admin-portal.js'])

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

    @if(App::isLocale('en'))
        @vite(['resources/js/yaa.js'])
    @elseif(App::isLocale('ar'))
        @vite(['resources/js/yaa_rtl.js'])
    @endif

@endsection
@section('content')
    <div class="container body">
            <div class="main_container">
                <div class="col-md-3 left_col">
                    <div class="left_col scroll-view">
                        <div class="navbar nav_title" style="border: 0; background-color: #fff">
                            <a href="index.html" class="site_title text-d-green"> <img src="{{ asset('images/YaaLogo.svg') }}" alt="" height="25"> <span>{{__('YaaFood')}}</span></a>
                        </div>

                        <div class="clearfix"></div>

                        <!-- menu profile quick info -->
                        <!-- <div class="profile clearfix">
                            <div class="profile_pic">
                                <img src="images/img.jpg" alt="..." class="img-circle profile_img">
                            </div>
                            <div class="profile_info">
                                <span>Welcome,</span>
                                <h2>John Doe</h2>
                            </div>
                        </div>
                        /menu profile quick info

                        <br /> -->
                        @include("layouts.admin.sidebar")


 					    <!-- menu footer buttons -->
                        <!-- <div class="sidebar-footer hidden-small">
                            <a data-toggle="tooltip" data-placement="top" title="Settings">
                                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                            </a>
                            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                                <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                            </a>
                            <a data-toggle="tooltip" data-placement="top" title="Lock">
                                <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                            </a>
                            <a data-toggle="tooltip" data-placement="top" title="Logout" href="login.html">
                                <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
                            </a>
                        </div> -->
                        <!-- menu footer buttons -->
                    </div>
                </div>

			    @include("layouts.admin.header");
                <div class="right_col" role="main">

                    <div class="modal fade" id="seachCustomer" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">{{__('Search Customer Products')}}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                {{-- route('admin.customer.search') --}}
                                <form class="" action="" method="post">
                                    @csrf()
                                    <div class="modal-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label for="mobile"> {{__('Enter Mobile Number')}}</label>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <input type="readonly" readonly name="" value="966" class="form-control">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input type="text" class="form-control" name="mobile" value="">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">{{__('Close')}}</button>
                                        <button type="submit" class="btn btn-primary">{{__('Search')}}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>



                    <div class="modal fade" id="modal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="modalLabel">Laravel Cropper Js - Crop Image Before Upload - Tutsmake.com</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="img-container">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <img id="image" src="https://avatars0.githubusercontent.com/u/3456749">
                                            </div>
                                            <div class="col-md-4">
                                                <div class="preview"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                    <button type="button" class="btn btn-primary" id="crop">Crop</button>
                                </div>
                            </div>
                        </div>
                    </div>


			    </div>
                <!-- footer content -->
                <footer>
                    <div class="pull-right">
                    {{ __('Copyrights Reserved To YaaFood Co.') }}
                    </div>
                    <div class="clearfix"></div>
                </footer>
                <!-- /footer content -->
            </div>
        </div>
@endsection
@section('scriptsBottom')
    @vite(['resources/js/admin-portal-scripts.js'])
@endsection
