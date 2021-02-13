const validUserNames = (names) => (
    names.filter(name => name.length < 10)
)

console.log(validUserNames(['mark','moanaFan1997']))