function validate()
{
    
    validateInput($('.numberTextField').val())
}

function setUpHTMLFixture() {

        jasmine.getFixtures().set(' <p> jasmine jquery form validation </p>  \
                                    
                                    <br/>            \
                                    <div class="validate-number"></div>      \
                                    <br/>        \
                                    <br/>        \
                                    <input type="text" class="numberTextField">      \
                                    <br/>        \
                                    <button class="validate" onclick=validate()>Validate</button>              \
                                ');
}



function validateInput(newInput)
{
    var len = newInput.length;
    numberIndicator = $('.validate-number');

    if(len == 0) {
        numberIndicator.text('Please do not leave the input number field empty');
    }

    else if(isNaN(newInput)) {
        numberIndicator.text('Incorrect Input. Please enter a valid number');
    }
    else {
        numberIndicator.text('');   
    }
}


describe('Validating number field', function () {

    var numberLabel;
    beforeEach(function () {
        setUpHTMLFixture();
        numberLabel = $('.validate-number');
    });

    it('should alert when input is blank', function () {

        $( ".numberTextField" ).val('');
        $(".validate").click();
        expect(numberLabel).not.toBeEmpty();
    });

    it('should alert when input is not a number', function () {

        $( ".numberTextField" ).val('someString');
        $(".validate").click();
        expect(numberLabel).not.toBeEmpty();
    });

    it('should raise no errors if it is valid', function () {

        $( ".numberTextField" ).val('1');
        $(".validate").click();
        expect(numberLabel).toBeEmpty();
    })
})
