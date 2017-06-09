angular.module('app')
    .controller('MainController', function($scope, $state, Auth, CurrentUser) {
      /* Here is your main controller */
      $scope.auth = Auth;

        $scope.register = function() {
            Auth.register($scope.user).then(function() {
                $state.go('user.profile');
            });
        };
    });
