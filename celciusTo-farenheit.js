function celciusTofarenheit(){
    var farenheit = celcius / 32;
    return farenheit;
}

var myCelcius = 132;
var farenheit = celciusTofarenheit(myCelcius);
console.log('myCelcius to farenheit', farenheit);