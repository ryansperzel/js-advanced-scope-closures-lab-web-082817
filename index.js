function produceDrivingRange(n) {
  return function calculateDistance(block1, block2) {
    let start = parseInt(block1)
    let end = parseInt(block2)
    let distance = Math.abs(end - start)
    if (n > distance) {
      let difference = n - distance
      return `within range by ${difference}`
    } else {
      let difference = distance - n
      return `${difference} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function calculateTip(bill) {
    return percent * bill
  }
}
