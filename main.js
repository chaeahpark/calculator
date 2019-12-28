class UI {
  constructor() {
    this.smallDisplay = document.getElementById('display--small');
    this.smallDisplayText = document.getElementById('text--small');
    this.bigDisplay = document.getElementById('display--big');
    this.bigDisplayText = document.getElementById('text--big');

    this.singleClear = document.getElementById('arrow-key');
    this.allClear = document.getElementById('c-key');
    this.leftParenthesis = document.getElementById('left-p-key');
    this.rightParenthesis = document.getElementById('right-p-key');
    this.divider = document.getElementById('divide-key');
    this.multiply = document.getElementById('multiply-key');
    this.minus = document.getElementById('minus-key');
    this.plus = document.getElementById('plus-key');
    this.point = document.getElementById('point-key');
    this.equalSign = document.getElementById('equal-key');

    this.number1 = document.getElementById('number1-key');
    this.number2 = document.getElementById('number2-key');
    this.number3 = document.getElementById('number3-key');
    this.number4 = document.getElementById('number4-key');
    this.number5 = document.getElementById('number5-key');
    this.number6 = document.getElementById('number6-key');
    this.number7 = document.getElementById('number7-key');
    this.number8 = document.getElementById('number8-key');
    this.number9 = document.getElementById('number9-key');
    this.number0 = document.getElementById('number0-key');

    this.userInput = document.getElementsByTagName('input');
  }


  //show inputs


  takeInputs() {

  }

  //add calculate function (when a user clicks '=')

}




const setup = () => {
  //create an instance from UI class

  const ui = new UI()

  // take user's inputs
  /*
    ui.number0.addEventListener('click', (e) => {
      e.preventDefault();
      ui.takeInput(e.target.value);
    })
  */
  // show user inputs
  document.addEventListener('click', (e) => {
    e.preventDefault();
    let userInput = e.target.value;
    let input = '';

    if (userInput) {
      console.log(input.push(userInput));
    }
  })


  //when a user click EQUAL
  ui.equalSign.addEventListener('click', (e) => {
    e.preventDefault();
    ui.calculate();
  })
}


document.addEventListener('DOMContentLoaded', () => {
  setup();
})