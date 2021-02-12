const square = {
  area(side) {
    return Math.pow(side, 2)
  },
  perimeter(side) {
    return side * 4
  },
}

console.log(square.area(2))
console.log(square.perimeter(2))
