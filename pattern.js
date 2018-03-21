  var div1 = document.getElementById('yellow_circles')
  document.addEventListener('DOMContentLoaded', () => {
    makeYellowCircles()
  })
  function makeYellowCircles () {
    for (let x = 1; x <= 4; x++) {
      for (let y = 1; y <= 4; y++) {
        var yellow = document.createElement('div')
        yellow.classList.add('yellow')
        var yellowFull = document.createElement('p')
        yellowFull.classList.add('yellow_full')
        var aboveQuater = document.createElement('p')
        aboveQuater.classList.add('above_quater')
        var belowQuater = document.createElement('p')
        belowQuater.classList.add('below_quater')
        yellow.appendChild(yellowFull)
        yellow.appendChild(aboveQuater)
        yellow.appendChild(belowQuater)
        div1.appendChild(yellow)
      }
    }
  }
  // blue circles
  var div2 = document.getElementById('blue_circles')
  document.addEventListener('DOMContentLoaded', () => {
    makeBlueCircles()
  })
  function makeBlueCircles () {
    for (let x = 1; x <= 4; x++) {
      for (let y = 1; y <= 4; y++) {
        var blue = document.createElement('div')
        blue.classList.add('blue')
        var blueFull = document.createElement('p')
        blueFull.classList.add('blue_full')
        var aboveQuater = document.createElement('p')
        aboveQuater.classList.add('above_quater')
        var belowQuater = document.createElement('p')
        belowQuater.classList.add('below_quater')
        var greenAbove = document.createElement('p')
        greenAbove.classList.add('green_above')
        var greenBelow = document.createElement('p')
        greenBelow.classList.add('green_below')
        blue.appendChild(blueFull)
        blue.appendChild(aboveQuater)
        blue.appendChild(belowQuater)
        blue.appendChild(greenAbove)
        blue.appendChild(greenBelow)
        if (x === 4) {
          blue.removeChild(greenBelow)
        }
        div2.appendChild(blue)
      }
    }
  }
