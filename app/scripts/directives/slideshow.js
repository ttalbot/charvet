'use strict';

angular.module('charvetApp')
    .directive('slideshow', function($timeout) {
        return {
            templateUrl: 'scripts/directives/templates/slideshow.html',
            restrict: 'C',
            scope: {
                images: '='
            },
            link: function postLink(scope, element, attrs) {

                scope.currentIndex = 0;
                scope.next = function() {
                    scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
                };

                scope.prev = function() {
                    scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
                };

                scope.$watch('currentIndex', function() {
                    angular.forEach(scope.images, function(image, key) {
                        image.visible = false;
                    });

                    scope.images[scope.currentIndex].visible = true; // make the current image visible
                });

                var timer;
                var sliderFunc = function() {
                    timer = $timeout(function() {
                        scope.next();
                        timer = $timeout(sliderFunc, 5000);
                    }, 5000);
                };

                sliderFunc();

                scope.$on('$destroy', function() {
                    $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
                });

            }
        };
    });
