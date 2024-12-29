const numbersBtn = document.querySelectorAll('[data-number]');
const inputFields = document.querySelectorAll("input.field");
const pinPad = document.getElementById("pinPad");
const correctCode = "1234";
let currentFieldIndex = 0;

function startPIN(){
    pinPad.style.animation = `fadeIn 1s ease-in forwards`
    const c = setTimeout(() => {
        pinPad.style.animation = `none`
        pinPad.style.opacity = 1
      }, 1100);
}

numbersBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const currentField = inputFields[currentFieldIndex];


        if (currentField && currentField.value.length < 1) {
            currentField.value = button.innerHTML;

            currentFieldIndex++;
            if (currentFieldIndex < inputFields.length) {
                inputFields[currentFieldIndex].focus();
            }

            if (currentFieldIndex === inputFields.length) {
                checkCode(); 
            }
        }
    });
});


function checkCode() {
    const enteredCode = Array.from(inputFields).map(field => field.value).join(""); 
    if (enteredCode === correctCode) {
        applyAnimation("correct"); 
        setTimeout(() => {
            clearFields(); 
            setTimeout(() => {
                window.location.href = "../index.html";
            }, 50);
        }, 950);
    } else {
        applyAnimation("wrong"); 
        setTimeout(() => {
            clearFields(); 
        }, 750);
    }
}

function applyAnimation(animationClass) {
    inputFields.forEach(field => {
        field.classList.add(animationClass); 
    });

    setTimeout(() => {
        inputFields.forEach(field => field.classList.remove(animationClass)); 
    }, 900); 
}

function clearFields() {
    inputFields.forEach(field => field.value = ""); 
    currentFieldIndex = 0;
    inputFields[0].focus();
}
