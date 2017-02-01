var app = angular.module('ngRoutingDemo', ['ngRoute']);

    app.config(function ($routeProvider) {
             
        $routeProvider
            .when('/login', {
                templateUrl: 'templates/login.html',
                controller: 'loginController'
            })
            .when('/student/:username', {
                templateUrl: 'templates/student.html',
                controller: 'studentController'
            })
            .otherwise({
                redirectTo: "/login"
            });    
    });
    app.controller("loginController", function ($scope, $location) {
       
        $scope.authenticate = function (username) {
            // write authentication code here.. 
            if(username === 'Dinesh') {
                $location.path('/student/' + username);    
            }else {
                alert("Invalid Username");
            }           
        };

    });

    app.controller("studentController", function ($scope, $routeParams) {
        $scope.username = $routeParams.username;
    });