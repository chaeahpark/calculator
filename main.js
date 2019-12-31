class Calculator {
  constructor() {
    this.operand = "";
    this.previousOperand = "";
    this.answer;
    this.equalSign = '=';
    this.isNumInputNextOk = true;
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

  // when the C key is clicked, remove all
  clearText() {
    this.setDisplay("");
  }

  //when the SOLVE key is clicked, do calculation with the operand and show the answer/result.  
  solve() {
    this.answer = eval(this.operand);

    if (this.answer) {
      this.previousOperand = this.operand;
      document.getElementById('text--small').textContent = this.previousOperand + ' ' + this.equalSign;
      this.clearText();
      this.operand = this.answer.toString();
      this.isNumInputNextOk = false;
    }
  }
}

let ui = new Calculator()

//take user's click inputs and make an operand.
document.querySelector('.calculator__keys').addEventListener('click', (e) => {
  e.preventDefault();
  let input = e.target.value;

  if (e.target.classList.contains('number')) {
    if (ui.isNumInputNextOk == true) {
      ui.pushText(input);
    }

    if (ui.isNumInputNextOk == false) {
      ui.clearText();
      ui.isNumInputNextOk = true;
      ui.pushText(input);
    }
  }

  // when a number or an operator is clicked
  if (e.target.classList.contains('operator')) {
    ui.pushText(input);
  }

  // when the ARROW is clicked
  if (e.target.id == 'arrow') {
    ui.popText();
  }

  //when the C key is clicked
  if (e.target.id == 'allClear') {
    ui.clearText();
  }

  //when the SOLVE(=) kye is clicked
  if (e.target.id == 'solve') {
    ui.solve();
    //JUST FOR TESTING
  }

  //show on the display
  document.getElementById('text--big').textContent = ui.operand;
})