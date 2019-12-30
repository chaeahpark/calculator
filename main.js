class Calculator {
  constructor() {
    this.operand = "";
  }

  // get the operand on the display
  getDisplay() {
    return this.operand;
  }

  //set up the display
  setDisplay(input) {
    this.operand = input
  }

  //take the user inputs
  pushText(digit) {
    this.operand += digit;
  }

  // when ARROW key is clicked, remove the last one on the display
  popText() {
    this.operand = this.operand.slice(0, -1);
  }

  // when C key is clicked, remove all
  clearText() {
    this.setDisplay("");
  }

}

let ui = new Calculator()

//take user's click inputs and make an operand.
document.querySelector('.calculator__keys').addEventListener('click', (e) => {
  e.preventDefault();
  let input = e.target.value;

  if (e.target.classList.contains('number') || e.target.classList.contains('operator')) {
    ui.pushText(input);
  }

  if (e.target.id == 'arrow') {
    ui.popText();
  }

  if (e.target.id == 'allClear') {
    clearText();
  }

  console.log(ui.operand);
})