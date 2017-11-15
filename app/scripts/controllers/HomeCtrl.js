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

console.log(this.messages)
// this.messages returns undefined
// console.log(message in messages)
// $scope.messages returns issues with $scope but things pops up
// this.messages = ($scope.newMessageContent, $scope.currentRoom)
//above also makes the message.content pop up.

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
