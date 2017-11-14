(function() {
    function RoomCtrl($scope, $uibModal, Room, $cookies, Message) {
        $scope.rooms = Room;
        $scope.currentRoom = null;
        $scope.messages = null;
        $scope.currentUser = null;

        $scope.open = function() {
            $uibModal.open({
                templateUrl: 'roomsModal.html',
                controller: 'ModalInstanceCtrl'
            })
        };

        $scope.setCurrentRoom = function(room) {
            $scope.currentRoom = room;
            $scope.messages = Room.getMessages(room.$id);
            $scope.currentUser = $cookies.blocChatCurrentUser;
        };

        $scope.sendMessage = function(room) {
            Message.send($scope.newMessage, room.$id);
        };

        return $scope.rooms;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', '$uibModal', 'Room', '$cookies', 'Message', RoomCtrl]);
})();
