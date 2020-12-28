const printInNum = () => {
  document.querySelector('button').addEventListener('click', () => {
    const numbers = Math.floor(Math.random() * 6 + 1)
    alert(numbers)
  })
}

window.addEventListener('DOMContentLoaded', printInNum)