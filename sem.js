  

const inputContainer = document.querySelector('.form-fill');
const enter = document.querySelector('.form-fill');
const btns = document.querySelector('.link');
const box = document.getElementById('form2Example3c');
const takeValue = enter.value;

const fNameInputs = document.querySelectorAll('.view');
const takeInputs = {};


function load(){

btns.addEventListener('click', () => {
    fNameInputs.forEach((input, index) => {
        if (input.value === '') {
            alert('Please fill all the fields!');
            return;
        }
        takeInputs[index] = input.value;
        const show = document.querySelector('.verify');
        show.style.display = 'block';
        show.innerHTML = 'Details Verification on the process.';

        setTimeout(() => {
            show.style.display = 'none';
          }, 4000);
        input.value = '';        
    });

    console.log(takeInputs);
});

}

load();


    








