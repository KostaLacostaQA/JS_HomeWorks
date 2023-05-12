function parseCount(item) {
  const result = Number.parseFloat(item);
  if (isNaN(item)) {
    throw new Error("Невалидное значение");
  }
  return result;
}

function validateCount(item) {
  try {
    return parseCount(item);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = parseCount(a);
    this.b = parseCount(b);
    this.c = parseCount(c);
    if (this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const p = this.perimeter / 2;
    return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    const triangle = new Triangle(a, b, c);
    return triangle;
  } catch (error) {
    return {
      get area() {
        return 'Ошибка! Треугольник не существует';
      },
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
    };
  }
}