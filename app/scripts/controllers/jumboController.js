'use strict';

angular.module('charvetApp')
    .controller('jumboCtrl', function($scope) {

        $scope.images = [{
            name: 'soleil'
        }, {
            name: 'boutique'
        }, {
            name: 'identite'
        }, {
            name: 'chemises'
        }];

    });
