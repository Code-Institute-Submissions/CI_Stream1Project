describe("Booking", function() {
 
    beforeEach(function() {
        Booking = new Booking();
    });
    describe('TelNumber', function() {
        it('should accept tel number', function() {
            expect(TelNumber.value).toBe(4);
	expect(window.alert).toHaveBeenCalledWith("Argument must be a number");
        });
    });
 });

    