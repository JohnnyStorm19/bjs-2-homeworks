//MISSION #1

function parseCount(value) {
    if (isNaN(Number.parseFloat(value))) {
        throw new Error('Невалидное значение')
    }
    return Number.parseFloat(value);
}


function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

//MISSION #2

class Triangle {
    constructor(a, b, c) {
        if ((a + b) < c || (b + c) < a || (c + a) < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a,
        this.b = b,
        this.c = c
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        const perimeter = this.a + this.b + this.c;
        const p = perimeter / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3))
    }
}

function getTriangle(a, b, c) {
    try {
        new Triangle(a, b, c);
    } catch (error) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует'
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует'
            }
        };
    }
    return new Triangle(a, b, c);
}

