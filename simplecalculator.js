class SimpleCalculator {
  constructor(value) {
    this.value = value;
  }

  addition(n) {
    this.value += n;
    return this;
  }

  subtract(n) {
    this.value -= n;
    return this;
  }

  multiply(n) {
    this.value *= n;
    return this;
  }

  divide(n) {
    this.value /= n;
    return this;
  }
}
module.exports = SimpleCalculator;
