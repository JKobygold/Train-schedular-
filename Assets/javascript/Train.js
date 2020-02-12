var firebaseConfig = {
  apiKey: "AIzaSyBz_iJQ9RnksoNJ55_3l3rcOXJ-TQwXWPY",
  authDomain: "train-schedule-cdd79.firebaseapp.com",
  databaseURL: "https://train-schedule-cdd79.firebaseio.com",
  projectId: "train-schedule-cdd79",
  storageBucket: "train-schedule-cdd79.appspot.com",
  messagingSenderId: "760820300424",
  appId: "1:760820300424:web:fa030a3e8d747853e2fd3d",
  measurementId: "G-5HCV3S2RRZ"
};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
  
  
  $("#submit").on("click", function(event) {
    event.preventDefault();

    var name ="";
    var destination="";
    var trainOne =0;
    var frequency=0;
  
    var name = $("#name").val().trim();
    var destination = $("#dest").val().trim();
    var trainOne = $("#first-train").val().trim();  //   var firstTime = "03:30";
    var frequency = $("#frequency").val().trim();   // I will recive a number in here
  
    var newData = {
      name: name,
      destination: destination,
      trainOne: trainOne,
      frequency: frequency,
      // dateAdded: firebase.database.ServerValue.TimeSTAMP
    };
  
    
    database.ref().push(newData);
  
    console.log(name);
    console.log(destination);
    console.log(trainOne);
    console.log(frequency);
    console.log(newData);
  
    alert("Train successfully added");
  
    
    $("#name").val("");
    $("#dest").val("");
    $("#first-train").val("");
    $("#frequency").val("");
  });
  

  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    var name = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var trainOne = childSnapshot.val().trainOne;
    var frequency = childSnapshot.val().frequency;

  
  
    console.log(name);
    console.log(destination);
    console.log(trainOne);
    console.log(frequency);
  
    
    // var FreqConv = moment(trainOne, "HH:mm").subtract(1, "hours");

    // console.log(FreqConv);

 
    var newRow = $("<tr>").append(
      $("<td>").text(name),
      $("<td>").text(destination),
      $('<td>').text(trainOne),
      $("<td>").text(frequency),
      // $("<td>").text(minAway),
    );
  
  
    $("#train-table > tbody").append(newRow);
  });

   


