var app = angular.module("app", ['ngLocale', 'ngRoute', 'ngSanitize', 'ui.bootstrap', 'ngResource', 'ngAnimate',
		'utils', 'ui.router', 'angular-loading-bar']);
app.config(function($httpProvider) {
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
});
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/orderList")
	$stateProvider.state('productList', {
		url : "/productList",
		templateUrl : utils.getUrl("html/productList.html"),
		controller : 'ProductListCtrl'
	}).state('productCreate', {
		url : "/product/:type/create",
		templateUrl : utils.getUrl("html/productCreate.html"),
		controller : 'ProductCreateCtrl',
		resolve : {
			type : function($stateParams) {
				return $stateParams.type;
			}
		}
	}).state('orderList', {
		url : "/orderList",
		templateUrl : utils.getUrl("html/orderList.html")
	});
})