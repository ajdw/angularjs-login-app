//Create a new module
//angular is an object, we always need at least one of these in our apps
var app1 = angular.module('myApp', []);

var app = angular.module('multiPageApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'angularApp/index.html'
	})
	.when('/loggedin', {
		templateUrl: 'angularApp/loggedin.html' 
	})
	.otherwise({
		redirectTo: '/'

	});
});




