var Circle = require("./circle");

test('Circle.getArea(1) should return 3.1', () => {
    var c = new Circle(1);
    expect(c.getArea()).toEqual(3.1);
});

test('Circle.getArea(2) should return 12.6', () => {
    var c = new Circle(2);
    expect(c.getArea()).toEqual(12.6);
});

test('Circle.getArea(3) should return 28.3', () => {
    var c = new Circle(3);
    expect(c.getArea()).toEqual(28.3);
});

test('Circle.getPerimeter(1) should return 6.3', () => {
    var c = new Circle(1);
    expect(c.getPerimeter()).toEqual(6.3);
});

test('Circle.getPerimeter(2) should return 12.6', () => {
    var c = new Circle(2);
    expect(c.getPerimeter()).toEqual(12.6);
});

test('Circle.getPerimeter(3) should return 18.8', () => {
    var c = new Circle(3);
    expect(c.getPerimeter()).toEqual(18.8);
});

