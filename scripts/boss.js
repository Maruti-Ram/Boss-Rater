(function(window) {
    'use strict';
    var App = window.App || {};

    function Boss(db) {
        //this.BossId = BossId;
        this.db = db;
    }

    Boss.prototype.createFeedback = function(order) {
        order.upvotes = '0';
        order.downvotes = '0';
        this.db.add(order.bossidName, order);
    };

    App.Boss = Boss;
    window.App = App;
})(window);
