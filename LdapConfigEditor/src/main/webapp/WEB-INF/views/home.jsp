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
        <n:css src="/resources/css/main.css"/>
		<n:js src="/resources/js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"/>
		<n:js src="/resources/js/vendor/jquery-1.11.1.js"/>
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
			<div class="container">
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
		<div class="jumbotron">
			<div class="container">
				<h1>Hello, world!</h1>
				<p>This is a template for a simple marketing or informational
					website. It includes a large callout called a jumbotron and three
					supporting pieces of content. Use it as a starting point to create
					something more unique.</p>
				<p>
					<a class="btn btn-primary btn-lg" href="#" role="button">Learn
						more &raquo;</a>
				</p>
			</div>
		</div>
	
		<div class="container">
			<!-- Example row of columns -->
			<div class="row">
				<div class="col-md-4">
					<h2>Heading</h2>
					<p>Donec id elit non mi porta gravida at eget metus. Fusce
						dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
						ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
						magna mollis euismod. Donec sed odio dui.</p>
					<p>
						<a class="btn btn-default" href="#" role="button">View details
							&raquo;</a>
					</p>
				</div>
				<div class="col-md-4">
					<h2>Heading</h2>
					<p>Donec id elit non mi porta gravida at eget metus. Fusce
						dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
						ut fermentum massa justo sit amet risus. Etiam porta sem malesuada
						magna mollis euismod. Donec sed odio dui.</p>
					<p>
						<a class="btn btn-default" href="#" role="button">View details
							&raquo;</a>
					</p>
				</div>
				<div class="col-md-4">
					<h2>Heading</h2>
					<p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Vestibulum id ligula porta felis euismod semper.
						Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
						nibh, ut fermentum massa justo sit amet risus.</p>
					<p>
						<a class="btn btn-default" href="#" role="button">View details
							&raquo;</a>
					</p>
				</div>
			</div>
	
			<hr>
	
			<footer>
				<p>&copy; Company 2014</p>
			</footer>
		</div>
</body>
</html>
