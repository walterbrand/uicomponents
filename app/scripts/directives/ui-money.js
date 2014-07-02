'use strict';

angular.module('uicomponents')
    .directive('uiMoney', function () {
        return {
            templateUrl: 'partials/uimoney.html',
            restrict: 'E',
            // TODO: zorg ervoor dat je een referentie krijgt naar de controller van ngModel
            replace: true,
            scope: {
                // TODO: maak een two way binding naar de waarde die in ngModel staat
            },
            link: function postLink(scope, element, attrs, ngModel) {
                // TODO: lees de waarde van de ngModel van de scope, splits deze in euro's en centen en voeg deze toe aan de scope

                scope.update = function(){
                    //TODO: update de waarde van ngModel waarde in de scope
                    //TODO: pas de validity aan, waarbij alleen getallen worden geaccepteerd
                }
            }
        };
    });
