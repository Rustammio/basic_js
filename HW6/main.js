function filterBy(a, b) {
   return  a.filter(function (value) {
       return typeof value !== typeof b})
}

console.log(filterBy(['hello', 'world', 23, '23', null], ''))
