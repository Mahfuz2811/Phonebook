<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Phonebook</title>
	<link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
</head>
<body>
	<div id="app">

		<myheader></myheader>

		<div class="container">

			<router-view></router-view>
			<add></add>
			
		</div>
			
		<myfooter></myfooter>
		
	</div>

	<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>