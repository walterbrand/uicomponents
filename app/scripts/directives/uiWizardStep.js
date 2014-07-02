'use strict';

angular.module('uicomponents')
    .directive('uiWizardStep', function ($timeout) {
        return {
            // TODO: maak een template die de inhoud kan transcluden en (on)zichtbaar wordt door te kijken naar show()
            restrict: 'E',
            // TODO: zorg ervoor dat transcluden is toegestaan
            scope: {id:'@'},
            // TODO: zorg ervoor dat we de uiWizard als parent controller verplicht maken
            link: function postLink(scope, element, attrs, uiWizard) {
                scope.show = function(){
                    return scope.id == uiWizard.getSelected();
                }
            }
        };
    });
