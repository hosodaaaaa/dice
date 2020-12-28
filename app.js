/**
 * この関数は入力された数字の中からランダムで出力します
 */

class Dice {
  /**
    * @param {string} trigger 値を出力するイベントの発火要素
    * @param {number} number 入力された数字が格納される
   */
  constructor(number) {
    this.trigger = document.querySelector('button')
    this.number = number
  }

  init() {
    this.printNumber = this.printNumber.bind(this)
    this.trigger.addEventListener('click', this.printNumber)
  }

  printNumber() {
    if (isNaN(this.number)) {
      alert('半角数字が入力されませんでした。ブラウザリロードしてください。')
    } else {
      const numbers = Math.floor(Math.random() * this.number + 1)
      alert(`${numbers}番です!`)
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const typeValue = new Dice(parseInt(prompt('半角英数字を入力してください')))
  typeValue.init()
})