(function(window) {
    'use strict';
    var FORM_SELECTOR = '[boss-data-feedback="form"]';
    var COMMENT_SECTION_SELECTOR = '[data-boss-feedback="comments"]';
    var SERVER_URL = 'http://localhost:3002/feedbackData';
    var App = window.App;
    var Boss = App.Boss;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var BossList = App.BossList;
    var DataStore = new DataStore(SERVER_URL);
    var myBoss = new Boss(DataStore);
    window.myBoss = myBoss;
    var formHandler = new FormHandler(FORM_SELECTOR);
    var bossList = new BossList(COMMENT_SECTION_SELECTOR);
    formHandler.addSubmitHandler(myBoss.createFeedback.bind(myBoss));
    bossList.getAllComments(DataStore);
    var UpVotesHandler = App.UpVotesHandler;
    var upVotes = new UpVotesHandler(DataStore);

    //http://stackoverflow.com/questions/8874960/getting-input-values-from-text-box
    var a = document.getElementById('searchBossName');
    a.addEventListener('submit', function(e) {
        e.preventDefault();
        var b = document.getElementById('searchbartextinput').value;
        if (b === '') {
            bossList.getAllComments(DataStore);

        } else {
            var remoteDS = new App.DataStore("http://localhost:3002/feedbackData");
            remoteDS.getFeedback(b, function() {});
        }


    });
})(window);
