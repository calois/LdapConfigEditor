<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <n:css src="/resources/css/vendor/bootstrap.css"/>
        <style>
            body {
                padding-top: 50px;
                padding-bottom: 20px;
            }
        </style>
        <n:css src="/resources/css/vendor/bootstrap-theme.css"/>
        <n:css src="/resources/css/vendor/angular-ui-tree.min.css"/>
        <n:css src="/resources/css/vendor/demo.css"/>
        <n:css src="/resources/css/vendor/jquery.qtip.css"/>
        <n:css src="/resources/css/main.css"/>
		<n:js src="/resources/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"/>
		<n:js src="/resources/js/vendor/jquery-1.11.1.js"/>
		<n:js src="/resources/js/vendor/jquery.qtip.js"/>
		<n:js src="/resources/js/vendor/bootstrap.js"/>
		<n:js src="/resources/js/vendor/angular.js"/>
		<n:js src="/resources/js/vendor/angular-resource.js"/>
		<n:js src="/resources/js/vendor/angular-cookies.js"/>
		<n:js src="/resources/js/vendor/angular-animate.js"/>
		<n:js src="/resources/js/vendor/angular-sanitize.js"/>
		<n:js src="/resources/js/vendor/angular-route.js"/>
		<n:js src="/resources/js/vendor/angular-ui-router.js"/>
		<n:js src="/resources/js/vendor/angular-ui-tree.js"/>
		<n:js src="/resources/js/vendor/loading-bar.js"/>
		<n:js src="/resources/js/vendor/toastr.js"/>
		<n:js src="/resources/js/vendor/ui-bootstrap-tpls-0.12.0.js"/>
		<n:js src="/resources/js/application.js"/>
		<n:js src="/resources/js/utils.js"/>
		<n:js src="/resources/js/controller.js"/>
		<script>
			utils.ctx = '${ctx}';
		</script>
    </head>
    <body data-ng-app="app"  data-ng-controller="SiteCtrl">
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
		<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed"
						data-toggle="collapse" data-target="#navbar" aria-expanded="false"
						aria-controls="navbar">
						<span class="sr-only">Toggle navigation</span> <span
							class="icon-bar"></span> <span class="icon-bar"></span> <span
							class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">Project name</a>
				</div>
				<div id="navbar" class="navbar-collapse collapse">
					<form class="navbar-form navbar-right" role="form">
						<div class="form-group">
							<input type="text" placeholder="Email" class="form-control">
						</div>
						<div class="form-group">
							<input type="password" placeholder="Password" class="form-control">
						</div>
						<button type="submit" class="btn btn-success">Sign in</button>
					</form>
				</div>
				<!--/.navbar-collapse -->
			</div>
		</nav>
	
		<!-- Main jumbotron for a primary marketing message or call to action -->
		<div class="container-fluid">
			<section data-ui-view></section>
			<footer>
				<p>&copy; Company 2015</p>
			</footer>
		</div>
</body>
</html>
