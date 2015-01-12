var app = angular.module("app", ['ngLocale', 'ngRoute', 'ngSanitize', 'ui.bootstrap', 'ngResource', 'ngAnimate',
		'utils', 'ui.router', 'angular-loading-bar', 'ui.tree', 'ngClipboard'], function($rootScopeProvider) {
	$rootScopeProvider.digestTtl(15);
});
app.config(function($httpProvider, ngClipProvider) {
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	ngClipProvider.setPath(utils.getUrl('/resources/swf/ZeroClipboard.swf'));
});
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/")
	$stateProvider.state('home', {
		url : "/",
		templateUrl : utils.getUrl("/resources/html/home.html"),
		controller : 'HomeCtrl'
	});
})