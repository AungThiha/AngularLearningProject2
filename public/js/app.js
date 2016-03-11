// script.js

// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute', 'ngAnimate']);

// configure our routes
scotchApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '../pages/home.html',
            controller  : 'homeController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : '../pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : '../pages/contact.html',
            controller  : 'contactController'
        });

    $locationProvider.html5Mode(true).hashPrefix('!');
}]);


// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.seo = { 
        pageTitle : '', pageDescription : '' 
    }; 
});

// create the controller and inject Angular's $scope
scotchApp.controller('homeController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    $scope.pageClass = 'page-home';
    $scope.$parent.seo = { 
        pageTitle : 'Home', 
        pageDescripton: 'Project built for learning AngularJS' 
    }; 
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
    $scope.pageClass = 'page-about';
    $scope.$parent.seo = { 
        pageTitle : 'About', 
        pageDescripton: 'Project built for learning AngularJS' 
    }; 
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    $scope.pageClass = 'page-contact';
    $scope.$parent.seo = { 
        pageTitle : 'Contact', 
        pageDescripton: 'Project built for learning AngularJS' 
    }; 
});