let validate = document.getElementById('validate');
validate.onclick = function ( e ) {
  e.preventDefault();
  let userInput = document.getElementById('userInput');
  let parsedValue = parseInt( userInput.value );
  let inputValue = userInput.value;
  let message = '';
  if(  parsedValue < 1 || parsedValue > 100 || isNaN( parsedValue ) )
  {
    message = `Sorry, ${inputValue} is not a valid entry.`;
  }
  else
  {
    message = `Thank you! You entered ${inputValue}, a valid number.`;
  }

  document.getElementById( 'validationMsg' ).innerHTML = message;
}