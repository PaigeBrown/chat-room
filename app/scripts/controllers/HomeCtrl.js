(function() {
    function HomeCtrl(Room, Message, $scope) {
      this.rooms = Room.all;

      this.setCurrentRoom = function (room){
        $scope.currentRoomID = room.$id
        this.messages = Message.getByRoomID($scope.currentRoomID);
        console.log(this.messages)
      }

      this.changeRoom = function(room) {
            $scope.currentRoom = room;
            $scope.messages = Message.getByRoomId($scope.currentRoomID);
      };

      this.sendMessage = function() {
        Message.send($scope.newMessageContent, $scope.currentRoomID)
      }

    }



    //   call get messages by room ID
    //   have ng-repeat of messages that will update to show new messages

    // inject message service here
    // have submit for message form
    //   if not empty
    //     add to db using currentRoomID
    //     clear form field

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();
