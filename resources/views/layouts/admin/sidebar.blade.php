<!-- sidebar menu -->
                        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                            <div class="menu_section">

                                <ul class="nav side-menu">
                                    {{-- route('admin.dashboard') --}}
                                    <li><a href=""><span class="fa fa-tachometer"></span>{{__('Dashboard')}}</a>
                                    </li>

                                    <li><a>{{__('Oms Configuration')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.option') --}}
                                            <li><a href="">{{__('Configurations')}}</a></li>
                                            {{-- route('admin.privacy') --}}
                                            <li><a href="">{{__('Privacy Policy')}}</a></li>
                                            {{-- route('admin.payment') --}}
                                            <li><a href="">{{__('Payment Method')}}</a></li>
                                            {{-- route('admin.contact') --}}
                                            <li><a href="">{{__('Contact')}}</a></li>
                                            {{-- route('admin.refund') --}}
                                            <li><a href="">{{__('Refund')}}</a></li>
                                            {{-- route('admin.checkout') --}}
                                            <li><a href="">{{__('Checkout')}}</a></li>
                                            {{-- route('admin.version') --}}
                                            <li><a href="">{{__('Android/iOS Version')}}</a></li>
                                            {{-- route('admin.delivery.fee') --}}
                                            <li><a href="">{{__('Delivery Fee Managment')}}</a></li>
                                        </ul>
                                    </li>

                                    <li><a>{{__('Location')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.city') --}}
                                            <li><a href="">{{__('Cities')}}</a></li>
                                            {{-- route('admin.area') --}}
                                            <li><a href="">{{__('Areas')}}</a></li>
                                            {{-- route('admin.city.add') --}}
                                            <li><a href="">{{__('Add City')}}</a></li>
                                            {{-- route('admin.area.add') --}}
                                            <li><a href="">{{__('Add Area')}}</a></li>
                                        </ul>
                                    </li>

                                    <li><a>{{__('User Group')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.user.groups') --}}
                                            <li><a href="">{{__('User groups')}}</a></li>
                                            {{-- route('admin.user.group.add') --}}
                                            <li><a href="">{{__('Add User Group')}}</a></li>
                                        </ul>
                                    </li>

                                    <li><a>{{__('User')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.user') --}}
                                            <li><a href="">{{__('Users')}}</a></li>
                                            {{-- route('admin.user.add') --}}
                                            <li><a href="">{{__('Add User')}}</a></li>
                                        </ul>
                                    </li>
                                    <li><a>{{__('User Role')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.user.roles') --}}
                                            <li><a href="">{{__('User roles')}}</a></li>
                                            {{-- route('admin.user.role.add') --}}
                                            <li><a href="">{{__('Add User Role')}}</a></li>
                                        </ul>
                                    </li>

                                    <li><a>{{__('Category')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.category') --}}
                                            <li><a href="">{{__('Categories')}}</a></li>
                                            {{-- route('admin.category.add') --}}
                                            <li><a href="">{{__('Add Category')}}</a></li>
                                            {{-- route('admin.category.display') --}}
                                            <li><a href="">{{__('Sort Categories')}}</a></li>
                                        </ul>
                                    </li>

                                    <li><a>{{__('Product')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.product') --}}
                                            <li><a href="">{{__('Products')}}</a></li>
                                            {{-- route('admin.product.add') --}}
                                            <li><a href="">{{__('Add Product')}}</a></li>
                                            {{-- route('admin.product.display') --}}
                                            <li><a href="">{{__('Sort Products')}}</a></li>
                                            {{-- route('admin.variant.display') --}}
                                            <li><a href="">{{__('Sort Variants')}}</a></li>
                                            {{-- route('admin.display.allsimilar.product') --}}
                                            <li><a href="">{{__('Similar Products')}}</a></li>
                                            {{-- route('admin.allsimilar.product') --}}
                                            <!-- <li><a href="">{{__('Similar Products')}}</a></li> -->
                                            {{-- route('admin.similar.product') --}}
                                            <li><a href="">{{__('Add Similar Products')}}</a></li>
                                        </ul>
                                    </li>

                                    <li><a>{{__('Channel')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.channel') --}}
                                            <li><a href="">{{__('Channels')}}</a></li>
                                            {{-- route('admin.channel.add') --}}
                                            <li><a href="">{{__('Add Channel')}}</a></li>
                                        </ul>
                                    </li>

                                    <li><a>{{__('Customer Group')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.channel.group') --}}
                                            <li><a href="">{{__('Customer Groups')}}</a></li>
                                            {{-- route('admin.channel.group.add') --}}
                                            <li><a href="">{{__('Customer Group Add')}}</a></li>
                                        </ul>
                                    </li>

                                    <li><a>{{__('Customer')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.customer') --}}
                                            <li><a href="">{{__('Customers')}}</a></li>
                                            {{-- route('admin.customer.add') --}}
                                            <li><a href="">{{__('Add Customer')}}</a></li>

                                            <li><a data-toggle="modal" data-target="#seachCustomer">{{__('Search Customer')}}</a></li>
                                        </ul>
                                    </li>



                                    <!-- <li><a>{{__('Promocode')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.promocode') --}}
                                            <li><a href="">{{__('Promocodes')}}</a></li>
                                            {{-- route('admin.promocode.add') --}}
                                            <li><a href="">{{__('Add Promocode')}}</a></li>
                                        </ul>
                                    </li> -->

                                    <!-- <li><a>{{__('Address')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.address') --}}
                                            <li><a href="">{{__('Addresses')}}</a></li>
                                            {{-- route('admin.address.add') --}}
                                            <li><a href="">{{__('Add Address')}}</a></li>
                                        </ul>
                                    </li> -->


                                    <li><a>{{__('Notification Design')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.template') --}}
                                            <li><a href="">{{__('Notifications')}}</a></li>
                                            {{-- route('admin.template.add') --}}
                                            <li><a href="">{{__('Add Notification')}}</a></li>
                                        </ul>
                                    </li>

                                    <li><a>{{__('Notification Management')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.order.status') --}}
                                            <li><a href="">{{__('Orders Notification')}}</a></li>
                                            {{-- route('admin.order.status.add') --}}
                                            <li><a href="">{{__('Link Notification')}}</a></li>
                                        </ul>
                                    </li>
                                    <li><a>{{__('Order Confirmation Process')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.order.status.default') --}}
                                            <li><a href="">{{__('Set Default Order Status')}}</a></li>
                                        </ul>
                                    </li>


                                    <li><a>{{__('Delivery Slot')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.delivery.slot') --}}
                                            <li><a href="">{{__('Delivery Slots')}}</a></li>
                                            {{-- route('admin.add.page.en') --}}
                                            <!-- <li><a href="">{{__('Add Page English')}}</a></li> -->
                                            {{-- route('admin.add.page.ar') --}}
                                            <!-- <li><a href="">{{__('Add Page Arabic')}}</a></li> -->
                                        </ul>
                                    </li>



                                    <li><a>{{__('Page')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.first.page') --}}
                                            <li><a href="">{{__('Pages')}}</a></li>
                                            {{-- route('admin.add.page.en') --}}
                                            <!-- <li><a href="">{{__('Add Page English')}}</a></li> -->
                                            {{-- route('admin.add.page.ar') --}}
                                            <!-- <li><a href="">{{__('Add Page Arabic')}}</a></li> -->
                                        </ul>
                                    </li>

                                    <li><a>{{__('Revenue Distribution')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.revenue.distribution.threshold.index') --}}
                                            <li><a href="">{{__('Threshold')}}</a></li>
                                            {{-- route('admin.revenue.distribution.type.index') --}}
                                            <li><a href="">{{__('Distribution Types')}}</a></li>
                                            {{-- route('admin.revenue.distribution.participant.type.index') --}}
                                            <li><a href="">{{__('Participant Types')}}</a></li>
                                            {{-- route('admin.revenue.distribution.participant.type.create') --}}
                                            <li><a href="">{{__('Add Participant Type')}}</a></li>
                                        </ul>
                                    </li>

                                    <li><a>{{__('Admin Emails Configuration')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.email.configuration') --}}
                                            <li><a href="">{{__('Email Configurations')}}</a></li>
                                            {{-- route('admin.email.configuration.add') --}}
                                            <li><a href="">{{__('Add Email Configuration')}}</a></li>
                                        </ul>
                                    </li>

                                    <li><a>{{__('Allow IP')}}<span class="fa fa-chevron-down"></span></a>
                                        <ul class="nav child_menu">
                                            {{-- route('admin.ip.list') --}}
                                            <li><a href="">{{__('IP List')}}</a></li>
                                            {{-- route('admin.ip.add') --}}
                                            <li><a href="">{{__('Add IP')}}</a></li>
                                        </ul>
                                    </li>



                                    {{--
                                            <li><a><i class="fa fa-home"></i> Home <span class="fa fa-chevron-down"></span></a>
                                                <ul class="nav child_menu">
                                                    <li><a href="index.html">Dashboard</a></li>
                                                    <li><a href="index2.html">Dashboard2</a></li>
                                                    <li><a href="index3.html">Dashboard3</a></li>
                                                </ul>
                                            </li>
                                            <li><a><i class="fa fa-edit"></i> Forms <span class="fa fa-chevron-down"></span></a>
                                                <ul class="nav child_menu">
                                                    <li><a href="form.html">General Form</a></li>
                                                    <li><a href="form_advanced.html">Advanced Components</a></li>
                                                    <li><a href="form_validation.html">Form Validation</a></li>
                                                    <li><a href="form_wizards.html">Form Wizard</a></li>
                                                    <li><a href="form_upload.html">Form Upload</a></li>
                                                    <li><a href="form_buttons.html">Form Buttons</a></li>
                                                </ul>
                                            </li>
                                            <li><a><i class="fa fa-desktop"></i> UI Elements <span class="fa fa-chevron-down"></span></a>
                                                <ul class="nav child_menu">
                                                    <li><a href="general_elements.html">General Elements</a></li>
                                                    <li><a href="media_gallery.html">Media Gallery</a></li>
                                                    <li><a href="typography.html">Typography</a></li>
                                                    <li><a href="icons.html">Icons</a></li>
                                                    <li><a href="glyphicons.html">Glyphicons</a></li>
                                                    <li><a href="widgets.html">Widgets</a></li>
                                                    <li><a href="invoice.html">Invoice</a></li>
                                                    <li><a href="inbox.html">Inbox</a></li>
                                                    <li><a href="calendar.html">Calendar</a></li>
                                                </ul>
                                            </li>
                                            <li><a><i class="fa fa-table"></i> Tables <span class="fa fa-chevron-down"></span></a>
                                                <ul class="nav child_menu">
                                                    <li><a href="tables.html">Tables</a></li>
                                                    <li><a href="tables_dynamic.html">Table Dynamic</a></li>
                                                </ul>
                                            </li>
                                            <li><a><i class="fa fa-bar-chart-o"></i> Data Presentation <span class="fa fa-chevron-down"></span></a>
                                                <ul class="nav child_menu">
                                                    <li><a href="chartjs.html">Chart JS</a></li>
                                                    <li><a href="chartjs2.html">Chart JS2</a></li>
                                                    <li><a href="morisjs.html">Moris JS</a></li>
                                                    <li><a href="echarts.html">ECharts</a></li>
                                                    <li><a href="other_charts.html">Other Charts</a></li>
                                                </ul>
                                            </li>
                                            <li><a><i class="fa fa-clone"></i>Layouts <span class="fa fa-chevron-down"></span></a>
                                                <ul class="nav child_menu">
                                                    <li><a href="fixed_sidebar.html">Fixed Sidebar</a></li>
                                                    <li><a href="fixed_footer.html">Fixed Footer</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="menu_section">
                                        <h3>Live On</h3>
                                        <ul class="nav side-menu">
                                            <li><a><i class="fa fa-bug"></i> Additional Pages <span class="fa fa-chevron-down"></span></a>
                                                <ul class="nav child_menu">
                                                    <li><a href="e_commerce.html">E-commerce</a></li>
                                                    <li><a href="projects.html">Projects</a></li>
                                                    <li><a href="project_detail.html">Project Detail</a></li>
                                                    <li><a href="contacts.html">Contacts</a></li>
                                                    <li><a href="profile.html">Profile</a></li>
                                                </ul>
                                            </li>
                                            <li><a><i class="fa fa-windows"></i> Extras <span class="fa fa-chevron-down"></span></a>
                                                <ul class="nav child_menu">
                                                    <li><a href="page_403.html">403 Error</a></li>
                                                    <li><a href="page_404.html">404 Error</a></li>
                                                    <li><a href="page_500.html">500 Error</a></li>
                                                    <li><a href="plain_page.html">Plain Page</a></li>
                                                    <li><a href="login.html">Login Page</a></li>
                                                    <li><a href="pricing_tables.html">Pricing Tables</a></li>
                                                </ul>
                                            </li>
                                            <li><a><i class="fa fa-sitemap"></i> Multilevel Menu <span class="fa fa-chevron-down"></span></a>
                                                <ul class="nav child_menu">
                                                    <li><a href="#level1_1">Level One</a>
                                                    <li><a>Level One<span class="fa fa-chevron-down"></span></a>
                                                        <ul class="nav child_menu">
                                                            <li class="sub_menu"><a href="level2.html">Level Two</a>
                                                            </li>
                                                            <li><a href="#level2_1">Level Two</a>
                                                            </li>
                                                            <li><a href="#level2_2">Level Two</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#level1_2">Level One</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li><a href="javascript:void(0)"><i class="fa fa-laptop"></i> Landing Page <span class="label label-success pull-right">Coming Soon</span></a></li>
                                    --}}

                                </ul>
                            </div>
                        </div>
                        <!-- /sidebar menu -->
