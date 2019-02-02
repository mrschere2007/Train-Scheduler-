//firebase intilization 
var config = {
    apiKey: "AIzaSyAOOITw5D3CV1A4FapUGao7Kr-Y5BQbtNE",
    authDomain: "my-cool-project-b94f7.firebaseapp.com",
    databaseURL: "https://my-cool-project-b94f7.firebaseio.com",
    projectId: "my-cool-project-b94f7",
    storageBucket: "my-cool-project-b94f7.appspot.com",
    messagingSenderId: "255786230008"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// event on listner function

$("#train-schedule-btn").on("click",function (event){
    event.preventDefault();

    var inputTrain =$("#train-name-input").val().trim();
    var inputDestination = $("#Destination-input").val().trim();
    var inputFirstTrain = $("#first-train-time-iput").val().trim();
    var inputFrequency = $("Frequency-input").val().trim();

    database.ref().push({
        name: inputTrain,
        destination: inputDestination,
        first: inputFirstTrain,
        frequency: inputFrequency,

    })
    
    // Pull Data from the Database 
    database.ref().on(
        "value",
        function(dbTrain){
            var dbObj = dbTrain.val();

            var newRow = $("<tr>")
            newRow.append($("<td>" + dbObj.name + "</td>"));
            newRow.append($("<td>" + dbObj.destination + "</td>"));
            newRow.append($("<td>" + dbObj.first + "</td>"));
            newRow.append($("<td>" + dbObj.frequency + "</td>"));

            $("tbody").append(newRow);
        },
    )


})



