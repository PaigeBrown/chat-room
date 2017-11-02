(function() {
    function HomeCtrl(Room) {
      this.rooms =Room.all;
      console.log(this.chatrooms);


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

// inject room service into here
// then you can attach it to the controller or scope and use the data in the DOM or call room functions
