app.controller('mainCtrl', function($scope, $location, $window) {

// Make an array called people
	$scope.people = [
	
	{
		name: 'admin',
		email: 'admin@admin.com',
		password: 'admin'
	}
	
	];


// Register Function
$scope.register = function(){

	console.log('Email: ' + $scope.nemail);
	console.log('Password: ' + $scope.npassword);

	$scope.people.push({email: $scope.nemail, password: $scope.npassword});
	alert('Added new user!');
	console.log($scope.people);
	console.log($scope.people[4]);
	}

	$scope.login = function(){

	$scope.email;
	$scope.password;

// For loop authenticator 
	for(var i = 0; $scope.people.length > i; i++) {

	if($scope.email == $scope.people[i].email && $scope.password == $scope.people[i].password) {

		alert('Welcome');
		// $location.path('loggedin.html');
		$window.location.href = 'file:///Users/LX/Desktop/Codify%20Academy/Week15/angularApp/loggedin.html';
		//re-direct to a new site like --> templateUrl: 'angularApp/loggedin.html' 
		return;
	}
}
// Outside of the for loop authenticator but still in the login function incase the for loop is broken out of
		alert('User Name or Password is incorrect');
	}
	
});

// To Do List function
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:'Example', done:false}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});


