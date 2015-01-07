var app = angular.module("app", ['ngLocale', 'ngRoute', 'ngSanitize', 'ui.bootstrap', 'ngResource', 'ngAnimate',
		'utils', 'ui.router', 'angular-loading-bar', 'ui.tree']);
app.config(function($httpProvider) {
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/")
	$stateProvider.state('home', {
		url : "/",
		templateUrl : utils.getUrl("/resources/html/home.html"),
		controller : 'HomeCtrl'
	});
})