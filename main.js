class Calculator {
  constructor() {
    this.operand = "";
    this.answer;
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

  solve() {
    this.answer = eval(this.operand);
    this.clearText();
    this.operand = this.answer.toString();
  }
}

let ui = new Calculator()

//take user's click inputs and make an operand.
document.querySelector('.calculator__keys').addEventListener('click', (e) => {
  e.preventDefault();
  let input = e.target.value;

  // when a number or an operator is clicked
  if (e.target.classList.contains('number') || e.target.classList.contains('operator')) {
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
    //solve the given operand
    ui.solve();
    // console.log(`Inside of the solve key + ${ui.operand}`)
  }
  //console.log(`Outside of if + ${ui.operand}`)
  //show on the display
  document.getElementById('text--big').textContent = ui.operand;
})