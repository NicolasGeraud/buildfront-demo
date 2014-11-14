'use strict';

angular.module('todo', [])
    .controller('TodoCtrl', function ($scope) {
        $scope.newTodo = null;
        $scope.todos = [];

        $scope.add = function() {
            $scope.todos.push({
                todo: $scope.newTodo,
                done: false
            });
            $scope.newTodo = null;
        };

        $scope.done = function(index) {
            $scope.todos[index].done = true;
        };

        $scope.remove = function(index, event) {
            event.stopPropagation();
            event.preventDefault();
            $scope.todos.splice(index, 1);
        };
    });