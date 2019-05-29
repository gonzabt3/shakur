<!doctype html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="shortcut icon" type="image/png" href="../images/favIcon.png"/>
    <title>Shakur</title>
</head>
<body>
<div id="mute"></div>
<div id="app"></div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
