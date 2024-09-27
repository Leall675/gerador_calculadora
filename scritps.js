
const formContainer = document.querySelector("#tabuada-content")
const inputTabuada = document.querySelector("#tabuada")
const inputMultiplicator = document.querySelector("#multiplicador")
const btnCalcular = document.querySelector("#calcular")
const multiplicationTable = document.querySelector(".multiplicador-operations")
const titleTable = document.querySelector("#table-title")

const createTable = (number, multiplicatorNumber) => {
  multiplicationTable.innerHTML = ""
  titleTable.innerText = `Tabuada do número: ${number}`
  for(let i = 0; i <= multiplicatorNumber; i++) {
    const result = number * i
    const template = `
      <div class="row">
        <div class="operation">${number} x ${i} = </div>
        <div class="result">${result}</div>
      </div>
    `
  const parser = new DOMParser()
  const htmlTemplate = parser.parseFromString(template, "text/html")
  const row = htmlTemplate.querySelector(".row")
  multiplicationTable.appendChild(row)
  }
}

formContainer.addEventListener("submit", (e) => {
  e.preventDefault()
  const multiplicationNumber = +inputTabuada.value
  const multiplicatorNumber = +inputMultiplicator.value
  if(!multiplicationNumber || !multiplicatorNumber) return
  createTable(multiplicationNumber, multiplicatorNumber)
})
