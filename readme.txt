BossRater

Team 6
Sri Maruti Ram Kumar Avantsa
Tayseer Edouni,
Jeremy Mann,
Akshay Pawar,
Pragya Tak

2.0	Tools/Software Used
BossRater uses the json-server tool (creates a local json server for simple data POST/GET requests). BossRater does not use any other backend platform (mainly due to the lack of account creation). BossRater uses Twitter’s Bootstrap (getbootstrap.com) for basic CSS formatting. Ionicons (http://ionicons.com/) was used for icons within the web application. Fontawesome (http://fontawesome.io/) was used to import custom fonts within the web application. 


3.0 Installation & Configuration Documentation
1.
This project requires the usage of a json server.
To install the json-server tool, enter the following command in command line/terminal
"npm install -g json-server"
 or if using OSX or UNIX
 "sudo npm install -g json-server"

2. Open Atom (or another text editor)
   Save file as "feedbackdb.json" and in the main project directory
   Enter the following text and then save and close the file:

   {
     "feedbackData": [
       {
         "bossName": "Test Name",
         "bossDepartment": "Test Department",
         "bossFeedback": "TestFeedback",
         "rating": "10",
         "upvotes": "0",
         "downvotes": "0",
         "id": "BkhZsNPhl"
       }
     ]
   }

3. When in the main directory of the project (where feedbackdb.json is located).
   Enter the following into the command line /terminal:
   "json-server --port=3002 --watch feedbackdb.json"

4. The final step is to install and run browser-sync.
   In order to install browser-sync, open the command line / terminal and enter
   the follwing command:
   "npm install -g browser-sync"
   or if using OSX or UNIX
   "sudo npm install -g browser-sync"

While within the project’s main directory, enter the following command in command line / terminal:
browser-sync start --server -- files "stylesheets/*.css, scripts/*.js, *.html"

It will launch the website locally. Make sure that this is done after the json server is already running.

4.0 User Documentation
1.	Main page 
When the user first loads the webpage they will see the below screenshot. Here they will have the option to scroll through all available ratings and to like or dislike a rating (by clicking on thumbs up or thumbs down).


2.	Searching/Filter for Boss
For a user to search for a specific boss, they will need to click on the search bar (near the header of the page). They will need to enter the name of their boss (capitalization and spelling need to be correct). The webpage will then display only the ratings with that specified boss name. 

3.	Posting a Rating/Review
For a user to submit a rating/review of their boss, they need to first click on “Rate My Boss”, which is next to the search field. The feedback field will then pop up with a yellow background.
When the user has submitted their review/rating, the page will reload with their review/rating at the top of the list.
