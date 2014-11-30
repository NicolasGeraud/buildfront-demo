'use strict';

describe('Todo Controller', function(){
    beforeEach(module('todo'));
    var scope, ctrl;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('TodoCtrl', {$scope:scope});
        scope.$apply();
    }));

    it('should instantiate controller', inject(function () {
        expect(ctrl).not.toBeNull();
    }));

});