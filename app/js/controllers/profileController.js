angular.module('app')
  .controller('ProfileController', function($scope, CurrentUser) {
    $scope.user = CurrentUser.user();

    $scope.update = function() {
      delete $scope.user.password;
      UserService.update($scope.user._id, $scope.user).then(function(res) {
        LocalService.set('user', JSON.stringify($scope.user));
        $scope.user = CurrentService.user();
      });
    };
  });
