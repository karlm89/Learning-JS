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
