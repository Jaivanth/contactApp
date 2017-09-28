var app = angular.module('userFormApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/add-new-contact', {
		template : '<h1>Hello World</h1>'
	})
	.when('/review',{
		templateUrl : 'scripts/views/review.html'
	}).
	otherwise(
	{
		templateUrl : 'scripts/views/contact-list.html',
		controller : 'ContactListCtrl'

	});
});
