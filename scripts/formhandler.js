(function(window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }

        var slider = document.getElementById('ratingLevel');
        var sliderOutput = document.getElementById('ratingOutput');
        var sliderLabel = document.getElementById('ratingLabel');

        // set initial color due to default value being 30
        sliderOutput.style.color = 'green';
        sliderLabel.style.color = 'green';

        slider.addEventListener('input', function() {
            sliderOutput.value = slider.value;
            // change the color of the label and number based on intensity
            var intensityColor;
            if (slider.value > 7) {
                sliderOutput.style.color = 'green';
                sliderLabel.style.color = 'green';
            } else if (slider.value > 4) {
                sliderOutput.style.color = 'orange';
                sliderLabel.style.color = 'orange';
            } else {
                sliderOutput.style.color = 'red';
                sliderLabel.style.color = 'red';
            }
            sliderOutput.style.color = intensityColor;
            sliderLabel.style.color = intensityColor;
        });
    }

    FormHandler.prototype.addSubmitHandler = function(fn) {
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

    

    App.FormHandler = FormHandler;
    window.App = App;
})(window);
