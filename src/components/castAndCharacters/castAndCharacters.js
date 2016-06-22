angular.module('app.components.castAndCharacters', [])
.component('castAndCharacters', {
  templateUrl: 'components/castAndCharacters/castAndCharacters.html',
  bindings: { list: '<' }
});
