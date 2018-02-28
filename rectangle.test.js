    var Rectangle = require("./rectangle");

    test('Rectangle.getArea(4,2) should return 8', function() {
        var r = new Rectangle(4, 2);
        expect(r.getArea()).toEqual(8);
    });

    test('Rectangle.getArea(10,5) should return 50', function() {
        var r = new Rectangle(10, 5);
        expect(r.getArea()).toEqual(50);
    });

    test('Rectangle.getPerimeter(4,2) should return 12', function() {
        var r = new Rectangle(4, 2);
        expect(r.getPerimeter()).toEqual(12);
    });

    test('Rectangle.getPerimeter(10,5) should return 30', function() {
        var r = new Rectangle(10, 5);
        expect(r.getPerimeter()).toEqual(30);
    });
    
