// Write your numbers code in this file!

  const number1Btn = document.querySelector('#number-one')
  const oneFactsDiv = document.querySelector('#one-facts')
  const numberInput = document.querySelector('#pick-a-number')
  const randomFactDiv = document.querySelector(`#random-math-fact`)
  const yearHistory = document.querySelector(`#year-history`)
  const allBtn = document.querySelector(`#all-numbers-button`)
  const allNumbersDiv = document.querySelector(`#all-the-numbers`)
  let year = new Date().getFullYear();


  number1Btn.addEventListener('click', () => {
    fetch('http://numbersapi.com/1/trivia')
    .then(resp => resp.text())
    .then(text => {
      oneFactsDiv.innerText = text
    })
  })

  numberInput.addEventListener('input', e => {
    if (numberInput.value === '') {
      randomFactDiv.innerText = ''
    }
    else if (parseInt(e.target.value) != e.target.value) {
    randomFactDiv.innerText = 'please enter a valid number'
    }
    else {
      fetch(`http://numbersapi.com/${numberInput.value}/trivia`)
      .then(resp => resp.text())
      .then(text => {
        randomFactDiv.innerText = text
      })
    }
  })

  over()

  function over() {
    if (year !== 2019) {
      setInterval(() => {
        fetch(`http://numbersapi.com/${year}/year`)
        .then(resp => resp.text())
        .then(text => {
          yearHistory.innerText = text
        })
        --year
      }, 5000)
    } else {
      fetch(`http://numbersapi.com/${year}/year`)
      .then(resp => resp.text())
      .then(text => {
        yearHistory.innerText = text
        --year
        over()
      })
    }
  }

  allBtn.addEventListener('click', () => {
    fetch('http://numbersapi.com/1..100')
    .then(resp => resp.json())
    .then(json => {
      let values = Object.values(json)
      values.forEach(num => allNumbersDiv.innerHTML += `<div>${num}</div>`)
    })
  })
