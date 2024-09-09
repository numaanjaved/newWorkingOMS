@extends('layouts.master')
@section('title')
    {{ __('Yaa Food') }}
@endsection
@section('stylesheetAndScripts')
    <link rel="stylesheet" href="{{asset('css/onlinewebfonts.css')}}" type="text/css"/>
    <link rel="stylesheet" href="{{asset('css')}}/{{__('css')}}">
    <link rel="stylesheet" href="//stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    {{-- <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" /> --}}
    <script src="//code.jquery.com/jquery-3.5.1.min.js"></script>

@endsection
@section('style')
    <link rel="stylesheet" href="{{asset('css/home.css')}}">
@endsection
@section('meta')
@if(isset($page_check))
    <meta name="title" content="Yaa Foods {{(isset($page['seo_title']))?$page['seo_title']: 'Yaa Foods, Yaa Foods'}}" />
    <meta name="description" content="Yaa Foods {{(isset($page['seo_description']))?$page['seo_description']: 'Yaa Foods, Yaa Foods'}}">
    <meta name="keywords" content="Yaa Foods {{(isset($page['meta_tags']))?$page['meta_tags']: 'Yaa Foods, Yaa Foods'}}">
@endif
@endsection
@section('content')
<div class="container">
    <div class="row justify-content-center" style="{{__('style')}}">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">{{__('Dashboard')}}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{__('You are logged in!')}}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
