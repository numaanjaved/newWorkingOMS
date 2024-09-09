@extends('layouts.master')
@section('title')
    {{ __('Contact Us | Yaa Food') }}
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
        <div class="row" style="background-color: white;margin-top: 30px; margin-bottom: 30px;padding: 50px 70px;">
            @if(is_array($errors) && count($errors) > 0)
                <div class="error-container">
                    <div class="alert alert-danger">
                        <button class="close" data-dismiss="alert" aria-label="close">&times;</button>
                        <ul class="errors">
                        <li><?php echo implode('</li><li>', $errors) ?></li>
                        </ul>
                    </div>
                </div>
            @elseif (isset($message))
                <div>
                    {{ $message }}
                </div>
            @endif
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="row mb-3">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                        <h4 style="color: #272F7D;">{{__('CONTACT US')}}</h4>
                    </div>
                </div>
                <form action="" method="POST" id="contact_form">
                    @csrf()
                    <div class="row mb-3 " {{__('direction-align')}}>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-5">
                            <label for="name" >{{ __('Name') }}:</label>
                        </div>
                        <div class=" col-lg-6 col-md-6 col-sm-12 col-7">
                            <input type="text" id="" name="contact[name]" autofocus placeholder="{{__('Name')}}" class="form-control" required
                            value="{{ (isset($customer) && isset($customer['name'])) ? $customer['name'] : '' }}">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            &nbsp;
                        </div>
                    </div>

                    <div class="row mb-3" {{__('direction-align')}}>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-5">
                            <label for="subject" >{{ __('Subject') }}:</label>
                        </div>
                        <div class=" col-lg-6 col-md-6 col-sm-12 col-7">
                            <input type="text" id="" name="contact[subject]"  placeholder="{{__('Subject')}}" class="form-control" value="" required>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            &nbsp;
                        </div>
                    </div>

                    <div class="row mb-3" {{__('direction-align')}}>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-5">
                            <label for="email" >{{ __('Email') }}:</label>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-7">
                            <input type="email" id="" name="contact[email]" placeholder="{{ __('Email') }}" class="form-control" required
                            value="{{ (isset($customer) && isset($customer['email'])) ? $customer['email'] : '' }}">
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            &nbsp;
                        </div>
                    </div>

                    <div class="row mb-3" {{__('direction-align')}}>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-5">
                            <label for="contact" >{{ __('Contact') }}:</label>
                        </div>
                        <div class=" col-lg-6 col-md-6 col-sm-12 col-7">
                            <input type="text" id="contact" name="contact[contact]" class="form-control"  maxLength="12" placeholder="966xxxxxxxxx" required
                            value="{{ (isset($customer) && isset($customer['mobile'])) ? $customer['mobile'] : '' }}">
                            <span class="mb_error" style="color:red;font-size:12px"></span>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            &nbsp;
                        </div>
                    </div>

                    <div class="row mb-3" {{__('direction-align')}}>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-5">
                            <label for="message" >{{ __('How can we help?') }}</label>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-7">
                            <textarea type="textarea"  id="" name="contact[message]" value="" required rows="5" placeholder="{{ __('Message') }}" class="form-control"></textarea>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            &nbsp;
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 col-5">
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-7">
                            <button type="submit" class="btn btn-block" style="background-color: #5154A5;color: white;" id="contact_submit">{{ __('Submit') }}</button>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            &nbsp;
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection
