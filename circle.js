class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    var area = Math.PI * this.radius * this.radius; 
    area = area.toFixed(1);
    return parseFloat(area);
  }

  getPerimeter() {
    var perimeter = 2 * Math.PI * this.radius;
    perimeter = perimeter.toFixed(1);
    return parseFloat(perimeter);
  }

   
}

module.exports = Circle;
