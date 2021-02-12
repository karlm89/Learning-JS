function cleanNames(names) {
  let newArray = names.map(function (name) {
    return name.trim()
  })
  return newArray
}

cleanNames(['  timothee', '      darth_hater', 'sassyfrassy    ', '  elton john'])
