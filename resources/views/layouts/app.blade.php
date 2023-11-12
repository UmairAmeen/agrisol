<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{ config('app.name', 'Smart-AgriSol') }}</title>
    <link rel="shortcut icon" href="{{asset('images/logo/logo.png')}}">
    <!-- Fonts -->
    <link rel="preload" as="style" href="https://fonts.googleapis.com/css?family=Roboto%3A400%2C700%7CRoboto%20Slab%3A400%2C700&amp;subset=latin%2Clatin-ext&amp;display=swap" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3A400%2C700%7CRoboto%20Slab%3A400%2C700&amp;subset=latin%2Clatin-ext&amp;display=swap" media="print" onload="this.media='all'" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto%3A400%2C700%7CRoboto%20Slab%3A400%2C700&amp;subset=latin%2Clatin-ext&amp;display=swap" />
     <!-- Plugins -->
    <link type='text/css' href="{{asset('themes/landing-pages/assets/plugins/bootstrap/css/bootstrap.custom.min.css')}}" rel="stylesheet">
    <!-- Styles -->
    <link type='text/css' href="{{asset('themes/landing-pages/assets/css/style.css')}}" rel="stylesheet">
    <link type='text/css' href="{{asset('themes/landing-pages/assets/css/main.css')}}" rel="stylesheet">
    <link type='text/css' href="{{asset('themes/landing-pages/assets/css/flex.css')}}" rel="stylesheet">
    <link type='text/css' href="{{asset('themes/landing-pages/assets/css/settings.css')}}" rel="stylesheet"/>
    <link type='text/css' href="{{asset('themes/landing-pages/assets/css/fontello.css')}}" rel="stylesheet"/>
    <link type='text/css' href="{{asset('themes/landing-pages/assets/css/gallery.css')}}" rel="stylesheet">
    <!-- Icons -->
    <link type='text/css' href="{{asset('themes/landing-pages/assets/icon/font-awesome/css/font-awesome.css')}}" rel="stylesheet">
</head>
<body>

    <div>
        @include('includes.header')
        @yield('content')
        @include('includes.footer')
    </div>

    <!-- Scripts -->
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/plugins/jquery/js/jquery.min.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/plugins/jquery/js/jquery-migrate.min.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/plugins/bootstrap/js/bootstrap.custom.min.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/underscore.min.js')}}"></script>
    <script type='text/javascript'>var TheLandscaper = {};</script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/main.js')}}"></script>
    <script type='text/javascript'>
      var panelsStyles = {
        "fullContainer": "body",
        "stretchRows": "1"
      };
    </script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/styling.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/gallery.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/rbtools.js')}}"></script>
    <script type='text/javascript' src="{{asset('themes/landing-pages/assets/js/esg.js')}}"></script>
    @yield('script')

</body>
</html>
