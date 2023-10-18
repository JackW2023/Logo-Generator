// I am ine declares a new class named Shape. 
// In JavaScript, classes are used to define blueprints for creating objects with shared properties and methods. 
class Shape {
    constructor () {
        this.color = ""
    }
    setColor(color){
        this.color = color
    }
}

class Triangle extends Shape {
    display() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    display() {
        return `<circle cx="150" cy="100" r="80" fill= "${this.color}"/>`
    }
}

class Square extends Shape {
    display() {
        return `<rect x="40" y="40" width="220" height="120" fill="${this.color}" />`
    }
}

module.exports = {Triangle, Circle, Square};