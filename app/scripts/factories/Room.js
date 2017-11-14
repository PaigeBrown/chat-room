(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    var getMessages = function(roomId) {
        var messages = firebaseRef.child('messages');

    return $firebaseArray(messages.orderByChild("roomId").equalTo(roomId));
    }

    return {
      all: rooms,
      create: function(newRoom) {
        rooms.$add(newRoom); }
    };
    getMessages
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
