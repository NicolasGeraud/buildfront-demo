'use strict';

var todoApp = angular.module('todoApp', [
    'ngRoute',
    'todo'
]);

todoApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/todo', {
            templateUrl: 'components/todo/todo.html',
            controller: 'TodoCtrl'
        })
        .otherwise({
            redirectTo: '/todo'
        });
}]);