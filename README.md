## Train-Scheduler

The train scheduler takes in user information, stores it in a Firebase database, and uploads it to the train board. Next arrival times and minutes away are calculated in the app, posted to the train board, and refreshed every minute.

## Instructions

1. Enter train information into form and click submit button. All information is necessary.
2. The information gets added to the train board and the Firebase database.
3. The train board shows each train's name, destination, and frequency. The app calculates the next arrival time and minutes away and updates these every minute.
4. Delete any trains no longer needed. Deleted trains are removed from the train board and the database.

## Built With

* JavaScript - Makes it interactive
* JQuery - Handles events
* CSS - Makes it pretty
* Moment.js - Handles the time
* Firebase - Holds information in its database

## Author

William Cotton - wcotton229

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/osd) file for details
