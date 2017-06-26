
function TimeApprox(){
    if(MIN == 5) {
        if(PER == 'PM'){
            console.log("It's 5 after " + HR + " in the evening");
        }
        else
        {
            console.log("It's 5 after " + HR + " in the morning");
        }
    }
    else
    {
        if(MIN == 15) {
            if(PER == 'PM'){
                console.log("It's quarter after " + HR + " in the evening");
            }
            else
            {
                console.log("It's quarter after " + HR + " in the morning");
            }
        }
    else
    {
        if(MIN == 30) {
            if(PER == 'PM'){
                console.log("It's half past " + HR + " in the evening");
            }
            else
            {
                console.log("It's half past " + HR + " in the morning");
            }
        }
    else
    {
        if(MIN < 30) {
            if(PER == 'PM'){
                console.log("It's just after " + HR + " in the evening");
            }
            else
            {
                console.log("It's just after " + HR + " in the morning");
            }
        }
    else
    {
        HR = HR +1;
        
        if(PER == 'PM'){
            console.log("It's almost " + HR + " in the evening");    
        }
        else
        {
            console.log("It's almost " + HR + " in the morning");
        }
    }
    }
    }
    }
}


var HR = 7;
var MIN = 5;
var PER = 'PM';

TimeApprox();

var HR = 8;
var MIN = 15;
var PER = 'AM';

TimeApprox();

var HR = 7;
var MIN = 30;
var PER = 'PM';

TimeApprox();

var HR = 8;
var MIN = 50;
var PER = 'AM';

TimeApprox();

var HR = 7;
var MIN = 9;
var PER = 'PM';

TimeApprox();

