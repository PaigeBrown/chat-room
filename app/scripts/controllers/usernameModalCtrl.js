(function() {
    function UserModalInstanceCtrl($scope, $uibModalInstance, $cookies) {
        $scope.setUsername = function() {
            $cookies.blocChatCurrentUser = $scope.newUsername;

            $uibModalInstance.close($cookies.blocChatCurrentUser);
        };
    }

    angular
        .module('blocChat')
        .controller('UserModalInstanceCtrl', ['$scope', '$uibModalInstance', '$cookies', UserModalInstanceCtrl]);
})();
