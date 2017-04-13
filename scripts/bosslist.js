(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    var allComments;

    function BossList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    BossList.prototype.getAllComments = function(DataStore) {
        DataStore.getAll(function(s) {
            allComments = s;
            allComments.forEach(function(item) {
                $('#comments').prepend("<div class='card'><div class='inner-wrap'><h3>" + item.bossName + "</h3><a class='title' href='#'>" + item.bossDepartment + "</a><p>" + item.bossFeedback + "</p></div><div class='likes-bar'><p>Rating: <a href='#'>" + item.rating + "</a></p></div><div class='action-bar'><ul><li class='comments'><a href='#'><span class='comments-link'></span></a></li><li class='share'><a href='#' class='clickableThumbsUp' name='clickableUp' id=" + item.id + "><i class='ion ion-thumbsup'></i><span>" + item.upvotes + "</span></a></li><li class='like'><a href='#' class='clickableThumbsDown' name='clickableDown' id=" + item.id + "><i class='ion ion-thumbsdown'></i><span>" + item.downvotes + "</span></a></li></ul></div></div>");
            });
        });
    };

    App.BossList = BossList;
    window.App = App;
})(window);
