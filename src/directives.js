angular.module('app.directives', [])

.directive('castAndCharacters', function () {
  return {
    restrict: 'A',
    templateUrl: 'castAndCharacters.html',
    scope: {
      list: '='
    }
  };
});
