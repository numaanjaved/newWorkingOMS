@extends('layouts.master')
@section('title')
    {{ __('Yaa Food') }}
@endsection
@section('stylesheetAndScripts')

@endsection
@section('style')
    @if(App::isLocale('en'))
        @vite(['resources/js/yaa.js'])
    @elseif(App::isLocale('ar'))
        @vite(['resources/js/yaa_rtl.js'])
    @endif
    @vite(['resources/js/costumer-portal.js'])
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
		<div class="row" {{__('style')}}>
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style="background-color: white;">

				<div class="row">
					<div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mob-text-center mob-dhome-margin">
						<label class="label1-home">{{__("Hi Alef.. We Are Yaa")}}</label>
                        <img src="{{ asset('images/YaaLogo.svg') }}" alt="Yaa logo" class="home-logo-img"><br>
						<label class="label2-home">{{__("Your daily fruits and")}}</label><br>
						<label class="label2-home">{{__("vegetables needs..")}}</label><br>
						<label class="label2-home">{{__("and more!")}}</label>
						<div class="row">
							<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
								<button class="btn-ord-home order-now-web" onclick="">{{__('order-now')}}</button>

                            </div>
						</div>
					</div>
					<div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 mob-text-center">
						<img src="{{ asset('images')}}/{{__('bg-phone')}}" alt="" class="bg-phone-en">
					</div>
				</div>
			</div>
		</div>
	</div>


<script>

</script>
@endsection
