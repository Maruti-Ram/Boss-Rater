(function(window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;


    SearchHandler.prototype.addSearchHandler = function(fn) {
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            var data = {};
            $(this).serializeArray().forEach(function(item) {
                data[item.name] = item.value;
            });

            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };

    App.FormHandler = SearchHandler;
    window.App = App;
})(window);
