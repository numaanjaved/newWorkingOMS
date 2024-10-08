
@if (Route::has('customer.login'))
            <div class="top-right links">
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    @guest
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('customer.login') }}">{{ __('Login') }}</a>
                        </li>
                        @if (Route::has('customer.register'))
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('customer.register') }}">{{ __('Register') }}</a>
                            </li>
                        @endif
                    @else
                        {{-- <li class="nav-item dropdown"> --}}
                            {{-- <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                {{ Auth::user()->name }} <span class="caret"></span>
                            </a> --}}
                            <div class=nav-item>{{Auth::user()->name}}</div>
                            <div class="nav-item">
                                <a class="dropdown-item" href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                 document.getElementById('logout-form').submit();">
                                    {{ __('Logout') }}
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    @csrf
                                </form>
                            </div>
                        {{-- </li> --}}
                    @endguest
                </ul>
            </div>
        @endif
