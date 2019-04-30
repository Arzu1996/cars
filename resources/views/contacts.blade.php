<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
        <link rel="stylesheet" type="text/css" href="{{asset('css/style.css')}}" />
        <link rel="stylesheet" type="text/css" href="{{asset('css/style980.css')}}" />
        <link rel="stylesheet" type="text/css" href="{{asset('css/style800.css')}}" />
        <link rel="stylesheet" type="text/css" href="{{asset('css/style700.css')}}" />
        <link rel="stylesheet" type="text/css" href="{{asset('css/style600.css')}}" />
        <link rel="stylesheet" type="text/css" href="{{asset('css/style500.css')}}" />
        <link rel="stylesheet" type="text/css" href="{{asset('css/style400.css')}}" />
        <link rel="stylesheet" type="text/css" href="{{asset('css/jquery.fancybox-1.3.4.css')}}" media="screen" />
            </style>
    </head>
    <body>
        <div id="app"></div>
        <script src="{{asset('js/app.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/jquery-1.8.3.min.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/jquery.easing.1.3.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/jquery.bxslider.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/jquery.mousewheel.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/jquery.selectik.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/jquery.fancybox-1.3.4.pack.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/jquery.countdown.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/jquery.checkbox.js')}}"></script>
        <script type="text/javascript" src="{{asset('js/js.js')}}"></script>
    </body>
</html>