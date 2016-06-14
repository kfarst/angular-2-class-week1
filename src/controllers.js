angular.module('app.controllers', [])

.controller('MoviesController', function ($scope, movies, $stateParams) {
  $scope.movies = movies;

  $scope.view = {
    title: $stateParams.type
  };
})

.controller('MovieSummaryController', function ($scope, $state) {
  $scope.actions = {
    goToMovieDetails: function () {
      $state.go('.details', { id: $scope.movie.id });
    }
  };
})

.controller('MovieDetailsController', function ($scope, movie, $stateParams) {
  $scope.movie = movie;
  $scope.view = {
    movieType: $stateParams.type
  };
});
