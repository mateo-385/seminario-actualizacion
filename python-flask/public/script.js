const form = document.getElementById('form')
const closeBtn = document.getElementById('close')
const changeColorBtn = document.getElementById('change-color')
const popUp = document.getElementById('pop-up')
const popUpMessage = document.getElementById('popup-message')

let colorIndex = 0
const colorSchemes = [
  { background: 'white', color: 'black' },
  { background: 'black', color: 'white' },
  { background: 'lightblue', color: 'red' },
]

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const textInput = document.getElementById('text-input').value

  popUpMessage.innerText = textInput

  popUp.show()
})

closeBtn.addEventListener('click', () => {
  popUp.close()
})

changeColorBtn.addEventListener('click', () => {
  colorIndex = (colorIndex + 1) % colorSchemes.length // Cambia entre los esquemas de color
  const currentScheme = colorSchemes[colorIndex]
  popUp.style.backgroundColor = currentScheme.background
  popUp.style.color = currentScheme.color
})
