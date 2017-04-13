(function(window) {
    'use strict';
    var App = window.App || {};

    function DataStore(url) {
        if (!url) {
            throw new Error('No remote URL supplied.');
        }
        this.serverUrl = url;
    }
    DataStore.prototype.add = function(key, val) {
        $.post(this.serverUrl, val, function(serverResponse) {});
    };

    DataStore.prototype.getFeedback = function(key, cb) {
        $.get(this.serverUrl + '/?bossName=' + key, function(serverResponse) {
            //console.log(serverResponse);
            cb(serverResponse);
            $("#comments").empty();
            var length = serverResponse.length;
            var item;
            for (var i = 0; i < length; ++i) {
                item = serverResponse[i];
                $('#comments').prepend("<div class='card'><div class='inner-wrap'><h3>" + item.bossName + "</h3><a class='title' href='#'>" + item.bossDepartment + "</a><p>" + item.bossFeedback + "</p></div><div class='likes-bar'><p>Rating: <a href='#'>" + item.rating + "</a></p></div><div class='action-bar'><ul><li class='comments'><a href='#'><span class='comments-link'></span></a></li><li class='share'><a href='#' class='clickableThumbsUp' name='clickableUp' id=" + item.id + "><i class='ion ion-thumbsup'></i><span>" + item.upvotes + "</span></a></li><li class='like'><a href='#' class='clickableThumbsDown' name='clickableDown' id=" + item.id + "><i class='ion ion-thumbsdown'></i><span>" + item.downvotes + "</span></a></li></ul></div></div>");
            }
        });
    };

    DataStore.prototype.get = function(key, cb) {
        $.ajax({
            url: this.serverUrl + '/' + key,
            type: 'GET',
            async: false,
            success: function(response) {
                cb(response);
            }
        });
    };

    DataStore.prototype.getAll = function(callback) {
        $.get(this.serverUrl, function(serverResponse) {
            callback(serverResponse);
        });
    };

    DataStore.prototype.updateUpvotes = function(id, newdata) {
        $.ajax({
            url: this.serverUrl + '/' + id,
            type: 'PUT',
            data: newdata,
            async: false,
            success: function(response) {}
        });
    };

    DataStore.prototype.remove = function(key) {
        delete this.data[key];
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);
