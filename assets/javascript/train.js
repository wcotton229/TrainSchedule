$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAO2ePYm32YYj8f8IyfJY9XA-QTUg_6p9w",
        authDomain: "fir-homework-98d30.firebaseapp.com",
        databaseURL: "https://fir-homework-98d30.firebaseio.com",
        projectId: "fir-homework-98d30",
        storageBucket: "fir-homework-98d30.appspot.com",
        messagingSenderId: "627849881981"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    // Capture Button Click
    $("#addTrain").on("click", function (event) {
        event.preventDefault();

        // Grabbed values from text boxes
        var trainName = $("#trainName").val().trim();
        var destination = $("#destination").val().trim();
        var firstTrain = $("#firstTrain").val().trim();
        var freq = $("#interval").val().trim();

        // Pushing to Firebase
        database.ref().push({
            trainName: trainName,
            destination: destination,
            firstTrain: firstTrain,
            frequency: freq
        });
    });


    // Firebase catcher
    database.ref().on("child_added", function (snapshot) {

        var newTrain = snapshot.val().trainName;
        var newLocation = snapshot.val().destination;
        var newFirstTrain = snapshot.val().firstTrain;
        var newFreq = snapshot.val().frequency;

        // First Time (pushed back 1 year to make sure it comes before current time)
        var startTimeConverted = moment(newFirstTrain, "hh:mm").subtract(1, "years");

        // Current Time
        var currentTime = moment();

        // Difference between the times
        var diffTime = moment().diff(moment(startTimeConverted), "minutes");

        // Time apart (remainder)
        var tRemainder = diffTime % newFreq;

        // Minute(s) Until Train
        var tMinutesTillTrain = newFreq - tRemainder;

        // Next Train
        var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        var catchTrain = moment(nextTrain).format("HH:mm");

        // Display On Page
        $("#all-display").append(
            ' <tr><td>' + newTrain +
            ' </td><td>' + newLocation +
            ' </td><td>' + newFreq +
            ' </td><td>' + catchTrain +
            ' </td><td>' + tMinutesTillTrain + ' </td></tr>');

        // Clear input fields
        $("#trainName, #destination, #firstTrain, #interval").val("");
        return false;
    },
        //For the errors
        function (errorObject) {
            console.log("Errors handled: " + errorObject.code);
        });

});