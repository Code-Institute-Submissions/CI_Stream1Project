Booking = function() {
    this.value = 0;
};
 
Booking.prototype.input = function(number) {
    if (typeof(number) == "number") {
        this.value += number;
    } else {
        alert("Argument must be a number");
    }
};