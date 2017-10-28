

    $(function() {
        $("#datepicker").datepicker({ dateFormat: "dd-mm-yy" }).val()
});


function FormValidation (fname,lname,location,date,tel,emails){
    var fname= document.forms["Booking"]["fname"].value;
    var lname= document.forms["Booking"]["lname"].value;
    var location= document.forms["Booking"]["location"].value;
    var date= document.forms["Booking"]["date"].value;
    var tel= document.forms["Booking"]["tel"].value;
    var email= document.forms["Booking"]["email"].value;
    if (fname==""){
        alert("first name required");
        return false;}
    else if (lname==""){
        alert("last name required");
        return false;}
    else if(location==""){
        alert("location required");
        return false;}
    else if(date==""){
        alert("date required");
        return false;}
    else if(tel==""){
        alert("telephone required");
        return false;}
    else if(email==""){
        alert("email required");
        return false;}
        
    alert("Booking request submitted,we will reply soon")
}