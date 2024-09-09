<div class="flex justify-center pt-8 sm:justify-start sm:pt-0">
    @foreach($available_locales as $locale_name => $available_locale)

        @if($available_locale != $current_locale)
            <a class="ml-1 underline ml-2 mr-2" href="{{route( 'language.switcher', [ 'locale' =>$available_locale ]) }}">
                <img src="{{ asset('images')}}/{{__('opposite-navbar-language-svg') }}" alt="" class="lang-mob">
                <img src="{{ asset('images')}}/{{__('opposite-navbar-symbol-language-svg') }}" alt="" class="lang-icon-mob">
                <label class="lang-mob" style="cursor: pointer;">{{__('opposite-language-symbol')}}</label>
            </a>
        @endif
    @endforeach
</div>
