class Rectangle {
    constructor(length, breath){
        this.length = length;
        this.breath = breath;
    }

    getArea(){
        return this.length * this.breath;
    }

    getPerimeter(){
        return 2 * this.length + 2 * this.breath;
    }
}

module.exports = Rectangle;