var SimpleCalculator = require("./simplecalculator");

/*test('SimpleCalculator.addition(4) should return 6', () => {
    var cal = new SimpleCalculator(2);
    expect(cal.addition(4)).toEqual(6);    
});

test('SimpleCalculator.subtract(4) should return 2', function(){
    var cal = new SimpleCalculator(6);
    expect(cal.subtract(4)).toEqual(2);
});

test('SimpleCalculator.multiply(4) should return 16', function(){
    var cal = new SimpleCalculator(4);
    expect(cal.multiply(4)).toEqual(16);
});

test('SimpleCalculator.divide(2) should return 8', function(){
    var cal = new SimpleCalculator(16);
    expect(cal.divide(2)).toEqual(8);
});*/

var cal = new SimpleCalculator(2);
var result = cal.addition(2).subtract(1).multiply(6).divide(2);
console.log(result);

