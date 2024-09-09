<div class="bg-foot1 text-white pt-2">
                    <div class="container">
                        <div class="row" {{__('dir')}}>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 text-right-align">
                                <div class="mb-2 font-size">
                                    {{-- route('pages',['title'=>'about-us']) --}}
                                    <a href="{{route('about')}}" class="text-white">{{ __('ABOUT US') }}</a>
                                </div>
                                <div class="mb-2 font-size">
                                    {{-- route('contact.us') --}}
                                    <a href="{{route('contact')}}" class="text-white">{{ __('CONTACT US') }}</a>
                                </div>
                                <div class="mb-2 font-size">
                                    {{-- route('contact.sales') --}}
                                    <a href="{{route('contact')}}" class="text-white">{{ __('CONTACT SALES') }}</a>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-5 col-md-5 mob-foot-display">
                            </div>

                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-6 text-right-align">
                                <div class="mb-2 font-size">
                                    {{ __('FOLLOW US') }}
                                </div>

                                <div class="">
                                    {{-- @php
                                        $socialMediaOptions = (new \App\Model\Option)->socialMediaLinks()->all();

                                    @endphp
                                    @forelse($socialMediaOptions as $option)
                                        <a href="{{$option->option_value}}" target="_blank"><img src="{{ asset('public/images/'.$option->option_name.'.svg') }}" alt="{{$option->option_name}}"></a>
                                    @empty
                                    @endforelse --}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-foot2 text-white pt-1 pb-1">
                    <div class="container">
                        <div class="row" {{__('dir')}}>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 text-right-align">
                                &copy;&nbsp;{{ __('Yaa') }}&nbsp;{{date('Y')}}
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6" {{__('text-align-right')}}>
                                {{-- route('terms.conditions') --}}
                                <a class="text-white" href="">
                                    {{ __('Terms & Conditions') }}
                                </a> |
                                {{-- route('privacy.policy') --}}
                                <a class="text-white" href="">
                                    {{ __('Privacy Policy') }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
