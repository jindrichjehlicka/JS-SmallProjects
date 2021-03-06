//listen for the submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  //hide results
  document.getElementById('results').style.display = 'none'
  //Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults,1000);
  e.preventDefault();
})

// Calculate results
function calculateResults() {
  //UI variables
  const amount = document.getElementById('amount')
  const interest = document.getElementById('interest')
  const years = document.getElementById('years')
  const monthlyPayment = document.getElementById('monthly-payment')
  const totalPayment = document.getElementById('total-payment')
  const totalInterest = document.getElementById('total-interest')

  const principal = parseFloat(amount.value);//amount input
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    document.getElementById('loading').style.display = 'none';
    document.getElementById('results').style.display = 'block'
  }
  else {
    
    showError('Please check the numbers')
  }

}


//show error
function showError(error){
    //hide results
    document.getElementById('results').style.display = 'none'
    //Show loader
    document.getElementById('loading').style.display = 'none';
//create a div
const errorDiv = document.createElement('div');
//get elemnts - card as a parent div
const card = document.querySelector('.card');
const heading = document.querySelector('.heading')
//add class
errorDiv.className = 'alert alert-danger'
///add text
errorDiv.appendChild(document.createTextNode(error))

//Insert error above heading
card.insertBefore(errorDiv, heading);
//clear error after 3 seconds
window.setTimeout(clearError, 2000);

function clearError(){
  document.querySelector('.alert').remove()
}
}




