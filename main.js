const btn = document.querySelector('.js__btn'),
      parag = document.querySelector('.discription')

btn.addEventListener('click', () => {
  letterExtraction(prompt('Введите слово:'))
})

let letterExtraction = function(word) {
  const arrOfLetters = word.split(''),
        halfLength = Math.round(arrOfLetters.length / 2 - 1),
        even = arrOfLetters.length % 2 === 0;

  let discription = {
    word: word,
    arrLength: arrOfLetters.length,
    middleEven: word.slice(halfLength, halfLength + 2),
    middleOdd: arrOfLetters[halfLength]
  }

  if (even) {
    parag.innerText = `Слово: "${discription.word}"
                       Четное кол-во символов: ${discription.arrLength}
                       Середина: "${discription.middleEven}"`
  } else {
    parag.innerText = `Слово: "${discription.word}"
                       Нечетное кол-во символов: ${discription.arrLength}
                       Середина: "${discription.middleOdd}"`
  }
};