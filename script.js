let inputOne = document.getElementById('input1')
let BtnCalc = document.querySelector('button')
let FinnalyRezult = document.getElementById('rezult')
let selectChoice = document.getElementById('choice')





BtnCalc.addEventListener('click', () => {
    let valOne = inputOne.value;
    let valTwo = selectChoice.value;
    let calculate = Math.floor(Number(valOne) * Number(valTwo));
    FinnalyRezult.innerHTML = ` Atat euro ai la tine ${calculate} LEI`
    FinnalyRezult.style.backgroundColor = 'black'

})