(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    var updateup;
    var updatedown;

    function UpVotesHandler(DataStore) {
        $(document).on('click', '[name=clickableUp]', function() {
            var newUpdata = {};
            DataStore.get(this.id, function(data) {
                updateup = Number(data.upvotes) + 1;
                data.upvotes = updateup.toString();
                newUpdata = data;
            });

            DataStore.updateUpvotes(this.id, newUpdata)
            location.reload();
        });

        $(document).on('click', '[name=clickableDown]', function() {
            var newDowndata = {};
            DataStore.get(this.id, function(data) {
                updatedown = Number(data.downvotes) + 1;
                data.downvotes = updatedown.toString();
                newDowndata = data;
            });

            DataStore.updateUpvotes(this.id, newDowndata)
            location.reload();
        });
    }

    App.UpVotesHandler = UpVotesHandler;
    window.App = App;
})(window);
