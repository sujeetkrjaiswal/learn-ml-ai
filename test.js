const x = () => {
  if(true || true) {
    if(false && true || false) return 'A'
    else if (false && false || true && true) return 'B'
    else return 'C'
  } else return 'D'
}
console.log(x())
