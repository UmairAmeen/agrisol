<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="light-style layout-compact layout-navbar-fixed layout-menu-fixed" dir="ltr" data-theme="theme-default" data-assets-path="https://demos.pixinvent.com/materialize-html-laravel-admin-template/demo/assets/" data-base-url="https://demos.pixinvent.com/materialize-html-laravel-admin-template/demo-1" data-framework="laravel" data-template="vertical-menu-theme-default-light">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
  
    <title>{{ config('app.name', 'Smart-AgriSol') }}</title>

    <link rel="shortcut icon" href="{{asset('images/logo/logo.png')}}">
  
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;ampdisplay=swap" rel="stylesheet">

    <!-- Icons -->
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/icons/material-design.css')}}" />
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/icons/flag.css')}}" />
    <!-- Auth Pages Styles -->
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/css/page-auth.css')}}">
    <!-- Validation Styles -->
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/plugins/form-validation/umd/styles/index.min.css')}}" />
    <!-- Plugins -->
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/plugins/node-waves/node-waves.css')}}" />
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/plugins/perfect-scrollbar/perfect-scrollbar.css')}}" />
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/plugins/toastr/toastr.css')}}" />
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/plugins/typeahead/typeahead.css')}}" />
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/plugins/apex-charts/apex-charts.css')}}" />
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/plugins/swiper/swiper.css')}}" />
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/plugins/datatables/datatables.css')}}" />
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/plugins/datatables-responsive/datatables-responsive.css')}}" />
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/plugins/datatables-buttons/datatables-buttons.css')}}" />
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/plugins/datatables-checkboxes/datatables.checkboxes.css')}}" />
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/plugins/select2/select2.css')}}" />
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/plugins/sweetalert2/sweetalert2.css')}}" />
    <!-- Styles -->
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/css/core.css')}}"/>
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/css/theme-default.css')}}"/>
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/css/demo.css')}}" />
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/css/cards-statistics.css')}}">
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/css/cards-analytics.css')}}">
    <link rel="stylesheet" href="{{asset('themes/admin-panel/assets/css/page-misc.css')}}">

    <!-- Template Customizer Scripts -->
    <script src="{{asset('themes/admin-panel/assets/js/helpers.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/js/template-customizer.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/js/config.js')}}"></script>

    <!-- <script>
        var APP_URL = {!! json_encode(url('/')) !!}

        window.templateCustomizer = new TemplateCustomizer({
        cssPath: '',
        themesPath: '',
        defaultStyle: "light",
        defaultShowDropdownOnHover: "true", // true/false (for horizontal layout only)
        displayCustomizer: "true",
        lang: 'en',
        pathResolver: function(path) {
            var resolvedPaths = {
            // Core stylesheets
                'core.css': APP_URL+'themes/admin-panel/assets/css/core.css',
                'core-dark.css': APP_URL+'themes/admin-panel/assets/css/core-dark.css',
            
            // Themes
                'theme-default.css': APP_URL+'themes/admin-panel/assets/css/theme-default.css',
                'theme-default-dark.css': APP_URL+'themes/admin-panel/assets/css/theme-default-dark.css',
                'theme-bordered.css': APP_URL+'themes/admin-panel/assets/css/theme-bordered.css',
                'theme-bordered-dark.css': APP_URL+'themes/admin-panel/assets/css/theme-bordered-dark.css',
                'theme-semi-dark.css': APP_URL+'themes/admin-panel/assets/css/theme-semi-dark.css',
                'theme-semi-dark-dark.css': APP_URL+'themes/admin-panel/assets/css/theme-semi-dark-dark.css',
                    }
            return resolvedPaths[path] || path;
        },
        'controls': ["rtl","style","headerType","contentLayout","layoutCollapsed","layoutNavbarOptions","themes"],
        });
    </script> -->

</head>
<body>
    @if(Route::current()->getName() == 'comming-soon')
        @yield('admin-content')
    @else
        @guest
            <div class="position-relative">
                <div class="authentication-wrapper authentication-basic container-p-y">
                    <div class="authentication-inner py-4">
                        @yield('admin-content')
                    </div>
                </div>
            </div>
        @else
        <div class="layout-wrapper layout-content-navbar ">
            <div class="layout-container">
                @include('includes.admin_sidebar')
                <div class="layout-page">
                    @include('includes.admin_navbar')
                    <div class="content-wrapper">
                        @yield('admin-content')
                        @include('includes.admin_footer')
                        <div class="content-backdrop fade"></div>
                    </div>
                </div>
            </div>
              <!-- Overlay -->
    <div class="layout-overlay layout-menu-toggle"></div>
        <!-- Drag Target Area To SlideIn Menu On Small Screens -->
    <div class="drag-target"></div>
        </div>
        @endif
    @endif
    <!-- Scripts -->
    <script src="{{asset('themes/admin-panel/assets/plugins/jquery/jquery.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/plugins/popper/popper.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/plugins/bootstrap/js/bootstrap.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/plugins/node-waves/node-waves.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/plugins/perfect-scrollbar/perfect-scrollbar.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/plugins/toastr/toastr.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/plugins/hammer/hammer.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/plugins/typeahead/typeahead.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/js/menu.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/plugins/apex-charts/apexcharts.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/plugins/swiper/swiper.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/js/main.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/js/dashboards-analytics.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/plugins/datatables/datatables.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/plugins/select2/select2.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/plugins/sweetalert2/sweetalert2.js')}}"></script>
    <!-- Validation Scripts -->
    <script src="{{asset('themes/admin-panel/assets/plugins/form-validation/umd/bundle/popular.min.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/plugins/form-validation/umd/plugin-bootstrap5/index.min.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/plugins/form-validation/umd/plugin-auto-focus/index.min.js')}}"></script>
    <script src="{{asset('themes/admin-panel/assets/js/form-validator.js')}}"></script>

    @yield('script')

</body>
</html>

<script type="text/javascript">
    $(document).ready(function(){
        $(".main").removeClass("active open");
        $(".menu-item.active").closest('.main').addClass("active open");
    });
    $(document).on("submit", "form", function (e) {
        form = $(this);
        if ($(form).hasClass('no-ajax')) {return;}
        e.preventDefault();
        form_submit(form);
    });
    function spinner_start(e) {
        $(e).prepend('<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>');
    }
    function spinner_end(e) {
        $(e).find('.spinner-grow').remove();
    }
    var old_request = false;
    var form;
    function form_submit(form) {
        submit_btn = $(form).find("button[type=submit]");   
        $(submit_btn).addClass('disabled');//disable submit button
        spinner_start(submit_btn);
        
        try {
            if(old_request) {
                old_request.abort();
            }                
        } catch (e) {
            console.log(e);//nothing to do
        }
        old_request = $.ajax({
            url: $(form).attr('action'),
            data: $(form).serialize(),
            method: $(form).attr('method'),
            dataType: "json"
        }).done(function(resp) {
            if(resp.message)
                {
                    toastr.success(resp.message);
                }
            
            if (resp.action) {
                setTimeout(function(){callback(resp.action, resp.do, resp.val, resp.text, resp.script);}, 1000);
            }
        }).fail(function(e) {
            IS_JSON = false;
            var obj = "";
            try {
                var obj = $.parseJSON(e.responseText);
                IS_JSON = true;
            } catch(err) {
                IS_JSON = false;
            }
            if (IS_JSON) {
                if(obj.errors)
                {
                    $.each(obj.errors, function(key,value) {
                        toastr.error(value);
                    });
                }
                else{
                    $.each(obj.message, function(key,value) {
                        toastr.error(value);
                    });
                }
            } else {
                try {
                    if (e.responseJSON.message) {
                        toastr.error(e.responseJSON.message);
                    } else {
                        toastr.error("Some Error Occured, Try Again");
                    }                        
                } catch(err) {
                    toastr.error("Some Error Occured, Try Again or Call our helpline");
                }
            }
        }).always(function() {
            spinner_end(submit_btn);
            $(submit_btn).removeClass('disabled');
        });
    };

    function callback(action, data, vali=false, text=false, extra_script=false) {
        switch(action) {
            case 'redirect':
                window.location = data;
                return;
            case 'reload':
                window.location.reload();
                return;
            case 'reset':
                resetForm(data, vali, text);
                break;
            case 'same_state_datable_reload':
                var table = $(data).DataTable();
                table.ajax.reload( null, false );

                // if instance not null or undefined
                if (typeof(instance) != "undefined" && instance != null) {
                    instance.refresh();
                }
            break;
            case 'dismiss':
                if (extra_script) {
                    extra_script();
                }
                if (text) {
                    // debugger
                    $(data).append('<option value="'+vali+'" >'+text+"</option>");
                    $(data).trigger('change'); 
                }
                // debugger;
                $(data).val(vali).trigger('change');
                $(".modal").modal("hide");
                $(".modal").find("form").each(function(index, ele){
                    $(ele).find("#log").html("");
                    $(ele)[0].reset();
                });
                return;
            case 'update':
                // $(data).dataTable('refresh');
                var table = $(data).DataTable();
                table.ajax.reload();
                $("[role=dialog]").modal('hide');
                if (typeof(instance) != "undefined" && instance != null) {
                    instance.refresh();
                }
                return;
        }
    }
    function resetForm(data, vali, text) {
        $("form")[0].reset();
    }
</script>