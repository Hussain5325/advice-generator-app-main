const btn = document.querySelector('#btn')
const idText = document.querySelector('#id')
const adviceText = document.querySelector('#advice')

btn.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(json => gettingData(json.slip.id, json.slip.advice))
    .catch(err => console.error(`Opps there is an Error occurred: ${err}`))
})

function gettingData(id, advice) {
  idText.innerHTML = id
  adviceText.innerHTML = `"${advice}"`
}
