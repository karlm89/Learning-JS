function cleanNames(names) {
  let newArray = names.map(function (name) {
    return name.trim()
  })
  return newArray
}

console.log(cleanNames(['  timothee', '      darth_hater', 'sassyfrassy    ', '  elton john']))
