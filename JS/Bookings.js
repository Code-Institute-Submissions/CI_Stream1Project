

//     $(function() {
//         $("#datepicker").datepicker({ dateFormat: "dd-mm-yy" }).val()
// });


// function formValidation(){
//     alert("Booking request submitted,we will reply soon");
//     var fname = document.forms["Booking"]["fname"].value;
//     var lname = document.forms["Booking"]["lname"].value;
//     var location = document.forms["Booking"]["location"].value;
//     var date = document.forms["Booking"]["date"].value;
//     var tel = document.forms["Booking"]["tel"].value;
//     var email = document.forms["Booking"]["email"].value;
    
//     if (fname==""){
//         alert("first name required");
//         return false;}
//     else if (lname=="")
//     {
//         alert("last name required");
//         return false;}
//     else if(location=="")
//     {
//         alert("location required");
//         return false;
//     }
//     else if(date==""){
//         alert("date required");
//         return false;
//     }
//     else if(tel==""){
//         alert("telephone required");
//         return false;}
//     else if(email==""){
//         alert("email required");
//         return false;
//     }
        
//     alert("Booking request submitted,we will reply soon");
// }

            function validateForm() {
                var x = document.forms["myForm"]["fname"].value;
                var y = document.forms["myForm"]["lname"].value;
                var l = document.forms["myForm"]["Location"].value;
                var d = document.forms["myForm"]["Date"].value;
                var t = document.forms["myForm"]["Telephone"].value;
                var e = document.forms["myForm"]["Email"].value;
                if (x == "") {
                    alert("First Name must be filled out");
                    return false;
                }
                else if
                    (y == "") {
                    alert("Last Name must be filled out");
                    return false;
                }
                else if
                (y == "") {
                alert("Last Name must be filled out");
                return false;
                }
                else if
                (l == "") {
                alert("Location must be filled out");
                return false;
                }
                else if
                (d == "") {
                alert("Date must be filled out");
                return false;
                }
                else if
                (t == "") {
                alert("Telephone must be filled out");
                return false;
                }
                else if
                (e == "") {
                alert("Email must be filled out");
                return false;
                }
                alert("Booking request submitted,we will reply soon");
                }
            
