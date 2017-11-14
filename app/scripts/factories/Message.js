(function() {
    function Message($firebaseArray) {
        var Message = {};

        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        Message.all = messages;

        Message.getByRoomID = function (roomId) {
            return $firebaseArray(ref.equalTo(roomId));
        }

        Message.send = function (text, roomID) {
            console.log(text)
            console.log("yo")
            messages.$add({
              "text": text,
              "createdAt": Date.now(),
              "roomID": roomID
            });
        }

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();

// (function() {
//     function Message($firebaseArray) {
//         var firebaseRef = firebase.database().ref().child("messages");
//         var messages = $firebaseArray(firebaseRef.child('messages'));
//
//         return {
//             send: function(newMessage, roomID) {
//                 messages.$add({
//                     // username: $cookies.blocChatCurrentUser,
//                     content: newMessage,
//                     sentAt: Date.now(),
//                     roomId: roomID
//                 });
//             }
//         };
//     }
//
//     angular
//         .module('blocChat')
//         .factory('Message', ['$firebaseArray', 'Room', Message]);
// })();
