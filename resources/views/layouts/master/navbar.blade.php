<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top border">
	<div class="container" {{__('direction-align')}}>
		<div>
            {{-- route('dhome') --}}
			<a href="{{route('index')}}"><img src="{{ asset('images/YaaLogo.svg') }}" alt="Yaa" width="43"></a>
        </div>
        @include('partials.language_switcher')
        @include('partials.login')
        <div class="row">
        	{{-- @if(isset($hide_search) && $hide_search == 1)

	        @else --}}
                {{-- <div class="show-search-div">
                        <img src="{{asset('images/search.svg')}}" class="show-search-icon" id="show-search" onclick="show();">
                    </div>
                    <div> --}}
                        {{-- route('search.product') --}}
                        {{-- <form action="" method="POST">
                            {{csrf_field()}}

                            <div class="input-group">
                                <div class="row" id="search-input-div" style="display: none;">
                                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                        <input autocomplete="off" onkeyup="fruitSearch()" id="search-input" name="search-input" type="search" class="text-right-align" style="padding: 3px 5px;border-radius: 3px;border: 1px solid grey;" placeholder="{{__('Search..')}}" value="{{isset($input)?__($input):''}}" />
                                        <button type="submit" id="search-button" class="search-button">
                                            <img src="{{asset('images/search.svg')}}">
                                        </button>
                                        <img src="{{asset('images/search-close.svg')}}" class="search-close" id="" onclick="hide();">
                                    </div>
                                </div>

                                <div id="search_result">
                                    <ul class="list-group search-result-div" id="fruits">
                                        @foreach ($search_data['categories'] as $key => $value)
                                            <li class="list-group-item"><a href="{{route('home',['category'=>$value['category_id']])}}" style="color:#5154A5;">{{\App\Language::translate($value['category_name'])}}</a></li>
                                        @endforeach
                                        @foreach ($search_data['products'] as $key => $value)
                                            <li class="list-group-item">
                                                <a href="{{route('product.detail',['productId'=>$value['product_id'],'name'=>\App\Language::translate( $value['product_name'] )])}}">
                                                    <div class="row">
                                                        <div class="col-lg-3 col-md-3 col-sm-3 col-3" style="padding: 1px;">
                                                            @if(isset($value['web_path']) && $value['web_path'] != '')
                                                                <img src="{{asset($value['web_path'])}}" alt="" style="width: 100%;height: 60px;">
                                                            @else
                                                                <img src="{{asset('public/uploads/products/yaa-dummy-image.png')}}" alt="" style="width: 40px;height: 60px;">
                                                            @endif
                                                        </div>
                                                        <div class="col-lg-9 col-md-9 col-sm-9 col-9">
                                                            <div>
                                                                <!--Check-->
                                                                <label style="font-weight: 100px;color:#5154A5;cursor: pointer;">
                                                                    {{\App\Language::translate($value['product_name'])}}
                                                                </label>
                                                            </div>
                                                            <div>
                                                                @if(isset($hide_price) && $hide_price == 1)
                                                                    <label style="display:none; color:#5154A5;cursor: pointer;">
                                                                        {{\App\Price::tostring($value['price'])}}
                                                                    </label>
                                                                @else
                                                                    <label style="color:#5154A5;cursor: pointer;">
                                                                        {{\App\Price::tostring($value['price'])}}
                                                                    </label>
                                                                @endif
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        @endforeach
                                    </ul>
                                </div>
                            </div>

                        </form> --}}
                {{-- </div> --}}
	        {{-- @endif --}}
            <div class="collapse navbar-collapse head-m" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item mr-1">

                    </li>
                </ul>
            </div>

			<form class="form-inline my-lg-0">
				{{--
                route('checkout')
                <a href="" title="" class="pl-1 rounded-1">
					<img src="{{ asset('public/images/nav-cart-icon.svg') }}">
					@if(isset($itemCount) && $itemCount > 0)
						<span class='badge cart_count cart-icon'>
									{{ isset($itemCount) && $itemCount > 0 ? $itemCount : ''}}
								</span>
					@else
						<span class='badge cart_count cart-icon' style="display: none;">
									{{ isset($itemCount) && $itemCount > 0 ? $itemCount : ''}}
								</span>
					@endif
				</a> --}}

			</form>
	    </div>

	</div>
</nav>
