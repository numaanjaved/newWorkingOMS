<!-- top navigation -->
<div class="top_nav">

    <div class="nav_menu">
      <nav>
        <div class="nav toggle">
          <a id="menu_toggle"><i class="fa fa-bars"></i></a>
        </div>
        <h2 class="page-title">@section("title") Adminstrator Dashboard @endsection</h2>
        <ul class="nav navbar-nav navbar-right">
          <li class="">
            <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <!--<img src="images/img.jpg" alt="">John Doe -->
                @if(null !== Auth::user())
                 {{ ucwords(Auth::user()->first_name) }} {{ ucwords(Auth::user()->last_name) }}
                @endif
              <span class=" fa fa-angle-down"></span>
            </a>
            <ul class="dropdown-menu dropdown-usermenu pull-right">
              <!--<li><a href="javascript:;"> Profile</a></li>
              <li>
                <a href="javascript:;">
                  <span class="badge bg-red pull-right">50%</span>
                  <span>Settings</span>
                </a>
              </li>
                          <li><a href="javascript:;">Help</a></li>-->
                          {{-- route('admin.logout') --}}
              <li><a href=""><i class="fa fa-sign-out pull-right"></i>{{__('Log Out')}}</a></li>
            </ul>
          </li>

          <ul class="nav navbar-nav navbar-right">
            <li class="">
              <a href="" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <!--<img src="images/img.jpg" alt="">John Doe -->
                {{__('Language')}}
                <span class=" fa fa-angle-down"></span>
              </a>
              <ul class="dropdown-menu dropdown-usermenu pull-right">
                <!--<li><a href="javascript:;"> Profile</a></li>
                <li>
                  <a href="javascript:;">
                    <span class="badge bg-red pull-right">50%</span>
                    <span>Settings</span>
                  </a>
                </li>
                            <li><a href="javascript:;">Help</a></li>-->
                            {{-- route('language.switch', ['locale'=> 'en']) --}}
                <li><a href=""><i class=" "></i>English</a></li>
                {{-- route('language.switch', ['locale'=> 'ar']) --}}
                <li><a href=""><i class=" "></i>عربى</a></li>
              </ul>
            </li>

<!--
          <li role="presentation" class="dropdown">
            <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
              <i class="fa fa-envelope-o"></i>
              <span class="badge bg-green">6</span>
            </a>

            <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
              <li>
                <a>
                  <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                  <span>
                    <span>John Smith</span>
                    <span class="time">3 mins ago</span>
                  </span>
                  <span class="message">
                    Film festivals used to be do-or-die moments for movie makers. They were where...
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                  <span>
                    <span>John Smith</span>
                    <span class="time">3 mins ago</span>
                  </span>
                  <span class="message">
                    Film festivals used to be do-or-die moments for movie makers. They were where...
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                  <span>
                    <span>John Smith</span>
                    <span class="time">3 mins ago</span>
                  </span>
                  <span class="message">
                    Film festivals used to be do-or-die moments for movie makers. They were where...
                  </span>
                </a>
              </li>
              <li>
                <a>
                  <span class="image"><img src="images/img.jpg" alt="Profile Image" /></span>
                  <span>
                    <span>John Smith</span>
                    <span class="time">3 mins ago</span>
                  </span>
                  <span class="message">
                    Film festivals used to be do-or-die moments for movie makers. They were where...
                  </span>
                </a>
              </li>
              <li>
                <div class="text-center">
                  <a>
                    <strong>See All Alerts</strong>
                    <i class="fa fa-angle-right"></i>
                  </a>
                </div>
              </li>
            </ul>
          </li> -->
        </ul>
      </nav>
    </div>
  </div>
  <!-- /top navigation -->
