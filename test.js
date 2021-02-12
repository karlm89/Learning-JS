const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg() {
    this.eggCount++
    console.log('EGG')
  },
}

const hen = {
  name: 'Helen',
  eggCount: 0,
  layAnEgg() {
    this.eggCount = this.eggCount + 1
    return 'EGG'
  },
}

console.log(hen.name)
console.log(hen.eggCount)
hen.layAnEgg()
hen.layAnEgg()
console.log(hen.eggCount)
