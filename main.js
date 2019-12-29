class Calculator {
  constructor() {
    this.displaySmall = document.getElementById('text--small');
    this.displayBig = document.getElementById('text--big')

    this.currentOperand = '';
    this.answer;

    this.numKeys = document.getElementsByClassName('number');
    this.pointKey = document.getElementsByClassName('.');
    this.operatorKeys = document.getElementsByClassName('operator');
    this.singleDeleteKey = document.getElementsByClassName('arrow');
    this.allDeleteKey = document.getElementsByClassName('allClear');
    this.solveKey = document.getElementById('solve');
  }

  //take number inputs
  takeNumbers() {
    for (let i = 0; i < this.numKeys.length; i++) {
      this.numKeys[i].addEventListener('click', function (e) {
        e.preventDefault();

        let numberInput = e.target.value;
        console.log(this)
        return numberInput;
      })
    }
  }

  // take operator inputs
  takeOperators() {
    for (let i = 0; i < this.operatorKeys.length; i++) {
      this.operatorKeys[i].addEventListener('click', function (e) {
        e.preventDefault();

        let operatorInput = e.target.value;
        return operatorInput;
      })
    }
  }

  //delete individually
  singleDelete() {
    this.singleDeleteKey.addEventListener('click', function (e) {
      e.preventDefault();
      this.displayBig.
    })
  }
  //delete all
  allDelete() {

  }
}


const ui = new Calculator();

ui.takeNumbers();
ui.takeOperators();


document.addEventListener('DOMContentLoaded', function () {

})