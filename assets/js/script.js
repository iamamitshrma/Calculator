console.log("Calculator");

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (let item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log(e)

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'C') {
            screenValue = '';
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }



        if (screen.value) {
            let screenValueForTrigno = parseInt(screen.value);
            if(!isNaN(screenValueForTrigno)){

            
            if (buttonText == 'sin') {
                screen.value = Math.sin(screenValueForTrigno);
            }
            if (buttonText == 'cos') {
                screen.value = Math.cos(screenValueForTrigno);
            }
            if (buttonText == 'tan') {
                screen.value = Math.tan(screenValueForTrigno);
            }
            if (buttonText == 'cot') {
                screen.value = 1 / (Math.tan(screenValueForTrigno));
            }
            if (buttonText == 'sec') {
                screen.value = 1 / (Math.cos(screenValueForTrigno));
            }
            if (buttonText == 'cosec') {
                screen.value = 1 / (Math.sin(screenValueForTrigno));
            }
            if (buttonText == 'log') {
                screen.value = Math.log10(screenValueForTrigno);
            }
            if(buttonText == `x^2`){
                screen.value = Math.pow(screenValueForTrigno, 2);
            }
        }
        }
    });






}