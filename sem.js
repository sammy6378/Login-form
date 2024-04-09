  


const btns = document.querySelector('.link');
const show = document.querySelector('.verify');



function validateForm() {
  var fName = document.getElementById('fName').value;
  var lName = document.getElementById('lName').value;
  var email = document.getElementById('email').value;
  var pass = document.getElementById('pass').value;

  if (fName === '' || lName === '' || email === '' || pass === '') {
    alert('Please fill in all fields');
    return false;
  }
  return true;
}

document.querySelector('.link').addEventListener('click', function(e) {
  e.preventDefault();
  if (validateForm()) {
    btns.addEventListener('click', () => {

      show.classList.toggle("details");

      setTimeout(() => {
          show.classList.remove("details");
        }, 3000);
           
      }
  )
   
  }
});







