@extends('layouts.master')
@section('title')
    {{ __('About Us | Yaa Food') }}
@endsection
@section('stylesheetAndScripts')

@endsection
@section('style')
    <link rel="stylesheet" href="{{asset('css')}}/{{__('css')}}">

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
    	<div class="row">
    		<div class="col-lg-12 col-md-12 col-sm-12 col-12">

					<div class="text-center mb-4">
						<b class="pages-heading h3">{{__('ABOUT US')}}</b>
					</div>

    		</div>
		</div>
		<div class="bg-white" {{__('style')}}>
		    <h1>{{__('Coming Soon')}}</h1>
		</div>
    </div>

	<script>
	$( document ).ready(function() {
    $('#csrf_token').val("{{csrf_token()}}");
	});
	</script>
@endsection
