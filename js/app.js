var app = angular.module('srchApp', ['ngRoute']);


//routing
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'srchCtrl',
			templateUrl: 'partials/add-user-view.html'
		})
		.when('/all-user', {
			controller: 'usrListCtrl',
			templateUrl: 'partials/user-list-view.html'
		})
		.otherwise({ redirectTo: '/view1' });

});