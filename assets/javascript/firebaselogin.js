/*/ $(document).ready(function(){

var database = firebase.database();


var user = firebase.auth().currentUser;

if (user) {
  // User is signed in.
} else {
  // No user is signed in.
}

$


$("#button-submit2").on("click", function() {



    var email = $('#email').val().trim();
    var password = $('#password').val().trim();
    var zipcode = $('#marketZipAdd').val().trim();
   
    

    database.ref().push({

      email: email,

      password: password,

      zipcode: zipcode,


      timeAdded: firebase.database.ServerValue.TIMESTAMP

       });

      $("input").val('');

      return false;


      });


    database.ref().on("child_added", function(childSnapshot){
  
  var email = childSnapshot.val().email;
  var password = childSnapshot.val().password;
  var zipcode = childSnapshot.val().password;
  


  
  










































});







  });